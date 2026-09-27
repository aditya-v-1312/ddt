"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import IntroAnimation from "@/components/IntroAnimation";
import VectorAirplane from "@/components/VectorAirplane";
import { getWhatsAppUrl } from "@/data/siteConfig";
import { travelImages } from "@/data/images";
import { ArrowDown, ArrowUpRight, MessageCircle } from "lucide-react";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [introKey, setIntroKey] = useState(0);

  const handleReplayIntro = () => {
    try {
      sessionStorage.removeItem("darsh_intro_seen");
    } catch {
      // ignore
    }
    setIntroKey((k) => k + 1);
    setShowIntro(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#101A2E]">
      {/* =========================================================
          01 — INTRO ANIMATION (SIGNATURE FLIGHT PATH)
      ========================================================= */}
      {showIntro && (
        <IntroAnimation
          key={introKey}
          onComplete={() => setShowIntro(false)}
        />
      )}

      <Navbar />

      {/* =========================================================
          02 — HERO
      ========================================================= */}
      <section
        id="top"
        className="relative min-h-screen overflow-hidden bg-[#101A2E]"
      >
        <div className="absolute inset-0">
          <Image
            src={travelImages.hero.url}
            alt={travelImages.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[#07101F]/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07101F]/85 via-[#07101F]/45 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#101A2E] to-transparent" />
        </div>

        <div className="absolute bottom-0 left-[7%] top-0 hidden w-px bg-white/10 lg:block" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] items-end px-5 pb-24 pt-32 sm:px-8 sm:pb-28 lg:px-12 lg:pb-32">
          <div className="grid w-full grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 xl:col-span-7">
              <div className="hero-reveal mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-[#B87543]" />
                <span className="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-white/70">
                  Darsh Dream Tours · Vadodara
                </span>
              </div>

              <h1 className="hero-reveal-delay-1 max-w-5xl font-serif text-[clamp(3.8rem,8.5vw,8.5rem)] font-light leading-[0.84] tracking-[-0.04em] text-white">
                Your journey.
                <br />
                <span className="italic text-[#E2B18D]">Your dream.</span>
                <br />
                Your world.
              </h1>

              <p className="hero-reveal-delay-2 mt-8 max-w-xl font-sans text-sm font-light leading-7 text-white/75 sm:text-base">
                Curated journeys, unforgettable experiences, and travel planned around you.
              </p>

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

        <div className="absolute bottom-7 left-5 right-5 z-10 flex items-center justify-between sm:left-8 sm:right-8 lg:left-12 lg:right-12">
          <div className="font-sans text-[9px] uppercase tracking-[0.25em] text-white/40">
            Vadodara · India
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

      {/* =========================================================
          03 — EXPLORE THE WORLD
      ========================================================= */}
      <section
        id="destinations"
        className="bg-[#F7F5F0] px-5 py-28 sm:px-8 sm:py-36 lg:px-12"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-5">Where could you go?</p>

              <h2 className="display-heading text-6xl text-[#101A2E] sm:text-7xl lg:text-[7rem]">
                Explore
                <br />
                <span className="italic text-[#B87543]">the world.</span>
              </h2>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <p className="max-w-md font-sans text-sm leading-7 text-[#697181] sm:text-base">
                From unforgettable Indian escapes to journeys across the globe,
                start with a place and let us help you shape the rest.
              </p>
            </div>
          </div>

          {/* Destination collage */}
          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
            {/* Dubai */}
            <a
              href="/destinations"
              className="group relative overflow-hidden sm:col-span-2 lg:col-span-6"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={travelImages.dubai.url}
                  alt={travelImages.dubai.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07101F]/80 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-7 sm:p-9">
                  <div>
                    <p className="mb-2 font-sans text-[9px] uppercase tracking-[0.28em] text-white/60">
                      United Arab Emirates
                    </p>

                    <h3 className="font-serif text-5xl font-light text-white sm:text-6xl">
                      Dubai
                    </h3>
                  </div>

                  <span className="hidden h-12 w-12 items-center justify-center border border-white/30 text-white transition-all duration-300 group-hover:border-[#E2B18D] group-hover:bg-[#E2B18D] group-hover:text-[#101A2E] sm:flex">
                    ↗
                  </span>
                </div>
              </div>
            </a>

            {/* Kashmir */}
            <a
              href="/destinations"
              className="group relative overflow-hidden lg:col-span-3"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={travelImages.kashmir.url}
                  alt={travelImages.kashmir.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07101F]/80 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="mb-2 font-sans text-[9px] uppercase tracking-[0.28em] text-white/60">
                    India
                  </p>

                  <h3 className="font-serif text-4xl font-light text-white sm:text-5xl">
                    Kashmir
                  </h3>
                </div>
              </div>
            </a>

            {/* Switzerland */}
            <a
              href="/destinations"
              className="group relative overflow-hidden lg:col-span-3"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={travelImages.switzerland.url}
                  alt={travelImages.switzerland.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07101F]/80 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="mb-2 font-sans text-[9px] uppercase tracking-[0.28em] text-white/60">
                    Europe
                  </p>

                  <h3 className="font-serif text-4xl font-light text-white sm:text-5xl">
                    Switzerland
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div className="mt-10 flex flex-col gap-5 border-t border-[#101A2E]/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#697181]">
              India · Middle East · Europe · Asia · Indian Ocean
            </p>

            <a
              href="/destinations"
              className="group flex w-fit items-center gap-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#101A2E]"
            >
              Explore all destinations
              <span className="h-px w-8 bg-[#B87543] transition-all duration-300 group-hover:w-14" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          04 — TRAVEL YOUR WAY
      ========================================================= */}
      <section
        id="experiences"
        className="bg-[#F7F5F0] px-5 pb-28 pt-8 sm:px-8 sm:pb-36 lg:px-12"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Heading */}
            <div className="lg:col-span-6">
              <p className="eyebrow mb-5">Travel your way</p>

              <h2 className="display-heading text-6xl text-[#101A2E] sm:text-7xl lg:text-[7rem]">
                Every journey
                <br />
                <span className="italic text-[#B87543]">is different.</span>
              </h2>
            </div>

            {/* Intro */}
            <div className="flex items-end lg:col-span-5 lg:col-start-8">
              <div>
                <p className="max-w-md font-sans text-sm leading-7 text-[#697181] sm:text-base">
                  A family holiday, a romantic escape, a trip with friends or
                  something completely your own. We start with the way you want
                  to travel.
                </p>

                <a
                  href="/experiences"
                  className="group mt-7 flex w-fit items-center gap-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#101A2E]"
                >
                  Explore experiences
                  <span className="h-px w-8 bg-[#B87543] transition-all duration-300 group-hover:w-14" />
                </a>
              </div>
            </div>
          </div>

          {/* Experience categories */}
          <div className="mt-20 border-t border-[#101A2E]/10">
            {/* Family */}
            <a
              href="/experiences"
              className="group grid grid-cols-12 items-center border-b border-[#101A2E]/10 py-8 transition-all duration-500 hover:px-3 sm:py-10"
            >
              <div className="col-span-2 sm:col-span-1">
                <span className="font-sans text-[10px] tracking-[0.2em] text-[#B87543]">
                  01
                </span>
              </div>

              <div className="col-span-8 sm:col-span-9">
                <h3 className="font-serif text-4xl font-light sm:text-5xl lg:text-6xl">
                  Family Escapes
                </h3>
              </div>

              <div className="col-span-2 flex justify-end">
                <span className="flex h-10 w-10 items-center justify-center border border-[#101A2E]/15 text-[#101A2E]/50 transition-all duration-300 group-hover:border-[#B87543] group-hover:bg-[#B87543] group-hover:text-white">
                  ↗
                </span>
              </div>
            </a>

            {/* Couples */}
            <a
              href="/experiences"
              className="group grid grid-cols-12 items-center border-b border-[#101A2E]/10 py-8 transition-all duration-500 hover:px-3 sm:py-10"
            >
              <div className="col-span-2 sm:col-span-1">
                <span className="font-sans text-[10px] tracking-[0.2em] text-[#B87543]">
                  02
                </span>
              </div>

              <div className="col-span-8 sm:col-span-9">
                <h3 className="font-serif text-4xl font-light sm:text-5xl lg:text-6xl">
                  Romantic Getaways
                </h3>
              </div>

              <div className="col-span-2 flex justify-end">
                <span className="flex h-10 w-10 items-center justify-center border border-[#101A2E]/15 text-[#101A2E]/50 transition-all duration-300 group-hover:border-[#B87543] group-hover:bg-[#B87543] group-hover:text-white">
                  ↗
                </span>
              </div>
            </a>

            {/* Groups */}
            <a
              href="/experiences"
              className="group grid grid-cols-12 items-center border-b border-[#101A2E]/10 py-8 transition-all duration-500 hover:px-3 sm:py-10"
            >
              <div className="col-span-2 sm:col-span-1">
                <span className="font-sans text-[10px] tracking-[0.2em] text-[#B87543]">
                  03
                </span>
              </div>

              <div className="col-span-8 sm:col-span-9">
                <h3 className="font-serif text-4xl font-light sm:text-5xl lg:text-6xl">
                  Group Adventures
                </h3>
              </div>

              <div className="col-span-2 flex justify-end">
                <span className="flex h-10 w-10 items-center justify-center border border-[#101A2E]/15 text-[#101A2E]/50 transition-all duration-300 group-hover:border-[#B87543] group-hover:bg-[#B87543] group-hover:text-white">
                  ↗
                </span>
              </div>
            </a>

            {/* International */}
            <a
              href="/experiences"
              className="group grid grid-cols-12 items-center border-b border-[#101A2E]/10 py-8 transition-all duration-500 hover:px-3 sm:py-10"
            >
              <div className="col-span-2 sm:col-span-1">
                <span className="font-sans text-[10px] tracking-[0.2em] text-[#B87543]">
                  04
                </span>
              </div>

              <div className="col-span-8 sm:col-span-9">
                <h3 className="font-serif text-4xl font-light sm:text-5xl lg:text-6xl">
                  First-Time Abroad
                </h3>
              </div>

              <div className="col-span-2 flex justify-end">
                <span className="flex h-10 w-10 items-center justify-center border border-[#101A2E]/15 text-[#101A2E]/50 transition-all duration-300 group-hover:border-[#B87543] group-hover:bg-[#B87543] group-hover:text-white">
                  ↗
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          05 — FEATURED JOURNEYS (EDITORIAL MAGAZINE SPREADS)
      ========================================================= */}
      <section
        id="featured"
        className="bg-white px-5 py-28 sm:px-8 sm:py-36 lg:px-12 border-t border-[#101A2E]/10"
      >
        <div className="mx-auto max-w-[1440px]">
          {/* Header */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end mb-20 sm:mb-28">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-5">Imagine yourself there</p>
              <h2 className="display-heading text-6xl text-[#101A2E] sm:text-7xl lg:text-[7rem]">
                Featured
                <br />
                <span className="italic text-[#B87543]">journeys.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="max-w-md font-sans text-sm leading-7 text-[#697181] sm:text-base">
                Three distinct destinations, each offering a different sense of pace, landscape, and discovery. Tailored completely to your dates and preferences.
              </p>
            </div>
          </div>

          {/* Magazine Spreads */}
          <div className="space-y-28 sm:space-y-36">
            {/* Spread 1: DUBAI */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#07101F]">
                  <Image
                    src={travelImages.dubai.url}
                    alt={travelImages.dubai.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 px-3.5 py-1.5 font-sans text-[9px] font-semibold uppercase tracking-[0.25em] text-[#101A2E]">
                    United Arab Emirates
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center">
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#B87543]">
                  01 · City & Desert
                </span>
                <h3 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl text-[#101A2E] font-light">
                  Dubai
                </h3>
                <p className="mt-3 font-serif italic text-xl sm:text-2xl text-[#697181]">
                  A modern city framed by desert.
                </p>
                <p className="mt-6 font-sans text-sm font-light leading-7 text-[#697181]">
                  An energetic city escape where modern skylines meet Arabian landscapes. Experience private desert safaris under quiet twilight skies, world-renowned architecture along the Marina, and seamless luxury from arrival to departure.
                </p>

                <div className="mt-8 flex items-center gap-6">
                  <a
                    href="/plan?destination=Dubai"
                    className="group inline-flex items-center gap-3 bg-[#101A2E] px-7 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#B87543]"
                  >
                    <span>Discover Journey</span>
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <a
                    href={getWhatsAppUrl("Hello Darsh Dream Tours, I would like to enquire about travelling to Dubai.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#101A2E] hover:text-[#B87543] transition-colors"
                  >
                    Quick Enquiry →
                  </a>
                </div>
              </div>
            </div>

            {/* Spread 2: KASHMIR (Reversed) */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 lg:order-2">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#07101F]">
                  <Image
                    src={travelImages.kashmir.url}
                    alt={travelImages.kashmir.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 px-3.5 py-1.5 font-sans text-[9px] font-semibold uppercase tracking-[0.25em] text-[#101A2E]">
                    India
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 lg:order-1 flex flex-col justify-center">
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#B87543]">
                  02 · Himalayan Solitude
                </span>
                <h3 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl text-[#101A2E] font-light">
                  Kashmir
                </h3>
                <p className="mt-3 font-serif italic text-xl sm:text-2xl text-[#697181]">
                  Quiet waters. Mountain air.
                </p>
                <p className="mt-6 font-sans text-sm font-light leading-7 text-[#697181]">
                  Untouched pine valleys, wooden shikaras gliding across the silent morning waters of Dal Lake, and snow-capped Himalayan peaks framing every horizon. An unhurried journey through India's most poetic landscape.
                </p>

                <div className="mt-8 flex items-center gap-6">
                  <a
                    href="/plan?destination=Kashmir"
                    className="group inline-flex items-center gap-3 bg-[#101A2E] px-7 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#B87543]"
                  >
                    <span>Discover Journey</span>
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <a
                    href={getWhatsAppUrl("Hello Darsh Dream Tours, I would like to enquire about travelling to Kashmir.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#101A2E] hover:text-[#B87543] transition-colors"
                  >
                    Quick Enquiry →
                  </a>
                </div>
              </div>
            </div>

            {/* Spread 3: MALDIVES */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#07101F]">
                  <Image
                    src={travelImages.maldives.url}
                    alt={travelImages.maldives.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 px-3.5 py-1.5 font-sans text-[9px] font-semibold uppercase tracking-[0.25em] text-[#101A2E]">
                    Indian Ocean
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center">
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#B87543]">
                  03 · Island Sanctuary
                </span>
                <h3 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl text-[#101A2E] font-light">
                  Maldives
                </h3>
                <p className="mt-3 font-serif italic text-xl sm:text-2xl text-[#697181]">
                  Slow days. Clear horizons.
                </p>
                <p className="mt-6 font-sans text-sm font-light leading-7 text-[#697181]">
                  Private wooden villas resting gently over crystalline lagoons, morning swims in transparent waters, warm sea breezes, and the sublime freedom of leaving every routine behind.
                </p>

                <div className="mt-8 flex items-center gap-6">
                  <a
                    href="/plan?destination=Maldives"
                    className="group inline-flex items-center gap-3 bg-[#101A2E] px-7 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#B87543]"
                  >
                    <span>Discover Journey</span>
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <a
                    href={getWhatsAppUrl("Hello Darsh Dream Tours, I would like to enquire about travelling to Maldives.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#101A2E] hover:text-[#B87543] transition-colors"
                  >
                    Quick Enquiry →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          06 — QUIET EDITORIAL STATEMENT (SECTION 21)
      ========================================================= */}
      <section className="bg-[#F7F5F0] px-5 py-32 sm:px-8 sm:py-44 lg:px-12 border-t border-[#101A2E]/10">
        <div className="mx-auto max-w-[1100px] text-center">
          <div className="mx-auto mb-10 h-px w-16 bg-[#B87543]" />

          <blockquote className="font-serif text-[clamp(2.4rem,5.2vw,5.5rem)] font-light leading-[1.08] tracking-[-0.035em] text-[#101A2E]">
            "Travel isn't about
            <br className="hidden sm:inline" />
            {" "}how many places you visit.
            <br />
            It's about the places{" "}
            <span className="italic text-[#B87543]">you remember.</span>"
          </blockquote>

          <p className="mt-10 font-sans text-[10px] uppercase tracking-[0.28em] text-[#697181]">
            Darsh Dream Tours · Vadodara
          </p>
        </div>
      </section>

      {/* =========================================================
          07 — WHY DARSH DREAM (TRAVEL, THOUGHTFULLY PLANNED)
      ========================================================= */}
      <section className="bg-[#101A2E] px-5 py-28 text-white sm:px-8 sm:py-36 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-5 !text-[#E2B18D]">
                How we plan it
              </p>

              <h2 className="display-heading text-6xl sm:text-7xl lg:text-[6.5rem]">
                Travel,
                <br />
                <span className="italic text-[#E2B18D]">thoughtfully planned.</span>
              </h2>

              <p className="mt-8 max-w-md font-sans text-sm leading-7 text-white/50 sm:text-base">
                Less searching. More travelling. A bespoke approach built around real conversations, not automated templates.
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="border-t border-white/10">
                {/* 01 PERSONALIZED */}
                <div className="grid grid-cols-12 gap-5 border-b border-white/10 py-8 sm:py-10">
                  <div className="col-span-2">
                    <span className="font-sans text-[10px] tracking-[0.2em] text-[#B87543]">
                      01
                    </span>
                  </div>

                  <div className="col-span-10">
                    <h3 className="font-serif text-3xl font-light sm:text-4xl uppercase tracking-wide">
                      Personalized
                    </h3>

                    <p className="mt-3 max-w-lg font-sans text-sm leading-6 text-white/50">
                      Every itinerary is shaped around your dates, pace, and travelling style—never forced into a rigid template.
                    </p>
                  </div>
                </div>

                {/* 02 GUIDED */}
                <div className="grid grid-cols-12 gap-5 border-b border-white/10 py-8 sm:py-10">
                  <div className="col-span-2">
                    <span className="font-sans text-[10px] tracking-[0.2em] text-[#B87543]">
                      02
                    </span>
                  </div>

                  <div className="col-span-10">
                    <h3 className="font-serif text-3xl font-light sm:text-4xl uppercase tracking-wide">
                      Guided
                    </h3>

                    <p className="mt-3 max-w-lg font-sans text-sm leading-6 text-white/50">
                      Thoughtful advice from real people who listen carefully and help you choose the right destinations and stays.
                    </p>
                  </div>
                </div>

                {/* 03 SEAMLESS */}
                <div className="grid grid-cols-12 gap-5 border-b border-white/10 py-8 sm:py-10">
                  <div className="col-span-2">
                    <span className="font-sans text-[10px] tracking-[0.2em] text-[#B87543]">
                      03
                    </span>
                  </div>

                  <div className="col-span-10">
                    <h3 className="font-serif text-3xl font-light sm:text-4xl uppercase tracking-wide">
                      Seamless
                    </h3>

                    <p className="mt-3 max-w-lg font-sans text-sm leading-6 text-white/50">
                      From flights and stays to on-ground transitions, every detail is orchestrated so you simply enjoy the journey.
                    </p>
                  </div>
                </div>

                {/* 04 MEMORABLE */}
                <div className="grid grid-cols-12 gap-5 border-b border-white/10 py-8 sm:py-10">
                  <div className="col-span-2">
                    <span className="font-sans text-[10px] tracking-[0.2em] text-[#B87543]">
                      04
                    </span>
                  </div>

                  <div className="col-span-10">
                    <h3 className="font-serif text-3xl font-light sm:text-4xl uppercase tracking-wide">
                      Memorable
                    </h3>

                    <p className="mt-3 max-w-lg font-sans text-sm leading-6 text-white/50">
                      Experiences that linger long after you return home—moments crafted to feel truly and distinctly yours.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="/plan"
                className="group mt-10 flex w-fit items-center gap-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white"
              >
                Plan With Us
                <span className="h-px w-8 bg-[#B87543] transition-all duration-300 group-hover:w-14" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          08 — MEET SAKSHI (SECTION 23)
      ========================================================= */}
      <section
        id="about"
        className="bg-[#F7F5F0] px-5 py-28 sm:px-8 sm:py-36 lg:px-12"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#E8E3DA]">
                <Image
                  src={travelImages.aboutSakshi.url}
                  alt={travelImages.aboutSakshi.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-4 flex items-center justify-between font-sans text-[10px] uppercase tracking-[0.2em] text-[#697181]">
                <span>Darsh Dream Tours</span>
                <span>Vadodara, Gujarat</span>
              </div>
            </div>

            <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
              <p className="eyebrow mb-4">Meet the person behind the journey</p>

              <h2 className="display-heading text-5xl sm:text-6xl lg:text-[5.5rem] text-[#101A2E] mb-2">
                Sakshi Chandiramani
              </h2>

              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-[#B87543] mb-8">
                Partner · Darsh Dream Tours
              </p>

              <blockquote className="border-l-2 border-[#B87543] pl-6 my-4">
                <p className="font-serif italic text-2xl sm:text-3xl text-[#101A2E] leading-snug">
                  "Every journey begins with understanding the person taking it. Tell us where you want to go, how you want to travel, and what you want the journey to feel like."
                </p>
              </blockquote>

              <p className="mt-6 max-w-xl font-sans text-sm leading-7 text-[#697181] sm:text-base">
                At Darsh Dream Tours, we believe travel shouldn't feel like navigating automated booking engines. Based in Vadodara, Gujarat, we assist travellers with personalized itineraries, genuine care, and reliable arrangements across India and international destinations.
              </p>

              <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
                <a
                  href={getWhatsAppUrl("Hello Sakshi, I would like to talk with you about planning a journey.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-[#101A2E] px-7 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#B87543]"
                >
                  <MessageCircle size={15} />
                  <span>Talk to Sakshi</span>
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="/about"
                  className="group flex w-fit items-center gap-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#101A2E] hover:text-[#B87543] transition-colors"
                >
                  Our boutique story
                  <span className="h-px w-8 bg-[#B87543] transition-all duration-300 group-hover:w-14" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          09 — FINAL CTA (SECTION 27)
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#07101F] px-5 py-28 text-white sm:px-8 sm:py-36 lg:px-12">
        {/* Subtle decorative circles */}
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#B87543]/15 pointer-events-none" />
        <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full border border-[#B87543]/10 pointer-events-none" />

        {/* Subtle curved flight line with Vector Airplane in background */}
        <div className="pointer-events-none absolute inset-0 hidden sm:block overflow-hidden opacity-25">
          <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
            <path
              d="M -100 480 C 400 450, 700 320, 1100 180 C 1300 110, 1400 90, 1550 80"
              stroke="#B87543"
              strokeWidth="1.5"
              strokeDasharray="6 8"
            />
          </svg>
          <div className="absolute right-[18%] top-[24%] -translate-y-1/2">
            <VectorAirplane size={32} color="#E2B18D" />
          </div>
        </div>

        <div className="relative mx-auto max-w-[1440px]">
          <div className="max-w-4xl">
            <p className="eyebrow mb-6 !text-[#E2B18D]">
              Your journey starts here
            </p>

            <h2 className="display-heading text-6xl sm:text-7xl lg:text-[7.5rem]">
              Your next adventure
              <br />
              <span className="italic text-[#E2B18D]">starts here.</span>
            </h2>

            <p className="mt-8 max-w-lg font-sans text-sm leading-7 text-white/60 sm:text-base">
              Tell us where you're dreaming of going. Let's shape something unforgettable together.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="/plan"
                className="group inline-flex items-center justify-center gap-4 bg-[#E2B18D] px-8 py-5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#07101F] transition-all duration-300 hover:bg-white"
              >
                Plan My Journey
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href={getWhatsAppUrl("Hello Darsh Dream Tours, I would like to plan a journey.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 border border-white/25 px-8 py-5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-[#E2B18D] hover:text-[#E2B18D]"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <p className="mt-8 font-sans text-[10px] uppercase tracking-[0.18em] text-white/35">
              Direct Contact: +91 97243 91674 · Vadodara, Gujarat
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          10 — FOOTER
      ========================================================= */}
      <footer className="bg-[#07101F] px-5 pb-10 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px] border-t border-white/10 pt-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            {/* Brand */}
            <div className="md:col-span-5">
              <div className="relative h-[55px] w-[165px] bg-white">
                <Image
                  src="/images/logo.jpg"
                  alt="Darsh Dream Tours"
                  fill
                  sizes="165px"
                  className="object-contain"
                />
              </div>

              <p className="mt-5 max-w-sm font-sans text-xs leading-6 text-white/40">
                Thoughtfully planned journeys across India and beyond. Personal planning by Sakshi Chandiramani in Vadodara, Gujarat.
              </p>

              {/* Replay Intro Trigger */}
              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleReplayIntro}
                  className="group inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-[#E2B18D]"
                >
                  <span>Replay Journey Intro</span>
                  <span className="transition-transform group-hover:rotate-180 duration-500 text-[#E2B18D]">
                    ↺
                  </span>
                </button>
              </div>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3">
              <p className="mb-5 font-sans text-[9px] uppercase tracking-[0.2em] text-white/30">
                Explore
              </p>

              <nav className="flex flex-col gap-3 font-sans text-xs">
                <a
                  href="/destinations"
                  className="w-fit text-white/60 transition-colors hover:text-white"
                >
                  Destinations
                </a>

                <a
                  href="/experiences"
                  className="w-fit text-white/60 transition-colors hover:text-white"
                >
                  Experiences
                </a>

                <a
                  href="/about"
                  className="w-fit text-white/60 transition-colors hover:text-white"
                >
                  About Sakshi
                </a>

                <a
                  href="/plan"
                  className="w-fit text-white/60 transition-colors hover:text-white"
                >
                  Plan Your Journey
                </a>
              </nav>
            </div>

            {/* Contact */}
            <div className="md:col-span-4">
              <p className="mb-5 font-sans text-[9px] uppercase tracking-[0.2em] text-white/30">
                Contact & Address
              </p>

              <div className="space-y-3 font-sans text-xs leading-5 text-white/60">
                <p className="text-white/80 font-medium">Sakshi Chandiramani</p>
                <p>+91 97243 91674</p>
                <p>sakshi@darshdreamtours.com</p>
                <p className="text-white/40 text-[11px] leading-relaxed">
                  SFI Sun Complex, 1 Abhishek Colony,
                  <br />
                  Gotri Road, Race Course,
                  <br />
                  Vadodara 390007, Gujarat
                </p>
              </div>

              <a
                href={getWhatsAppUrl("Hello Darsh Dream Tours, I would like to enquire about a trip.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-3 border border-white/15 px-5 py-3 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-white transition-all hover:border-[#E2B18D] hover:text-[#E2B18D]"
              >
                WhatsApp Us
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between font-sans text-[9px] uppercase tracking-[0.16em]">
            <p className="text-white/30">
              © {new Date().getFullYear()} Darsh Dream Tours. All rights reserved.
            </p>

            <p className="text-white/20">
              Vadodara · India & Worldwide
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </main>
  );
}
