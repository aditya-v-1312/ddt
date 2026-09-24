"use client";

import React, { useState } from "react";
import Image from "next/image";
import { destinations, Destination } from "@/data/destinations";
import VectorAirplane from "./VectorAirplane";
import { Compass, ArrowRight, Sparkles, Navigation } from "lucide-react";

interface WorldMapProps {
  onSelectDestination?: (destName: string) => void;
}

export const WorldMap: React.FC<WorldMapProps> = ({ onSelectDestination }) => {
  const [activePin, setActivePin] = useState<Destination>(
    destinations.find((d) => d.id === "dubai") || destinations[0]
  );

  const origin = { x: 680, y: 228 }; // Vadodara, India Hub

  const flightRoutes = [
    { targetId: "dubai", curve: "M 680 228 Q 640 180, 610 220" },
    { targetId: "europe", curve: "M 680 228 Q 570 120, 505 152" },
    { targetId: "maldives", curve: "M 680 228 Q 660 265, 670 305" },
    { targetId: "singapore", curve: "M 680 228 Q 740 230, 780 265" },
    { targetId: "thailand", curve: "M 680 228 Q 720 205, 750 232" },
    { targetId: "bali", curve: "M 680 228 Q 780 260, 820 320" },
  ];

  const handlePlanClick = (dest: Destination) => {
    if (onSelectDestination) {
      onSelectDestination(dest.name);
    }
    const plannerEl = document.getElementById("planner");
    if (plannerEl) {
      plannerEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-28 sm:py-36 bg-[#08152F] text-white overflow-hidden">
      {/* Background Starlight Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#244586] rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#9A5B2D] rounded-full blur-3xl" />
      </div>

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#D99767] text-xs font-sans uppercase tracking-[0.25em] mb-3">
              <Compass className="w-3.5 h-3.5 text-[#B87543]" />
              <span>Interactive Navigation Grid</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
              YOUR WORLD AWAITS
            </h2>
            <p className="mt-3 text-base text-white/70 font-sans font-light max-w-xl">
              From our base in Vadodara to treasured sanctuaries across continents. Select any waypoint to trace flight routes and preview experiences.
            </p>
          </div>

          <div className="flex items-center space-x-5 text-xs font-sans text-white/60">
            <span className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B87543] ring-4 ring-[#B87543]/20 animate-pulse" />
              <span>Destination Waypoint</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="w-6 h-[1.5px] bg-[#B87543] border-dashed" />
              <span>Flight Arcs</span>
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Map Visual Stage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-[#050D20] border border-[#1C366B]/50 p-4 sm:p-8 lg:p-12 overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.6)]">
          {/* Subtle Latitude / Longitude Luxury Grid Lines */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg viewBox="0 0 1000 500" className="w-full h-full" preserveAspectRatio="none">
              <line x1="0" y1="120" x2="1000" y2="120" stroke="#244586" strokeWidth="0.8" strokeDasharray="3 5" />
              <line x1="0" y1="250" x2="1000" y2="250" stroke="#244586" strokeWidth="0.8" strokeDasharray="3 5" />
              <line x1="0" y1="380" x2="1000" y2="380" stroke="#244586" strokeWidth="0.8" strokeDasharray="3 5" />
              <line x1="250" y1="0" x2="250" y2="500" stroke="#244586" strokeWidth="0.8" strokeDasharray="3 5" />
              <line x1="500" y1="0" x2="500" y2="500" stroke="#244586" strokeWidth="0.8" strokeDasharray="3 5" />
              <line x1="750" y1="0" x2="750" y2="500" stroke="#244586" strokeWidth="0.8" strokeDasharray="3 5" />
            </svg>
          </div>

          {/* SVG Map Canvas */}
          <div className="relative w-full aspect-[2/1] min-h-[380px] sm:min-h-[460px]">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* World Continents Outlines */}
              <g fill="#0D1F42" stroke="#1C366B" strokeWidth="1" opacity="0.85">
                {/* Europe */}
                <path d="M 460 110 Q 500 90, 530 110 T 540 160 T 490 190 T 450 160 Z" />
                <path d="M 480 80 Q 510 50, 520 80 T 500 110 Z" />
                {/* Africa */}
                <path d="M 470 200 Q 540 200, 560 250 T 540 350 T 490 330 T 460 250 Z" />
                {/* Middle East */}
                <path d="M 570 180 Q 620 180, 640 230 T 580 250 Z" />
                {/* Indian Subcontinent */}
                <path d="M 640 180 Q 710 180, 720 220 T 685 300 T 650 250 Z" />
                {/* East Asia */}
                <path d="M 660 110 Q 780 100, 850 140 T 820 240 T 730 200 Z" />
                {/* Southeast Asia & Bali */}
                <path d="M 740 220 Q 800 240, 790 300 T 750 280 Z" />
                <path d="M 780 310 Q 840 315, 870 335 T 790 330 Z" />
                {/* Australia */}
                <path d="M 830 350 Q 920 340, 930 400 T 850 430 Z" />
                {/* Americas backdrop */}
                <path d="M 120 100 Q 240 110, 220 220 T 160 250 Z" opacity="0.4" />
                <path d="M 210 260 Q 280 290, 270 410 T 200 400 Z" opacity="0.4" />
              </g>

              {/* Connecting Curved Flight Arcs */}
              {flightRoutes.map((route) => {
                const isSelected = activePin?.id === route.targetId;
                return (
                  <g key={route.targetId}>
                    <path
                      d={route.curve}
                      fill="none"
                      stroke={isSelected ? "#B87543" : "#244586"}
                      strokeWidth={isSelected ? "2.5" : "1.2"}
                      strokeDasharray={isSelected ? "4 5" : "3 5"}
                      opacity={isSelected ? 1 : 0.45}
                      className="transition-all duration-500"
                    />
                  </g>
                );
              })}

              {/* India Origin Hub (Vadodara Marker) */}
              <g transform={`translate(${origin.x}, ${origin.y})`}>
                <circle r="14" fill="none" stroke="#244586" strokeWidth="1" className="animate-ping opacity-40" />
                <circle r="6" fill="#244586" stroke="#FFFFFF" strokeWidth="2" />
                <text
                  x="0"
                  y="-12"
                  textAnchor="middle"
                  className="font-sans text-[10px] font-semibold tracking-widest fill-white"
                >
                  VADODARA (HUB)
                </text>
              </g>

              {/* Destination Markers */}
              {destinations.map((dest) => {
                const cx = (dest.mapCoords.x * 1000) / 100;
                const cy = (dest.mapCoords.y * 500) / 100;
                const isSelected = activePin?.id === dest.id;

                return (
                  <g
                    key={dest.id}
                    transform={`translate(${cx}, ${cy})`}
                    className="cursor-pointer group"
                    onClick={() => setActivePin(dest)}
                  >
                    {isSelected && (
                      <circle
                        r="16"
                        fill="none"
                        stroke="#B87543"
                        strokeWidth="1.5"
                        className="animate-ping opacity-75"
                      />
                    )}

                    <circle
                      r={isSelected ? "8" : "5"}
                      fill={isSelected ? "#B87543" : "#9A5B2D"}
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      className="transition-all duration-300 group-hover:scale-125"
                    />

                    <text
                      x="0"
                      y={isSelected ? "22" : "16"}
                      textAnchor="middle"
                      className={`font-sans text-[9px] uppercase tracking-widest transition-all duration-300 ${
                        isSelected
                          ? "fill-[#D99767] font-semibold text-[11px]"
                          : "fill-white/70 group-hover:fill-white"
                      }`}
                    >
                      {dest.name}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Cruising Airplane Motif on Active Arc */}
            <div
              className="absolute top-1/3 left-1/2 pointer-events-none -rotate-12 opacity-80"
              style={{ animation: "float 6s ease-in-out infinite" }}
            >
              <VectorAirplane size={22} color="#D99767" fill="#B87543" />
            </div>

            {/* Active Destination Waypoint Inspection Card */}
            {activePin && (
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md bg-[#08152F]/95 backdrop-blur-xl border border-[#B87543]/40 rounded-2xl p-5 sm:p-6 shadow-2xl transition-all duration-500 animate-in fade-in">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#D99767]">
                      {activePin.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-tight">
                      {activePin.name}
                    </h3>
                  </div>
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-white/20">
                    <Image
                      src={activePin.image}
                      alt={activePin.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <p className="mt-2 text-xs text-[#B87543] font-serif italic tracking-wide">
                  {activePin.tagline}
                </p>

                <p className="mt-2 text-xs text-white/70 font-sans font-light line-clamp-2">
                  {activePin.description}
                </p>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-white/60 font-sans">
                    Best Season: <strong className="text-white/90">{activePin.bestTimeToVisit}</strong>
                  </span>
                  <button
                    onClick={() => handlePlanClick(activePin)}
                    className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider text-[#D99767] hover:text-white font-sans font-medium transition-colors"
                  >
                    <span>Plan Journey</span>
                    <Navigation className="w-3 h-3 text-[#B87543]" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
