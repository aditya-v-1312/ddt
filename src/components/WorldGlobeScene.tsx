"use client";

import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { locations, originLocation, Location } from "@/data/countries";

interface WorldGlobeSceneProps {
  selected: Location | null;
  onSelect: (location: Location) => void;
  onReady?: () => void;
}

interface Vec3 {
  x: number;
  y: number;
  z: number;
}

// Convert Lat/Lng to 3D unit sphere vector
function latLngToVec3(lat: number, lng: number): Vec3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return {
    x: -Math.sin(phi) * Math.cos(theta),
    y: Math.cos(phi),
    z: Math.sin(phi) * Math.sin(theta),
  };
}

// Vector Dot Product
function dot(a: Vec3, b: Vec3): number {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}

// Spherical Linear Interpolation (SLERP) for true geodesic arcs
function slerp(a: Vec3, b: Vec3, t: number): Vec3 {
  let cosOmega = Math.max(-1, Math.min(1, dot(a, b)));
  const omega = Math.acos(cosOmega);
  if (Math.abs(omega) < 0.0001) return a;
  const sinOmega = Math.sin(omega);
  const scaleA = Math.sin((1 - t) * omega) / sinOmega;
  const scaleB = Math.sin(t * omega) / sinOmega;
  return {
    x: scaleA * a.x + scaleB * b.x,
    y: scaleA * a.y + scaleB * b.y,
    z: scaleA * a.z + scaleB * b.z,
  };
}

// Subdivide polyline segments so edges curve along the sphere
function densifyPolyline(coords: [number, number][], maxStepDeg = 3): [number, number][] {
  const result: [number, number][] = [];
  for (let i = 0; i < coords.length; i++) {
    const cur = coords[i];
    result.push(cur);
    if (i === coords.length - 1) break;
    const next = coords[i + 1];
    const dLat = next[0] - cur[0];
    const dLng = next[1] - cur[1];
    const dist = Math.hypot(dLat, dLng);
    if (dist > maxStepDeg) {
      const steps = Math.ceil(dist / maxStepDeg);
      for (let s = 1; s < steps; s++) {
        const factor = s / steps;
        result.push([cur[0] + dLat * factor, cur[1] + dLng * factor]);
      }
    }
  }
  return result;
}

// Real-world continent boundary polygons [lat, lng][]
const RAW_CONTINENTS: [number, number][][] = [
  // 1. Indian Subcontinent (prominent triangular peninsula & Gujarat)
  [
    [35, 74], [34, 76], [31, 78], [28, 80], [27, 88], [24, 91], [22, 92], [22, 89],
    [20.5, 86.5], [17, 82], [13, 80.2], [10, 79.5], [8.2, 77.5], [9.5, 76.5], [12, 75],
    [15.5, 73.8], [19, 72.8], [21, 72.2], [22.3, 69.5], [23.5, 68.5], [25, 68.2],
    [28, 70.5], [31, 71.5], [33, 72], [35, 74],
  ],
  // 2. Sri Lanka
  [[9.8, 80.2], [8.5, 81.3], [6.8, 81.8], [5.9, 80.5], [7.2, 79.8], [9.8, 80.2]],
  // 3. Arabian Peninsula & Middle East
  [
    [31, 35], [32, 40], [30, 48], [25, 55.5], [24, 57], [22.5, 59.8], [17, 54],
    [13, 44], [12.6, 43.3], [16, 42], [22, 38.5], [28, 35], [31, 35],
  ],
  // 4. Africa
  [
    [37, 10], [36, 12], [32, 25], [31.5, 32.5], [28, 34], [22, 37], [12, 43.5],
    [11.8, 51.2], [5, 48], [-4, 40], [-11, 40.5], [-25, 33], [-33.9, 25.5],
    [-34.8, 20], [-33.9, 18.4], [-28, 16], [-16, 11.8], [-5, 12], [4, 9],
    [6, 2], [5, -3], [10, -14], [14.7, -17.4], [21, -17], [30, -10], [35.5, -5.8],
    [37, 10],
  ],
  // 5. Madagascar
  [[-12, 49.3], [-16, 49.8], [-25, 47], [-25.5, 45], [-17, 43.8], [-12, 49.3]],
  // 6. Europe & Mediterranean
  [
    [36, -5.5], [43, -9], [44, -1], [47.5, -4.5], [50, 1.5], [54, 8.5], [55, 12.5],
    [58, 12], [54, 19], [60, 28], [60, 36], [55, 38], [47, 40], [45, 37],
    [41, 29], [38, 24], [36.5, 15], [38, 9], [41, 2], [36, -5.5],
  ],
  // 7. British Isles
  [[50, -5], [53.5, -4.5], [58.5, -5], [58.5, -2], [53, 0.5], [51, 1.4], [50, -1], [50, -5]],
  // 8. Scandinavia
  [[58, 8], [62, 6], [70, 20], [71, 28], [65, 24], [60, 18], [58, 10], [58, 8]],
  // 9. North Eurasia & Siberia
  [
    [60, 36], [68, 50], [73, 72], [76, 105], [73, 135], [66, 170], [60, 165],
    [53, 142], [46, 136], [42, 131], [50, 115], [52, 90], [50, 60], [55, 38], [60, 36],
  ],
  // 10. East Asia & China
  [
    [42, 131], [39, 121], [35, 119], [31.5, 122], [25, 119.5], [22.3, 114.2],
    [21, 108], [18, 106], [21, 100], [28, 100], [35, 105], [40, 115], [42, 131],
  ],
  // 11. Southeast Asia
  [
    [21, 108], [15, 108], [10, 105], [1.3, 103.8], [3, 101], [10, 99],
    [15, 96.5], [20, 93], [22, 92], [21, 100], [21, 108],
  ],
  // 12. Japan
  [[31, 130.5], [33, 133], [35.5, 136], [40, 140], [44, 144], [43, 141], [36, 136], [31, 130.5]],
  // 13. Indonesia & Bali
  [[5.5, 95.5], [0, 100], [-6, 106], [-8.4, 115.2], [-7.5, 114], [-6, 106], [-2, 102], [5.5, 95.5]],
  // 14. Australia
  [
    [-12, 131], [-12, 136], [-15, 143], [-20, 148], [-28, 153.5], [-37, 150],
    [-38.5, 144], [-35, 137], [-32, 132], [-35, 118], [-31.5, 115.5], [-22, 114],
    [-15, 124], [-12, 131],
  ],
  // 15. New Zealand
  [[-35, 173.5], [-39, 177], [-41.5, 175], [-46.5, 167], [-44, 171], [-37, 178], [-35, 173.5]],
  // 16. North America
  [
    [70, -162], [70, -130], [68, -100], [58, -64], [47, -53], [44, -64], [40.7, -74],
    [30, -81], [25.5, -80.2], [28, -96], [20, -97], [16, -93], [14.5, -88],
    [20, -105], [32.7, -117], [37.8, -122.5], [49, -125], [60, -145], [65, -168], [70, -162],
  ],
  // 17. South America
  [
    [11, -75], [10, -62], [5, -52], [-5, -35.2], [-15, -39], [-23, -42],
    [-34.6, -58.4], [-54, -68], [-53, -73], [-42, -74], [-30, -71], [-18, -71],
    [-5, -81], [5, -77], [11, -75],
  ],
];

export const WorldGlobeScene: React.FC<WorldGlobeSceneProps> = ({ selected, onSelect, onReady }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Rotation angles: initialize centered directly on India (Vadodara: 22.3°N, 73.2°E)
  const rotationY = useRef<number>(-73.2);
  const rotationX = useRef<number>(18);
  const targetRotationY = useRef<number>(-73.2);
  const targetRotationX = useRef<number>(18);

  const isDragging = useRef<boolean>(false);
  const lastMousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const dragDistance = useRef<number>(0);
  const animFrameId = useRef<number | null>(null);
  const timeRef = useRef<number>(0);

  // Screen projections of destination pins for hit-testing & click
  const pinScreenCoords = useRef<Map<string, { x: number; y: number; z: number }>>(new Map());

  // High-density continent polyline points converted to 3D unit vectors
  const continentPolylines3D = useMemo(() => {
    return RAW_CONTINENTS.map((coords) => {
      const dense = densifyPolyline(coords, 2.5);
      return dense.map(([lat, lng]) => latLngToVec3(lat, lng));
    });
  }, []);

  // Precompute 3D vectors for origin and all destinations
  const origin3D = useMemo(() => latLngToVec3(originLocation.lat, originLocation.lng), []);
  const destinations3D = useMemo(() => {
    return locations.map((loc) => ({
      location: loc,
      vec3: latLngToVec3(loc.lat, loc.lng),
    }));
  }, []);

  // Subtle twinkling stars
  const stars = useMemo(() => {
    const list: { x: number; y: number; r: number; alpha: number; speed: number }[] = [];
    for (let i = 0; i < 180; i++) {
      list.push({
        x: Math.random(),
        y: Math.random(),
        r: Math.random() * 1.4 + 0.4,
        alpha: Math.random() * 0.6 + 0.3,
        speed: Math.random() * 0.03 + 0.01,
      });
    }
    return list;
  }, []);

  // When a destination is selected externally, smoothly rotate to it
  useEffect(() => {
    if (!selected) return;
    targetRotationY.current = -selected.lng;
    targetRotationX.current = Math.max(-25, Math.min(35, selected.lat * 0.7));
  }, [selected]);

  // Main 3D Render Loop
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    // Responsive radius with ample breathing margin
    const R = Math.min(width, height) * 0.37;

    timeRef.current += 0.016;
    const t = timeRef.current;

    // Smooth camera inertia / damping
    if (!isDragging.current) {
      // Gently drift rotation towards target if set, otherwise slow idle spin
      const diffY = targetRotationY.current - rotationY.current;
      const diffX = targetRotationX.current - rotationX.current;

      if (Math.abs(diffY) > 0.05 || Math.abs(diffX) > 0.05) {
        rotationY.current += diffY * 0.06;
        rotationX.current += diffX * 0.06;
      } else {
        // Very slow idle spin
        rotationY.current += 0.16;
        targetRotationY.current = rotationY.current;
      }
    }

    const radY = (rotationY.current * Math.PI) / 180;
    const radX = (rotationX.current * Math.PI) / 180;
    const cosY = Math.cos(radY);
    const sinY = Math.sin(radY);
    const cosX = Math.cos(radX);
    const sinX = Math.sin(radX);

    // Project 3D vector to 2D screen with altitude
    const project = (v: Vec3, altitude = 1.0): { x: number; y: number; z: number; isFront: boolean } => {
      // Rotate Y (longitude)
      const x1 = v.x * cosY + v.z * sinY;
      const y1 = v.y;
      const z1 = -v.x * sinY + v.z * cosY;

      // Rotate X (latitude tilt)
      const x2 = x1;
      const y2 = y1 * cosX - z1 * sinX;
      const z2 = y1 * sinX + z1 * cosX;

      const r = R * altitude;
      return {
        x: cx + x2 * r,
        y: cy - y2 * r,
        z: z2,
        isFront: z2 > 0.01,
      };
    };

    // 1. Clear background
    ctx.clearRect(0, 0, width, height);

    // 2. Twinkling Luxury Starfield
    ctx.save();
    for (const s of stars) {
      const pulse = 0.35 + 0.45 * Math.sin(t * s.speed * 60 + s.x * 20);
      ctx.fillStyle = `rgba(255, 255, 255, ${pulse * s.alpha})`;
      ctx.beginPath();
      ctx.arc(s.x * width, s.y * height, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // 3. Globe Outer Atmospheric Glow
    ctx.save();
    const corona = ctx.createRadialGradient(cx, cy, R * 0.92, cx, cy, R * 1.32);
    corona.addColorStop(0, "rgba(47, 128, 255, 0.18)");
    corona.addColorStop(0.35, "rgba(226, 177, 141, 0.12)");
    corona.addColorStop(0.75, "rgba(24, 48, 89, 0.05)");
    corona.addColorStop(1, "rgba(7, 16, 31, 0)");
    ctx.fillStyle = corona;
    ctx.beginPath();
    ctx.arc(cx, cy, R * 1.32, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // 4. Globe Sphere Base (Deep Luxury Navy with Shading)
    ctx.save();
    const oceanGrad = ctx.createRadialGradient(
      cx - R * 0.35,
      cy - R * 0.35,
      R * 0.1,
      cx,
      cy,
      R
    );
    oceanGrad.addColorStop(0, "#0F2042");
    oceanGrad.addColorStop(0.5, "#09152B");
    oceanGrad.addColorStop(0.9, "#050D1D");
    oceanGrad.addColorStop(1, "#030814");

    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.fillStyle = oceanGrad;
    ctx.fill();

    // Subtle edge rim light
    ctx.strokeStyle = "rgba(226, 177, 141, 0.4)";
    ctx.lineWidth = 1.6;
    ctx.stroke();
    ctx.restore();

    // 5. CLIP TO SPHERE DISK FOR INTERNAL CONTINENTS & GRID
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, R - 0.5, 0, Math.PI * 2);
    ctx.clip();

    // Draw Parallels (Latitudes)
    ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
    ctx.lineWidth = 1;
    for (const lat of [-60, -30, 0, 30, 60]) {
      ctx.beginPath();
      let started = false;
      for (let lng = -180; lng <= 180; lng += 8) {
        const p = project(latLngToVec3(lat, lng));
        if (p.isFront) {
          if (!started) {
            ctx.moveTo(p.x, p.y);
            started = true;
          } else {
            ctx.lineTo(p.x, p.y);
          }
        } else {
          started = false;
        }
      }
      ctx.stroke();
    }

    // Draw Meridians (Longitudes)
    for (let lng = -180; lng < 180; lng += 30) {
      ctx.beginPath();
      let started = false;
      for (let lat = -80; lat <= 80; lat += 6) {
        const p = project(latLngToVec3(lat, lng));
        if (p.isFront) {
          if (!started) {
            ctx.moveTo(p.x, p.y);
            started = true;
          } else {
            ctx.lineTo(p.x, p.y);
          }
        } else {
          started = false;
        }
      }
      ctx.stroke();
    }

    // Draw Real World Continents (Solid Fill + Crisp Gold Coastlines)
    for (const poly3D of continentPolylines3D) {
      ctx.save();
      ctx.beginPath();
      let started = false;
      let visibleCount = 0;

      for (let i = 0; i < poly3D.length; i++) {
        const p = project(poly3D[i]);
        if (p.z > -0.05) {
          visibleCount++;
          if (!started) {
            ctx.moveTo(p.x, p.y);
            started = true;
          } else {
            ctx.lineTo(p.x, p.y);
          }
        } else {
          started = false;
        }
      }

      if (visibleCount > 2) {
        // Continent landmass fill
        ctx.fillStyle = "rgba(24, 46, 84, 0.72)";
        ctx.fill();

        // Coastline stroke with subtle champagne-gold luxury hue
        ctx.strokeStyle = "rgba(226, 177, 141, 0.65)";
        ctx.lineWidth = 1.3;
        ctx.lineJoin = "round";
        ctx.stroke();
      }
      ctx.restore();
    }

    ctx.restore(); // Exit sphere clipping

    // 6. Draw 3D Great-Circle Flight Arcs from India (Vadodara) to Worldwide Destinations
    const originProj = project(origin3D, 1.0);
    const activeRouteIndex = Math.floor((t * 0.4) % destinations3D.length);

    destinations3D.forEach(({ location, vec3 }, idx) => {
      const destProj = project(vec3, 1.0);
      const isSelected = selected?.id === location.id;
      const isRouteActive = isSelected || idx === activeRouteIndex;

      // Only draw if at least one endpoint is facing front or near horizon
      if (originProj.z < -0.3 && destProj.z < -0.3) return;

      const segments = 36;
      const arcPoints: { x: number; y: number; z: number }[] = [];

      for (let s = 0; s <= segments; s++) {
        const prog = s / segments;
        const interp = slerp(origin3D, vec3, prog);
        // Parabolic arc peak above globe
        const alt = 1.0 + 0.22 * Math.sin(Math.PI * prog);
        arcPoints.push(project(interp, alt));
      }

      // Draw Arc Path
      ctx.save();
      ctx.beginPath();
      let started = false;
      for (const pt of arcPoints) {
        if (pt.z > -0.2) {
          if (!started) {
            ctx.moveTo(pt.x, pt.y);
            started = true;
          } else {
            ctx.lineTo(pt.x, pt.y);
          }
        } else {
          started = false;
        }
      }

      if (isRouteActive) {
        ctx.strokeStyle = "rgba(226, 177, 141, 0.95)";
        ctx.lineWidth = isSelected ? 2.6 : 1.8;
        ctx.shadowColor = "#E2B18D";
        ctx.shadowBlur = isSelected ? 12 : 8;
        ctx.setLineDash([5, 5]);
        ctx.lineDashOffset = -(t * 30 + idx * 6);
      } else {
        ctx.strokeStyle = "rgba(226, 177, 141, 0.28)";
        ctx.lineWidth = 1.0;
        ctx.setLineDash([3, 6]);
      }
      ctx.stroke();
      ctx.restore();

      // 7. Supersonic Airplane on Active Flight Routes
      if (isRouteActive) {
        const planeCycle = ((t * 0.32 + idx * 0.17) % 1);
        const planeVec = slerp(origin3D, vec3, planeCycle);
        const planeAlt = 1.0 + 0.22 * Math.sin(Math.PI * planeCycle);
        const planeP = project(planeVec, planeAlt);

        if (planeP.z > -0.1) {
          const nextProg = Math.min(1, planeCycle + 0.03);
          const nextVec = slerp(origin3D, vec3, nextProg);
          const nextAlt = 1.0 + 0.22 * Math.sin(Math.PI * nextProg);
          const nextP = project(nextVec, nextAlt);
          const angle = Math.atan2(nextP.y - planeP.y, nextP.x - planeP.x);

          ctx.save();
          ctx.translate(planeP.x, planeP.y);
          ctx.rotate(angle);

          // Airplane silhouette
          ctx.fillStyle = "#FFFFFF";
          ctx.shadowColor = "#E2B18D";
          ctx.shadowBlur = 10;

          ctx.beginPath();
          ctx.moveTo(8, 0); // nose
          ctx.lineTo(-4, -6); // left wingtip
          ctx.lineTo(-2, -1.8);
          ctx.lineTo(-7, -4); // left tail fin
          ctx.lineTo(-6, 0); // exhaust center
          ctx.lineTo(-7, 4); // right tail fin
          ctx.lineTo(-2, 1.8);
          ctx.lineTo(-4, 6); // right wingtip
          ctx.closePath();
          ctx.fill();

          ctx.restore();
        }
      }
    });

    // 8. Draw Destination Waypoint Pins & Clean City Labels
    destinations3D.forEach(({ location, vec3 }) => {
      const p = project(vec3, 1.0);
      pinScreenCoords.current.set(location.id, { x: p.x, y: p.y, z: p.z });

      if (p.z > 0.05) {
        const isSelected = selected?.id === location.id;

        ctx.save();
        // Pin marker
        ctx.fillStyle = isSelected ? "#E2B18D" : "#FFFFFF";
        ctx.shadowColor = isSelected ? "#E2B18D" : "#2F80FF";
        ctx.shadowBlur = isSelected ? 16 : 6;

        ctx.beginPath();
        ctx.arc(p.x, p.y, isSelected ? 6 : 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Pulsing radar ring on selected pin
        if (isSelected) {
          const pingR = 5 + ((t * 14) % 20);
          const pingAlpha = Math.max(0, 1 - pingR / 25);
          ctx.strokeStyle = `rgba(226, 177, 141, ${pingAlpha})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(p.x, p.y, pingR, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Clean, legible city label
        ctx.font = isSelected ? "700 12px Manrope, sans-serif" : "500 10px Manrope, sans-serif";
        ctx.fillStyle = isSelected ? "#E2B18D" : "rgba(255, 255, 255, 0.88)";
        ctx.shadowBlur = 4;
        ctx.shadowColor = "rgba(0, 0, 0, 0.85)";
        ctx.fillText(location.city, p.x + 8, p.y + 3);

        ctx.restore();
      }
    });

    // 9. Draw Origin Hub Pin (Vadodara, India) with Prominent Concentric Gold Rings
    pinScreenCoords.current.set(originLocation.id, { x: originProj.x, y: originProj.y, z: originProj.z });

    if (originProj.z > -0.05) {
      ctx.save();

      // Pulsing golden radar rings
      for (let r = 1; r <= 3; r++) {
        const wave = (t * 22 + r * 16) % 48;
        const alpha = Math.max(0, 1 - wave / 48);
        ctx.strokeStyle = `rgba(226, 177, 141, ${alpha * 0.95})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(originProj.x, originProj.y, 6 + wave, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Origin Gold Core Pin
      ctx.fillStyle = "#E2B18D";
      ctx.shadowColor = "#E2B18D";
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.arc(originProj.x, originProj.y, 7, 0, Math.PI * 2);
      ctx.fill();

      // White center diamond
      ctx.fillStyle = "#FFFFFF";
      ctx.beginPath();
      ctx.arc(originProj.x, originProj.y, 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Vadodara Hub Typography
      ctx.font = "800 11px Manrope, sans-serif";
      ctx.fillStyle = "#E2B18D";
      ctx.shadowBlur = 8;
      ctx.shadowColor = "rgba(0, 0, 0, 0.95)";
      ctx.fillText("INDIA · VADODARA (HUB)", originProj.x + 13, originProj.y - 4);

      ctx.font = "500 9px Manrope, sans-serif";
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.fillText("Darsh Dream Tours Headquarters", originProj.x + 13, originProj.y + 8);

      ctx.restore();
    }

    animFrameId.current = requestAnimationFrame(render);
  }, [selected, stars, destinations3D, origin3D, continentPolylines3D]);

  // Handle Canvas Resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    if (onReady) onReady();

    return () => window.removeEventListener("resize", handleResize);
  }, [onReady]);

  // Start Animation
  useEffect(() => {
    animFrameId.current = requestAnimationFrame(render);
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [render]);

  // Mouse & Touch Drag Interactions
  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    dragDistance.current = 0;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - lastMousePos.current.x;
    const dy = e.clientY - lastMousePos.current.y;
    dragDistance.current += Math.hypot(dx, dy);

    rotationY.current += dx * 0.45;
    rotationX.current = Math.max(-45, Math.min(45, rotationX.current - dy * 0.35));

    targetRotationY.current = rotationY.current;
    targetRotationX.current = rotationX.current;

    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    // Only detect clicks if the user did not drag significantly
    if (isDragging.current && dragDistance.current < 6) {
      const canvas = canvasRef.current;
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;

        // Check origin hit
        const originCoord = pinScreenCoords.current.get(originLocation.id);
        if (originCoord && originCoord.z > -0.05) {
          const dist = Math.hypot(clickX - originCoord.x, clickY - originCoord.y);
          if (dist < 24) {
            onSelect(originLocation);
            isDragging.current = false;
            return;
          }
        }

        // Check destination hits
        for (const loc of locations) {
          const coord = pinScreenCoords.current.get(loc.id);
          if (coord && coord.z > 0.05) {
            const dist = Math.hypot(clickX - coord.x, clickY - coord.y);
            if (dist < 20) {
              onSelect(loc);
              break;
            }
          }
        }
      }
    }
    isDragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full cursor-grab active:cursor-grabbing select-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => { isDragging.current = false; }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
};

export default WorldGlobeScene;
