"use client";

import React, { useState } from "react";
import Image from "next/image";
import { destinations, Destination } from "@/data/destinations";
import { ArrowUpRight, ArrowRight, Sparkles, MapPin, Compass } from "lucide-react";

interface DestinationExplorerProps {
  onSelectDestination?: (destName: string) => void;
}

export const DestinationExplorer: React.FC<DestinationExplorerProps> = ({
  onSelectDestination,
}) => {
  const [activeFilter, setActiveFilter] = useState<"all" | "india" | "international">("all");
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);

  const filtered = destinations.filter((d) => {
    if (activeFilter === "all") return true;
    return d.region === activeFilter;
  });

  const handlePlanDestination = (dest: Destination) => {
    if (onSelectDestination) {
      onSelectDestination(dest.name);
    }
    const el = document.getElementById("planner");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Primary curated picks for editorial layout
  const featureDest = filtered.find((d) => d.id === "dubai") || filtered[0];
  const verticalDest1 = filtered.find((d) => d.id === "kashmir") || filtered[1];
  const verticalDest2 = filtered.find((d) => d.id === "europe") || filtered[2];
  const panoramicDest = filtered.find((d) => d.id === "kerala") || filtered[3];
  const supportingDests = filtered.filter(
    (d) =>
      d.id !== featureDest?.id &&
      d.id !== verticalDest1?.id &&
      d.id !== verticalDest2?.id &&
      d.id !== panoramicDest?.id
  );

  return (
    <section id="destinations" className="py-28 sm:py-36 bg-[#F8F7F3] text-[#17213A] relative border-t border-[#E7E4DA]">
      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E7E4DA] pb-10 gap-8">
          <div>
            <div className="flex items-center space-x-2 text-[#9A5B2D] text-xs font-sans font-semibold uppercase tracking-[0.25em] mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Curated Waypoints</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#08152F] tracking-tight leading-[1.06]">
              EXPLORE THE WORLD
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#687080] font-sans font-light max-w-2xl leading-relaxed">
              From unforgettable Indian escapes to journeys across the globe. Each route is an invitation to experience travel shaped entirely around you.
            </p>
          </div>

          {/* Minimalist Editorial Filter Links */}
          <div className="flex items-center space-x-2 bg-white px-2 py-1.5 rounded-full border border-[#E7E4DA] self-start md:self-end shadow-sm">
            {(
              [
                { id: "all", label: "All Destinations" },
                { id: "india", label: "Incredible India" },
                { id: "international", label: "International" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-sans uppercase tracking-[0.16em] transition-all duration-300 ${
                  activeFilter === tab.id
                    ? "bg-[#08152F] text-white"
                    : "text-[#687080] hover:text-[#08152F]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        {/* ------------------------------------------------------------- */}
        {/* COMPONENT 1: LARGE FEATURE EDITORIAL DESTINATION SPREAD      */}
        {/* ------------------------------------------------------------- */}
        {featureDest && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Box */}
            <div className="lg:col-span-8">
              <div
                onClick={() => setSelectedDest(featureDest)}
                className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,21,47,0.08)] cursor-pointer group bg-[#08152F]"
              >
                <Image
                  src={featureDest.image}
                  alt={featureDest.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                <div className="absolute top-6 left-6 z-10">
                  <span className="text-[11px] font-sans uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-white/95 text-[#08152F] font-semibold shadow-sm">
                    {featureDest.subtitle}
                  </span>
                </div>

                <div className="absolute bottom-6 right-6 z-10 w-10 h-10 rounded-full bg-white text-[#08152F] flex items-center justify-center transition-all duration-300 group-hover:bg-[#9A5B2D] group-hover:text-white group-hover:scale-110 shadow-md">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Narrative Editorial Box */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="w-10 h-[2px] bg-[#9A5B2D] mb-4" />
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#9A5B2D]">
                Signature Destination
              </span>
              <h3 className="font-serif text-3xl sm:text-5xl text-[#08152F] tracking-tight mt-1 mb-3">
                {featureDest.name}
              </h3>
              <p className="font-serif italic text-base text-[#687080] mb-4">
                "{featureDest.tagline}"
              </p>
              <p className="text-sm text-[#17213A]/80 font-sans font-light leading-relaxed mb-6">
                {featureDest.description}
              </p>

              <div className="mb-6 pt-4 border-t border-[#E7E4DA]">
                <span className="block text-[11px] uppercase tracking-wider text-[#687080] font-sans mb-2">
                  Curated Highlights:
                </span>
                <ul className="space-y-1.5 text-xs text-[#08152F] font-sans font-medium">
                  {featureDest.highlights.map((h, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9A5B2D]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <button
                  onClick={() => handlePlanDestination(featureDest)}
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#08152F] hover:text-[#9A5B2D] group transition-colors"
                >
                  <span>Enquire For Itinerary</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* COMPONENT 2: STAGGERED DUAL EDITORIAL PERSPECTIVE            */}
        {/* ------------------------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
          {verticalDest1 && (
            <div
              onClick={() => setSelectedDest(verticalDest1)}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(8,21,47,0.06)] bg-[#08152F] mb-5">
                <Image
                  src={verticalDest1.image}
                  alt={verticalDest1.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                <div className="absolute top-5 left-5 z-10">
                  <span className="text-[10px] font-sans uppercase tracking-widest px-3.5 py-1 rounded-full bg-white/90 text-[#08152F] font-medium">
                    {verticalDest1.subtitle}
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-serif text-2xl sm:text-3xl text-[#08152F] group-hover:text-[#9A5B2D] transition-colors">
                    {verticalDest1.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#687080] font-sans mt-1 line-clamp-2">
                    {verticalDest1.tagline}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-wider text-[#9A5B2D] font-sans font-semibold pt-1 shrink-0 ml-4 group-hover:translate-x-1 transition-transform">
                  Explore →
                </span>
              </div>
            </div>
          )}

          {verticalDest2 && (
            <div
              onClick={() => setSelectedDest(verticalDest2)}
              className="group cursor-pointer flex flex-col md:mt-12"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(8,21,47,0.06)] bg-[#08152F] mb-5">
                <Image
                  src={verticalDest2.image}
                  alt={verticalDest2.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                <div className="absolute top-5 left-5 z-10">
                  <span className="text-[10px] font-sans uppercase tracking-widest px-3.5 py-1 rounded-full bg-white/90 text-[#08152F] font-medium">
                    {verticalDest2.subtitle}
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-serif text-2xl sm:text-3xl text-[#08152F] group-hover:text-[#9A5B2D] transition-colors">
                    {verticalDest2.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#687080] font-sans mt-1 line-clamp-2">
                    {verticalDest2.tagline}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-wider text-[#9A5B2D] font-sans font-semibold pt-1 shrink-0 ml-4 group-hover:translate-x-1 transition-transform">
                  Explore →
                </span>
              </div>
            </div>
          )}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* COMPONENT 3: FULL-WIDTH PANORAMIC TRAVEL HORIZON             */}
        {/* ------------------------------------------------------------- */}
        {panoramicDest && (
          <div
            onClick={() => setSelectedDest(panoramicDest)}
            className="relative rounded-3xl overflow-hidden aspect-[21/10] sm:aspect-[21/8] bg-[#08152F] shadow-[0_20px_50px_rgba(8,21,47,0.08)] cursor-pointer group"
          >
            <Image
              src={panoramicDest.image}
              alt={panoramicDest.name}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div className="max-w-xl">
                <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.25em] text-[#D99767]">
                  {panoramicDest.subtitle}
                </span>
                <h3 className="font-serif text-3xl sm:text-5xl text-white tracking-tight mt-1">
                  {panoramicDest.name}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-sans font-light mt-2 line-clamp-2">
                  {panoramicDest.description}
                </p>
              </div>

              <div className="shrink-0">
                <span className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white/90 text-[#08152F] font-sans text-xs uppercase tracking-[0.16em] font-semibold group-hover:bg-[#9A5B2D] group-hover:text-white transition-all shadow-md">
                  <span>Discover {panoramicDest.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* COMPONENT 4: ASYMMETRICAL EDITORIAL SUPPORTING GRID          */}
        {/* ------------------------------------------------------------- */}
        {supportingDests.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportingDests.slice(0, 3).map((dest) => (
              <div
                key={dest.id}
                onClick={() => setSelectedDest(dest)}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-[#08152F] mb-4">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] font-sans uppercase tracking-widest px-3 py-1 rounded-full bg-white/90 text-[#08152F] font-medium">
                      {dest.subtitle}
                    </span>
                  </div>
                </div>

                <h4 className="font-serif text-2xl text-[#08152F] group-hover:text-[#9A5B2D] transition-colors">
                  {dest.name}
                </h4>
                <p className="text-xs text-[#687080] font-sans mt-1 line-clamp-1">
                  {dest.tagline}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick View Modal for Destination Details */}
      {selectedDest && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#08152F]/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedDest(null)}
        >
          <div
            className="bg-[#F8F7F3] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#E7E4DA] relative text-[#17213A]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 sm:h-72 w-full">
              <Image
                src={selectedDest.image}
                alt={selectedDest.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08152F] via-[#08152F]/30 to-transparent" />
              <button
                onClick={() => setSelectedDest(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-[#9A5B2D] transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-[#D99767] font-sans">
                  {selectedDest.subtitle}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-white">
                  {selectedDest.name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="font-serif italic text-base text-[#9A5B2D] mb-3">
                "{selectedDest.tagline}"
              </p>
              <p className="text-sm sm:text-base text-[#687080] font-sans font-light leading-relaxed mb-6">
                {selectedDest.description}
              </p>

              <div className="mb-6 bg-white p-4 rounded-xl border border-[#E7E4DA]">
                <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#08152F] mb-2 flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#9A5B2D]" />
                  <span>Curated Highlights</span>
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#17213A]/80 font-sans list-disc list-inside">
                  {selectedDest.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E7E4DA]">
                <div className="text-xs text-[#687080] font-sans">
                  Best Window: <strong className="text-[#08152F]">{selectedDest.bestTimeToVisit}</strong>
                </div>
                <button
                  onClick={() => {
                    handlePlanDestination(selectedDest);
                    setSelectedDest(null);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#08152F] hover:bg-[#9A5B2D] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md"
                >
                  Plan {selectedDest.name} Journey →
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
