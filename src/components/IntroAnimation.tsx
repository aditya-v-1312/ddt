"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

interface IntroAnimationProps {
  onComplete: () => void;
}

interface DestinationNode {
  name: string;
  sub: string;
  progress: number; // 0 to 1 along curve
  x: number;
  y: number;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<"logo" | "flight" | "out" | "done">("logo");
  const [activeNodes, setActiveNodes] = useState<string[]>([]);
  const pathRef = useRef<SVGPathElement | null>(null);
  const planeRef = useRef<SVGGElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const triggeredNodesRef = useRef<Set<string>>(new Set());

  // Responsive SVG curved path coordinates (viewBox 0 0 900 500)
  // Sweeping, elegant flight arc from lower-left (origin India) through transit (Dubai) to top-right (Europe)
  const pathD = "M 100 400 C 240 400, 340 310, 450 250 C 560 190, 660 120, 800 110";

  const destinationNodes: DestinationNode[] = [
    { name: "INDIA", sub: "ORIGIN", progress: 0.08, x: 160, y: 385 },
    { name: "DUBAI", sub: "TRANSIT", progress: 0.48, x: 450, y: 250 },
    { name: "EUROPE", sub: "DESTINATION", progress: 0.88, x: 740, y: 120 },
  ];

  const handleFinish = () => {
    try {
      sessionStorage.setItem("darsh_intro_seen", "true");
    } catch {
      // ignore in restricted iframe/browser environments
    }
    setPhase("out");
    setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 600);
  };

  const handleSkip = () => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
    handleFinish();
  };

  useEffect(() => {
    // 1. Prevent background scrolling on mobile while intro is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // 2. Check sessionStorage & prefers-reduced-motion
    try {
      const hasSeen = sessionStorage.getItem("darsh_intro_seen");
      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (hasSeen === "true" || prefersReduced) {
        document.body.style.overflow = originalOverflow;
        setPhase("done");
        onComplete();
        return;
      }
    } catch {
      // ignore
    }

    // Phase 1: 0 - 1100ms Logo introduction, then start flight
    const logoTimer = setTimeout(() => {
      setPhase("flight");
      startFlightAnimation();
    }, 1150);

    // Safety timeout: ensure intro never gets stuck on mobile low-power or slow devices
    const safetyTimer = setTimeout(() => {
      handleFinish();
    }, 5500);

    return () => {
      document.body.style.overflow = originalOverflow;
      clearTimeout(logoTimer);
      clearTimeout(safetyTimer);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  const startFlightAnimation = () => {
    const path = pathRef.current;
    const plane = planeRef.current;

    if (!path || !plane) {
      setTimeout(handleFinish, 1800);
      return;
    }

    let totalLength = 0;
    try {
      totalLength = path.getTotalLength();
    } catch {
      totalLength = 850;
    }

    if (!totalLength || isNaN(totalLength) || totalLength <= 0) {
      totalLength = 850;
    }

    path.style.strokeDasharray = `${totalLength}`;
    path.style.strokeDashoffset = `${totalLength}`;

    const duration = 2800; // ms for the flight sequence
    let startTime: number | null = null;

    const animateFlight = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(1, elapsed / duration);

      // Smooth easeInOutQuad easing
      const easedProgress =
        progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      // Update path drawing
      path.style.strokeDashoffset = `${totalLength * (1 - easedProgress)}`;

      // Calculate airplane position & orientation along the SVG path
      const currentDist = totalLength * easedProgress;
      let pt = { x: 100, y: 400 };
      let ptAhead = { x: 104, y: 398 };

      try {
        pt = path.getPointAtLength(currentDist);
        const aheadDist = Math.min(totalLength, currentDist + 4);
        ptAhead = path.getPointAtLength(aheadDist);
      } catch {
        // Fallback calculation
        pt = { x: 100 + 700 * easedProgress, y: 400 - 290 * easedProgress };
        ptAhead = { x: pt.x + 4, y: pt.y - 1.5 };
      }

      // Calculate tangent angle.
      // Vector airplane graphic points straight UP (along -Y), so add 90 deg to align with travel vector.
      const angleRad = Math.atan2(ptAhead.y - pt.y, ptAhead.x - pt.x);
      const angleDeg = (angleRad * 180) / Math.PI + 90;

      plane.setAttribute(
        "transform",
        `translate(${pt.x.toFixed(2)}, ${pt.y.toFixed(2)}) rotate(${angleDeg.toFixed(2)})`
      );

      // Trigger destination nodes without causing continuous React re-renders
      destinationNodes.forEach((node) => {
        if (easedProgress >= node.progress && !triggeredNodesRef.current.has(node.name)) {
          triggeredNodesRef.current.add(node.name);
          setActiveNodes((prev) => (prev.includes(node.name) ? prev : [...prev, node.name]));
        }
      });

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(animateFlight);
      } else {
        // Flight completed, hold briefly then transition out
        setTimeout(() => {
          handleFinish();
        }, 550);
      }
    };

    animFrameRef.current = requestAnimationFrame(animateFlight);
  };

  if (phase === "done") {
    return null;
  }

  return (
    <aside
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to Darsh Dream Tours"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#F7F5F0] overflow-hidden select-none transition-opacity duration-700 pointer-events-auto ${
        phase === "out" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        height: "100dvh",
        minHeight: "-webkit-fill-available",
      }}
    >
      {/* Background Subtle Compass Rings (Responsive scale) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[340px] h-[340px] sm:w-[540px] sm:h-[540px] md:w-[720px] md:h-[720px] rounded-full border border-[#B87543]/30 border-dashed" />
        <div className="absolute w-[240px] h-[240px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px] rounded-full border border-[#101A2E]/15" />
      </div>

      {/* Main Center Stage */}
      <div className="relative w-full max-w-4xl h-[420px] sm:h-[500px] md:h-[560px] px-3 sm:px-6 flex flex-col items-center justify-center">
        {/* Logo Introduction (Fades gently when flight starts) */}
        <div
          className={`flex flex-col items-center text-center transition-all duration-1000 ${
            phase === "logo"
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-15 scale-90 -translate-y-4"
          }`}
        >
          <div className="relative w-56 h-36 sm:w-72 sm:h-44 md:w-80 md:h-48 mb-3">
            <Image
              src="/images/logo.png"
              alt={siteConfig.name}
              fill
              priority
              sizes="(max-width: 640px) 224px, 320px"
              className="object-contain"
            />
          </div>
          <p className="font-serif italic text-xs sm:text-sm text-[#B87543] tracking-[0.25em] uppercase">
            A Journey Begins With A Dream
          </p>
        </div>

        {/* Flight SVG Canvas (Locked 1:1 in SVG user coordinates for mobile, tablet, and desktop) */}
        <div
          className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-600 ${
            phase === "flight" || phase === "out" ? "opacity-100" : "opacity-0"
          }`}
        >
          <svg
            viewBox="0 0 900 500"
            className="w-full h-full overflow-visible"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="introFlightGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#101A2E" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#B87543" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#E2B18D" stopOpacity="1" />
              </linearGradient>

              <filter id="introGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Static Faint Guide Path */}
            <path
              d={pathD}
              fill="none"
              stroke="#E2DDD5"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />

            {/* Dynamic Drawn Flight Path */}
            <path
              ref={pathRef}
              d={pathD}
              fill="none"
              stroke="url(#introFlightGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#introGlow)"
            />

            {/* Destination Waypoint Nodes */}
            {destinationNodes.map((node) => {
              const isActive = activeNodes.includes(node.name);
              return (
                <g
                  key={node.name}
                  transform={`translate(${node.x}, ${node.y})`}
                  className="transition-all duration-700"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: `translate(${node.x}px, ${isActive ? node.y : node.y + 6}px)`,
                    transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                  }}
                >
                  {/* Outer Ripple */}
                  {isActive && (
                    <circle
                      r="16"
                      fill="none"
                      stroke="#B87543"
                      strokeWidth="1.2"
                      className="animate-ping opacity-45"
                    />
                  )}

                  {/* Outer delicate ring */}
                  <circle r="7" fill="none" stroke="#B87543" strokeWidth="1" opacity="0.35" />

                  {/* Copper Pin Dot */}
                  <circle r="4" fill="#B87543" stroke="#FFFFFF" strokeWidth="1.5" />

                  {/* Node Label Text (Scales with SVG viewBox on all devices) */}
                  <text
                    x="0"
                    y="-15"
                    textAnchor="middle"
                    fill="#101A2E"
                    fontSize="13"
                    fontWeight="600"
                    letterSpacing="2.5"
                    fontFamily="var(--font-manrope), system-ui, sans-serif"
                  >
                    {node.name}
                  </text>
                  <text
                    x="0"
                    y="22"
                    textAnchor="middle"
                    fill="#B87543"
                    fontSize="9.5"
                    fontWeight="500"
                    letterSpacing="2"
                    fontFamily="var(--font-manrope), system-ui, sans-serif"
                  >
                    {node.sub}
                  </text>
                </g>
              );
            })}

            {/* Gliding Airplane (SVG Element — 100% synchronized with the flight path on all screens) */}
            <g
              ref={planeRef}
              transform="translate(100, 400) rotate(45)"
              className="will-change-transform filter drop-shadow-md"
            >
              {/* Subtle ambient flight halo */}
              <circle r="20" fill="#B87543" fillOpacity="0.08" />
              <circle r="9" fill="#B87543" fillOpacity="0.18" />

              {/* Vector Airplane Icon centered at (0, 0) */}
              <g transform="translate(-18, -17) scale(0.75)">
                <path
                  d="M24 4C24 4 27.5 12 28.5 18L44 26L42 29L28.5 24.5L28 35L33 39V41L24 38.5L15 41V39L20 35L19.5 24.5L6 29L4 26L19.5 18C20.5 12 24 4 24 4Z"
                  fill="#101A2E"
                  stroke="#E2B18D"
                  strokeWidth="1.2"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>

      {/* Accessible Skip Intro Button (Formatted for touchscreens, mobile Safari, and desktop) */}
      <button
        onClick={handleSkip}
        type="button"
        className="absolute bottom-6 right-5 sm:bottom-8 sm:right-8 z-30 group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/90 hover:bg-white text-[#101A2E] text-[11px] font-sans font-semibold uppercase tracking-[0.2em] shadow-sm border border-[#101A2E]/10 transition-all duration-300 hover:border-[#B87543] active:scale-95 cursor-pointer"
        style={{
          marginBottom: "max(0.25rem, env(safe-area-inset-bottom))",
          marginRight: "max(0.25rem, env(safe-area-inset-right))",
        }}
        aria-label="Skip introduction animation"
      >
        <span>Skip Intro</span>
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 text-[#B87543]">
          →
        </span>
      </button>

      {/* Bottom Progress Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E7E2D8]">
        <div
          className={`h-full bg-[#B87543] transition-all duration-[3600ms] ease-out ${
            phase !== "logo" ? "w-full" : "w-0"
          }`}
        />
      </div>
    </aside>
  );
};

export default IntroAnimation;
