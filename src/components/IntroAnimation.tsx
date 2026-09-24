"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import VectorAirplane from "./VectorAirplane";
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
  const [isSkipped, setIsSkipped] = useState(false);
  const pathRef = useRef<SVGPathElement | null>(null);
  const planeRef = useRef<HTMLDivElement | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // SVG curved path coordinates (responsive viewBox 0 0 1000 600)
  // An organic swooping flight arc from lower-left to upper-right
  const pathD = "M 100 480 C 280 470, 360 380, 480 320 C 600 260, 680 200, 920 140";

  const destinationNodes: DestinationNode[] = [
    { name: "INDIA", sub: "ORIGIN", progress: 0.08, x: 130, y: 475 },
    { name: "DUBAI", sub: "TRANSIT", progress: 0.48, x: 470, y: 325 },
    { name: "EUROPE", sub: "DESTINATION", progress: 0.88, x: 840, y: 160 },
  ];

  const handleFinish = () => {
    try {
      sessionStorage.setItem("darsh_intro_seen", "true");
    } catch {
      // ignore
    }
    setPhase("out");
    setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 600);
  };

  const handleSkip = () => {
    setIsSkipped(true);
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    handleFinish();
  };

  useEffect(() => {
    // Check sessionStorage & reduced motion
    try {
      const hasSeen = sessionStorage.getItem("darsh_intro_seen");
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (hasSeen === "true" || prefersReduced) {
        setPhase("done");
        onComplete();
        return;
      }
    } catch {
      // sessionStorage might be restricted in some iframe contexts
    }

    // Phase 1: 0 - 1000ms Logo introduction
    const logoTimer = setTimeout(() => {
      setPhase("flight");
      startFlightAnimation();
    }, 1100);

    return () => {
      clearTimeout(logoTimer);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const startFlightAnimation = () => {
    const path = pathRef.current;
    const plane = planeRef.current;
    if (!path || !plane) {
      setTimeout(handleFinish, 2000);
      return;
    }

    const totalLength = path.getTotalLength();
    path.style.strokeDasharray = `${totalLength}`;
    path.style.strokeDashoffset = `${totalLength}`;

    const duration = 2800; // ms for the flight sequence
    const startTime = performance.now();

    const animateFlight = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);

      // Smooth easeInOutQuad easing
      const easedProgress =
        progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      // Draw path
      path.style.strokeDashoffset = `${totalLength * (1 - easedProgress)}`;

      // Calculate airplane position & tangent rotation
      const currentDist = totalLength * easedProgress;
      const pt = path.getPointAtLength(currentDist);
      const aheadDist = Math.min(totalLength, currentDist + 3);
      const ptAhead = path.getPointAtLength(aheadDist);

      const angleRad = Math.atan2(ptAhead.y - pt.y, ptAhead.x - pt.x);
      // Our plane icon points toward 45 deg, so subtract 45 deg to align with travel vector
      const angleDeg = (angleRad * 180) / Math.PI + 45;

      plane.style.transform = `translate3d(${pt.x}px, ${pt.y}px, 0) rotate(${angleDeg}deg)`;

      // Trigger destination nodes as plane passes
      destinationNodes.forEach((node) => {
        if (easedProgress >= node.progress) {
          setActiveNodes((prev) => (prev.includes(node.name) ? prev : [...prev, node.name]));
        }
      });

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(animateFlight);
      } else {
        // Flight completed, hold for a brief moment then transition out
        setTimeout(() => {
          handleFinish();
        }, 500);
      }
    };

    animFrameRef.current = requestAnimationFrame(animateFlight);
  };

  if (phase === "done") {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-label="Welcome Journey"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#F8F7F3] transition-opacity duration-700 select-none overflow-hidden ${
        phase === "out" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background Subtle Compass Ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-[#9A5B2D]/30 border-dashed" />
        <div className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-[#244586]/20" />
      </div>

      {/* Center Stage Container */}
      <div className="relative w-full max-w-5xl h-[500px] md:h-[600px] px-4 flex flex-col items-center justify-center">
        {/* Logo Introduction (0 - 1.1s) */}
        <div
          className={`flex flex-col items-center text-center transition-all duration-1000 ${
            phase === "logo"
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-20 scale-95 -translate-y-4"
          }`}
        >
          <div className="relative w-44 h-28 md:w-56 md:h-36 mb-4 drop-shadow-sm">
            <Image
              src="/images/logo.jpg"
              alt={siteConfig.name}
              fill
              priority
              className="object-contain"
            />
          </div>
          <p className="font-serif italic text-sm md:text-base text-[#9A5B2D] tracking-widest uppercase">
            A Journey Begins With A Dream
          </p>
        </div>

        {/* Flight SVG Canvas (1.1s - 4.5s) */}
        <div
          className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 ${
            phase === "flight" || phase === "out" ? "opacity-100" : "opacity-0"
          }`}
        >
          <svg
            viewBox="0 0 1000 600"
            className="w-full h-full overflow-visible"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="flightLineGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#244586" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#9A5B2D" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#B87543" stopOpacity="1" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Background static faint guide path */}
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
              stroke="url(#flightLineGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="5 7"
              filter="url(#glow)"
            />

            {/* Destination Nodes along the flight curve */}
            {destinationNodes.map((node) => {
              const isActive = activeNodes.includes(node.name);
              return (
                <g
                  key={node.name}
                  transform={`translate(${node.x}, ${node.y})`}
                  className={`transition-all duration-700 ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                  }`}
                >
                  {/* Outer Ripple */}
                  {isActive && (
                    <circle
                      r="12"
                      fill="none"
                      stroke="#B87543"
                      strokeWidth="1"
                      className="animate-ping opacity-60"
                    />
                  )}
                  {/* Copper Pin Dot */}
                  <circle r="4" fill="#9A5B2D" stroke="#FFFFFF" strokeWidth="1.5" />

                  {/* Label Text */}
                  <text
                    x="0"
                    y="-16"
                    textAnchor="middle"
                    className="font-sans text-[11px] font-semibold tracking-[0.25em] fill-[#08152F]"
                  >
                    {node.name}
                  </text>
                  <text
                    x="0"
                    y="22"
                    textAnchor="middle"
                    className="font-sans text-[9px] uppercase tracking-widest fill-[#9A5B2D]"
                  >
                    {node.sub}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Gliding Airplane Element */}
          <div
            ref={planeRef}
            className="absolute top-0 left-0 w-8 h-8 -ml-4 -mt-4 transition-transform will-change-transform z-10 filter drop-shadow-md"
            style={{ transform: "translate3d(100px, 480px, 0) rotate(45deg)" }}
          >
            <VectorAirplane size={32} color="#08152F" fill="#9A5B2D" />
          </div>
        </div>
      </div>

      {/* Unobtrusive Skip Intro Button (Bottom Right) */}
      <button
        onClick={handleSkip}
        className="absolute bottom-6 right-6 md:bottom-8 md:right-10 z-20 group flex items-center space-x-2 text-xs uppercase tracking-widest font-sans text-[#687080] hover:text-[#08152F] py-2 px-3 rounded-full border border-transparent hover:border-[#E2DDD5] bg-[#F8F7F3]/80 backdrop-blur-sm transition-all duration-300"
        aria-label="Skip intro animation and go directly to homepage"
      >
        <span>Skip Intro</span>
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 text-[#9A5B2D]">
          →
        </span>
      </button>

      {/* Progress Line at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E5E0D5]">
        <div
          className={`h-full bg-[#9A5B2D] transition-all duration-[4200ms] ease-out ${
            phase !== "logo" ? "w-full" : "w-0"
          }`}
        />
      </div>
    </div>
  );
};

export default IntroAnimation;
