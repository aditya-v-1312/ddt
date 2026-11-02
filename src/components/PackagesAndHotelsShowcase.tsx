"use client";

import React, { useState } from "react";
import Image from "next/image";
import { travelPackages, TravelPackage } from "@/data/packages";
import { destinationHotels, getHotelsByDestination } from "@/data/hotels";
import { useInquiry } from "@/context/InquiryContext";
import {
  Sparkles,
  Zap,
  Star,
  Hotel,
  Compass,
  Clock,
  ShieldCheck,
  Check,
  ArrowRight,
  PhoneCall,
  MessageSquare,
} from "lucide-react";

export default function PackagesAndHotelsShowcase() {
  const { openInquiry, openLastMinuteHotelDesk, openPackageInquiry } = useInquiry();
  const [activeTab, setActiveTab] = useState<string>("all");

  const tabs = [
    { id: "all", label: "All Curated Journeys" },
    { id: "dubai", label: "Dubai 🇦🇪" },
    { id: "europe", label: "Switzerland & Europe 🇨🇭" },
    { id: "maldives", label: "Maldives 🇲🇻" },
    { id: "bali", label: "Bali 🇮🇩" },
    { id: "kashmir", label: "Kashmir 🏔️" },
    { id: "singapore", label: "Singapore 🇸🇬" },
  ];

  const filteredPackages =
    activeTab === "all"
      ? travelPackages.slice(0, 6)
      : travelPackages.filter((pkg) => pkg.destinationId === activeTab);

  return (
    <section id="packages" className="relative py-24 sm:py-32 bg-[#050D1C] text-white overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#2F80FF]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[#B87543]/15 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. LAST-MINUTE URGENT HOTEL BOOKING DESK BANNER */}
        <div className="mb-20 rounded-3xl border border-red-500/40 bg-gradient-to-br from-red-950/40 via-[#0A162D] to-[#07101F] p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(220,38,38,0.15)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-red-950/50 px-3.5 py-1 text-[11px] font-mono uppercase tracking-widest text-red-300">
                <Zap size={13} className="text-red-400 animate-pulse" />
                <span>Urgent 24–48 Hour Travel Desk · Direct IATA Allocation</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl text-white font-light tracking-tight">
                Need a Hotel Tonight or Within 48 Hours?
              </h3>

              <p className="text-sm sm:text-base text-white/70 font-sans font-light leading-relaxed">
                Facing “Sold Out” notices on public booking apps? As an <strong>IATA Accredited Agency (IATA: 14039896)</strong>, our direct wholesale inventory desks access unpublished room allocations across <strong>2★, 3★, 4★, and 5★ hotels worldwide</strong> with instant confirmation.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-sans">
                <div className="flex items-center gap-2 text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  <span>Immediate Check-in</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>2★ to 5★ Guaranteed</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Wholesale Rates</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  <span>Express Visa Care</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
              <button
                type="button"
                onClick={() => openLastMinuteHotelDesk()}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 px-6 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                <Zap size={15} />
                <span>Book Last-Minute Hotel Desk</span>
              </button>

              <button
                type="button"
                onClick={() => openInquiry({ department: "ticketing", serviceType: "ticketing" })}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors"
              >
                <PhoneCall size={14} className="text-[#E2B18D]" />
                <span>Ticketing Desk: +91 70483 86900</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2. PACKAGES & HOTEL OPTIONS HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#E2B18D] text-xs font-mono uppercase tracking-[0.25em]">
            <Sparkles size={14} />
            <span>Curated Journeys & Hotel Tiers</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-light tracking-tight">
            Tailored Packages with 2★ to 5★ Hotel Choices
          </h2>

          <p className="text-base text-white/70 font-sans font-light">
            Every traveler has a distinct rhythm. Every package is completely customizable across <strong>2★ Budget Smart, 3★ Comfort, 4★ Premium Boutique, and 5★ Ultra Luxury</strong> stays.
          </p>

          {/* Destination Filter Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-sans uppercase tracking-wider transition-all ${
                  activeTab === tab.id
                    ? "bg-[#E2B18D] text-[#07101F] font-bold shadow-md"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3. PACKAGES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => {
            const hotels = getHotelsByDestination(pkg.destinationId);

            return (
              <div
                key={pkg.id}
                className="group relative rounded-3xl border border-white/15 bg-[#07101F]/90 hover:border-[#E2B18D]/70 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
              >
                {/* Golden Top Edge Accent */}
                <div className="h-1 bg-gradient-to-r from-transparent via-[#E2B18D] to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />

                <div className="p-7 space-y-5 flex-1">
                  {/* Category & Duration */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#E2B18D] uppercase tracking-wider font-semibold">
                      {pkg.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-white/60">
                      <Clock size={13} />
                      <span>{pkg.duration}</span>
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-serif text-2xl font-light text-white group-hover:text-[#E2B18D] transition-colors leading-snug">
                      {pkg.title}
                    </h3>
                    <p className="mt-2 text-xs text-white/60 font-sans line-clamp-2">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Highlights / Inclusions */}
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <p className="text-[10px] uppercase font-mono tracking-wider text-white/50">
                      Signature Inclusions:
                    </p>
                    <ul className="space-y-1.5 text-xs text-white/80 font-sans">
                      {pkg.inclusions.slice(0, 3).map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check size={14} className="text-[#E2B18D] flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hotel Star Options Selector Bar */}
                  <div className="pt-3 border-t border-white/10 space-y-2">
                    <p className="text-[10px] uppercase font-mono tracking-wider text-[#E2B18D] flex items-center gap-1.5">
                      <Hotel size={13} />
                      <span>Available Hotel Tiers (2★ to 5★):</span>
                    </p>
                    <div className="grid grid-cols-4 gap-1 text-center">
                      <div className="p-1.5 rounded-lg bg-purple-950/30 border border-purple-500/30 text-[10px] text-purple-200">
                        <span className="font-bold block">2★</span>
                        <span className="text-[8px] opacity-75">Smart</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-[10px] text-emerald-200">
                        <span className="font-bold block">3★</span>
                        <span className="text-[8px] opacity-75">Comfort</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-blue-950/30 border border-blue-500/30 text-[10px] text-blue-200">
                        <span className="font-bold block">4★</span>
                        <span className="text-[8px] opacity-75">Boutique</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-amber-950/30 border border-amber-500/30 text-[10px] text-amber-200">
                        <span className="font-bold block">5★</span>
                        <span className="text-[8px] opacity-75">Luxury</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => openPackageInquiry(pkg.title, pkg.destinationName, pkg.startingStar)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 hover:bg-[#E2B18D] hover:text-[#07101F] py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 group-hover:bg-[#E2B18D] group-hover:text-[#07101F]"
                  >
                    <MessageSquare size={14} />
                    <span>Personalize in Chatbot</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. CUSTOM INQUIRY BAR & WHATSAPP ACTION */}
        <div className="mt-16 p-8 rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-xl sm:text-2xl text-white font-light">
              Looking for a custom multi-country itinerary or specific hotel?
            </h4>
            <p className="text-xs sm:text-sm text-white/60 font-sans">
              Speak with our senior advisors. We craft multi-city flight routes, private villa bookings, and corporate group conferences.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => openInquiry({ serviceType: "holiday" })}
              className="inline-flex items-center gap-2 rounded-full bg-white text-[#07101F] hover:bg-[#E2B18D] px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              <Compass size={14} />
              <span>Start Personal Consultation</span>
            </button>
            <button
              type="button"
              onClick={() => openLastMinuteHotelDesk()}
              className="inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-red-950/40 hover:bg-red-600 text-red-200 hover:text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              <Zap size={14} />
              <span>Last-Minute Hotel Desk</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
