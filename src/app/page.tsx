"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import IntroAnimation from "@/components/IntroAnimation";
import VectorAirplane from "@/components/VectorAirplane";
import GoogleReviews from "@/components/GoogleReviews";
import GoogleTrustBadge from "@/components/GoogleTrustBadge";
import { getWhatsAppUrl, siteConfig } from "@/data/siteConfig";
import { travelImages } from "@/data/images";
import { ArrowDown, ArrowUpRight, MessageCircle, Sparkles, MapPin, Compass, ShieldCheck } from "lucide-react";

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
    <main className="min-h-screen bg-[#F7F5F0] text-[#101A2E] selection:bg-[#B87543] selection:text-white">
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
          02 — SLEEK CINEMATIC HERO
      ========================================================= */}
      <section
        id="top"
        className="relative min-h-[100svh] overflow-hidden bg-[#07101F]"
      >
        {/* Background Visual with Multi-Layered Gradients */}
        <div className="absolute inset-0">
          <Image
            src={travelImages.hero.url}
            alt={travelImages.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-[1.02] transition-transform duration-[2000ms]"
          />

          {/* Vignette and Atmospheric Lighting */}
          <div className="absolute inset-0 bg-[#07101F]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07101F]/90 via-[#07101F]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07101F] via-transparent to-[#07101F]/40" />
          <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#B87543]/15 blur-[120px] pointer-events-none" />
        </div>

        {/* Vertical Architectural Line */}
        <div className="absolute bottom-0 left-[6%] top-0 hidden w-px bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />

        {/* Content Container */}
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-end px-5 pb-24 pt-36 sm:px-8 sm:pb-28 lg:px-12 lg:pb-28">
          <div className="grid w-full grid-cols-1 items-end lg:grid-cols-12 lg:gap-12">
            {/* Hero Left Column */}
            <div className="lg:col-span-8 xl:col-span-8">
              {/* Eyebrow with pulsating indicator */}
              <div className="hero-reveal mb-6 flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E2B18D] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B87543]"></span>
                  </span>
                  <span className="font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-[#E2B18D]">
                    Boutique Travel Agency · Vadodara
                  </span>
                </span>
              </div>

              {/* Main Display Headline */}
              <h1 className="hero-reveal-delay-1 max-w-5xl font-serif text-[clamp(3.6rem,7.8vw,8.5rem)] font-light leading-[0.88] tracking-[-0.035em] text-white">
                Your journey.
                <br />
                <span className="italic font-normal text-[#E2B18D] drop-shadow-sm">
                  Your dream.
                </span>
                <br />
                Your world.
              </h1>

              {/* Subtitle */}
              <p className="hero-reveal-delay-2 mt-8 max-w-xl font-sans text-sm sm:text-base font-light leading-7 text-white/75">
                Curated journeys, unforgettable moments, and personalized travel
                crafted around you by Sakshi Chandiramani.
              </p>

              {/* Dual Action Buttons */}
              <div className="hero-reveal-delay-3 mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#destinations"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#07101F] shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:bg-[#E2B18D] hover:shadow-[0_6px_25px_rgba(226,177,141,0.3)] hover:scale-[1.02]"
                >
                  <span>Explore Destinations</span>
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <Link
                  href="/plan"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/[0.04] px-7 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/10"
                >
                  <span>Plan With Sakshi</span>
                  <span className="h-px w-6 bg-white/40 transition-all duration-300 group-hover:w-10 group-hover:bg-[#E2B18D]" />
                </Link>
              </div>
            </div>

            {/* Hero Right Column: Floating Curated Credentials Box */}
            <div className="mt-14 hidden lg:col-span-4 lg:mt-0 lg:flex lg:flex-col lg:items-end">
              <div className="w-full max-w-[280px] rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#E2B18D]">
                    Bespoke Curation
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-[#E2B18D]" />
                </div>

                <div className="py-4 space-y-3">
                  <div className="flex items-start gap-2.5">
                    <Compass className="w-4 h-4 text-[#B87543] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-sans text-xs text-white font-medium">
                        Custom Itineraries
                      </p>
                      <p className="font-sans text-[10px] text-white/50">
                        Never automated or rigid
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#B87543] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-sans text-xs text-white font-medium">
                        Direct Partner Care
                      </p>
                      <p className="font-sans text-[10px] text-white/50">
                        Sakshi Chandiramani
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-white/40">
                    Vadodara · Domestic & International
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Status Ribbon */}
        <div className="absolute bottom-6 left-5 right-5 z-10 flex items-center justify-between sm:left-8 sm:right-8 lg:left-12 lg:right-12">
          <div className="flex items-center gap-3 text-[10px] font-sans uppercase tracking-[0.25em] text-white/40">
            <MapPin size={12} className="text-[#B87543]" />
            <span>Vadodara · Gujarat · Worldwide</span>
          </div>

          <a
            href="#destinations"
            className="group flex items-center gap-2.5 font-sans text-[10px] uppercase tracking-[0.25em] text-white/50 transition-colors hover:text-white"
          >
            <span className="hidden sm:inline">Explore Journeys</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[#E2B18D] group-hover:bg-[#E2B18D]/10">
              <ArrowDown
                size={12}
                className="transition-transform duration-300 group-hover:translate-y-0.5 text-[#E2B18D]"
              />
            </span>
          </a>
        </div>
      </section>

      {/* =========================================================
          03 — WHERE COULD YOU GO (SLEEK EDITORIAL GRID)
      ========================================================= */}
      <section
        id="destinations"
        className="relative bg-[#F7F5F0] px-5 py-28 sm:px-8 sm:py-36 lg:px-12"
      >
        <div className="mx-auto max-w-[1440px]">
          {/* Header */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end mb-16 sm:mb-20">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4">Curated Escapes</p>
              <h2 className="display-heading text-5xl sm:text-6xl lg:text-[6.5rem] text-[#101A2E]">
                Where could
                <br />
                <span className="italic text-[#B87543]">you go?</span>
              </h2>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <p className="max-w-md font-sans text-sm sm:text-base font-light leading-7 text-[#697181]">
                From serene pine valleys and crystal island lagoons to vibrant
                skylines. We curate each destination with personal care.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12">
            {/* Dubai (6 cols) */}
            <Link
              href="/plan?destination=Dubai"
              className="group relative overflow-hidden rounded-2xl bg-[#07101F] lg:col-span-6 shadow-sm transition-all duration-700 hover:shadow-xl"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={travelImages.dubai.url}
                  alt={travelImages.dubai.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07101F]/90 via-[#07101F]/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-5 left-5">
                  <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 font-sans text-[9px] uppercase tracking-[0.2em] text-white/90 backdrop-blur-md">
                    United Arab Emirates
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-7 sm:p-9">
                  <div>
                    <p className="mb-1 font-sans text-[10px] uppercase tracking-[0.25em] text-[#E2B18D]">
                      Desert & Modern Skyline · 5–7 Days
                    </p>
                    <h3 className="font-serif text-4xl sm:text-5xl font-light text-white">
                      Dubai
                    </h3>
                  </div>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-[#E2B18D] group-hover:bg-[#E2B18D] group-hover:text-[#07101F]">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </div>
            </Link>

            {/* Kashmir (3 cols) */}
            <Link
              href="/plan?destination=Kashmir"
              className="group relative overflow-hidden rounded-2xl bg-[#07101F] lg:col-span-3 shadow-sm transition-all duration-700 hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={travelImages.kashmir.url}
                  alt={travelImages.kashmir.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07101F]/90 via-[#07101F]/20 to-transparent" />

                <div className="absolute top-5 left-5">
                  <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 font-sans text-[9px] uppercase tracking-[0.2em] text-white/90 backdrop-blur-md">
                    India
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="mb-1 font-sans text-[10px] uppercase tracking-[0.25em] text-[#E2B18D]">
                    Himalayan Solitude
                  </p>
                  <h3 className="font-serif text-3xl sm:text-4xl font-light text-white">
                    Kashmir
                  </h3>
                </div>
              </div>
            </Link>

            {/* Switzerland (3 cols) */}
            <Link
              href="/plan?destination=Switzerland"
              className="group relative overflow-hidden rounded-2xl bg-[#07101F] lg:col-span-3 shadow-sm transition-all duration-700 hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={travelImages.switzerland.url}
                  alt={travelImages.switzerland.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07101F]/90 via-[#07101F]/20 to-transparent" />

                <div className="absolute top-5 left-5">
                  <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 font-sans text-[9px] uppercase tracking-[0.2em] text-white/90 backdrop-blur-md">
                    Europe
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="mb-1 font-sans text-[10px] uppercase tracking-[0.25em] text-[#E2B18D]">
                    Alpine Glaciers
                  </p>
                  <h3 className="font-serif text-3xl sm:text-4xl font-light text-white">
                    Switzerland
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          {/* Sub-footer Link Strip */}
          <div className="mt-12 flex flex-col gap-5 border-t border-[#101A2E]/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#697181]">
              India · Middle East · Europe · Indian Ocean · Southeast Asia
            </p>

            <Link
              href="/destinations"
              className="group inline-flex items-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#101A2E] hover:text-[#B87543] transition-colors"
            >
              <span>Explore all destinations</span>
              <span className="h-px w-8 bg-[#B87543] transition-all duration-300 group-hover:w-14" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          04 — TRAVEL YOUR WAY (EDITORIAL INDEX)
      ========================================================= */}
      <section
        id="experiences"
        className="bg-[#FAF9F5] px-5 py-28 sm:px-8 sm:py-36 lg:px-12 border-t border-[#101A2E]/[0.08]"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <p className="eyebrow mb-4">Travel Your Way</p>
              <h2 className="display-heading text-5xl sm:text-6xl lg:text-[6.5rem] text-[#101A2E]">
                Every journey
                <br />
                <span className="italic text-[#B87543]">is different.</span>
              </h2>
            </div>

            <div className="flex items-end lg:col-span-5 lg:col-start-8">
              <div>
                <p className="max-w-md font-sans text-sm sm:text-base font-light leading-7 text-[#697181]">
                  A family holiday, a romantic escape, a trip with friends or
                  something completely your own. We begin with how you wish to
                  feel.
                </p>

                <Link
                  href="/experiences"
                  className="group mt-7 inline-flex items-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#101A2E] hover:text-[#B87543] transition-colors"
                >
                  <span>Explore experiences</span>
                  <span className="h-px w-8 bg-[#B87543] transition-all duration-300 group-hover:w-14" />
                </Link>
              </div>
            </div>
          </div>

          {/* Sleek Row Categories */}
          <div className="mt-20 border-t border-[#101A2E]/10">
            {[
              {
                num: "01",
                title: "Family Escapes",
                tag: "Balanced Pace · Private Transport · Kid Friendly",
              },
              {
                num: "02",
                title: "Romantic Getaways",
                tag: "Quiet Stays · Scenic Sunsets · Intimate Luxury",
              },
              {
                num: "03",
                title: "Group Adventures",
                tag: "Shared Moments · Coordinated Logistics · Private Villas",
              },
              {
                num: "04",
                title: "First-Time Abroad",
                tag: "End-to-End Guidance · Seamless Flights · Peace of Mind",
              },
            ].map((cat) => (
              <Link
                key={cat.num}
                href="/experiences"
                className="group grid grid-cols-12 items-center border-b border-[#101A2E]/10 py-7 transition-all duration-300 hover:px-4 hover:bg-white/60 sm:py-9"
              >
                <div className="col-span-2 sm:col-span-1">
                  <span className="font-sans text-[11px] font-medium tracking-[0.2em] text-[#B87543]">
                    {cat.num}
                  </span>
                </div>

                <div className="col-span-8 sm:col-span-9 flex flex-col md:flex-row md:items-baseline md:gap-8">
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#101A2E] group-hover:text-[#B87543] transition-colors">
                    {cat.title}
                  </h3>
                  <span className="hidden md:inline-block font-sans text-[10px] uppercase tracking-[0.2em] text-[#697181]/80">
                    {cat.tag}
                  </span>
                </div>

                <div className="col-span-2 flex justify-end">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#101A2E]/15 text-[#101A2E]/50 transition-all duration-300 group-hover:border-[#B87543] group-hover:bg-[#B87543] group-hover:text-white">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
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
              <p className="eyebrow mb-4">Imagine Yourself There</p>
              <h2 className="display-heading text-5xl sm:text-6xl lg:text-[6.5rem] text-[#101A2E]">
                Featured
                <br />
                <span className="italic text-[#B87543]">journeys.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="max-w-md font-sans text-sm sm:text-base font-light leading-7 text-[#697181]">
                Three distinct destinations, each offering an unhurried sense of
                pace, landscape, and discovery. Tailored completely to your
                dates.
              </p>
            </div>
          </div>

          {/* Magazine Spreads */}
          <div className="space-y-28 sm:space-y-36">
            {/* Spread 1: DUBAI */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#07101F] shadow-lg">
                  <Image
                    src={travelImages.dubai.url}
                    alt={travelImages.dubai.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 font-sans text-[9px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
                    United Arab Emirates
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center">
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#B87543] font-semibold">
                  01 · City & Desert Sanctuary
                </span>
                <h3 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl text-[#101A2E] font-light">
                  Dubai
                </h3>
                <p className="mt-3 font-serif italic text-xl sm:text-2xl text-[#697181]">
                  A modern city framed by timeless dunes.
                </p>
                <p className="mt-6 font-sans text-sm font-light leading-7 text-[#697181]">
                  An energetic city escape where modern skylines meet Arabian
                  landscapes. Experience private desert safaris under quiet
                  twilight skies, world-renowned architecture along the Marina,
                  and seamless luxury from arrival to departure.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/plan?destination=Dubai"
                    className="group inline-flex items-center gap-3 rounded-full bg-[#101A2E] px-7 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#B87543] shadow-sm hover:scale-[1.02]"
                  >
                    <span>Discover Journey</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>

                  <a
                    href={getWhatsAppUrl(
                      "Hello Darsh Dream Tours, I would like to enquire about travelling to Dubai."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#101A2E] hover:text-[#B87543] transition-colors py-3"
                  >
                    Quick Enquiry →
                  </a>
                </div>
              </div>
            </div>

            {/* Spread 2: KASHMIR */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 lg:order-2">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#07101F] shadow-lg">
                  <Image
                    src={travelImages.kashmir.url}
                    alt={travelImages.kashmir.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 font-sans text-[9px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
                    India
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 lg:order-1 flex flex-col justify-center">
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#B87543] font-semibold">
                  02 · Himalayan Solitude
                </span>
                <h3 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl text-[#101A2E] font-light">
                  Kashmir
                </h3>
                <p className="mt-3 font-serif italic text-xl sm:text-2xl text-[#697181]">
                  Quiet waters. Crisp mountain air.
                </p>
                <p className="mt-6 font-sans text-sm font-light leading-7 text-[#697181]">
                  Untouched pine valleys, wooden shikaras gliding across the
                  silent morning waters of Dal Lake, and snow-capped Himalayan
                  peaks framing every horizon. An unhurried journey through
                  India's most poetic landscape.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/plan?destination=Kashmir"
                    className="group inline-flex items-center gap-3 rounded-full bg-[#101A2E] px-7 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#B87543] shadow-sm hover:scale-[1.02]"
                  >
                    <span>Discover Journey</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>

                  <a
                    href={getWhatsAppUrl(
                      "Hello Darsh Dream Tours, I would like to enquire about travelling to Kashmir."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#101A2E] hover:text-[#B87543] transition-colors py-3"
                  >
                    Quick Enquiry →
                  </a>
                </div>
              </div>
            </div>

            {/* Spread 3: MALDIVES */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#07101F] shadow-lg">
                  <Image
                    src={travelImages.maldives.url}
                    alt={travelImages.maldives.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 font-sans text-[9px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
                    Indian Ocean
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center">
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#B87543] font-semibold">
                  03 · Island Sanctuary
                </span>
                <h3 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl text-[#101A2E] font-light">
                  Maldives
                </h3>
                <p className="mt-3 font-serif italic text-xl sm:text-2xl text-[#697181]">
                  Slow days. Clear crystalline horizons.
                </p>
                <p className="mt-6 font-sans text-sm font-light leading-7 text-[#697181]">
                  Private wooden villas resting gently over crystalline lagoons,
                  morning swims in transparent waters, warm sea breezes, and the
                  sublime freedom of leaving every routine behind.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/plan?destination=Maldives"
                    className="group inline-flex items-center gap-3 rounded-full bg-[#101A2E] px-7 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#B87543] shadow-sm hover:scale-[1.02]"
                  >
                    <span>Discover Journey</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>

                  <a
                    href={getWhatsAppUrl(
                      "Hello Darsh Dream Tours, I would like to enquire about travelling to Maldives."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#101A2E] hover:text-[#B87543] transition-colors py-3"
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
          06 — QUIET EDITORIAL STATEMENT
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#FAF9F5] px-5 py-32 sm:px-8 sm:py-44 lg:px-12 border-t border-[#101A2E]/10">
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
            Darsh Dream Tours · Vadodara, Gujarat
          </p>
        </div>
      </section>

      {/* =========================================================
          07 — WHY DARSH DREAM (TRAVEL, THOUGHTFULLY PLANNED)
      ========================================================= */}
      <section className="bg-[#07101F] px-5 py-28 text-white sm:px-8 sm:py-36 lg:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#B87543]/10 blur-[130px] pointer-events-none" />

        <div className="mx-auto max-w-[1440px] relative z-10">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4 !text-[#E2B18D]">How We Plan It</p>

              <h2 className="display-heading text-5xl sm:text-6xl lg:text-[6.5rem]">
                Travel,
                <br />
                <span className="italic text-[#E2B18D]">thoughtfully planned.</span>
              </h2>

              <p className="mt-8 max-w-md font-sans text-sm sm:text-base font-light leading-7 text-white/60">
                Less searching. More travelling. A bespoke approach built around
                real conversations, not automated templates.
              </p>

              <div className="mt-10">
                <Link
                  href="/plan"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.05] px-7 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white hover:border-[#E2B18D] hover:text-[#E2B18D] transition-all duration-300"
                >
                  <span>Plan With Us</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="border-t border-white/10">
                {[
                  {
                    num: "01",
                    title: "Personalized",
                    desc: "Every itinerary is shaped around your dates, pace, and travelling style—never forced into a rigid template.",
                  },
                  {
                    num: "02",
                    title: "Guided",
                    desc: "Thoughtful advice from real people who listen carefully and help you choose the right destinations and stays.",
                  },
                  {
                    num: "03",
                    title: "Seamless",
                    desc: "From flights and stays to on-ground transitions, every detail is orchestrated so you simply enjoy the journey.",
                  },
                  {
                    num: "04",
                    title: "Memorable",
                    desc: "Experiences that linger long after you return home—moments crafted to feel truly and distinctly yours.",
                  },
                ].map((pillar) => (
                  <div
                    key={pillar.num}
                    className="grid grid-cols-12 gap-5 border-b border-white/10 py-8 sm:py-10 transition-colors hover:bg-white/[0.02]"
                  >
                    <div className="col-span-2">
                      <span className="font-sans text-[10px] tracking-[0.2em] text-[#B87543]">
                        {pillar.num}
                      </span>
                    </div>

                    <div className="col-span-10">
                      <h3 className="font-serif text-3xl sm:text-4xl font-light uppercase tracking-wide">
                        {pillar.title}
                      </h3>

                      <p className="mt-3 max-w-lg font-sans text-sm font-light leading-6 text-white/55">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          08 — MEET SAKSHI
      ========================================================= */}
      <section
        id="about"
        className="bg-[#F7F5F0] px-5 py-28 sm:px-8 sm:py-36 lg:px-12"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#E8E3DA] shadow-md">
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
              <p className="eyebrow mb-3">Meet the Person Behind the Journey</p>

              <h2 className="display-heading text-5xl sm:text-6xl lg:text-[5.5rem] text-[#101A2E] mb-2">
                Sakshi Chandiramani
              </h2>

              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B87543] mb-8">
                Partner · Darsh Dream Tours
              </p>

              <blockquote className="border-l-2 border-[#B87543] pl-6 my-4">
                <p className="font-serif italic text-2xl sm:text-3xl text-[#101A2E] leading-snug font-light">
                  "Every journey begins with understanding the person taking it.
                  Tell us where you want to go, how you want to travel, and what
                  you want the journey to feel like."
                </p>
              </blockquote>

              <p className="mt-6 max-w-xl font-sans text-sm sm:text-base font-light leading-7 text-[#697181]">
                At Darsh Dream Tours, we believe travel shouldn't feel like
                navigating automated booking engines. Based in Vadodara,
                Gujarat, we assist travellers with personalized itineraries,
                genuine care, and reliable arrangements across India and
                international destinations.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={getWhatsAppUrl(
                    "Hello Sakshi, I would like to talk with you about planning a journey."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#101A2E] px-8 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#B87543] shadow-sm hover:scale-[1.02]"
                >
                  <MessageCircle size={15} />
                  <span>Talk to Sakshi</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <Link
                  href="/about"
                  className="group inline-flex items-center justify-center gap-3 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#101A2E] hover:text-[#B87543] transition-colors py-3"
                >
                  <span>Our boutique story</span>
                  <span className="h-px w-8 bg-[#B87543] transition-all duration-300 group-hover:w-14" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          09 — VERIFIED GOOGLE REVIEWS SHOWCASE
      ========================================================= */}
      <GoogleReviews theme="dark" />

      {/* =========================================================
          10 — FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#07101F] px-5 py-28 text-white sm:px-8 sm:py-36 lg:px-12 border-t border-white/10">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#B87543]/15 pointer-events-none" />
        <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full border border-[#B87543]/10 pointer-events-none" />

        <div className="pointer-events-none absolute inset-0 hidden sm:block overflow-hidden opacity-25">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 600"
            fill="none"
            preserveAspectRatio="none"
          >
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
              Your Journey Starts Here
            </p>

            <h2 className="display-heading text-6xl sm:text-7xl lg:text-[7.5rem] leading-[0.88]">
              Your next adventure
              <br />
              <span className="italic text-[#E2B18D]">starts here.</span>
            </h2>

            <p className="mt-8 max-w-lg font-sans text-sm sm:text-base font-light leading-7 text-white/60">
              Tell us where you're dreaming of going. Let's shape something
              unforgettable together.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/plan"
                className="group inline-flex items-center justify-center gap-4 rounded-full bg-[#E2B18D] px-8 py-5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#07101F] transition-all duration-300 hover:bg-white shadow-lg hover:scale-[1.02]"
              >
                <span>Plan My Journey</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <a
                href={getWhatsAppUrl(
                  "Hello Darsh Dream Tours, I would like to plan a journey."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/[0.04] px-8 py-5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-[#E2B18D] hover:text-[#E2B18D] backdrop-blur-md"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <p className="mt-8 font-sans text-[10px] uppercase tracking-[0.2em] text-white/35">
              Direct Contact: +91 97243 91674 · Vadodara, Gujarat
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          11 — FOOTER
      ========================================================= */}
      <footer className="bg-[#07101F] px-5 pb-12 pt-16 text-white sm:px-8 lg:px-12 border-t border-white/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 pb-14 border-b border-white/10">
            {/* Brand Column */}
            <div className="md:col-span-5">
              <Link href="/" className="inline-block">
                <div className="relative h-[64px] w-[200px] sm:h-[72px] sm:w-[220px]">
                  <Image
                    src="/images/logo.png"
                    alt="Darsh Dream Tours"
                    fill
                    sizes="220px"
                    className="object-contain object-left drop-shadow-[0_2px_10px_rgba(255,255,255,0.22)] brightness-110"
                  />
                </div>
              </Link>

              <p className="mt-5 max-w-sm font-sans text-xs leading-6 text-white/50">
                Thoughtfully planned journeys across India and beyond. Personal
                planning by Sakshi Chandiramani in Vadodara, Gujarat.
              </p>

              <div className="mt-6">
                <GoogleTrustBadge variant="pill" />
              </div>

              {/* Replay Intro */}
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

            {/* Navigation Column */}
            <div className="md:col-span-3 md:col-start-7">
              <p className="mb-5 font-sans text-[9px] uppercase tracking-[0.25em] text-white/40 font-semibold">
                Explore
              </p>

              <nav className="flex flex-col gap-3 font-sans text-xs">
                <Link
                  href="/destinations"
                  className="w-fit text-white/70 transition-colors hover:text-white"
                >
                  Destinations
                </Link>
                <Link
                  href="/experiences"
                  className="w-fit text-white/70 transition-colors hover:text-white"
                >
                  Experiences
                </Link>
                <Link
                  href="/about"
                  className="w-fit text-white/70 transition-colors hover:text-white"
                >
                  About Sakshi
                </Link>
                <Link
                  href="/plan"
                  className="w-fit text-white/70 transition-colors hover:text-white"
                >
                  Plan a Journey
                </Link>
              </nav>
            </div>

            {/* Contact Column */}
            <div className="md:col-span-3">
              <p className="mb-5 font-sans text-[9px] uppercase tracking-[0.25em] text-white/40 font-semibold">
                Vadodara Office
              </p>

              <div className="space-y-3 font-sans text-xs text-white/70">
                <p className="leading-relaxed text-white/50">
                  {siteConfig.contact.address.line1}
                  <br />
                  {siteConfig.contact.address.line2}
                  <br />
                  {siteConfig.contact.address.city}{" "}
                  {siteConfig.contact.address.pincode}
                </p>

                <p className="pt-2">
                  <a
                    href="tel:+919724391674"
                    className="hover:text-[#E2B18D] transition-colors"
                  >
                    +91 97243 91674
                  </a>
                </p>

                <p>
                  <a
                    href="mailto:sakshi@darshdreamtours.com"
                    className="hover:text-[#E2B18D] transition-colors"
                  >
                    sakshi@darshdreamtours.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans text-white/40">
            <p>© {new Date().getFullYear()} DARSH DREAM TOURS. All rights reserved.</p>
            <p>Crafted for Sakshi Chandiramani · Vadodara, Gujarat</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </main>
  );
}
