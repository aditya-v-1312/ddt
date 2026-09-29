"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getWhatsAppUrl, siteConfig } from "@/data/siteConfig";
import { travelImages } from "@/data/images";
import { ArrowDown, ArrowUpRight, MessageCircle, Phone, Mail, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import GoogleReviews from "@/components/GoogleReviews";
import GoogleTrustBadge from "@/components/GoogleTrustBadge";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#101A2E] selection:bg-[#B87543] selection:text-white">
      <Navbar />

      {/* =========================================================
          01 — HERO (QUIET, CINEMATIC EDITORIAL)
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#07101F] text-white">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full border border-[#B87543]/20" />
          <div className="absolute right-[5%] top-[15%] h-[350px] w-[350px] rounded-full border border-white/10" />
        </div>
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#B87543]/15 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto flex min-h-[75vh] sm:min-h-[80vh] max-w-[1440px] flex-col justify-end px-5 pb-20 pt-36 sm:px-8 sm:pb-24 sm:pt-44 lg:px-12 lg:pb-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E2B18D]" />
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E2B18D]">
                    About Darsh Dream Tours
                  </span>
                </span>
              </div>

              <h1 className="font-serif text-[clamp(3.5rem,7.5vw,7.5rem)] font-light leading-[0.88] tracking-[-0.035em] text-white">
                The people
                <br />
                behind the
                <br />
                <span className="italic font-normal text-[#E2B18D]">journey.</span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:pb-3">
              <div className="border-l border-white/20 pl-6">
                <p className="font-sans text-sm sm:text-base font-light leading-7 text-white/70">
                  At Darsh Dream Tours, we believe the finest journeys begin
                  with an honest conversation. Tell us where you want to go, how
                  you want to travel, and what you want the trip to feel like.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-6">
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/40">
              Vadodara · Gujarat · India & Worldwide
            </span>

            <a
              href="#story"
              className="group flex items-center gap-3 font-sans text-[10px] uppercase tracking-[0.25em] text-white/50 hover:text-white transition-colors"
            >
              <span>Scroll to discover</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 transition-all group-hover:border-[#E2B18D] group-hover:bg-[#E2B18D]/10">
                <ArrowDown size={12} className="transition-transform duration-300 group-hover:translate-y-0.5 text-[#E2B18D]" />
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
            {/* Left: Atmospheric travel photograph */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#E8E3DA] shadow-md">
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
              <p className="eyebrow mb-4">
                The Personal Touch
              </p>

              <h2 className="display-heading text-5xl sm:text-6xl lg:text-[5.5rem] text-[#101A2E] leading-[0.9]">
                Every trip
                <br />
                starts with a
                <br />
                <span className="italic text-[#B87543]">story.</span>
              </h2>

              <p className="mt-8 max-w-xl font-sans text-base sm:text-lg font-light leading-relaxed text-[#101A2E]/80">
                At Darsh Dream Tours, we believe planning a trip should feel as
                exciting as taking one. Every traveller has a different idea of
                what makes a journey special, and that is where the conversation
                begins.
              </p>

              {/* Partner introduction */}
              <div className="mt-10 border-t border-[#101A2E]/10 pt-8">
                <p className="font-serif text-3xl sm:text-4xl font-light text-[#101A2E]">
                  Sakshi Chandiramani
                </p>

                <p className="mt-1 font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B87543]">
                  Partner · Darsh Dream Tours
                </p>

                <p className="mt-4 max-w-lg font-sans text-sm font-light leading-6 text-[#697181]">
                  Based in Vadodara, Gujarat, working closely with travellers to
                  shape trips that feel personal, unhurried, and memorable.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={getWhatsAppUrl("Hello Sakshi, I would like to talk with you about planning a trip with Darsh Dream Tours.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#101A2E] px-8 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white hover:bg-[#B87543] transition-all duration-300 shadow-sm hover:scale-[1.02]"
                  >
                    <MessageCircle size={15} />
                    <span>Talk to Sakshi</span>
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <a
                    href="tel:+919724391674"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#101A2E]/20 px-6 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#101A2E] hover:border-[#101A2E] transition-colors"
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
      <section className="bg-[#FAF9F5] px-5 py-28 sm:px-8 sm:py-36 lg:px-12 border-t border-[#101A2E]/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end mb-16 sm:mb-24">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4">How It Works</p>
              <h2 className="display-heading text-5xl sm:text-6xl lg:text-[6rem] text-[#101A2E] leading-[0.9]">
                A conversation,
                <br />
                not an
                <br />
                <span className="italic text-[#B87543]">algorithm.</span>
              </h2>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <p className="max-w-md font-sans text-sm sm:text-base font-light leading-7 text-[#697181]">
                There are plenty of websites where you can click through dates
                and pick hotels from a dropdown. Darsh Dream Tours is for people
                who want someone to listen first.
              </p>
            </div>
          </div>

          {/* Three Process Rows */}
          <div className="border-t border-[#101A2E]/10">
            {[
              {
                num: "01",
                title: "We Listen",
                subtitle: "Your journey starts with a conversation.",
                desc: "Where do you want to go? Who is travelling? What kind of pace feels right? We start by understanding what you want the trip to feel like, not just where you want to sleep.",
              },
              {
                num: "02",
                title: "We Curate",
                subtitle: "Every detail shaped around you.",
                desc: "We build an itinerary that makes sense for your dates, budget, and travelling style. Flights, stays, transfers, and activities—all woven into a coherent, unhurried journey.",
              },
              {
                num: "03",
                title: "We Stay In Touch",
                subtitle: "Support before and throughout.",
                desc: "From the moment you confirm your journey until you return home, Sakshi is reachable. If plans shift or questions come up, you speak to someone who knows your itinerary personally.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="grid grid-cols-1 gap-6 border-b border-[#101A2E]/10 py-10 lg:grid-cols-12 lg:gap-10 sm:py-14 transition-colors hover:bg-white/50"
              >
                <div className="lg:col-span-2">
                  <span className="font-sans text-[11px] font-semibold tracking-[0.25em] text-[#B87543]">
                    {step.num} · STEP
                  </span>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#101A2E]">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-serif italic text-lg text-[#697181]">
                    {step.subtitle}
                  </p>
                </div>

                <div className="lg:col-span-6">
                  <p className="max-w-lg font-sans text-sm font-light leading-7 text-[#697181]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          04 — OUR BASE IN VADODARA (OFFICE & LOCATION)
      ========================================================= */}
      <section className="bg-white px-5 py-28 sm:px-8 sm:py-36 lg:px-12 border-t border-[#101A2E]/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <p className="eyebrow mb-4">Our Base</p>
              <h2 className="display-heading text-5xl sm:text-6xl lg:text-[5.5rem] text-[#101A2E] leading-[0.9]">
                Rooted in
                <br />
                <span className="italic text-[#B87543]">Vadodara, Gujarat.</span>
              </h2>

              <p className="mt-8 max-w-lg font-sans text-base font-light leading-relaxed text-[#697181]">
                Darsh Dream Tours operates from Race Course, Vadodara. We work
                with travellers from Gujarat and across India, helping them
                explore destinations across the country and the world.
              </p>

              <div className="mt-10 rounded-2xl border border-[#101A2E]/10 bg-[#FAF9F5] p-8 max-w-lg">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#B87543] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-xl font-light text-[#101A2E]">
                      Office Address
                    </h3>
                    <p className="mt-2 font-sans text-sm text-[#697181] leading-relaxed">
                      SFI Sun Complex, 1 Abhishek Colony,
                      <br />
                      Gotri Road, Race Course,
                      <br />
                      Vadodara 390007, Gujarat
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[#101A2E]/10 flex flex-col sm:flex-row gap-4 text-xs font-sans">
                  <a
                    href="tel:+919724391674"
                    className="inline-flex items-center gap-2 text-[#101A2E] hover:text-[#B87543] transition-colors"
                  >
                    <Phone size={13} className="text-[#B87543]" />
                    <span>+91 97243 91674</span>
                  </a>

                  <a
                    href="mailto:sakshi@darshdreamtours.com"
                    className="inline-flex items-center gap-2 text-[#101A2E] hover:text-[#B87543] transition-colors"
                  >
                    <Mail size={13} className="text-[#B87543]" />
                    <span>sakshi@darshdreamtours.com</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#07101F] shadow-lg">
                <Image
                  src={travelImages.switzerland.url}
                  alt={travelImages.switzerland.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07101F]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white font-sans text-xs">
                  <span>Planning for travellers across India</span>
                  <span className="text-[#E2B18D]">Boutique Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          05 — PHILOSOPHY (THREE PRINCIPLES)
      ========================================================= */}
      <section className="bg-[#FAF9F5] px-5 py-28 sm:px-8 sm:py-36 lg:px-12 border-t border-[#101A2E]/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-20 max-w-3xl">
            <p className="eyebrow mb-4">Philosophy</p>
            <h2 className="display-heading text-5xl sm:text-6xl lg:text-[6rem] text-[#101A2E] leading-[0.9]">
              The journey
              <br />
              is more than
              <br />
              <span className="italic text-[#B87543]">the destination.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8 lg:gap-12 border-t border-[#101A2E]/10 pt-12">
            {[
              {
                num: "01",
                title: "PERSONAL",
                desc: "Every journey starts with the person travelling. No mass-market formulas.",
              },
              {
                num: "02",
                title: "CLEAR",
                desc: "Planning should feel understandable, straightforward, and relaxing.",
              },
              {
                num: "03",
                title: "MEMORABLE",
                desc: "The thoughtful small details are what turn a trip into a lifelong memory.",
              },
            ].map((p, idx) => (
              <div
                key={p.num}
                className={`flex flex-col ${
                  idx > 0
                    ? "border-t border-[#101A2E]/10 pt-8 sm:border-t-0 sm:border-l sm:pl-8 sm:pt-0 lg:pl-12"
                    : ""
                }`}
              >
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B87543] mb-4">
                  {p.num}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#101A2E] mb-3">
                  {p.title}
                </h3>
                <p className="font-sans text-sm font-light leading-relaxed text-[#697181]">
                  {p.desc}
                </p>
              </div>
            ))}
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
              Whether you already know where you're going or are still figuring
              it out, start the conversation with us.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/plan"
                className="group inline-flex items-center justify-center gap-4 rounded-full bg-[#E2B18D] px-8 py-5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#07101F] transition-all duration-300 hover:bg-white shadow-lg hover:scale-[1.02]"
              >
                <span>Plan Your Journey</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <a
                href={getWhatsAppUrl("Hello Darsh Dream Tours, I would like to plan a journey.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/[0.04] px-8 py-5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-[#E2B18D] hover:text-[#E2B18D] backdrop-blur-md"
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
          08 — FOOTER
      ========================================================= */}
      <footer className="bg-[#07101F] px-5 pb-12 pt-16 text-white sm:px-8 lg:px-12 border-t border-white/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 pb-14 border-b border-white/10">
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
            </div>

            <div className="md:col-span-3 md:col-start-7">
              <p className="mb-5 font-sans text-[9px] uppercase tracking-[0.25em] text-white/40 font-semibold">
                Explore
              </p>

              <nav className="flex flex-col gap-3 font-sans text-xs">
                <Link href="/destinations" className="w-fit text-white/70 hover:text-white transition-colors">
                  Destinations
                </Link>
                <Link href="/experiences" className="w-fit text-white/70 hover:text-white transition-colors">
                  Experiences
                </Link>
                <Link href="/about" className="w-fit text-white/70 hover:text-white transition-colors">
                  About Sakshi
                </Link>
                <Link href="/plan" className="w-fit text-white/70 hover:text-white transition-colors">
                  Plan a Journey
                </Link>
              </nav>
            </div>

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
                  <a href="tel:+919724391674" className="hover:text-[#E2B18D] transition-colors">
                    +91 97243 91674
                  </a>
                </p>

                <p>
                  <a href="mailto:sakshi@darshdreamtours.com" className="hover:text-[#E2B18D] transition-colors">
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
