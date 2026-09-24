"use client";

import React, { useState } from "react";
import Image from "next/image";
import { travelCategories, TravelCategory } from "@/data/travelCategories";
import { Compass, ArrowRight, Sparkles } from "lucide-react";

interface TravelCategoriesProps {
  onSelectCategory?: (categoryName: string) => void;
}

export const TravelCategories: React.FC<TravelCategoriesProps> = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState<TravelCategory>(travelCategories[1]); // Honeymoon Journeys as default feature

  const handleCategoryClick = (category: TravelCategory) => {
    setSelectedCategory(category);
    if (onSelectCategory) {
      onSelectCategory(category.title);
    }
  };

  const handlePlanClick = (category: TravelCategory) => {
    if (onSelectCategory) {
      onSelectCategory(category.title);
    }
    const plannerEl = document.getElementById("planner");
    if (plannerEl) {
      plannerEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const otherCategories = travelCategories.filter((c) => c.id !== selectedCategory.id);

  return (
    <section id="categories" className="py-28 sm:py-36 bg-[#F8F7F3] text-[#17213A] relative border-t border-[#E7E4DA]">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E7E4DA] pb-10 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-[#9A5B2D] text-xs font-sans font-semibold uppercase tracking-[0.25em] mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Tailored Travel Styles</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#08152F] tracking-tight leading-[1.08]">
              FIND YOUR JOURNEY
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#687080] font-sans font-light max-w-2xl leading-relaxed">
              Every traveler's rhythm is unique. Whether celebrating love, seeking untamed nature, or sharing multigenerational family milestones, we shape each escape around what matters to you.
            </p>
          </div>

          <div className="text-xs uppercase tracking-[0.2em] text-[#9A5B2D] font-sans font-semibold self-start md:self-end">
            Bespoke Themes
          </div>
        </div>
      </div>

      {/* Editorial Composition */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dominant Feature Category Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-24 bg-white p-6 sm:p-10 rounded-3xl border border-[#E7E4DA] shadow-[0_12px_40px_rgba(8,21,47,0.04)]">
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md bg-[#08152F]">
              <Image
                src={selectedCategory.image}
                alt={selectedCategory.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
              />
              <div className="absolute top-5 left-5 z-10">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-white/95 text-[#08152F] font-semibold shadow-sm">
                  {selectedCategory.badge}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="w-10 h-[2px] bg-[#9A5B2D] mb-4" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#9A5B2D]">
              Featured Travel Style
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#08152F] tracking-tight mt-1 mb-3">
              {selectedCategory.title}
            </h3>
            <p className="font-serif italic text-base text-[#687080] mb-4">
              "{selectedCategory.subtitle}"
            </p>
            <p className="text-sm text-[#17213A]/80 font-sans font-light leading-relaxed mb-6">
              {selectedCategory.description}
            </p>

            <div className="mb-6 pt-4 border-t border-[#E7E4DA]">
              <span className="block text-[11px] uppercase tracking-wider text-[#687080] font-sans mb-1.5">
                Signature Focus:
              </span>
              <p className="text-xs font-sans text-[#08152F] font-medium">
                {selectedCategory.curatedFocus}
              </p>
              <div className="mt-3 flex items-center space-x-2 text-xs text-[#9A5B2D] font-sans">
                <Sparkles className="w-3.5 h-3.5" />
                <span>e.g. {selectedCategory.suggestedDestinations.join(" • ")}</span>
              </div>
            </div>

            <div>
              <button
                onClick={() => handlePlanClick(selectedCategory)}
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-[#08152F] hover:bg-[#9A5B2D] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md group"
              >
                <span>Plan This Journey Style</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Asymmetrical Supporting Travel Styles List */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-[#687080] font-sans font-semibold mb-8">
            Explore Other Travel Dimensions
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {otherCategories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => handleCategoryClick(cat)}
                className="group cursor-pointer flex flex-col p-4 rounded-2xl border border-[#E7E4DA] bg-white hover:border-[#9A5B2D]/40 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#08152F] mb-3">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <span className="text-[10px] font-sans uppercase tracking-widest text-[#9A5B2D] font-semibold mb-1">
                  {cat.badge}
                </span>

                <h5 className="font-serif text-xl text-[#08152F] group-hover:text-[#9A5B2D] transition-colors">
                  {cat.title}
                </h5>

                <p className="text-xs text-[#687080] font-sans font-light mt-1 line-clamp-2">
                  {cat.subtitle}
                </p>

                <div className="mt-3 pt-2 border-t border-[#E7E4DA] flex items-center justify-between text-[11px] text-[#08152F] font-sans group-hover:text-[#9A5B2D]">
                  <span>View Details</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelCategories;
