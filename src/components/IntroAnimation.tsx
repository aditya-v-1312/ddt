"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import WorldGlobeScene from "./WorldGlobeScene";
import GlobeCard from "./GlobeCard";
import { locations, originLocation, Location } from "@/data/countries";
import { ArrowUpRight, Compass, Sparkles, Navigation, RotateCcw } from "lucide-react";

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<"active" | "out" | "done">("active");
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [progress, setProgress] = useState(0);

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
    }, 550);
  };

  useEffect(() => {
    try {
      const hasSeen = sessionStorage.getItem("darsh_intro_seen");
      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (hasSeen === "true" || prefersReduced) {
        onComplete();
        return;
      }
    } catch {
      // ignore
    }

    // Lock body scroll during intro
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Progress timer over ~8.5 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          handleFinish();
          return 100;
        }
        return prev + 1.2;
      });
    }, 100);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (phase === "done") return null;

  // Popular quick-selection corridors for instant exploration
  const keyDestinations = [
    originLocation,
    ...locations.slice(0, 6), // Dubai, Swiss Alps, Paris, London, Maldives, Bali
  ];

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col justify-between overflow-hidden bg-[#050D1C] text-white transition-opacity duration-500 select-none ${
        phase === "out" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background Starlight Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#2F80FF]/15 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#B87543]/15 rounded-full blur-[140px]" />
      </div>

      {/* Top Header Strip */}
      <header className="relative z-20 flex items-center justify-between px-6 py-4 sm:px-10 border-b border-white/10 backdrop-blur-md bg-[#050D1C]/70">
        <div className="flex items-center gap-4">
          <div className="relative h-10 w-36 sm:h-11 sm:w-44">
            <Image
              src="/images/logo-light.png"
              alt={siteConfig.name}
              fill
              priority
              sizes="180px"
              className="object-contain object-left drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)]"
            />
          </div>

          <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-white/15">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E2B18D] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B87543]"></span>
            </span>
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/60">
              Vadodara Hub · Worldwide Flight Network
            </span>
          </div>
        </div>

        {/* Enter Website Button */}
        <button
          type="button"
          onClick={handleFinish}
          className="group inline-flex items-center gap-2 rounded-full border border-[#E2B18D]/40 bg-white/10 hover:bg-[#E2B18D] hover:text-[#07101F] px-5 py-2 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-md shadow-md"
        >
          <span>Enter Website</span>
          <ArrowUpRight
            size={13}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
      </header>

      {/* Center 3D Interactive World Globe Stage */}
      <div className="relative z-10 flex-1 flex items-center justify-center min-h-0 w-full overflow-hidden">
        <div className="relative w-full h-full max-w-6xl max-h-[75vh] mx-auto flex items-center justify-center">
          <WorldGlobeScene
            selected={selectedLocation}
            onSelect={(loc) => setSelectedLocation(loc)}
          />

          {/* Floating Waypoint Detail Card */}
          <GlobeCard
            location={selectedLocation}
            onClose={() => setSelectedLocation(null)}
          />

          {/* Interactive Drag Cue Badge */}
          <div className="absolute top-3 inset-x-0 flex justify-center pointer-events-none">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#050D1C]/80 px-4 py-1 text-[9px] font-sans uppercase tracking-[0.22em] text-white/60 backdrop-blur-md">
              <Compass size={11} className="text-[#E2B18D]" />
              <span>Drag to rotate globe · Click any destination or corridor</span>
            </span>
          </div>
        </div>
      </div>

      {/* Corridor Quick Selector Strip */}
      <div className="relative z-20 px-4 py-2 bg-[#050D1C]/60 backdrop-blur-md border-t border-white/5 flex items-center justify-center overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="text-[9px] font-mono uppercase tracking-widest text-[#E2B18D]/70 hidden md:inline mr-2">
            Explore Routes:
          </span>
          {keyDestinations.map((loc) => {
            const isOrigin = loc.id === "vadodara";
            const isActive = selectedLocation?.id === loc.id;
            return (
              <button
                key={loc.id}
                type="button"
                onClick={() => setSelectedLocation(loc)}
                className={`px-3 py-1 rounded-full text-[9px] font-sans uppercase tracking-wider transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 border ${
                  isActive
                    ? "bg-[#E2B18D] text-[#07101F] border-[#E2B18D] font-bold shadow-md"
                    : isOrigin
                    ? "bg-white/10 text-white border-[#E2B18D]/50 hover:bg-white/20"
                    : "bg-white/5 text-white/70 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {isOrigin && <span className="h-1.5 w-1.5 rounded-full bg-[#E2B18D] animate-ping" />}
                <span>{isOrigin ? "🇮🇳 India (Hub)" : loc.city}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Progress Bar & Flight Corridor Counter */}
      <footer className="relative z-20 px-6 py-3.5 sm:px-10 border-t border-white/10 backdrop-blur-md bg-[#050D1C]/80 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-4 text-[10px] font-sans uppercase tracking-[0.2em] text-white/50">
          <span className="text-[#E2B18D] font-semibold">12+ Global Flight Corridors</span>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="hidden md:inline">Departing Vadodara to Europe, Middle East, Asia & Americas</span>
        </div>

        {/* Progress Bar indicator */}
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="flex-1 sm:w-36 h-1 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#B87543] to-[#E2B18D] transition-all duration-150 ease-out"
              style={{ width: `${Math.min(100, progress)}%` }}
            />
          </div>
          <button
            type="button"
            onClick={handleFinish}
            className="text-[10px] font-sans uppercase tracking-widest text-white/40 hover:text-white transition-colors whitespace-nowrap"
          >
            Skip Intro →
          </button>
        </div>
      </footer>
    </div>
  );
};

export default IntroAnimation;
