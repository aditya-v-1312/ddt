"use client";

import React from "react";
import { Sparkles, Quote } from "lucide-react";

export interface TestimonialItem {
  id: string;
  quote: string;
  traveler: string;
  destination: string;
  year?: string;
}

/**
 * Authentic Testimonials Architecture
 * STRICT COMPLIANCE: No fake reviews or fabricated statistics are shown.
 * When authentic traveler feedback is received, add them to `realTestimonials`
 * and set `ENABLE_TESTIMONIALS = true`.
 */
export const realTestimonials: TestimonialItem[] = [
  // Ready to receive verified traveler reviews from Sakshi's clients.
];

export const ENABLE_TESTIMONIALS = realTestimonials.length > 0;

export const Testimonials: React.FC = () => {
  if (!ENABLE_TESTIMONIALS) {
    return null; // Hidden until real reviews are available
  }

  return (
    <section className="py-24 sm:py-32 bg-[#F8F7F3] text-[#17213A] relative border-t border-[#E7E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-[#9A5B2D] text-xs font-sans font-semibold uppercase tracking-[0.25em] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Traveler Experiences</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#08152F] tracking-tight">
            WORDS FROM OUR GUESTS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {realTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl border border-[#E7E4DA] shadow-sm flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#9A5B2D]/40 mb-4" />
                <p className="font-serif italic text-base text-[#17213A]/90 leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-[#E7E4DA]">
                <p className="font-sans font-semibold text-sm text-[#08152F]">{item.traveler}</p>
                <p className="font-sans text-xs text-[#9A5B2D] uppercase tracking-wider">
                  Journey to {item.destination}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
