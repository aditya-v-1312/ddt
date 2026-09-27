"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getWhatsAppUrl } from "@/data/siteConfig";
import { travelImages } from "@/data/images";
import { ArrowDown, ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import GoogleReviews from "@/components/GoogleReviews";
import GoogleTrustBadge from "@/components/GoogleTrustBadge";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#101A2E]">
      <Navbar />

      {/* =========================================================
          01 — HERO (QUIET, CINEMATIC EDITORIAL)
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#101A2E] text-white">
        {/* Subtle architectural ambient rings */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full border border-[#B87543]/20" />
          <div className="absolute right-[5%] top-[15%] h-[350px] w-[350px] rounded-full border border-white/10" />
        </div>

        <div className="relative mx-auto flex min-h-[75vh] sm:min-h-[80vh] max-w-[1440px] flex-col justify-end px-5 pb-20 pt-36 sm:px-8 sm:pb-24 sm:pt-44 lg:px-12 lg:pb-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#B87543]" />
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-[#E2B18D]">
                  About Darsh Dream Tours
                </span>
              </div>

              <h1 className="font-serif text-[clamp(3.5rem,7.5vw,7.5rem)] font-light leading-[0.88] tracking-[-0.04em] text-white">
                The people
                <br />
                behind the
                <br />
                <span className="italic text-[#E2B18D]">journey.</span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:pb-3">
              <div className="border-l border-white/20 pl-6">
                <p className="font-sans text-sm font-light leading-7 text-white/70 sm:text-base">
                  At Darsh Dream Tours, we believe the best journeys begin with a conversation. Tell us where you want to go, what matters to you, and what you want the trip to feel like.
                </p>
              </div>
            </div>
          </div>

          {/* Subtle scroll indicator */}
          <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-6">
            <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-white/40">
              Vadodara · Gujarat
            </span>

            <a
              href="#story"
              className="group flex items-center gap-3 font-sans text-[9px] uppercase tracking-[0.25em] text-white/50 hover:text-white transition-colors"
            >
              <span>Scroll to discover</span>
              <span className="flex h-7 w-7 items-center justify-center border border-white/20 transition-colors group-hover:border-[#E2B18D]">
                <ArrowDown size={12} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          02 — SAKSHI / THE PERSON BEHIND THE BRAND
      ========================================================= */}
      <section id="story" className="bg-[#F7F5F0] px-5 py-28 sm:px-8 sm:py-36 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16 items-center">
            {/* Left: Atmospheric travel photograph (authentic, not claiming to be Sakshi) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#E8E3DA]">
                <Image
                  src={travelImages.aboutSakshi.url}
                  alt={travelImages.aboutSakshi.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
                />
              </div>

              <div className="mt-4 flex items-center justify-between font-sans text-[10px] uppercase tracking-[0.2em] text-[#697181]">
                <span>Darsh Dream Tours</span>
                <span>Curated Travel</span>
              </div>
            </div>

            {/* Right: Editorial Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="eyebrow mb-5">
                Meet the people behind the journey
              </p>

              <h2 className="display-heading text-5xl sm:text-6xl lg:text-[5.5rem] text-[#101A2E] leading-[0.9]">
                Every trip
                <br />
                starts with a
                <br />
                <span className="italic text-[#B87543]">story.</span>
              </h2>

              <p className="mt-8 max-w-xl font-sans text-base sm:text-lg font-light leading-relaxed text-[#101A2E]/80">
                At Darsh Dream Tours, we believe planning a trip should feel as exciting as taking one. Every traveller has a different idea of what makes a journey special, and that is where the conversation begins.
              </p>

              {/* Partner introduction */}
              <div className="mt-10 border-t border-[#101A2E]/10 pt-8">
                <p className="font-serif text-3xl sm:text-4xl font-light text-[#101A2E]">
                  Sakshi Chandiramani
                </p>

                <p className="mt-1 font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-[#B87543]">
                  Partner · Darsh Dream Tours
                </p>

                <p className="mt-4 max-w-lg font-sans text-sm font-light leading-6 text-[#697181]">
                  Based in Vadodara, Gujarat, working closely with travellers to shape trips that feel personal, unhurried, and memorable.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href={getWhatsAppUrl("Hello Sakshi, I would like to talk with you about planning a trip with Darsh Dream Tours.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 bg-[#101A2E] px-7 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white hover:bg-[#B87543] transition-colors duration-300"
                  >
                    <MessageCircle size={15} />
                    <span>Talk to Sakshi</span>
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <a
                    href="tel:+919724391674"
                    className="inline-flex items-center justify-center gap-2 border border-[#101A2E]/20 px-6 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#101A2E] hover:border-[#101A2E] transition-colors"
                  >
                    <Phone size={13} className="text-[#B87543]" />
                    <span>+91 97243 91674</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          03 — OUR APPROACH (CREAM SECTION WITH EDITORIAL ROWS)
      ========================================================= */}
      <section className="bg-[#F7F5F0] px-5 py-28 sm:px-8 sm:py-36 lg:px-12 border-t border-[#101A2E]/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end mb-16 sm:mb-24">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-5">Our Approach</p>

              <h2 className="display-heading text-6xl text-[#101A2E] sm:text-7xl lg:text-[6.5rem]">
                Travel should
                <br />
                <span className="italic text-[#B87543]">feel like yours.</span>
              </h2>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <p className="max-w-md font-sans text-sm font-light leading-7 text-[#697181] sm:text-base">
                Not every traveller wants the same trip. We start by understanding what you have in mind, then shape the journey around the way you want to travel.
              </p>
            </div>
          </div>

          {/* Three Editorial Rows */}
          <div className="border-t border-[#101A2E]/10">
            {/* 01 LISTEN FIRST */}
            <div className="grid grid-cols-1 gap-6 border-b border-[#101A2E]/10 py-10 sm:grid-cols-12 sm:items-center sm:py-14">
              <div className="sm:col-span-2">
                <span className="font-sans text-xs font-semibold tracking-[0.25em] text-[#B87543]">
                  01
                </span>
              </div>

              <div className="sm:col-span-4">
                <h3 className="font-serif text-3xl font-light text-[#101A2E] sm:text-4xl">
                  LISTEN FIRST
                </h3>
              </div>

              <div className="sm:col-span-6">
                <p className="max-w-lg font-sans text-sm font-light leading-relaxed text-[#697181] sm:text-base">
                  Start with the destination, the occasion, the dates, or simply an idea. The first step is understanding what you're looking for.
                </p>
              </div>
            </div>

            {/* 02 BUILD AROUND YOU */}
            <div className="grid grid-cols-1 gap-6 border-b border-[#101A2E]/10 py-10 sm:grid-cols-12 sm:items-center sm:py-14">
              <div className="sm:col-span-2">
                <span className="font-sans text-xs font-semibold tracking-[0.25em] text-[#B87543]">
                  02
                </span>
              </div>

              <div className="sm:col-span-4">
                <h3 className="font-serif text-3xl font-light text-[#101A2E] sm:text-4xl">
                  BUILD AROUND YOU
                </h3>
              </div>

              <div className="sm:col-span-6">
                <p className="max-w-lg font-sans text-sm font-light leading-relaxed text-[#697181] sm:text-base">
                  Your journey can be shaped around your group, your pace and the kind of experience you want.
                </p>
              </div>
            </div>

            {/* 03 KEEP IT SIMPLE */}
            <div className="grid grid-cols-1 gap-6 border-b border-[#101A2E]/10 py-10 sm:grid-cols-12 sm:items-center sm:py-14">
              <div className="sm:col-span-2">
                <span className="font-sans text-xs font-semibold tracking-[0.25em] text-[#B87543]">
                  03
                </span>
              </div>

              <div className="sm:col-span-4">
                <h3 className="font-serif text-3xl font-light text-[#101A2E] sm:text-4xl">
                  KEEP IT SIMPLE
                </h3>
              </div>

              <div className="sm:col-span-6">
                <p className="max-w-lg font-sans text-sm font-light leading-relaxed text-[#697181] sm:text-base">
                  Good planning should make travelling easier, not more complicated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          04 — INDIA TO THE WORLD (FULL-WIDTH VISUAL SECTION)
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#07101F] text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=2000&q=85"
            alt="Airplane wing cruising gently above clouds at golden twilight"
            fill
            sizes="100vw"
            className="object-cover opacity-35 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07101F]/90 via-[#07101F]/70 to-[#07101F]/50" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07101F] to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[60vh] max-w-[1440px] flex-col justify-center px-5 py-28 sm:px-8 sm:py-36 lg:px-12">
          <div className="max-w-3xl">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-[#E2B18D] mb-6 block">
              Vadodara to Global Horizons
            </span>

            <h2 className="display-heading text-5xl sm:text-6xl lg:text-[7rem] leading-[0.88] text-white">
              From here
              <br />
              to somewhere
              <br />
              <span className="italic text-[#E2B18D]">new.</span>
            </h2>

            <p className="mt-8 max-w-xl font-sans text-base sm:text-lg font-light leading-relaxed text-white/75">
              Based in Vadodara, Darsh Dream Tours helps travellers plan journeys across India and destinations around the world.
            </p>

            <div className="mt-10 flex items-center gap-6">
              <a
                href="/destinations"
                className="group inline-flex items-center gap-3 bg-white px-7 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#101A2E] hover:bg-[#E2B18D] transition-colors duration-300"
              >
                <span>Explore Destinations</span>
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          05 — WHAT MATTERS TO US (EDITORIAL PRINCIPLES)
      ========================================================= */}
      <section className="bg-[#F7F5F0] px-5 py-28 sm:px-8 sm:py-36 lg:px-12 border-t border-[#101A2E]/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-3xl mb-16 sm:mb-24">
            <p className="eyebrow mb-5">What Matters To Us</p>

            <h2 className="display-heading text-5xl sm:text-6xl lg:text-[6rem] text-[#101A2E] leading-[0.9]">
              The journey
              <br />
              is more than
              <br />
              <span className="italic text-[#B87543]">the destination.</span>
            </h2>
          </div>

          {/* Three Short Principles */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8 lg:gap-12 border-t border-[#101A2E]/10 pt-12">
            {/* PERSONAL */}
            <div className="flex flex-col">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B87543] mb-4">
                01
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#101A2E] mb-3">
                PERSONAL
              </h3>
              <p className="font-sans text-sm font-light leading-relaxed text-[#697181]">
                Every journey starts with the person travelling.
              </p>
            </div>

            {/* CLEAR */}
            <div className="flex flex-col border-t border-[#101A2E]/10 pt-8 sm:border-t-0 sm:border-l sm:pl-8 sm:pt-0 lg:pl-12">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B87543] mb-4">
                02
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#101A2E] mb-3">
                CLEAR
              </h3>
              <p className="font-sans text-sm font-light leading-relaxed text-[#697181]">
                Planning should feel understandable and straightforward.
              </p>
            </div>

            {/* MEMORABLE */}
            <div className="flex flex-col border-t border-[#101A2E]/10 pt-8 sm:border-t-0 sm:border-l sm:pl-8 sm:pt-0 lg:pl-12">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B87543] mb-4">
                03
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#101A2E] mb-3">
                MEMORABLE
              </h3>
              <p className="font-sans text-sm font-light leading-relaxed text-[#697181]">
                The details are what turn a trip into a memory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          06 — GOOGLE REVIEWS & TRAVELER EXPERIENCES
      ========================================================= */}
      <GoogleReviews theme="light" />

      {/* =========================================================
          07 — FINAL CTA (DARK NAVY SECTION)
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#07101F] px-5 py-28 text-white sm:px-8 sm:py-36 lg:px-12 border-t border-white/10">
        {/* Subtle decorative geometry */}
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#B87543]/15 pointer-events-none" />
        <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full border border-[#B87543]/10 pointer-events-none" />

        <div className="relative mx-auto max-w-[1440px]">
          <div className="max-w-3xl">
            <p className="eyebrow mb-6 !text-[#E2B18D]">
              Ready When You Are
            </p>

            <h2 className="display-heading text-6xl sm:text-7xl lg:text-[7.5rem] text-white leading-[0.88]">
              Have a trip
              <br />
              <span className="italic text-[#E2B18D]">in mind?</span>
            </h2>

            <p className="mt-8 max-w-lg font-sans text-sm sm:text-base font-light leading-7 text-white/60">
              Whether you already know where you're going or are still figuring it out, start the conversation with us.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="/plan"
                className="group inline-flex items-center justify-center gap-4 bg-[#E2B18D] px-8 py-5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#07101F] transition-all duration-300 hover:bg-white"
              >
                Plan Your Journey
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
          07 — FOOTER (EXACT HOMEPAGE FOOTER DESIGN)
      ========================================================= */}
      <footer className="bg-[#07101F] px-5 pb-10 text-white sm:px-8 lg:px-12 border-t border-white/10">
        <div className="mx-auto max-w-[1440px] pt-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            {/* Brand */}
            <div className="md:col-span-5">
              <div className="relative h-[72px] w-[215px] sm:h-[80px] sm:w-[240px]">
                <Image
                  src="/images/logo.png"
                  alt="Darsh Dream Tours"
                  fill
                  sizes="(max-width: 640px) 215px, 240px"
                  className="object-contain object-left drop-shadow-[0_2px_10px_rgba(255,255,255,0.22)] brightness-110"
                />
              </div>

              <p className="mt-5 max-w-sm font-sans text-xs leading-6 text-white/40">
                Thoughtfully planned journeys across India and beyond. Personal planning by Sakshi Chandiramani in Vadodara, Gujarat.
              </p>

              <div className="mt-6">
                <GoogleTrustBadge variant="pill" />
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
