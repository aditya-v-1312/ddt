"use client";

import React from "react";
import Image from "next/image";
import { featuredJourneys, FeaturedJourney } from "@/data/featuredJourneys";
import { Sparkles, Calendar, CheckCircle2, ArrowRight } from "lucide-react";

interface FeaturedJourneysProps {
  onSelectJourney?: (journeyTitle: string) => void;
}

export const FeaturedJourneys: React.FC<FeaturedJourneysProps> = ({ onSelectJourney }) => {
  const handleEnquire = (journey: FeaturedJourney) => {
    if (onSelectJourney) {
      onSelectJourney(journey.title);
    }
    const plannerEl = document.getElementById("planner");
    if (plannerEl) {
      plannerEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="featured" className="py-28 sm:py-36 bg-white text-[#17213A] relative overflow-hidden border-t border-[#E7E4DA]">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-[#9A5B2D] text-xs font-sans font-semibold uppercase tracking-[0.25em] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Magazine Spotlight</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#08152F] tracking-tight leading-[1.06]">
            FEATURED JOURNEYS
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#687080] font-sans font-light leading-relaxed">
            Immersive narratives and thoughtfully orchestrated days. Discover our signature explorations shaped around the timeless art of unhurried travel.
          </p>
        </div>
      </div>

      {/* Alternating Editorial Magazine Spreads */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 sm:space-y-36">
        {featuredJourneys.map((journey, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={journey.id}
              className={`flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12 lg:gap-20`}
            >
              {/* Large Editorial Photograph */}
              <div className="w-full lg:w-7/12">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(8,21,47,0.1)] group bg-[#08152F]">
                  <Image
                    src={journey.image}
                    alt={journey.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                  {/* Corner Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-white/95 text-[#08152F] shadow-sm">
                      {journey.tag}
                    </span>
                  </div>

                  {/* Duration pill bottom */}
                  <div className="absolute bottom-6 left-6 z-10 flex items-center space-x-2 text-white/90 text-xs font-sans bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                    <Calendar className="w-3.5 h-3.5 text-[#D99767]" />
                    <span>{journey.daysSuggested}</span>
                  </div>
                </div>
              </div>

              {/* Editorial Narrative Column */}
              <div className="w-full lg:w-5/12 flex flex-col justify-center">
                <div className="w-12 h-[2px] bg-[#9A5B2D] mb-4" />

                <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#9A5B2D]">
                  {journey.title}
                </span>

                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#08152F] tracking-tight leading-[1.12] mt-2 mb-3">
                  {journey.headline}
                </h3>

                <p className="font-serif italic text-base text-[#687080] mb-6">
                  "{journey.subheadline}"
                </p>

                <div className="space-y-4 text-sm text-[#17213A]/80 font-sans font-light leading-relaxed mb-8">
                  {journey.narrative.map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>

                {/* Key Inclusions / Highlights */}
                <div className="bg-[#F8F7F3] rounded-2xl p-6 border border-[#E7E4DA] mb-8">
                  <h4 className="text-xs font-sans uppercase tracking-wider font-semibold text-[#08152F] mb-3">
                    Curated Signature Inclusions
                  </h4>
                  <ul className="space-y-2">
                    {journey.curatedExperiences.map((exp, eIdx) => (
                      <li
                        key={eIdx}
                        className="flex items-start space-x-2.5 text-xs text-[#687080] font-sans"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#9A5B2D] shrink-0 mt-0.5" />
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA */}
                <div>
                  <button
                    onClick={() => handleEnquire(journey)}
                    className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#08152F] hover:bg-[#9A5B2D] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-md group"
                  >
                    <span>Plan This Journey</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedJourneys;
