"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleTrustBadge from "@/components/GoogleTrustBadge";
import { getWhatsAppUrl, siteConfig } from "@/data/siteConfig";
import { ArrowUpRight, Sparkles, Heart, Users, Compass, PartyPopper, Globe2 } from "lucide-react";

interface ExperienceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  idealFor: string;
}

const experiences: ExperienceItem[] = [
  {
    number: "01",
    title: "Family Escapes",
    subtitle: "Journeys where everyone feels at ease.",
    description:
      "Journeys designed around spending unhurried time together. Balanced itineraries with child-friendly transfers, comfortable private transport, and moments designed for both children and grandparents.",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85",
    tags: ["Private Transfers", "Spacious Stays", "Flexible Rhythm"],
    idealFor: "Multi-generational families & holidays with kids",
  },
  {
    number: "02",
    title: "Romantic Getaways",
    subtitle: "Secluded stays and unforgettable settings.",
    description:
      "A change of scenery, a little quiet time away, and an unhurried itinerary built around the two of you. Private candlelight desert dinners, quiet coastal villas, and scenic mountain views.",
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85",
    tags: ["Intimate Stays", "Private Dining", "Sunset Views"],
    idealFor: "Honeymoons, anniversaries & quiet escapes",
  },
  {
    number: "03",
    title: "Group Adventures",
    subtitle: "Shared memories, seamless coordination.",
    description:
      "Bring your friends or extended circle together without the chaos of coordinating. We manage hotel room blocks, group logistics, and shared experiences so you simply enjoy the journey.",
    image:
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1200&q=85",
    tags: ["Group Coordination", "Private Villas", "Shared Memories"],
    idealFor: "Reunions, friend circles & celebration squads",
  },
  {
    number: "04",
    title: "First-Time Abroad",
    subtitle: "Complete peace of mind from departure to return.",
    description:
      "Taking your first international trip? We guide you through visa requirements, airport arrival protocols, foreign currency advice, and verified stays so the entire journey feels natural and stress-free.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85",
    tags: ["Visa Guidance", "On-Ground Concierge", "Curated Stays"],
    idealFor: "First-time international travellers & new explorers",
  },
  {
    number: "05",
    title: "Celebration Trips",
    subtitle: "Milestones marked in extraordinary places.",
    description:
      "Significant birthdays, golden anniversaries, graduations, or personal milestones. Let us shape a backdrop worthy of the moment with bespoke touches and celebratory arrangements.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=85",
    tags: ["Special Arrangements", "Luxury Upgrades", "Memorable Moments"],
    idealFor: "Milestone birthdays & special family occasions",
  },
  {
    number: "06",
    title: "Something Different",
    subtitle: "Uncharted ideas built around your imagination.",
    description:
      "Have a destination, offbeat route, or custom idea that doesn't fit standard categories? Tell us what you're imagining and Sakshi will tailor an original itinerary for you.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=85",
    tags: ["Offbeat Routes", "100% Bespoke", "Curated From Scratch"],
    idealFor: "Travellers seeking unique, tailor-made itineraries",
  },
];

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#101A2E] selection:bg-[#B87543] selection:text-white">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#07101F] px-5 pb-24 pt-40 text-white sm:px-8 sm:pb-32 lg:px-12">
        <div className="absolute right-[-120px] top-[-140px] h-[520px] w-[520px] rounded-full border border-[#B87543]/15 pointer-events-none" />
        <div className="absolute right-[-40px] top-[-60px] h-[360px] w-[360px] rounded-full border border-[#B87543]/10 pointer-events-none" />
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#B87543]/15 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-[1440px]">
          <div className="mb-6 flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E2B18D]" />
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E2B18D]">
                Travel Styles & Occasions
              </span>
            </span>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h1 className="display-heading text-7xl sm:text-8xl lg:text-[9rem] text-white">
                Travel,
                <br />
                <span className="italic font-normal text-[#E2B18D]">your way.</span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:pb-5">
              <p className="max-w-md font-sans text-sm sm:text-base font-light leading-7 text-white/60">
                A family holiday, a romantic escape, a trip with friends or
                something completely your own. We begin with how you wish to
                travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SLEEK EXPERIENCE SHOWCASE CARDS
      ========================================================= */}
      <section className="bg-[#FAF9F5] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 border-t border-[#101A2E]/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 max-w-2xl">
            <p className="eyebrow mb-4">Find Your Kind of Journey</p>
            <h2 className="display-heading text-5xl sm:text-6xl lg:text-7xl text-[#101A2E]">
              What are you
              <br />
              <span className="italic text-[#B87543]">travelling for?</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((exp) => (
              <div
                key={exp.number}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#101A2E]/10 bg-white p-7 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-[#101A2E]/25"
              >
                <div>
                  {/* Image header */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#07101F] mb-6">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 rounded-full border border-white/20 bg-black/40 px-3 py-1 font-sans text-[10px] font-medium tracking-[0.2em] text-[#E2B18D] backdrop-blur-md">
                      {exp.number} · STYLE
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl font-light text-[#101A2E] group-hover:text-[#B87543] transition-colors">
                    {exp.title}
                  </h3>

                  <p className="mt-2 font-serif italic text-base text-[#697181]">
                    "{exp.subtitle}"
                  </p>

                  <p className="mt-4 font-sans text-sm font-light leading-relaxed text-[#697181]">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[#FAF9F5] border border-[#101A2E]/[0.08] px-3 py-1 font-sans text-[10px] uppercase tracking-wider text-[#101A2E]/75"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-[#101A2E]/10 flex items-center justify-between">
                  <span className="font-sans text-[10px] uppercase tracking-wider text-[#697181]">
                    {exp.idealFor}
                  </span>

                  <Link
                    href={`/plan?style=${encodeURIComponent(exp.title)}`}
                    className="inline-flex items-center gap-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B87543] hover:text-[#101A2E] transition-colors"
                  >
                    <span>Plan This</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-[#07101F] px-5 py-28 text-white sm:px-8 sm:py-36 lg:px-12 border-t border-white/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-4xl">
            <p className="eyebrow mb-6 !text-[#E2B18D]">
              Your Trip Doesn't Need a Label
            </p>

            <h2 className="display-heading text-6xl sm:text-7xl lg:text-[7.5rem] leading-[0.88]">
              Have something
              <br />
              <span className="italic text-[#E2B18D]">else in mind?</span>
            </h2>

            <p className="mt-8 max-w-lg font-sans text-sm sm:text-base font-light leading-7 text-white/60">
              Tell us what you're imagining. The best place to start is a
              relaxed conversation with us.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/plan"
                className="group inline-flex items-center justify-center gap-4 rounded-full bg-[#E2B18D] px-8 py-5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#07101F] transition-all duration-300 hover:bg-white shadow-lg hover:scale-[1.02]"
              >
                <span>Start Planning</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <a
                href={getWhatsAppUrl("Hello Darsh Dream Tours, I have a custom trip idea in mind.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/[0.04] px-8 py-5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-[#E2B18D] hover:text-[#E2B18D] backdrop-blur-md"
              >
                <span>WhatsApp · +91 97243 91674</span>
              </a>
            </div>

            <div className="mt-8">
              <GoogleTrustBadge variant="pill" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="bg-[#07101F] px-5 pb-12 pt-16 text-white sm:px-8 lg:px-12 border-t border-white/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 pb-14 border-b border-white/10">
            <div className="md:col-span-5">
              <Link href="/" className="inline-block">
                <div className="relative h-[72px] w-[230px] sm:h-[84px] sm:w-[260px]">
                  <Image
                    src="/images/logo-light.png"
                    alt="Darsh Dream Tours"
                    fill
                    sizes="260px"
                    className="object-contain object-left drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)]"
                  />
                </div>
              </Link>

              <p className="mt-5 max-w-sm font-sans text-xs leading-6 text-white/50">
                Thoughtfully planned journeys across India and beyond. Personal
                planning by Darsh Dream Tours in Vadodara, Gujarat.
              </p>
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
                  About Us
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
                    Office: +91 97243 91674
                  </a>
                </p>

                <p>
                  <a href="mailto:info@darshdreamtours.com" className="hover:text-[#E2B18D] transition-colors">
                    info@darshdreamtours.com
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
