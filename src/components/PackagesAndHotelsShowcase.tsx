"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { travelPackages, TravelPackage, ItineraryDay } from "@/data/packages";
import { getHotelsByDestination, HotelOption } from "@/data/hotels";
import { useInquiry } from "@/context/InquiryContext";
import {
  Sparkles,
  Zap,
  Hotel,
  Compass,
  Clock,
  Check,
  ArrowRight,
  PhoneCall,
  MessageSquare,
  Calendar,
  MapPin,
  X,
  ChevronRight,
  Layers,
  Search,
  Star,
  Sun,
  Sunset,
  Moon,
  Globe,
  Palmtree,
  Landmark,
  Mountain,
  Building2,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";

type ThemeCategory = "all" | "island" | "culture" | "grand" | "himalayan" | "metro";

interface ThemeTab {
  id: ThemeCategory;
  label: string;
  icon: React.ReactNode;
  matchIds?: string[];
}

export default function PackagesAndHotelsShowcase() {
  const { openInquiry, openLastMinuteHotelDesk, openPackageInquiry } = useInquiry();

  // Search & Filter state
  const [selectedTheme, setSelectedTheme] = useState<ThemeCategory>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeDestinationFilter, setActiveDestinationFilter] = useState<string>("all");

  // Per-card selected hotel star tier (default to package's startingStar or 4★)
  const [cardStarTier, setCardStarTier] = useState<Record<string, 2 | 3 | 4 | 5>>({});

  // Modal state
  const [selectedPackageForModal, setSelectedPackageForModal] = useState<TravelPackage | null>(null);
  const [activeDayIndex, setActiveDayIndex] = useState<number>(0);
  const [modalStarTab, setModalStarTab] = useState<2 | 3 | 4 | 5>(4);

  const themeTabs: ThemeTab[] = [
    { id: "all", label: "All Expeditions", icon: <Globe size={14} /> },
    {
      id: "island",
      label: "Island & Beach",
      icon: <Palmtree size={14} />,
      matchIds: ["bali", "bali-malaysia", "phuket-krabi", "mauritius", "maldives", "thailand"],
    },
    {
      id: "culture",
      label: "Imperial & Heritage",
      icon: <Landmark size={14} />,
      matchIds: ["japan-tokyo-osaka", "china", "morocco", "russia", "egypt", "south-korea", "united-kingdom"],
    },
    {
      id: "grand",
      label: "Grand Multi-Country",
      icon: <Compass size={14} />,
      matchIds: ["grand-asia", "grand-europe", "central-europe", "singapore-malaysia", "hong-kong-macau"],
    },
    {
      id: "himalayan",
      label: "Himalayas & Nature",
      icon: <Mountain size={14} />,
      matchIds: ["kashmir-vaishno-devi", "uttarakhand", "sri-lanka", "georgia", "azerbaijan-baku"],
    },
    {
      id: "metro",
      label: "Futuristic Metropolises",
      icon: <Building2 size={14} />,
      matchIds: ["singapore", "dubai", "australia", "vietnam", "vietnam-hanoi-halong"],
    },
  ];

  // Destination Pills for secondary quick drill-down
  const destinationOptions = useMemo(() => {
    const map = new Map<string, string>();
    travelPackages.forEach((pkg) => {
      if (!map.has(pkg.destinationId)) {
        map.set(pkg.destinationId, pkg.destinationName);
      }
    });
    return Array.from(map.entries()).map(([id, name]) => ({ id, name }));
  }, []);

  // Filtered packages pipeline
  const filteredPackages = useMemo(() => {
    return travelPackages.filter((pkg) => {
      // 1. Theme Filter
      if (selectedTheme !== "all") {
        const theme = themeTabs.find((t) => t.id === selectedTheme);
        if (theme?.matchIds && !theme.matchIds.includes(pkg.destinationId)) {
          return false;
        }
      }

      // 2. Specific Destination Filter
      if (activeDestinationFilter !== "all" && pkg.destinationId !== activeDestinationFilter) {
        return false;
      }

      // 3. Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = pkg.title.toLowerCase().includes(q);
        const inDest = pkg.destinationName.toLowerCase().includes(q);
        const inDesc = pkg.description.toLowerCase().includes(q);
        const inTagline = pkg.tagline.toLowerCase().includes(q);
        const inItinerary = pkg.itinerary.some(
          (d) =>
            d.title.toLowerCase().includes(q) ||
            d.location.toLowerCase().includes(q) ||
            d.description.toLowerCase().includes(q)
        );
        if (!inTitle && !inDest && !inDesc && !inTagline && !inItinerary) {
          return false;
        }
      }

      return true;
    });
  }, [selectedTheme, activeDestinationFilter, searchQuery]);

  const handleStarTierChange = (packageId: string, star: 2 | 3 | 4 | 5) => {
    setCardStarTier((prev) => ({ ...prev, [packageId]: star }));
  };

  const openItineraryModal = (pkg: TravelPackage, initialDayIndex = 0) => {
    setSelectedPackageForModal(pkg);
    setActiveDayIndex(initialDayIndex);
    const selectedStar = cardStarTier[pkg.id] || pkg.startingStar || 4;
    setModalStarTab(selectedStar);
  };

  const closeItineraryModal = () => {
    setSelectedPackageForModal(null);
  };

  const getCardStar = (pkg: TravelPackage): 2 | 3 | 4 | 5 => {
    return cardStarTier[pkg.id] || pkg.startingStar || 4;
  };

  const getHotelsForTier = (pkg: TravelPackage, star: 2 | 3 | 4 | 5): HotelOption[] => {
    const destHotels = getHotelsByDestination(pkg.destinationId);
    if (!destHotels) return [];
    if (star === 5) return destHotels.hotels.star5;
    if (star === 4) return destHotels.hotels.star4;
    if (star === 3) return destHotels.hotels.star3;
    return destHotels.hotels.star2;
  };

  const extractRouteStops = (pkg: TravelPackage): string[] => {
    const stops: string[] = [];
    pkg.itinerary.forEach((d) => {
      const city = d.location.split(",")[0].trim();
      if (city && !stops.includes(city)) {
        stops.push(city);
      }
    });
    return stops.slice(0, 5);
  };

  const generateWhatsAppInquiryUrl = (pkg: TravelPackage, star: number) => {
    const message = encodeURIComponent(
      `Hello Darsh Dream Tours! I am interested in your "${pkg.title}" (${pkg.duration}) with ${star}-Star hotel tier. Could you please share availability, detailed inclusions, and customized pricing?`
    );
    return `https://wa.me/917487083499?text=${message}`;
  };

  return (
    <section id="packages" className="relative py-24 sm:py-32 bg-[#050D1C] text-white overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-[#2F80FF]/10 rounded-full blur-[160px]" />
        <div className="absolute top-2/3 -right-48 w-[500px] h-[500px] bg-[#B87543]/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================
            1. LAST-MINUTE URGENT HOTEL BOOKING BANNER
        ========================================================= */}
        <div className="mb-20 rounded-3xl border border-red-500/40 bg-gradient-to-br from-red-950/40 via-[#0A162D] to-[#07101F] p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(220,38,38,0.15)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-red-950/50 px-3.5 py-1 text-[11px] font-mono uppercase tracking-widest text-red-300">
                <Zap size={13} className="text-red-400 animate-pulse" />
                <span>Urgent 24–48 Hour Travel Desk · Direct Wholesale Inventory</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl text-white font-light tracking-tight">
                Need a Hotel Tonight or Within 48 Hours?
              </h3>

              <p className="text-sm sm:text-base text-white/70 font-sans font-light leading-relaxed">
                Facing “Sold Out” notices on public booking apps? Our direct wholesale inventory desks access unpublished room allocations across <strong>2★, 3★, 4★, and 5★ hotels worldwide</strong> with instant confirmation.
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
                  <span>Direct Desk Support</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[240px]">
              <button
                type="button"
                onClick={() => openLastMinuteHotelDesk()}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-sans text-xs uppercase tracking-wider font-bold py-4 px-6 shadow-lg shadow-red-900/30 transition-all hover:scale-[1.02]"
              >
                <Zap size={15} />
                <span>Book Urgent Room</span>
                <ArrowRight size={15} />
              </button>

              <a
                href="tel:+917048386900"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-sans text-xs uppercase tracking-wider font-semibold py-3.5 px-6 transition-all"
              >
                <PhoneCall size={14} className="text-red-400" />
                <span>Call Desk: +91 70483 86900</span>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================
            2. JOURNEY FINDER & CURATED PACKAGES HEADER
        ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#E2B18D] text-xs font-mono uppercase tracking-[0.25em]">
            <Sparkles size={14} />
            <span>Digital Travel Collection</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-light tracking-tight">
            Curated Expeditions &amp; Packages
          </h2>

          <p className="text-base text-white/70 font-sans font-light">
            Every itinerary is an authentic master-plan featuring curated day schedules, landmark entrances, private transfers, and flexible hotel tiers from <strong>2★ Smart to 5★ Ultra Luxury</strong>.
          </p>
        </div>

        {/* =========================================================
            3. INTERACTIVE JOURNEY CONTROLS (SEARCH & THEMES)
        ========================================================= */}
        <div className="mb-12 space-y-6">
          {/* Live Search & Summary Ribbon */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-3 sm:p-4 rounded-3xl bg-[#0A162D]/90 border border-white/10 backdrop-blur-xl shadow-xl">
            <div className="relative w-full md:max-w-md">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by country, city, or landmark (e.g. Tokyo, Eiffel Tower, Bali, Nile)..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/[0.05] border border-white/10 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#E2B18D] transition-colors font-sans"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                  aria-label="Clear Search"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            <div className="flex items-center gap-4 text-xs font-sans text-white/60">
              <span className="font-mono text-[#E2B18D] font-semibold">
                Showing {filteredPackages.length} of {travelPackages.length} Bespoke Journeys
              </span>

              {(selectedTheme !== "all" || activeDestinationFilter !== "all" || searchQuery) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedTheme("all");
                    setActiveDestinationFilter("all");
                    setSearchQuery("");
                  }}
                  className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white underline font-mono"
                >
                  <RotateCcw size={12} />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Travel Archetype / Theme Filter Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none items-center">
            {themeTabs.map((theme) => {
              const isActive = selectedTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => {
                    setSelectedTheme(theme.id);
                    setActiveDestinationFilter("all");
                  }}
                  className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl text-xs font-sans uppercase tracking-wider font-semibold transition-all whitespace-nowrap shadow-sm ${
                    isActive
                      ? "bg-[#E2B18D] text-[#07101F] shadow-lg shadow-[#E2B18D]/20 scale-[1.02]"
                      : "bg-white/[0.04] text-white/75 hover:bg-white/[0.08] hover:text-white border border-white/10"
                  }`}
                >
                  {theme.icon}
                  <span>{theme.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Destination Pill Chain */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E2B18D] whitespace-nowrap">
              Quick Filter:
            </span>
            <button
              type="button"
              onClick={() => setActiveDestinationFilter("all")}
              className={`px-3 py-1 rounded-xl text-[11px] font-mono transition-colors whitespace-nowrap ${
                activeDestinationFilter === "all"
                  ? "bg-white/20 text-white font-bold"
                  : "bg-white/5 text-white/60 hover:text-white"
              }`}
            >
              All Regions
            </button>
            {destinationOptions.map((dest) => (
              <button
                key={dest.id}
                type="button"
                onClick={() => setActiveDestinationFilter(dest.id)}
                className={`px-3 py-1 rounded-xl text-[11px] font-mono transition-colors whitespace-nowrap ${
                  activeDestinationFilter === dest.id
                    ? "bg-[#E2B18D]/25 text-[#E2B18D] border border-[#E2B18D]/50 font-bold"
                    : "bg-white/5 text-white/60 hover:text-white border border-white/5"
                }`}
              >
                {dest.name}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================================
            4. UNIQUE PACKAGE CARDS GRID
        ========================================================= */}
        {filteredPackages.length === 0 ? (
          <div className="text-center py-20 rounded-3xl border border-white/10 bg-[#0A162D]/50 p-8 space-y-4">
            <Compass size={40} className="mx-auto text-white/30" />
            <h3 className="font-serif text-2xl text-white font-light">No Journeys Match Your Search</h3>
            <p className="text-sm text-white/60 font-sans max-w-md mx-auto">
              We couldn't find any packages matching "{searchQuery}". You can clear your filters or request a bespoke custom itinerary tailored from scratch.
            </p>
            <div className="pt-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedTheme("all");
                  setActiveDestinationFilter("all");
                  setSearchQuery("");
                }}
                className="px-6 py-2.5 rounded-full bg-[#E2B18D] text-[#07101F] text-xs uppercase tracking-wider font-bold"
              >
                Reset All Filters
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPackages.map((pkg) => {
              const currentStar = getCardStar(pkg);
              const tierHotels = getHotelsForTier(pkg, currentStar);
              const routeStops = extractRouteStops(pkg);
              const waUrl = generateWhatsAppInquiryUrl(pkg, currentStar);

              return (
                <div
                  key={pkg.id}
                  className="group relative rounded-3xl border border-white/15 bg-gradient-to-b from-[#0A162D] via-[#07101F] to-[#050D1C] hover:border-[#E2B18D]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                >
                  {/* Top Edge Metallic Accent */}
                  <div className="h-1 bg-gradient-to-r from-transparent via-[#E2B18D] to-transparent opacity-30 group-hover:opacity-100 transition-opacity" />

                  {/* Hero Cover Image Slot */}
                  {pkg.coverImage && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0A162D]">
                      <Image
                        src={pkg.coverImage}
                        alt={pkg.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Atmospheric Gradients */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A162D] via-[#07101F]/40 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-full bg-[#07101F]/85 backdrop-blur-md border border-white/15 text-[#E2B18D] font-mono text-[11px] font-semibold uppercase tracking-wider shadow-md">
                            {pkg.type}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#07101F]/85 backdrop-blur-md border border-white/15 text-white font-mono text-[11px] flex items-center gap-1.5 shadow-md">
                            <Clock size={12} className="text-[#E2B18D]" />
                            <span>{pkg.duration}</span>
                          </span>
                        </div>

                        <span className="px-3 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 text-emerald-300 font-mono text-[10px] uppercase font-semibold">
                          ★ 2★ to 5★ Ready
                        </span>
                      </div>

                      {/* Bottom Title Overlay */}
                      <div className="absolute bottom-4 left-6 right-6">
                        <p className="font-mono text-xs uppercase tracking-widest text-[#E2B18D] drop-shadow-sm">
                          {pkg.destinationName}
                        </p>
                        <h3 className="font-serif text-2xl sm:text-3xl text-white font-light mt-1 drop-shadow-md">
                          {pkg.title}
                        </h3>
                      </div>
                    </div>
                  )}

                  {/* Card Main Body */}
                  <div className="p-6 sm:p-7 space-y-5 flex-1">
                    {/* Route Progression Breadcrumb Ribbon */}
                    {routeStops.length > 0 && (
                      <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 flex items-center gap-1">
                            <MapPin size={11} className="text-[#E2B18D]" />
                            <span>Expedition Route Map:</span>
                          </span>
                          <span className="text-[10px] font-mono text-[#E2B18D]">
                            {pkg.itinerary.length} Days
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5 text-xs font-sans text-white/80">
                          {routeStops.map((stop, sIdx) => (
                            <React.Fragment key={stop}>
                              <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white font-medium text-[11px]">
                                {stop}
                              </span>
                              {sIdx < routeStops.length - 1 && (
                                <ChevronRight size={12} className="text-[#E2B18D]" />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Brief Narrative */}
                    <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed line-clamp-3">
                      {pkg.description}
                    </p>

                    {/* Inclusions Highlights */}
                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <p className="text-[10px] uppercase font-mono tracking-wider text-white/50">
                        Signature Master-Plan Inclusions:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/80 font-sans">
                        {pkg.inclusions.slice(0, 4).map((inc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check size={13} className="text-[#E2B18D] flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-2 leading-tight">{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Interactive Hotel Tier Switcher (Directly on the Card!) */}
                    <div className="pt-3 border-t border-white/10 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-white/50 flex items-center gap-1.5">
                          <Hotel size={13} className="text-[#E2B18D]" />
                          <span>Explore Hotel Tier &amp; Properties:</span>
                        </span>
                        <span className="text-[10px] font-mono text-[#E2B18D]">
                          Selected: {currentStar}★ Tier
                        </span>
                      </div>

                      {/* Star Buttons */}
                      <div className="grid grid-cols-4 gap-1.5">
                        {([2, 3, 4, 5] as const).map((star) => {
                          const isSelected = currentStar === star;
                          const starLabel =
                            star === 5 ? "Luxury" : star === 4 ? "Boutique" : star === 3 ? "Comfort" : "Smart";
                          return (
                            <button
                              key={star}
                              type="button"
                              onClick={() => handleStarTierChange(pkg.id, star)}
                              className={`p-2 rounded-xl text-center transition-all ${
                                isSelected
                                  ? "bg-[#E2B18D] text-[#07101F] font-bold shadow-md scale-[1.02]"
                                  : "bg-white/[0.04] hover:bg-white/[0.08] text-white/70 border border-white/10"
                              }`}
                            >
                              <span className="text-xs block font-bold">
                                {star}★
                              </span>
                              <span className="text-[8px] uppercase tracking-wider block opacity-80">
                                {starLabel}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Dynamic Featured Property for the Selected Star */}
                      <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-xs font-sans">
                        {tierHotels.length > 0 ? (
                          <div className="space-y-1">
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="font-semibold text-white truncate max-w-[80%]">
                                {tierHotels[0].name}
                              </span>
                              <span className="font-mono text-[#E2B18D] text-[10px]">
                                {tierHotels[0].location.split(",")[0]}
                              </span>
                            </div>
                            <p className="text-[10px] text-white/60 line-clamp-1 italic">
                              "{tierHotels[0].tagline}"
                            </p>
                          </div>
                        ) : (
                          <p className="text-[11px] text-white/50 italic">
                            Handpicked {currentStar}★ hotels verified by Darsh Dream Tours wholesale desk.
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Day-by-Day Interactive Sneak Peek Ribbon */}
                    {pkg.itinerary && pkg.itinerary.length > 0 && (
                      <div className="pt-3 border-t border-white/10 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase font-mono tracking-wider text-[#E2B18D] flex items-center gap-1.5">
                            <Calendar size={12} />
                            <span>Full Day-by-Day Schedule ({pkg.itinerary.length} Days)</span>
                          </span>
                          <button
                            type="button"
                            onClick={() => openItineraryModal(pkg, 0)}
                            className="text-[11px] text-[#E2B18D] hover:underline inline-flex items-center gap-0.5 font-sans"
                          >
                            <span>Open Digital Dossier</span>
                            <ChevronRight size={12} />
                          </button>
                        </div>

                        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                          {pkg.itinerary.map((day, idx) => (
                            <button
                              key={day.day}
                              type="button"
                              onClick={() => openItineraryModal(pkg, idx)}
                              className="px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] font-mono text-white/70 whitespace-nowrap text-left transition-colors flex-shrink-0"
                            >
                              <span className="text-[#E2B18D] font-bold">D{day.day}:</span>{" "}
                              <span>{day.location.split(",")[0]}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-6 pt-0 flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => openItineraryModal(pkg, 0)}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/15 py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300"
                    >
                      <Layers size={14} className="text-[#E2B18D]" />
                      <span>Day-by-Day Dossier</span>
                    </button>

                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#E2B18D] text-[#07101F] hover:bg-white py-3.5 px-4 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
                    >
                      <MessageSquare size={14} />
                      <span>Book on WhatsApp</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* =========================================================
            5. BESPOKE CUSTOM JOURNEY CONCIERGE BANNER
        ========================================================= */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl border border-white/15 bg-gradient-to-r from-[#0A162D] via-[#07101F] to-[#0A162D] backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#E2B18D] text-xs font-mono uppercase tracking-widest">
              <ShieldCheck size={14} />
              <span>Tailor-Made Tour Architect</span>
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl text-white font-light">
              Designing a Multi-Country Expedition or Private Family Retreat?
            </h4>
            <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
              We customize flights, private chauffeur transfers, VIP sightseeing access, and multi-star combinations across any destinations you envision.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => openInquiry({ serviceType: "holiday" })}
              className="inline-flex items-center gap-2 rounded-full bg-white text-[#07101F] hover:bg-[#E2B18D] px-7 py-3.5 text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:scale-[1.02]"
            >
              <Compass size={14} />
              <span>Start Custom Inquiry</span>
            </button>
            <a
              href="https://wa.me/917487083499?text=Hello%20Darsh%20Dream%20Tours%2C%20I%20would%20like%20to%20plan%20a%20tailor-made%20custom%20holiday%20itinerary."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-950/40 hover:bg-emerald-600 text-emerald-200 hover:text-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              <MessageSquare size={14} />
              <span>WhatsApp Tours Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================
          6. DIGITAL TRAVEL DOSSIER MODAL (DAY-BY-DAY + HOTELS)
      ========================================================= */}
      {selectedPackageForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 overflow-y-auto">
          <div className="relative w-full max-w-4xl rounded-3xl border border-white/20 bg-[#07101F] text-white shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#0A162D]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-[#E2B18D] uppercase tracking-widest font-semibold">
                    {selectedPackageForModal.destinationName}
                  </span>
                  <span className="text-white/30">·</span>
                  <span className="text-[11px] font-mono text-white/70">
                    {selectedPackageForModal.duration}
                  </span>
                  <span className="text-white/30">·</span>
                  <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] font-mono text-[#E2B18D]">
                    {selectedPackageForModal.type}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-white">
                  {selectedPackageForModal.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={closeItineraryModal}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close Dossier Modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Day Selector Ribbon */}
            <div className="p-4 border-b border-white/10 bg-[#050D1C] overflow-x-auto flex gap-2 scrollbar-none">
              {selectedPackageForModal.itinerary.map((day, idx) => (
                <button
                  key={day.day}
                  type="button"
                  onClick={() => setActiveDayIndex(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
                    activeDayIndex === idx
                      ? "bg-[#E2B18D] text-[#07101F] font-bold shadow-md"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  <span>Day {day.day}</span>
                  <span className="text-[10px] opacity-75">· {day.location.split(",")[0]}</span>
                </button>
              ))}
            </div>

            {/* Active Day Narrative Content */}
            {selectedPackageForModal.itinerary[activeDayIndex] && (
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
                {(() => {
                  const currentDay = selectedPackageForModal.itinerary[activeDayIndex];
                  return (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                      {/* Photo Slot for that Day (5 cols) */}
                      <div className="md:col-span-5 space-y-3">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 bg-[#0A162D] shadow-lg">
                          {currentDay.image ? (
                            <Image
                              src={currentDay.image}
                              alt={currentDay.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 40vw"
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-[#0A162D] text-white/40">
                              <Compass size={32} />
                            </div>
                          )}
                          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono font-semibold text-[#E2B18D]">
                            Day 0{currentDay.day}
                          </div>
                        </div>

                        <p className="text-[11px] text-white/60 font-sans flex items-center gap-1.5">
                          <MapPin size={13} className="text-[#E2B18D]" />
                          <span>{currentDay.location}</span>
                        </p>
                      </div>

                      {/* Day Breakdown Schedule (7 cols) */}
                      <div className="md:col-span-7 space-y-4">
                        <div>
                          <h4 className="font-serif text-2xl text-white font-light">
                            {currentDay.title}
                          </h4>
                          <p className="text-xs text-[#E2B18D] font-mono mt-0.5">
                            {currentDay.location}
                          </p>
                        </div>

                        {/* Morning / Noon / Evening Schedule Blocks */}
                        <div className="space-y-2 pt-2">
                          {currentDay.fullDay && (
                            <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-xs font-sans">
                              <span className="text-[#E2B18D] font-mono text-[10px] uppercase font-bold block mb-1 flex items-center gap-1">
                                <Clock size={12} />
                                <span>Full-Day Excursion:</span>
                              </span>
                              <span className="text-white/90 leading-relaxed block">{currentDay.fullDay}</span>
                            </div>
                          )}

                          {currentDay.morning && (
                            <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-xs font-sans">
                              <span className="text-amber-300 font-mono text-[10px] uppercase font-bold block mb-1 flex items-center gap-1">
                                <Sun size={12} />
                                <span>Morning:</span>
                              </span>
                              <span className="text-white/90 leading-relaxed block">{currentDay.morning}</span>
                            </div>
                          )}

                          {currentDay.noonToEvening && (
                            <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-xs font-sans">
                              <span className="text-orange-300 font-mono text-[10px] uppercase font-bold block mb-1 flex items-center gap-1">
                                <Sunset size={12} />
                                <span>Afternoon to Evening:</span>
                              </span>
                              <span className="text-white/90 leading-relaxed block">{currentDay.noonToEvening}</span>
                            </div>
                          )}

                          {currentDay.evening && (
                            <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-xs font-sans">
                              <span className="text-indigo-300 font-mono text-[10px] uppercase font-bold block mb-1 flex items-center gap-1">
                                <Moon size={12} />
                                <span>Evening &amp; Night:</span>
                              </span>
                              <span className="text-white/90 leading-relaxed block">{currentDay.evening}</span>
                            </div>
                          )}
                        </div>

                        {/* Full Detailed Description */}
                        <div className="pt-2 border-t border-white/10">
                          <p className="text-xs sm:text-sm text-white/80 font-sans font-light leading-relaxed">
                            {currentDay.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* Accommodations Accordion Inside Modal */}
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <h5 className="font-serif text-lg text-white font-light flex items-center gap-2">
                      <Hotel size={16} className="text-[#E2B18D]" />
                      <span>Available Accommodations in {selectedPackageForModal.destinationName}</span>
                    </h5>

                    {/* Star Tier Tabs */}
                    <div className="flex gap-1">
                      {([2, 3, 4, 5] as const).map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setModalStarTab(s)}
                          className={`px-3 py-1 rounded-lg text-xs font-mono uppercase transition-colors ${
                            modalStarTab === s
                              ? "bg-[#E2B18D] text-[#07101F] font-bold"
                              : "bg-white/5 text-white/60 hover:text-white"
                          }`}
                        >
                          {s}★
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Hotels List for Active Modal Star */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {getHotelsForTier(selectedPackageForModal, modalStarTab).map((hotel, hIdx) => (
                      <div
                        key={hIdx}
                        className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-white text-xs">{hotel.name}</span>
                          <span className="font-mono text-[#E2B18D] text-[10px]">{hotel.stars}★ Tier</span>
                        </div>
                        <p className="text-[11px] text-white/50">{hotel.location}</p>
                        <p className="text-[11px] text-white/70 italic">"{hotel.tagline}"</p>
                        <div className="flex flex-wrap gap-1 pt-1">
                          {hotel.features.slice(0, 3).map((f, fi) => (
                            <span
                              key={fi}
                              className="px-2 py-0.5 rounded-md bg-white/5 text-[9px] font-mono text-white/60"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Modal Bottom Action Controls */}
            <div className="p-6 border-t border-white/10 bg-[#0A162D] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={activeDayIndex === 0}
                  onClick={() => setActiveDayIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/15 text-xs font-mono uppercase disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  ← Prev Day
                </button>
                <button
                  type="button"
                  disabled={activeDayIndex === selectedPackageForModal.itinerary.length - 1}
                  onClick={() =>
                    setActiveDayIndex((prev) =>
                      Math.min(selectedPackageForModal.itinerary.length - 1, prev + 1)
                    )
                  }
                  className="px-4 py-2.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/15 text-xs font-mono uppercase disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Next Day →
                </button>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={generateWhatsAppInquiryUrl(selectedPackageForModal, modalStarTab)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#E2B18D] text-[#07101F] hover:bg-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  <MessageSquare size={14} />
                  <span>Book with {modalStarTab}★ Hotels on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
