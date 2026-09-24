"use client";

import React from "react";
import Image from "next/image";
import { travelCategories, TravelCategory } from "@/data/travelCategories";
import { Compass, ArrowRight } from "lucide-react";

interface TravelCategoriesProps {
  onSelectCategory?: (categoryName: string) => void;
}

export const TravelCategories: React.FC<TravelCategoriesProps> = ({ onSelectCategory }) => {
  const handleCategoryClick = (category: TravelCategory) => {
    if (onSelectCategory) {
      onSelectCategory(category.title);
    }
    const plannerEl = document.getElementById("planner");
    if (plannerEl) {
      plannerEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="categories" className="py-24 sm:py-32 bg-[#F8F7F3] text-[#17213A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E7E4DA] pb-8 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-[#9A5B2D] text-xs font-sans font-semibold uppercase tracking-[0.25em] mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Tailored Travel Styles</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#08152F] tracking-tight leading-[1.1]">
              FIND YOUR JOURNEY
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#687080] font-sans font-light max-w-2xl leading-relaxed">
              Whether celebrating love, seeking untamed nature, or sharing multigenerational family milestones, we shape each escape around what matters to you.
            </p>
          </div>

          <p className="text-xs uppercase tracking-[0.2em] text-[#9A5B2D] font-sans font-medium">
            Curated Experiences
          </p>
        </div>
      </div>

      {/* Editorial Asymmetric Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {travelCategories.map((cat, idx) => {
            // Asymmetric cadence:
            // 0: 7 cols (Large hero on left)
            // 1: 5 cols (Complementary right)
            // 2: 5 cols
            // 3: 7 cols
            // 4: 6 cols
            // 5: 6 cols
            let colSpan = "col-span-12 md:col-span-6";
            let height = "h-[420px] sm:h-[460px]";

            if (idx === 0) {
              colSpan = "col-span-12 md:col-span-7";
              height = "h-[460px] sm:h-[520px]";
            } else if (idx === 1) {
              colSpan = "col-span-12 md:col-span-5";
              height = "h-[460px] sm:h-[520px]";
            } else if (idx === 2) {
              colSpan = "col-span-12 md:col-span-5";
              height = "h-[440px] sm:h-[480px]";
            } else if (idx === 3) {
              colSpan = "col-span-12 md:col-span-7";
              height = "h-[440px] sm:h-[480px]";
            }

            return (
              <div
                key={cat.id}
                onClick={() => handleCategoryClick(cat)}
                className={`${colSpan} ${height} relative group rounded-2xl overflow-hidden cursor-pointer bg-[#08152F] shadow-[0_8px_30px_rgba(8,21,47,0.06)]`}
              >
                {/* Background Image with Slow Zoom */}
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-90"
                />

                {/* Editorial Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08152F] via-[#08152F]/45 to-transparent transition-opacity duration-300" />

                {/* Badge Header */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                  <span className="text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white/90 border border-white/10">
                    {cat.badge}
                  </span>
                </div>

                {/* Content Stage */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 transform transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="w-8 h-[2px] bg-[#9A5B2D] mb-3 transition-all duration-500 group-hover:w-16" />

                  <h3 className="font-serif text-2xl sm:text-4xl text-white tracking-tight leading-tight">
                    {cat.title}
                  </h3>

                  <p className="mt-1 text-xs sm:text-sm text-[#D99767] font-sans font-light">
                    {cat.subtitle}
                  </p>

                  <p className="mt-2 text-xs sm:text-sm text-white/80 font-sans font-light line-clamp-2 leading-relaxed opacity-90 group-hover:opacity-100">
                    {cat.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-white/70 font-sans">
                    <span className="text-[11px] text-white/60">
                      e.g. {cat.suggestedDestinations.slice(0, 3).join(" • ")}
                    </span>
                    <span className="inline-flex items-center space-x-1 text-[#D99767] font-medium tracking-wide group-hover:translate-x-1 transition-transform">
                      <span>Explore Style</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TravelCategories;
