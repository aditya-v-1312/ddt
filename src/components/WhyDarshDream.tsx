"use client";

import React from "react";
import { Compass, HeartHandshake, ShieldCheck, Sparkles, Feather } from "lucide-react";

export const WhyDarshDream: React.FC = () => {
  const pillars = [
    {
      num: "01",
      title: "PERSONALIZED ITINERARIES",
      tagline: "Trips shaped around your travel style.",
      desc: "No rigid templates or pre-packaged tours. We listen to how you like to wake up, how you enjoy exploring, and what pace feels restorative to you.",
      icon: Compass,
    },
    {
      num: "02",
      title: "END-TO-END ASSISTANCE",
      tagline: "Support throughout the planning process.",
      desc: "From initial route curation and stay selection to pre-departure details, you have a direct human partner ensuring complete peace of mind.",
      icon: HeartHandshake,
    },
    {
      num: "03",
      title: "TRAVEL GUIDANCE",
      tagline: "Helping you plan with clarity and confidence.",
      desc: "Clear advice on seasonal nuances, flight connections, transit ease, and local cultural norms so every decision feels informed and effortless.",
      icon: ShieldCheck,
    },
    {
      num: "04",
      title: "MEMORIES OVER CHECKLISTS",
      tagline: "Travel designed around experiences.",
      desc: "We prioritize moments that stay with you long after returning home — a quiet sunset over an ancient valley, a spontaneous meal, an unhurried morning.",
      icon: Feather,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F8F7F3] text-[#17213A] relative border-t border-[#E7E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-[#9A5B2D] text-xs font-sans font-semibold uppercase tracking-[0.25em] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Travel Philosophy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#08152F] tracking-tight leading-[1.1]">
            TRAVEL WITH SOMEONE WHO CARES
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#687080] font-sans font-light leading-relaxed">
            In an era of automated booking engines and generic package mills, Darsh Dream Tours remains rooted in thoughtful human attention and personal care.
          </p>
        </div>

        {/* 4 Pillars Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="group relative bg-white p-8 rounded-2xl border border-[#E7E4DA] hover:border-[#9A5B2D]/40 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Number & Icon Header */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E7E4DA]">
                    <span className="font-serif text-2xl text-[#9A5B2D] font-light">
                      {pillar.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#F8F7F3] flex items-center justify-center text-[#08152F] group-hover:bg-[#9A5B2D] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#08152F] tracking-tight mb-2">
                    {pillar.title}
                  </h3>

                  <p className="font-serif italic text-sm text-[#9A5B2D] mb-4">
                    {pillar.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#687080] font-sans font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E7E4DA]/60">
                  <div className="w-6 h-[1.5px] bg-[#9A5B2D] group-hover:w-12 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyDarshDream;
