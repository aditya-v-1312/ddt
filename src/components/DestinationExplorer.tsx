"use client";

import React, { useState } from "react";
import Image from "next/image";
import { destinations, Destination } from "@/data/destinations";
import { ArrowUpRight, Sparkles, MapPin, Compass } from "lucide-react";

interface DestinationExplorerProps {
  onSelectDestination?: (destName: string) => void;
}

export const DestinationExplorer: React.FC<DestinationExplorerProps> = ({
  onSelectDestination,
}) => {
  const [activeFilter, setActiveFilter] = useState<"all" | "india" | "international">("all");
  const [selectedModalDest, setSelectedModalDest] = useState<Destination | null>(null);

  const filteredDestinations = destinations.filter((dest) => {
    if (activeFilter === "all") return true;
    return dest.region === activeFilter;
  });

  const handleEnquire = (dest: Destination) => {
    if (onSelectDestination) {
      onSelectDestination(dest.name);
    }
    const plannerEl = document.getElementById("planner");
    if (plannerEl) {
      plannerEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="destinations" className="py-24 sm:py-32 bg-[#F8F7F3] text-[#17213A] relative">
      {/* Decorative Editorial Border Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E7E4DA] pb-8 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 text-[#9A5B2D] text-xs font-sans font-semibold uppercase tracking-[0.25em] mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Curated Horizons</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#08152F] tracking-tight leading-[1.1]">
              EXPLORE THE WORLD
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#687080] font-sans font-light leading-relaxed">
              From unforgettable Indian escapes to journeys across the globe. Each itinerary is crafted around your rhythm and dreams.
            </p>
          </div>

          {/* Minimal Filter Tabs */}
          <div className="flex items-center space-x-2 sm:space-x-3 bg-white p-1.5 rounded-full border border-[#E7E4DA] shadow-sm self-start md:self-end">
            {(
              [
                { id: "all", label: "All Escapes" },
                { id: "india", label: "Incredible India" },
                { id: "international", label: "International" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-sans uppercase tracking-[0.16em] transition-all duration-300 ${
                  activeFilter === tab.id
                    ? "bg-[#08152F] text-white shadow-sm"
                    : "text-[#687080] hover:text-[#08152F]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Editorial Asymmetrical Layout Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {filteredDestinations.map((dest, index) => {
            // Determine asymmetrical grid spans based on destination index or type
            // 0 -> col-span-12 md:col-span-8 h-[520px] (Feature large)
            // 1 -> col-span-12 md:col-span-4 h-[520px] (Tall)
            // 2 -> col-span-12 md:col-span-4 h-[440px]
            // 3 -> col-span-12 md:col-span-4 h-[440px]
            // 4 -> col-span-12 md:col-span-4 h-[440px]
            // 5 -> col-span-12 md:col-span-6 h-[460px]
            // 6 -> col-span-12 md:col-span-6 h-[460px]
            // 7 -> col-span-12 md:col-span-12 h-[420px] (Wide panoramic)
            let colSpan = "col-span-12 md:col-span-4";
            let height = "h-[420px] sm:h-[460px]";

            if (index % 7 === 0) {
              colSpan = "col-span-12 md:col-span-8";
              height = "h-[480px] sm:h-[540px]";
            } else if (index % 7 === 1) {
              colSpan = "col-span-12 md:col-span-4";
              height = "h-[480px] sm:h-[540px]";
            } else if (index % 7 === 6) {
              colSpan = "col-span-12 md:col-span-12";
              height = "h-[380px] sm:h-[440px]";
            } else if (index % 7 === 4 || index % 7 === 5) {
              colSpan = "col-span-12 md:col-span-6";
              height = "h-[420px] sm:h-[480px]";
            }

            return (
              <div
                key={dest.id}
                className={`${colSpan} ${height} relative group overflow-hidden rounded-2xl bg-[#08152F] cursor-pointer shadow-[0_8px_30px_rgba(8,21,47,0.06)] transition-all duration-500`}
                onClick={() => setSelectedModalDest(dest)}
              >
                {/* Background Image with Zoom on Hover */}
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 66vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-95"
                />

                {/* Subtle Editorial Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08152F] via-[#08152F]/40 to-transparent transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#08152F]/40 via-transparent to-transparent opacity-60" />

                {/* Top Badge: Region / Best Time */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                  <span className="text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white/90 border border-white/10">
                    {dest.subtitle}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#9A5B2D] group-hover:scale-110">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content Card */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 transform transition-transform duration-500 group-hover:-translate-y-1">
                  {/* Copper Accent Line */}
                  <div className="w-8 h-[2px] bg-[#9A5B2D] mb-3 transition-all duration-500 group-hover:w-16" />

                  <h3 className="font-serif text-2xl sm:text-4xl text-white tracking-tight leading-tight">
                    {dest.name}
                  </h3>

                  <p className="mt-1 text-xs sm:text-sm text-[#D99767] font-sans font-light tracking-wide line-clamp-1">
                    {dest.tagline}
                  </p>

                  <p className="mt-2 text-xs sm:text-sm text-white/75 font-sans font-light line-clamp-2 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                    {dest.description}
                  </p>

                  {/* Highlights Bar */}
                  <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-white/70 font-sans">
                    <div className="flex items-center space-x-1.5">
                      <MapPin className="w-3 h-3 text-[#B87543]" />
                      <span>Best: {dest.bestTimeToVisit}</span>
                    </div>
                    <span className="text-[#D99767] font-medium uppercase tracking-wider group-hover:underline">
                      Discover & Plan →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick View Modal for Destination Details */}
      {selectedModalDest && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#08152F]/80 backdrop-blur-md"
          onClick={() => setSelectedModalDest(null)}
        >
          <div
            className="bg-[#F8F7F3] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#E7E4DA] transform transition-all duration-300 relative text-[#17213A]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative h-64 sm:h-72 w-full">
              <Image
                src={selectedModalDest.image}
                alt={selectedModalDest.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08152F] via-[#08152F]/30 to-transparent" />
              <button
                onClick={() => setSelectedModalDest(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-[#9A5B2D] transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-[#D99767] font-sans">
                  {selectedModalDest.subtitle}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-white">
                  {selectedModalDest.name}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              <p className="font-serif italic text-base text-[#9A5B2D] mb-3">
                {selectedModalDest.tagline}
              </p>
              <p className="text-sm sm:text-base text-[#687080] font-sans font-light leading-relaxed mb-6">
                {selectedModalDest.description}
              </p>

              <div className="mb-6 bg-white p-4 rounded-xl border border-[#E7E4DA]">
                <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#08152F] mb-2 flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#9A5B2D]" />
                  <span>Curated Highlights</span>
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#17213A]/80 font-sans list-disc list-inside">
                  {selectedModalDest.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E7E4DA]">
                <div className="text-xs text-[#687080] font-sans">
                  Recommended Travel Window: <span className="font-medium text-[#17213A]">{selectedModalDest.bestTimeToVisit}</span>
                </div>
                <button
                  onClick={() => {
                    handleEnquire(selectedModalDest);
                    setSelectedModalDest(null);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#9A5B2D] hover:bg-[#B87543] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md"
                >
                  Plan {selectedModalDest.name} Journey →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DestinationExplorer;
