"use client";

import React from "react";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";
import VectorAirplane from "./VectorAirplane";
import { MessageCircle, Compass, ArrowRight } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-32 sm:py-44 bg-[#08152F] text-white overflow-hidden">
      {/* Background Animated Flight Path Arc */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg
          viewBox="0 0 1440 600"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M -100 450 C 350 480, 600 200, 950 180 C 1200 160, 1350 240, 1600 100"
            fill="none"
            stroke="#B87543"
            strokeWidth="1.5"
            strokeDasharray="6 8"
          />
        </svg>

        {/* Small airplane travelling along the path */}
        <div
          className="absolute top-[30%] left-[62%] -rotate-6"
          style={{ animation: "float 7s ease-in-out infinite" }}
        >
          <VectorAirplane size={24} color="#D99767" fill="#B87543" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        {/* Motif Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md mb-8 text-white/90">
          <Compass className="w-3.5 h-3.5 text-[#B87543]" />
          <span className="text-[11px] font-sans uppercase tracking-[0.25em]">
            Bespoke Travel Horizons
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl text-white tracking-tight leading-[1.04] max-w-4xl mb-6">
          <span className="block">YOUR NEXT ADVENTURE</span>
          <span className="block italic text-[#D99767] font-normal">STARTS HERE.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="max-w-xl text-base sm:text-xl text-white/80 font-sans font-light leading-relaxed mb-12 sm:mb-14">
          Tell us where you're dreaming of going. Let's orchestrate an unforgettable journey shaped around you.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none">
          <a
            href="#planner"
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#9A5B2D] hover:bg-[#B87543] text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-[0_8px_30px_rgba(154,91,45,0.4)] transform hover:-translate-y-0.5 group"
          >
            <span>Plan My Journey</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href={getWhatsAppUrl("Hello Darsh Dream Tours, I would like to plan my next adventure.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-9 py-4 rounded-full border border-white/20 hover:border-white text-white hover:bg-white/10 font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 backdrop-blur-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
