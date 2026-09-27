"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { travelImages } from "@/data/images";
import { getWhatsAppUrl } from "@/data/siteConfig";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#101A2E]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={travelImages.hero.url}
          alt={travelImages.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-[#07101F]/55" />

        {/* Subtle directional gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07101F]/85 via-[#07101F]/45 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#101A2E] to-transparent" />
      </div>

      {/* Decorative vertical line */}
      <div className="absolute bottom-0 left-[7%] top-0 hidden w-px bg-white/10 lg:block" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] items-end px-5 pb-24 pt-32 sm:px-8 sm:pb-28 lg:px-12 lg:pb-32">
        <div className="grid w-full grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8 xl:col-span-7">
            {/* Eyebrow */}
            <div className="hero-reveal mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-[#B87543]" />

              <span className="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-white/70">
                Darsh Dream Tours · Vadodara
              </span>
            </div>

            {/* Main heading */}
            <h1 className="hero-reveal-delay-1 max-w-5xl font-serif text-[clamp(3.8rem,8.5vw,8.5rem)] font-light leading-[0.84] tracking-[-0.04em] text-white">
              Your journey.
              <br />
              <span className="italic text-[#E2B18D]">Your dream.</span>
              <br />
              Your world.
            </h1>

            {/* Supporting copy */}
            <p className="hero-reveal-delay-2 mt-8 max-w-xl font-sans text-sm font-light leading-7 text-white/75 sm:text-base">
              Curated journeys, unforgettable experiences, and travel planned around you.
            </p>

            {/* Actions */}
            <div className="hero-reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#destinations"
                className="group inline-flex w-fit items-center gap-4 bg-white px-7 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#101A2E] transition-all duration-300 hover:bg-[#E2B18D]"
              >
                Explore Destinations
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="/plan"
                className="group inline-flex w-fit items-center gap-3 px-6 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:text-[#E2B18D]"
              >
                Plan My Journey
                <span className="h-px w-8 bg-white/50 transition-all duration-300 group-hover:w-12 group-hover:bg-[#E2B18D]" />
              </a>
            </div>
          </div>

          {/* Right-side information */}
          <div className="mt-16 hidden lg:col-span-4 lg:mt-0 lg:flex lg:items-end lg:justify-end">
            <div className="max-w-[210px] border-l border-white/20 pl-6">
              <p className="font-serif text-2xl font-light italic leading-tight text-white/90">
                Travel should feel like yours.
              </p>

              <p className="mt-4 font-sans text-[10px] uppercase leading-5 tracking-[0.16em] text-white/45">
                India
                <br />
                International
                <br />
                Personal planning
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom metadata */}
      <div className="absolute bottom-7 left-5 right-5 z-10 flex items-center justify-between sm:left-8 sm:right-8 lg:left-12 lg:right-12">
        <div className="font-sans text-[9px] uppercase tracking-[0.25em] text-white/40">
          22.3072° N · 73.1812° E
        </div>

        <a
          href="#destinations"
          className="group flex items-center gap-3 font-sans text-[9px] uppercase tracking-[0.25em] text-white/50"
        >
          Scroll to explore
          <span className="flex h-8 w-8 items-center justify-center border border-white/20 transition-colors group-hover:border-[#E2B18D]">
            <ArrowDown
              size={13}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </span>
        </a>
      </div>
    </section>
  );
}
