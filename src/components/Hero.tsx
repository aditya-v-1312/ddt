"use client";

import React from "react";
import Image from "next/image";
import { travelImages } from "@/data/images";
import { siteConfig } from "@/data/siteConfig";
import VectorAirplane from "./VectorAirplane";
import { Compass, ArrowDown, MapPin } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center bg-[#08152F] text-white overflow-hidden pt-20 pb-16 lg:py-0">
      {/* Background Cinematic Photograph with Luxury Editorial Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={travelImages.hero.url}
          alt={travelImages.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite] opacity-60"
        />
        {/* Subtle Vignette and Tint Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08152F] via-[#08152F]/65 to-[#08152F]/75" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#08152F]/40 to-[#08152F]" />
      </div>

      {/* Subtle Recurring Flight Path Vector Motif (Brand Signature) */}
      <div className="absolute inset-0 pointer-events-none z-1 overflow-hidden opacity-30">
        <svg
          viewBox="0 0 1440 900"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M -100 700 C 300 720, 500 500, 750 420 C 1000 340, 1200 240, 1600 120"
            fill="none"
            stroke="#B87543"
            strokeWidth="1.5"
            strokeDasharray="6 8"
          />
        </svg>
        <div
          className="absolute top-[42%] left-[52%] hidden lg:block -rotate-12 filter drop-shadow"
          style={{ animation: "float 6s ease-in-out infinite" }}
        >
          <VectorAirplane size={22} color="#D99767" fill="#B87543" />
        </div>
      </div>

      {/* Main Content Stage */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Brand Tagline Badge */}
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md mb-8 sm:mb-10 text-white/90">
          <Compass className="w-3.5 h-3.5 text-[#B87543]" />
          <span className="text-[11px] sm:text-xs font-sans font-medium tracking-[0.25em] uppercase text-white/90">
            Darsh Dream Tours • Curated Journeys
          </span>
        </div>

        {/* Editorial Headline */}
        <h1 className="font-serif font-light text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.08] text-white max-w-5xl mb-6">
          <span className="block text-white">YOUR JOURNEY.</span>
          <span className="block italic text-[#EAE6DD] font-serif font-normal">
            YOUR DREAM.
          </span>
          <span className="block text-[#D99767]">YOUR WORLD.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-white/80 font-sans font-light leading-relaxed mb-10 sm:mb-12">
          {siteConfig.subTagline}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none">
          <a
            href="#destinations"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#9A5B2D] hover:bg-[#B87543] text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-[0_4px_24px_rgba(154,91,45,0.35)] hover:shadow-[0_6px_30px_rgba(154,91,45,0.5)] transform hover:-translate-y-0.5"
          >
            <span>Explore Destinations</span>
          </a>

          <a
            href="#planner"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/30 hover:border-white text-white hover:bg-white/10 font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 backdrop-blur-sm"
          >
            <span>Plan My Journey</span>
          </a>
        </div>

        {/* Editorial Footnote / Origin indicator */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/10 w-full max-w-2xl flex items-center justify-between text-xs text-white/50 tracking-widest font-sans uppercase">
          <div className="flex items-center space-x-2">
            <MapPin className="w-3.5 h-3.5 text-[#B87543]" />
            <span>Vadodara, India</span>
          </div>
          <div className="h-px w-8 bg-white/20 hidden sm:block" />
          <span className="hidden sm:inline">Handcrafted Itineraries</span>
          <div className="h-px w-8 bg-white/20 hidden sm:block" />
          <span>Worldwide Escapes</span>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#destinations"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 text-white/40 hover:text-white transition-colors duration-300"
        aria-label="Scroll down to explore destinations"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-sans">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#B87543]" />
      </a>
    </section>
  );
};

export default Hero;
