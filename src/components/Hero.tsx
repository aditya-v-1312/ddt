"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { travelImages } from "@/data/images";
import VectorAirplane from "./VectorAirplane";
import { Compass, ArrowRight, MapPin, Sparkles } from "lucide-react";

interface HeroProps {
  onReplayTrigger?: number; // increments when replay is requested from footer
}

interface Waypoint {
  name: string;
  role: string;
  progress: number;
  x: number;
  y: number;
}

export const Hero: React.FC<HeroProps> = ({ onReplayTrigger = 0 }) => {
  // Intro animation states: "logo" -> "flying" -> "revealed"
  const [introState, setIntroState] = useState<"logo" | "flying" | "revealed">("revealed");
  const [activeWaypoints, setActiveWaypoints] = useState<string[]>([]);
  const [hasInteracted, setHasInteracted] = useState(false);

  const pathRef = useRef<SVGPathElement | null>(null);
  const planeRef = useRef<HTMLDivElement | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // SVG curved path coordinates (responsive viewBox 0 0 1200 600)
  // Sweeps from bottom-left up through center and bridges directly into the right hero photograph
  const flightPathD = "M 80 500 C 260 490, 380 360, 560 310 C 720 260, 840 240, 1080 200";

  const waypoints: Waypoint[] = [
    { name: "INDIA", role: "ORIGIN", progress: 0.12, x: 140, y: 485 },
    { name: "DUBAI", role: "TRANSIT", progress: 0.52, x: 580, y: 305 },
    { name: "EUROPE", role: "DESTINATION", progress: 0.88, x: 980, y: 220 },
  ];

  // Initialize intro check on mount or replay
  useEffect(() => {
    let hasSeen = false;
    let prefersReduced = false;

    try {
      hasSeen = sessionStorage.getItem("darsh_intro_seen") === "true";
      prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      // ignore
    }

    if (onReplayTrigger > 0) {
      // Force replay
      runOpeningSequence();
      return;
    }

    if (!hasSeen && !prefersReduced) {
      runOpeningSequence();
    } else {
      setIntroState("revealed");
    }

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [onReplayTrigger]);

  const runOpeningSequence = () => {
    setIntroState("logo");
    setActiveWaypoints([]);

    const logoTimer = setTimeout(() => {
      setIntroState("flying");
      startFlight();
    }, 1100);

    return () => clearTimeout(logoTimer);
  };

  const completeIntro = () => {
    try {
      sessionStorage.setItem("darsh_intro_seen", "true");
    } catch {
      // ignore
    }
    setIntroState("revealed");
  };

  const handleSkip = () => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    completeIntro();
  };

  const startFlight = () => {
    const path = pathRef.current;
    const plane = planeRef.current;
    if (!path || !plane) {
      completeIntro();
      return;
    }

    const totalLength = path.getTotalLength();
    path.style.strokeDasharray = `${totalLength}`;
    path.style.strokeDashoffset = `${totalLength}`;

    const duration = 2400; // ms for flight arc
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);

      // Smooth easeInOutCubic
      const eased =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      path.style.strokeDashoffset = `${totalLength * (1 - eased)}`;

      const currentDist = totalLength * eased;
      const pt = path.getPointAtLength(currentDist);
      const aheadDist = Math.min(totalLength, currentDist + 3);
      const ptAhead = path.getPointAtLength(aheadDist);

      const angleRad = Math.atan2(ptAhead.y - pt.y, ptAhead.x - pt.x);
      const angleDeg = (angleRad * 180) / Math.PI + 45;

      plane.style.transform = `translate3d(${pt.x}px, ${pt.y}px, 0) rotate(${angleDeg}deg)`;

      waypoints.forEach((wp) => {
        if (eased >= wp.progress) {
          setActiveWaypoints((prev) => (prev.includes(wp.name) ? prev : [...prev, wp.name]));
        }
      });

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Flight finishes and morphs into the hero
        setTimeout(() => {
          completeIntro();
        }, 400);
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);
  };

  const isIntroPlaying = introState !== "revealed";

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen bg-[#F8F7F3] text-[#17213A] overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center">
      {/* Background Subtle Editorial Grid & Atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9A5B2D]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#244586]/5 rounded-full blur-3xl" />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* OPENING PROLOGUE OVERLAY (ONLY ACTIVE DURING 0-4s INTRO)      */}
      {/* ------------------------------------------------------------- */}
      {isIntroPlaying && (
        <div className="fixed inset-0 z-50 bg-[#F8F7F3] flex flex-col items-center justify-center select-none">
          {/* Centered Brand Introduction (Phase: Logo) */}
          <div
            className={`transition-all duration-700 flex flex-col items-center text-center ${
              introState === "logo"
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 -translate-y-6 pointer-events-none"
            }`}
          >
            <div className="relative w-48 h-28 sm:w-60 sm:h-36 mb-4 drop-shadow-sm">
              <Image
                src="/images/logo.jpg"
                alt={siteConfig.name}
                fill
                priority
                className="object-contain"
              />
            </div>
            <p className="font-serif italic text-sm sm:text-base text-[#9A5B2D] tracking-widest uppercase">
              A Journey Begins With A Dream
            </p>
          </div>

          {/* Skip Intro Button */}
          <button
            onClick={handleSkip}
            className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-50 group flex items-center space-x-2 text-xs uppercase tracking-widest font-sans text-[#687080] hover:text-[#08152F] py-2 px-4 rounded-full border border-[#E7E4DA] bg-white/90 backdrop-blur-sm transition-all shadow-sm"
          >
            <span>Skip Intro</span>
            <span className="text-[#9A5B2D] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* FLIGHT PATH SVG CANVAS (Connects Intro and Hero)               */}
      {/* ------------------------------------------------------------- */}
      <div
        className={`absolute inset-0 w-full h-full pointer-events-none z-20 transition-opacity duration-1000 ${
          introState === "flying"
            ? "opacity-100 fixed inset-0 z-50 bg-[#F8F7F3]"
            : "opacity-80"
        }`}
      >
        <svg
          viewBox="0 0 1200 600"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="heroFlightGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#244586" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#9A5B2D" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#B87543" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Dotted Flight Path */}
          <path
            ref={pathRef}
            d={flightPathD}
            fill="none"
            stroke="url(#heroFlightGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="5 7"
            className="transition-all duration-300"
          />

          {/* Waypoints along Flight Arc */}
          {waypoints.map((wp) => {
            const isReached = activeWaypoints.includes(wp.name) || introState === "revealed";
            return (
              <g
                key={wp.name}
                transform={`translate(${wp.x}, ${wp.y})`}
                className={`transition-all duration-500 ${
                  isReached ? "opacity-100" : "opacity-0"
                }`}
              >
                <circle r="4" fill="#9A5B2D" stroke="#FFFFFF" strokeWidth="1.5" />
                <text
                  x="0"
                  y="-14"
                  textAnchor="middle"
                  className="font-sans text-[10px] font-semibold tracking-[0.22em] fill-[#08152F]"
                >
                  {wp.name}
                </text>
                <text
                  x="0"
                  y="18"
                  textAnchor="middle"
                  className="font-sans text-[8px] uppercase tracking-widest fill-[#9A5B2D]"
                >
                  {wp.role}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Gliding Airplane Element */}
        <div
          ref={planeRef}
          className={`absolute top-0 left-0 w-8 h-8 -ml-4 -mt-4 transition-transform will-change-transform z-30 filter drop-shadow-md ${
            introState === "revealed" ? "hidden" : "block"
          }`}
          style={{ transform: "translate3d(80px, 500px, 0) rotate(45deg)" }}
        >
          <VectorAirplane size={30} color="#08152F" fill="#9A5B2D" />
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MAIN ASYMMETRIC EDITORIAL HERO CONTENT                        */}
      {/* ------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN: Editorial Typography & Actions (7 cols) */}
          <div
            className={`lg:col-span-7 flex flex-col justify-center transition-all duration-1000 ${
              introState === "revealed"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Small Refined Brand Label */}
            <div className="inline-flex items-center space-x-2.5 mb-6 text-[#9A5B2D]">
              <span className="w-8 h-[1.5px] bg-[#9A5B2D]" />
              <span className="text-xs font-sans font-semibold tracking-[0.25em] uppercase text-[#9A5B2D]">
                DARSH DREAM TOURS • VADODARA
              </span>
            </div>

            {/* Giant Editorial Serif Headline */}
            <h1 className="font-serif font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.04] text-[#08152F] mb-6">
              <span className="block text-[#08152F]">Your Journey.</span>
              <span className="block italic text-[#244586] font-normal">
                Your Dream.
              </span>
              <span className="block text-[#9A5B2D]">Your World.</span>
            </h1>

            {/* Supporting Editorial Copy */}
            <p className="max-w-xl text-base sm:text-lg text-[#687080] font-sans font-light leading-relaxed mb-10">
              Curated journeys, unforgettable experiences, and travel planned around you. From our home in Vadodara to treasured sanctuaries across the globe.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <a
                href="#destinations"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#08152F] hover:bg-[#9A5B2D] text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-[0_8px_25px_rgba(8,21,47,0.15)] group"
              >
                <span>Explore Destinations</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#planner"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-[#08152F]/20 hover:border-[#08152F] text-[#08152F] hover:bg-white font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300"
              >
                <span>Plan My Journey</span>
              </a>
            </div>

            {/* Subtle Departure Footnote */}
            <div className="mt-12 pt-6 border-t border-[#E7E4DA] flex items-center space-x-6 text-xs text-[#687080] font-sans tracking-wide">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#9A5B2D]" />
                <span className="font-medium text-[#08152F]">Vadodara, Gujarat</span>
              </div>
              <span className="text-[#E7E4DA]">•</span>
              <span>Boutique Travel Planning</span>
              <span className="text-[#E7E4DA] hidden sm:inline">•</span>
              <span className="hidden sm:inline">Partner Sakshi Chandiramani</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Large Editorial Travel Visual Spread (5 cols) */}
          <div
            className={`lg:col-span-5 relative transition-all duration-1000 delay-200 ${
              introState === "revealed"
                ? "opacity-100 scale-100 translate-x-0"
                : "opacity-0 scale-95 translate-x-8"
            }`}
          >
            {/* Visual Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Architectural Border */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl border border-[#9A5B2D]/25 pointer-events-none transform -rotate-1" />

              <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(8,21,47,0.12)] bg-[#08152F]">
                <Image
                  src={travelImages.hero.url}
                  alt={travelImages.hero.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
                />
                {/* Gentle Gradient for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08152F]/70 via-transparent to-black/10" />

                {/* Editorial Caption at Bottom */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#D99767] mb-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Curated Horizons</span>
                  </div>
                  <p className="font-serif text-2xl font-light">
                    Every Escape Tells A Story
                  </p>
                  <p className="text-xs text-white/75 font-sans font-light mt-1">
                    Tailored itineraries shaped around your personal pace.
                  </p>
                </div>

                {/* Subtly Floating Vector Aircraft Badge */}
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-md text-[#08152F]">
                  <VectorAirplane size={18} color="#08152F" fill="#9A5B2D" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
