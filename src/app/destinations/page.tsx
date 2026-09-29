"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleTrustBadge from "@/components/GoogleTrustBadge";
import { getWhatsAppUrl, siteConfig } from "@/data/siteConfig";
import { ArrowUpRight, Plane, Sparkles, Compass, MapPin } from "lucide-react";

interface DestinationItem {
  name: string;
  region: string;
  image: string;
  category: "international" | "india" | "island" | "mountain";
  duration: string;
  highlight: string;
}

const allDestinations: DestinationItem[] = [
  // International
  {
    name: "Dubai",
    region: "United Arab Emirates",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85",
    category: "international",
    duration: "5–7 Days",
    highlight: "Private Desert Safari & Marina Luxury",
  },
  {
    name: "Switzerland",
    region: "Europe",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85",
    category: "mountain",
    duration: "7–10 Days",
    highlight: "Scenic Panoramic Rail & Alpine Glaciers",
  },
  {
    name: "Maldives",
    region: "Indian Ocean",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=85",
    category: "island",
    duration: "4–6 Days",
    highlight: "Overwater Villas & Crystalline Atolls",
  },
  {
    name: "Bali",
    region: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=85",
    category: "island",
    duration: "6–8 Days",
    highlight: "Ubud Sanctuaries & Cliffside Sunsets",
  },
  {
    name: "Singapore",
    region: "Southeast Asia",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1400&q=85",
    category: "international",
    duration: "4–5 Days",
    highlight: "Modern Gardens, City Luxury & Sentosa",
  },
  {
    name: "Thailand",
    region: "Southeast Asia",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1400&q=85",
    category: "international",
    duration: "6–9 Days",
    highlight: "Bangkok Flavors & Andaman Island Bays",
  },

  // India
  {
    name: "Kashmir",
    region: "North India",
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1400&q=85",
    category: "mountain",
    duration: "6–8 Days",
    highlight: "Dal Lake Shikaras & Gulmarg Pine Valleys",
  },
  {
    name: "Kerala",
    region: "South India",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=85",
    category: "india",
    duration: "5–7 Days",
    highlight: "Kumarakom Backwaters & Munnar Tea Estates",
  },
  {
    name: "Rajasthan",
    region: "West India",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1400&q=85",
    category: "india",
    duration: "6–8 Days",
    highlight: "Udaipur Lake Palaces & Thar Desert Havens",
  },
  {
    name: "Goa",
    region: "West Coast",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=85",
    category: "island",
    duration: "4–6 Days",
    highlight: "South Goa Portuguese Estates & Sunset Shores",
  },
  {
    name: "Andaman",
    region: "Indian Islands",
    image:
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1400&q=85",
    category: "island",
    duration: "5–7 Days",
    highlight: "Havelock Turquoise Lagoons & Coral Reefs",
  },
  {
    name: "Himachal Pradesh",
    region: "North India",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1400&q=85",
    category: "mountain",
    duration: "5–7 Days",
    highlight: "Cedar Forests, Solang Meadows & Mountain Air",
  },
];

/* =========================================================
   DECORATIVE WORLD MAP
========================================================= */
function WorldMapGraphic() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block opacity-40">
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <svg
        viewBox="0 0 900 560"
        className="absolute right-[-30px] top-1/2 h-[620px] w-[760px] -translate-y-1/2 opacity-60 xl:right-0 xl:w-[820px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M110 135 C125 112 151 96 183 90 C208 84 225 92 244 105 L266 124 C281 135 292 155 297 175 L301 193 C302 205 296 217 286 226 L270 240 C261 247 248 249 237 245 L208 234 C192 228 178 233 167 244 L152 258 C144 266 131 268 122 262 L106 250 C95 240 92 225 98 212 L109 188 C113 179 113 169 108 161 Z"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="1"
        />

        <path
          d="M232 288 C244 290 258 300 263 313 L274 340 C284 366 288 394 286 422 L282 458 C280 473 268 485 253 487 L241 488 C232 489 224 482 222 473 L208 412 C204 394 195 378 183 365 L174 355 C164 344 163 328 171 316 L183 299 C191 288 206 282 220 285 Z"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="1"
        />

        <path
          d="M448 95 C462 88 478 92 488 103 L504 121 C516 135 533 143 551 144 L580 145 C596 146 609 157 613 173 L619 198 C622 211 617 225 606 233 L591 244 C577 254 558 255 543 246 L518 231 C505 223 489 224 478 234 L460 250 C449 260 432 260 422 250 L411 239 C401 229 400 213 408 201 L426 174 C434 162 435 146 429 133 Z"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="1"
        />

        <path
          d="M452 265 C466 260 482 265 491 278 L506 299 C518 316 525 336 526 357 L527 388 C528 413 521 438 506 459 L494 475 C485 487 470 493 456 489 L441 485 C429 481 420 471 418 459 L410 412 C406 388 395 366 380 348 L371 337 C363 327 363 313 371 303 L386 284 C395 273 410 266 424 268 Z"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="1"
        />

        {/* Flight path curve */}
        <path
          d="M640 235 C592 191 540 164 485 157 C420 149 359 171 311 208 C276 235 250 263 224 282"
          stroke="#E2B18D"
          strokeWidth="1.5"
          strokeDasharray="5 8"
        />

        {/* Origin */}
        <circle cx="640" cy="235" r="4" fill="#E2B18D" />
        <circle cx="640" cy="235" r="12" stroke="rgba(226,177,141,0.3)" strokeWidth="1" />

        {/* Destination */}
        <circle cx="224" cy="282" r="4" fill="#E2B18D" />
        <circle cx="224" cy="282" r="12" stroke="rgba(226,177,141,0.3)" strokeWidth="1" />
      </svg>
    </div>
  );
}

export default function DestinationsPage() {
  const [activeTab, setActiveTab] = useState<
    "all" | "international" | "india" | "island" | "mountain"
  >("all");

  const filteredDestinations =
    activeTab === "all"
      ? allDestinations
      : allDestinations.filter((d) => d.category === activeTab);

  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#101A2E] selection:bg-[#B87543] selection:text-white">
      <Navbar />

      {/* =========================================================
          HERO (CINEMATIC CONTINENTAL OVERVIEW)
      ========================================================= */}
      <section className="relative min-h-[720px] overflow-hidden bg-[#07101F] px-5 pb-24 pt-40 text-white sm:px-8 sm:pb-28 lg:px-12">
        <WorldMapGraphic />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#07101F] via-[#07101F]/85 to-[#07101F]/20" />
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#B87543]/15 blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1440px] items-center">
          <div className="grid w-full grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 xl:col-span-5">
              <div className="mb-6 flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E2B18D]" />
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E2B18D]">
                    Curated Destinations
                  </span>
                </span>
              </div>

              <h1 className="display-heading text-7xl sm:text-8xl lg:text-[8rem] text-white">
                Places
                <br />
                worth
                <br />
                <span className="italic font-normal text-[#E2B18D]">going.</span>
              </h1>

              <p className="mt-8 max-w-md font-sans text-sm sm:text-base font-light leading-7 text-white/60">
                From the snow-crowned valleys of Kashmir to the modern dunes of
                Dubai and crystalline lagoons of the Maldives—explore places we
                love to curate.
              </p>

              <div className="mt-9 flex items-center gap-4">
                <a
                  href="#explore"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#07101F] hover:bg-[#E2B18D] transition-all duration-300 shadow-md hover:scale-[1.02]"
                >
                  <span>Browse All</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-5 right-5 z-10 flex items-center justify-between sm:left-8 sm:right-8 lg:left-12 lg:right-12">
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/30">
            India · International · Custom Itineraries
          </p>

          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/30">
            01 / Destinations
          </p>
        </div>
      </section>

      {/* =========================================================
          DESTINATIONS BROWSER WITH SLEEK FILTER TABS
      ========================================================= */}
      <section id="explore" className="bg-[#FAF9F5] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 border-t border-[#101A2E]/10">
        <div className="mx-auto max-w-[1440px]">
          {/* Section Header & Interactive Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 pb-8 border-b border-[#101A2E]/10">
            <div>
              <p className="eyebrow mb-3">Curated Waypoints</p>
              <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl text-[#101A2E]">
                Select your
                <span className="italic text-[#B87543] ml-3">landscape.</span>
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "all", label: "All Escapes" },
                { id: "international", label: "International" },
                { id: "india", label: "Domestic (India)" },
                { id: "island", label: "Islands & Coast" },
                { id: "mountain", label: "Alpine & Peaks" },
              ].map((tab) => {
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`rounded-full px-5 py-2.5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                      isSelected
                        ? "bg-[#101A2E] text-white shadow-sm"
                        : "bg-white border border-[#101A2E]/10 text-[#697181] hover:text-[#101A2E] hover:border-[#101A2E]/30"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDestinations.map((dest) => (
              <Link
                key={dest.name}
                href={`/plan?destination=${encodeURIComponent(dest.name)}`}
                className="group relative block overflow-hidden rounded-2xl bg-[#07101F] shadow-sm transition-all duration-700 hover:shadow-2xl hover:scale-[1.01]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#E8E3DA]">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07101F]/90 via-[#07101F]/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                    <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 font-sans text-[9px] uppercase tracking-[0.2em] text-white/90 backdrop-blur-md">
                      {dest.region}
                    </span>
                    <span className="rounded-full border border-white/20 bg-black/40 px-2.5 py-1 font-sans text-[9px] uppercase tracking-[0.2em] text-[#E2B18D] backdrop-blur-md">
                      {dest.duration}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <p className="mb-1 font-sans text-[10px] uppercase tracking-[0.2em] text-[#E2B18D]">
                      {dest.highlight}
                    </p>

                    <div className="flex items-end justify-between gap-4 mt-2">
                      <h3 className="font-serif text-3xl sm:text-4xl font-light text-white">
                        {dest.name}
                      </h3>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 text-white/80 backdrop-blur-sm transition-all duration-300 group-hover:border-[#E2B18D] group-hover:bg-[#E2B18D] group-hover:text-[#07101F]">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bespoke Inquiry Ribbon */}
          <div className="mt-20 rounded-2xl border border-[#101A2E]/10 bg-white p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#B87543] font-semibold">
                  Custom Journeys
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#101A2E] mt-2">
                  Don't see your intended destination?
                </h3>
                <p className="mt-3 font-sans text-sm font-light leading-relaxed text-[#697181] max-w-xl">
                  That's completely fine. We curate custom journeys anywhere in
                  India or worldwide. Tell Sakshi what you have in mind and we'll
                  design the entire itinerary from scratch.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-wrap lg:justify-end items-center gap-4">
                <Link
                  href="/plan"
                  className="rounded-full bg-[#101A2E] px-8 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white hover:bg-[#B87543] transition-colors shadow-sm"
                >
                  Custom Request
                </Link>

                <a
                  href={getWhatsAppUrl("Hello Sakshi, I would like to plan a trip to a destination not listed on your website.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#101A2E] hover:text-[#B87543] transition-colors py-3"
                >
                  <span>WhatsApp Sakshi →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-[#07101F] px-5 py-28 text-white sm:px-8 sm:py-36 lg:px-12 border-t border-white/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-4xl">
            <p className="eyebrow mb-6 !text-[#E2B18D]">Start Planning</p>

            <h2 className="display-heading text-6xl sm:text-7xl lg:text-[7.5rem] leading-[0.88]">
              Your destination
              <br />
              is only the
              <br />
              <span className="italic text-[#E2B18D]">beginning.</span>
            </h2>

            <p className="mt-8 max-w-lg font-sans text-sm sm:text-base font-light leading-7 text-white/60">
              Already know where you want to go? Tell us about it and let's
              start building your journey with personal care.
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
