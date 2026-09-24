"use client";

import React from "react";
import { Sparkles, Compass, HeartHandshake, ShieldCheck, Feather } from "lucide-react";

export const WhyDarshDream: React.FC = () => {
  const principles = [
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
    <section className="py-28 sm:py-36 bg-[#F8F7F3] text-[#17213A] relative border-t border-[#E7E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-20 sm:mb-24">
          <div className="inline-flex items-center space-x-2 text-[#9A5B2D] text-xs font-sans font-semibold uppercase tracking-[0.25em] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Travel Philosophy</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#08152F] tracking-tight leading-[1.06]">
            TRAVEL WITH SOMEONE WHO CARES
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#687080] font-sans font-light leading-relaxed">
            In an era of automated booking engines and generic package mills, Darsh Dream Tours remains rooted in thoughtful human attention, boutique curation, and genuine personal care.
          </p>
        </div>

        {/* Editorial Timeline / Manifesto Presentation (Not 4 generic card blocks!) */}
        <div className="relative">
          {/* Subtle Horizontal Connecting Rule for Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-[#E7E4DA] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {principles.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.num} className="flex flex-col justify-between group">
                  <div>
                    {/* Number & Icon Marker */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 rounded-full bg-[#F8F7F3] border border-[#E7E4DA] flex items-center justify-center font-serif text-2xl text-[#9A5B2D] group-hover:border-[#9A5B2D] group-hover:bg-white transition-all shadow-sm">
                        {item.num}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#08152F] group-hover:text-[#9A5B2D] transition-colors border border-[#E7E4DA]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Headline */}
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#08152F] tracking-tight mb-2">
                      {item.title}
                    </h3>

                    {/* Tagline */}
                    <p className="font-serif italic text-sm text-[#9A5B2D] mb-4">
                      "{item.tagline}"
                    </p>

                    {/* Description */}
                    <p className="text-sm text-[#687080] font-sans font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Refined Copper Hairline */}
                  <div className="mt-8 pt-4">
                    <div className="w-8 h-[1.5px] bg-[#9A5B2D] transition-all duration-300 group-hover:w-16" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDarshDream;
