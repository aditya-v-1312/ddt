"use client";

import React from "react";
import type { Location } from "@/data/countries";
import { ArrowUpRight, Compass, Sparkles, X, MapPin } from "lucide-react";
import { useInquiry } from "@/context/InquiryContext";

interface GlobeCardProps {
  location: Location | null;
  onClose: () => void;
}

export default function GlobeCard({ location, onClose }: GlobeCardProps) {
  const { openInquiry } = useInquiry();

  if (!location) return null;

  const isOrigin = location.id === "vadodara";

  return (
    <div
      className="
        fixed
        bottom-16
        left-4
        right-4
        z-50
        max-h-[58vh]
        overflow-y-auto
        rounded-2xl
        border
        border-white/20
        bg-[#07101F]/95
        p-5
        sm:p-6
        shadow-[0_20px_60px_rgba(0,0,0,0.7)]
        backdrop-blur-2xl
        text-white
        animate-in
        fade-in
        slide-in-from-bottom-4
        duration-300
        lg:fixed
        lg:bottom-auto
        lg:left-auto
        lg:right-10
        lg:top-1/2
        lg:w-[360px]
        lg:max-h-none
        lg:-translate-y-1/2
      "
      onClick={(e) => e.stopPropagation()}
    >
      {/* Top golden accent line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#B87543] via-[#E2B18D] to-[#B87543]" />

      <button
        onClick={onClose}
        className="absolute right-4 top-4 h-7 w-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors"
        aria-label="Close destination details"
      >
        <X size={15} />
      </button>

      <div className="space-y-3.5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E2B18D]" />
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#E2B18D] font-mono font-semibold">
              {location.country} · {location.city}
            </p>
          </div>

          <h3 className="text-xl font-serif font-light text-white leading-tight">
            {location.title}
          </h3>

          <p className="mt-1 text-xs font-sans text-white/60">
            {location.subtitle}
          </p>
        </div>

        <p className="text-xs font-sans leading-relaxed text-white/75 font-light">
          {location.description}
        </p>

        {/* Highlight Tags */}
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {location.highlights.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-sans text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-1.5">
          {isOrigin ? (
            <button
              type="button"
              onClick={() => openInquiry({ department: "tours" })}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white py-2.5 px-4 text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#07101F] hover:bg-[#E2B18D] transition-colors shadow-md"
            >
              <span>Connect With Our Team</span>
              <ArrowUpRight size={13} />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => openInquiry({ destination: location.city, department: location.department || "tours" })}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#E2B18D] py-3 px-4 text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#07101F] hover:bg-white transition-all shadow-md hover:scale-[1.01]"
            >
              <Compass size={13} />
              <span>Inquire for {location.city}</span>
              <ArrowUpRight size={13} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
