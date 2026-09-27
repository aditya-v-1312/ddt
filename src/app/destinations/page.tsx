"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getWhatsAppUrl } from "@/data/siteConfig";
import { ArrowUpRight, Plane } from "lucide-react";

const indiaDestinations = [
  {
    name: "Kashmir",
    region: "North India",
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Kerala",
    region: "South India",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Rajasthan",
    region: "West India",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Goa",
    region: "West India",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Andaman",
    region: "Indian Islands",
    image:
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Himachal Pradesh",
    region: "North India",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1400&q=85",
  },
];

const internationalDestinations = [
  {
    name: "Dubai",
    region: "United Arab Emirates",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85",
  },
  {
    name: "Switzerland",
    region: "Europe",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85",
  },
  {
    name: "Maldives",
    region: "Indian Ocean",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=85",
  },
  {
    name: "Bali",
    region: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Singapore",
    region: "Southeast Asia",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Thailand",
    region: "Southeast Asia",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1400&q=85",
  },
];

/* =========================================================
   DECORATIVE WORLD MAP
========================================================= */

function WorldMapGraphic() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
      {/* Very subtle grid */}
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
        className="absolute right-[-30px] top-1/2 h-[620px] w-[760px] -translate-y-1/2 opacity-50 xl:right-0 xl:w-[820px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* =====================================================
            CONTINENTS — deliberately abstract / editorial
        ===================================================== */}

        {/* North America */}
        <path
          d="M110 135
             C125 112 151 96 183 90
             C208 84 225 92 244 105
             L266 124
             L253 142
             L228 145
             L214 165
             L191 172
             L178 193
             L153 186
             L142 166
             L119 158
             Z"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="1"
        />

        {/* Central America */}
        <path
          d="M207 175
             C218 183 226 194 232 207
             L242 223
             L232 232
             L220 218
             L211 201
             L198 187
             Z"
          stroke="rgba(255,255,255,0.13)"
          strokeWidth="1"
        />

        {/* South America */}
        <path
          d="M254 239
             C276 229 300 237 311 254
             C321 271 319 294 311 317
             C303 340 291 359 280 379
             L267 407
             L253 424
             L244 405
             L248 382
             L238 358
             L243 335
             L236 313
             L244 291
             L239 270
             Z"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="1"
        />

        {/* Europe */}
        <path
          d="M432 128
             C447 116 465 111 482 115
             L498 125
             L514 120
             L527 129
             L519 141
             L499 145
             L486 155
             L467 151
             L453 143
             L435 146
             Z"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="1"
        />

        {/* Scandinavia */}
        <path
          d="M464 109
             L471 88
             L484 69
             L493 73
             L488 96
             L479 113"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
        />

        {/* Africa */}
        <path
          d="M455 176
             C478 162 505 165 522 183
             C538 200 541 225 535 249
             C529 273 515 296 501 316
             L487 338
             L473 327
             L465 306
             L449 286
             L447 263
             L438 240
             L442 215
             L435 195
             Z"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="1"
        />

        {/* Asia */}
        <path
          d="M519 128
             C546 111 574 103 607 108
             L641 116
             L669 109
             L704 118
             L732 132
             L762 137
             L789 154
             L779 172
             L754 177
             L733 190
             L709 184
             L688 194
             L663 184
             L640 190
             L619 177
             L591 181
             L568 169
             L542 166
             L528 151
             Z"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="1"
        />

        {/* India */}
        <path
          d="M635 184
             L656 190
             L671 206
             L664 221
             L650 238
             L641 256
             L631 242
             L623 224
             L614 211
             L620 196
             Z"
          stroke="rgba(226,177,141,0.35)"
          strokeWidth="1"
        />

        {/* Southeast Asia */}
        <path
          d="M685 213
             L704 220
             L713 237
             L707 251
             L696 244
             L688 257
             L678 248
             L682 232
             L672 222
             Z"
          stroke="rgba(255,255,255,0.13)"
          strokeWidth="1"
        />

        {/* Japan / islands */}
        <path
          d="M761 174
             L774 181
             L780 194
             L773 207
             L764 198
             L769 188
             Z"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
        />

        {/* Australia */}
        <path
          d="M700 342
             C721 327 750 326 774 337
             C796 347 806 366 799 386
             C791 407 769 419 744 420
             C719 421 695 410 686 393
             C678 377 684 355 700 342
             Z"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="1"
        />

        {/* New Zealand */}
        <path
          d="M816 395
             L827 402
             L832 416
             L825 427
             L816 417
             Z"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
        />

        {/* =====================================================
            LATITUDE LINES
        ===================================================== */}

        <path
          d="M75 205 C270 180 470 180 835 205"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />

        <path
          d="M70 280 C290 255 530 255 850 280"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />

        <path
          d="M85 355 C300 330 570 335 830 355"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />

        {/* =====================================================
            FLIGHT ROUTE
        ===================================================== */}

        <path
          d="M640 235
             C592 191 540 164 485 157
             C420 149 359 171 311 208
             C276 235 250 263 224 282"
          stroke="rgba(226,177,141,0.65)"
          strokeWidth="1.5"
          strokeDasharray="5 8"
        />

        {/* Route glow */}
        <path
          d="M640 235
             C592 191 540 164 485 157
             C420 149 359 171 311 208
             C276 235 250 263 224 282"
          stroke="rgba(184,117,67,0.18)"
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* Origin */}
        <circle cx="640" cy="235" r="4" fill="#E2B18D" />

        <circle
          cx="640"
          cy="235"
          r="11"
          stroke="rgba(226,177,141,0.25)"
          strokeWidth="1"
        />

        {/* Destination */}
        <circle cx="224" cy="282" r="4" fill="#E2B18D" />

        <circle
          cx="224"
          cy="282"
          r="11"
          stroke="rgba(226,177,141,0.25)"
          strokeWidth="1"
        />

        {/* Animated route point */}
        <circle r="4" fill="#E2B18D" opacity="0.9">
          <animateMotion
            dur="7s"
            repeatCount="indefinite"
            path="M640 235 C592 191 540 164 485 157 C420 149 359 171 311 208 C276 235 250 263 224 282"
          />
        </circle>
      </svg>

      {/* Decorative destination labels */}
      <div className="absolute right-[10%] top-[34%]">
        <p className="font-sans text-[8px] uppercase tracking-[0.28em] text-white/25">
          Around the world
        </p>
      </div>

      <div className="absolute bottom-[18%] right-[31%]">
        <p className="font-sans text-[8px] uppercase tracking-[0.28em] text-[#E2B18D]/50">
          India
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   DESTINATION CARD
========================================================= */

function DestinationCard({
  destination,
}: {
  destination: {
    name: string;
    region: string;
    image: string;
  };
}) {
  return (
    <a href="/plan" className="group relative block overflow-hidden">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#E8E3DA]">
        <img
          src={destination.image}
          alt={destination.name}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07101F]/80 via-[#07101F]/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 font-sans text-[9px] uppercase tracking-[0.25em] text-white/55">
                {destination.region}
              </p>

              <h3 className="font-serif text-4xl font-light text-white sm:text-5xl">
                {destination.name}
              </h3>
            </div>

            <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/25 text-white/70 transition-all duration-300 group-hover:border-[#E2B18D] group-hover:bg-[#E2B18D] group-hover:text-[#101A2E]">
              ↗
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#101A2E]">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[720px] overflow-hidden bg-[#07101F] px-5 pb-24 pt-40 text-white sm:px-8 sm:pb-28 lg:px-12">
        {/* World map */}
        <WorldMapGraphic />

        {/* Soft vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#07101F] via-[#07101F]/85 to-[#07101F]/20" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1440px] items-center">
          <div className="grid w-full grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 xl:col-span-5">
              <p className="eyebrow mb-6 !text-[#E2B18D]">Destinations</p>

              <h1 className="display-heading text-7xl sm:text-8xl lg:text-[8rem]">
                Places
                <br />
                worth
                <br />
                <span className="italic text-[#E2B18D]">going.</span>
              </h1>

              <p className="mt-8 max-w-md font-sans text-sm leading-7 text-white/50 sm:text-base">
                From the mountains of India to cities, islands and landscapes
                around the world, discover a few places to start your next
                journey.
              </p>

              <a
                href="#india"
                className="group mt-9 inline-flex items-center gap-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-[#E2B18D]"
              >
                Explore destinations
                <span className="h-px w-8 bg-[#B87543] transition-all duration-300 group-hover:w-14" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom metadata */}
        <div className="absolute bottom-7 left-5 right-5 z-10 flex items-center justify-between sm:left-8 sm:right-8 lg:left-12 lg:right-12">
          <p className="font-sans text-[9px] uppercase tracking-[0.25em] text-white/25">
            India · International
          </p>

          <p className="font-sans text-[9px] uppercase tracking-[0.25em] text-white/25">
            01 / Destinations
          </p>
        </div>
      </section>

      {/* =========================================================
          INDIA
      ========================================================= */}
      <section
        id="india"
        className="bg-[#F7F5F0] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow mb-4">01 · India</p>

              <h2 className="display-heading text-6xl sm:text-7xl lg:text-[6rem]">
                Closer to
                <br />
                <span className="italic text-[#B87543]">home.</span>
              </h2>
            </div>

            <p className="max-w-sm font-sans text-xs leading-6 text-[#697181] sm:text-sm">
              India's landscapes change dramatically from one journey to the
              next. Find a place that feels right for the way you want to
              travel.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {indiaDestinations.map((destination) => (
              <DestinationCard
                key={destination.name}
                destination={destination}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          INTERNATIONAL
      ========================================================= */}
      <section className="bg-[#101A2E] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow mb-4 !text-[#E2B18D]">02 · International</p>

              <h2 className="display-heading text-6xl sm:text-7xl lg:text-[6rem]">
                Further
                <br />
                <span className="italic text-[#E2B18D]">away.</span>
              </h2>
            </div>

            <p className="max-w-sm font-sans text-xs leading-6 text-white/40 sm:text-sm">
              Different cultures, different landscapes, different ways of seeing
              the world. Start with a destination and we'll take it from there.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {internationalDestinations.map((destination) => (
              <DestinationCard
                key={destination.name}
                destination={destination}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          DON'T SEE YOUR DESTINATION
      ========================================================= */}
      <section className="bg-[#F7F5F0] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="border-y border-[#101A2E]/10 py-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <p className="eyebrow mb-4">And beyond</p>

                <h2 className="display-heading text-5xl sm:text-6xl">
                  Don't see your destination?
                </h2>
              </div>

              <div className="lg:col-span-5">
                <p className="font-sans text-sm leading-7 text-[#697181]">
                  That's okay. Tell us where you want to go and we'll start the
                  conversation from there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-[#07101F] px-5 py-28 text-white sm:px-8 sm:py-36 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-4xl">
            <p className="eyebrow mb-6 !text-[#E2B18D]">Start planning</p>

            <h2 className="display-heading text-6xl sm:text-7xl lg:text-[7.5rem]">
              Your destination
              <br />
              is only the
              <br />
              <span className="italic text-[#E2B18D]">beginning.</span>
            </h2>

            <p className="mt-8 max-w-lg font-sans text-sm leading-7 text-white/50 sm:text-base">
              Already know where you want to go? Tell us about it and let's
              start building your journey.
            </p>

            <a
              href="/plan"
              className="group mt-10 inline-flex items-center gap-5 bg-[#E2B18D] px-7 py-5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#07101F] transition-all duration-300 hover:bg-white"
            >
              Plan Your Journey
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <p className="mt-5 font-sans text-[9px] uppercase tracking-[0.18em] text-white/25">
              Or speak to us directly
            </p>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-[#E2B18D]"
            >
              WhatsApp · +91 97243 91674
            </a>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}
