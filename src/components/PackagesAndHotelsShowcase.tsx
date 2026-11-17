"use client";

import React, { useState, useMemo, useDeferredValue } from "react";
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

// Curated high-resolution preview photos for hotel star tiers
const STAR_TIER_IMAGES: Record<number, string> = {
  5: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=85", // 5-Star Oceanfront Luxury Suite
  4: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=85", // 4-Star Chic Boutique Resort (Default)
  3: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=85", // 3-Star Modern Comfort Room
};

export default function PackagesAndHotelsShowcase() {
  const { openInquiry, openLastMinuteHotelDesk, openPackageInquiry } = useInquiry();

  // Search & Filter state
  const [selectedTheme, setSelectedTheme] = useState<ThemeCategory>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const deferredSearch = useDeferredValue(searchQuery);
  const [activeDestinationFilter, setActiveDestinationFilter] = useState<string>("all");

  // Per-card selected hotel star tier (defaults to 4★)
  const [cardStarTier, setCardStarTier] = useState<Record<string, 3 | 4 | 5>>({});

  // Modal state
  const [selectedPackageForModal, setSelectedPackageForModal] = useState<TravelPackage | null>(null);
  const [activeDayIndex, setActiveDayIndex] = useState<number>(0);
  const [modalStarTab, setModalStarTab] = useState<3 | 4 | 5>(4);

  const themeTabs: ThemeTab[] = [
    { id: "all", label: "All Expeditions", icon: <Globe size={16} /> },
    {
      id: "island",
      label: "Island & Beach",
      icon: <Palmtree size={16} />,
      matchIds: ["bali", "bali-malaysia", "phuket-krabi", "mauritius", "maldives", "thailand", "andaman", "andaman-islands"],
    },
    {
      id: "culture",
      label: "Imperial & Heritage",
      icon: <Landmark size={16} />,
      matchIds: ["japan-tokyo-osaka", "china", "morocco", "russia", "egypt", "south-korea", "united-kingdom", "puri", "puri-odisha"],
    },
    {
      id: "grand",
      label: "Grand Multi-Country",
      icon: <Compass size={16} />,
      matchIds: ["grand-asia", "grand-europe", "central-europe", "singapore-malaysia", "hong-kong-macau"],
    },
    {
      id: "himalayan",
      label: "Himalayas & Nature",
      icon: <Mountain size={16} />,
      matchIds: ["kashmir", "kashmir-vaishno-devi", "kashmir-scenic-escape", "uttarakhand", "sri-lanka", "georgia", "azerbaijan-baku"],
    },
    {
      id: "metro",
      label: "Futuristic Metropolises",
      icon: <Building2 size={16} />,
      matchIds: ["singapore", "dubai", "australia", "vietnam", "vietnam-hanoi-halong"],
    },
  ];

  // Destination options for secondary quick drill-down
  const destinationOptions = useMemo(() => {
    const map = new Map<string, string>();
    travelPackages.forEach((pkg) => {
      if (!map.has(pkg.destinationId)) {
        map.set(pkg.destinationId, pkg.destinationName);
      }
    });
    return Array.from(map.entries()).map(([id, name]) => ({ id, name }));
  }, []);

  // Pre-compiled search index for instant zero-lag filtering
  const packageSearchIndex = useMemo(() => {
    const map = new Map<string, string>();
    travelPackages.forEach((pkg) => {
      const stops = pkg.itinerary.map((d) => `${d.title} ${d.location}`).join(" ");
      const combined = `${pkg.title} ${pkg.destinationName} ${pkg.tagline} ${pkg.description} ${stops}`.toLowerCase();
      map.set(pkg.id, combined);
    });
    return map;
  }, []);

  // Filtered packages pipeline
  const filteredPackages = useMemo(() => {
    const cleanQuery = deferredSearch.toLowerCase().trim();

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

      // 3. Search query (matches indexed content instantaneously)
      if (cleanQuery) {
        const indexText = packageSearchIndex.get(pkg.id) || "";
        if (!indexText.includes(cleanQuery)) {
          return false;
        }
      }

      return true;
    });
  }, [selectedTheme, activeDestinationFilter, deferredSearch, packageSearchIndex]);

  const handleStarTierChange = (packageId: string, star: 3 | 4 | 5) => {
    setCardStarTier((prev) => ({ ...prev, [packageId]: star }));
  };

  const openItineraryModal = (pkg: TravelPackage, initialDayIndex = 0) => {
    setSelectedPackageForModal(pkg);
    setActiveDayIndex(initialDayIndex);
    const selectedStar = cardStarTier[pkg.id] || (pkg.startingStar === 5 ? 5 : 4);
    setModalStarTab(selectedStar);
  };

  const closeItineraryModal = () => {
    setSelectedPackageForModal(null);
  };

  const getCardStar = (pkg: TravelPackage): 3 | 4 | 5 => {
    return cardStarTier[pkg.id] || (pkg.startingStar === 5 ? 5 : 4);
  };

  const getHotelsForTier = (pkg: TravelPackage, star: 3 | 4 | 5): HotelOption[] => {
    const destHotels = getHotelsByDestination(pkg.destinationId);
    if (!destHotels) return [];
    if (star === 5) return destHotels.hotels.star5;
    if (star === 4) return destHotels.hotels.star4;
    return destHotels.hotels.star3;
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
      `Hello Darsh Dream Tours! I would like to book the "${pkg.title}" (${pkg.duration}) with ${star}-Star hotel accommodation. Could you please share the exact dates availability, full itinerary quote, and pricing?`
    );
    return `https://wa.me/917487083499?text=${message}`;
  };

  return (
    <section id="packages" className="relative py-28 sm:py-36 bg-[#0C1E3D] text-white overflow-hidden">
      {/* Radiant vibrant background ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-[650px] h-[650px] bg-gradient-to-br from-amber-500/20 to-orange-600/10 rounded-full blur-[160px]" />
        <div className="absolute top-2/3 -right-48 w-[650px] h-[650px] bg-gradient-to-br from-sky-500/20 to-indigo-600/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-1/3 w-[550px] h-[550px] bg-emerald-500/15 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================
            1. LAST-MINUTE URGENT HOTEL BOOKING BANNER
        ========================================================= */}
        <div className="mb-24 rounded-3xl border-2 border-red-500/60 bg-gradient-to-br from-red-950/60 via-[#0C1A35] to-[#061022] p-8 sm:p-12 shadow-[0_20px_70px_rgba(239,68,68,0.25)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500 bg-red-600 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-white font-bold shadow-md">
                <Zap size={14} className="text-white animate-pulse" />
                <span>Urgent 24–48 Hour Travel Desk · Direct Wholesale Allocations</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-5xl text-white font-light tracking-tight leading-tight">
                Need a Hotel Tonight or Within 48 Hours?
              </h3>

              <p className="text-base sm:text-lg text-white/85 font-sans font-normal leading-relaxed">
                Facing “Sold Out” notices on public booking apps? Our direct wholesale inventory desks access unpublished room allocations across <strong>3★, 4★, and 5★ hotels worldwide</strong> with instant confirmation.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-sm font-sans font-medium">
                <div className="flex items-center gap-2 text-white/90">
                  <span className="h-2 w-2 rounded-full bg-red-400 animate-ping" />
                  <span>Immediate Check-in</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span>3★ to 5★ Guaranteed</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span>Wholesale Rates</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                  <span>Direct Desk Support</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 min-w-[260px]">
              <button
                type="button"
                onClick={() => openLastMinuteHotelDesk()}
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-red-600 via-amber-600 to-red-600 hover:from-red-500 hover:to-amber-500 text-white font-sans text-sm uppercase tracking-wider font-extrabold py-4 px-8 shadow-xl shadow-red-900/40 transition-all hover:scale-[1.02]"
              >
                <Zap size={16} />
                <span>Book Urgent Room</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="tel:+917048386900"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white font-sans text-xs sm:text-sm uppercase tracking-wider font-bold py-3.5 px-6 transition-all"
              >
                <PhoneCall size={15} className="text-red-400" />
                <span>Call Desk: +91 70483 86900</span>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================
            2. VIBRANT HEADER & SEARCH
        ========================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-14 space-y-5">
          <div className="inline-flex items-center gap-2 text-amber-300 text-sm sm:text-base font-mono uppercase tracking-[0.25em] font-bold bg-amber-500/10 border border-amber-400/30 px-5 py-2 rounded-full">
            <Sparkles size={16} className="text-amber-400 animate-pulse" />
            <span>Official Curated Expeditions · 27 Master Packages</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-light tracking-tight leading-tight">
            Curated Tour Packages &amp; Stays
          </h2>

          <p className="text-lg sm:text-xl text-white/90 font-sans font-light leading-relaxed">
            Every itinerary is an authentic master-plan featuring curated day schedules, landmark entrances, private transfers, and flexible hotel tiers from <strong>3★ Comfort &amp; 4★ Boutique to 5★ Ultra Luxury</strong>.
          </p>
        </div>

        {/* =========================================================
            3. INTERACTIVE CONTROLS (SEARCH & THEMES)
        ========================================================= */}
        <div className="mb-14 space-y-6">
          {/* Live Search & Summary Ribbon */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-[#122A56] via-[#0E2246] to-[#122A56] border-2 border-amber-500/30 shadow-xl">
            <div className="relative w-full md:max-w-xl">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    (e.target as HTMLInputElement).blur();
                  }
                }}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck={false}
                placeholder="Search by country, city, or landmark (e.g. Tokyo, Eiffel Tower, Bali, Nile, Alps)..."
                className="w-full pl-12 pr-12 py-4 rounded-2xl bg-[#0D2040] border-2 border-white/20 text-base sm:text-lg text-white placeholder-white/45 focus:outline-none focus:border-amber-400 font-sans font-medium transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
                  aria-label="Clear Search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="flex items-center gap-4 text-sm font-sans text-white/80 shrink-0">
              <span className="font-mono text-amber-300 font-bold text-base sm:text-lg whitespace-nowrap">
                Showing {filteredPackages.length} of {travelPackages.length} Expeditions
              </span>

              <button
                type="button"
                onClick={() => {
                  setSelectedTheme("all");
                  setActiveDestinationFilter("all");
                  setSearchQuery("");
                }}
                className={`inline-flex items-center gap-1.5 text-sm text-amber-200 hover:text-white underline font-mono font-bold transition-opacity ${
                  selectedTheme !== "all" || activeDestinationFilter !== "all" || searchQuery
                    ? "opacity-100 cursor-pointer"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <RotateCcw size={14} />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Travel Archetype / Theme Filter Pills */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none items-center">
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
                  className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-sans uppercase tracking-wider font-extrabold transition-all whitespace-nowrap shadow-md ${
                    isActive
                      ? "bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 shadow-xl shadow-amber-500/30 scale-[1.04]"
                      : "bg-[#0D2144]/90 text-white/90 hover:bg-[#163366] hover:text-white border-2 border-amber-500/25"
                  }`}
                >
                  {theme.icon}
                  <span>{theme.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Destination Pill Chain */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none text-sm">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold whitespace-nowrap">
              Quick Filter:
            </span>
            <button
              type="button"
              onClick={() => setActiveDestinationFilter("all")}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-mono transition-colors whitespace-nowrap font-bold ${
                activeDestinationFilter === "all"
                  ? "bg-amber-400 text-slate-950 shadow-md"
                  : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
              }`}
            >
              All Regions
            </button>
            {destinationOptions.map((dest) => (
              <button
                key={dest.id}
                type="button"
                onClick={() => setActiveDestinationFilter(dest.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-mono transition-colors whitespace-nowrap font-semibold ${
                  activeDestinationFilter === dest.id
                    ? "bg-amber-400/30 text-amber-300 border-2 border-amber-400 font-bold shadow-sm"
                    : "bg-white/5 text-white/70 hover:text-white border border-white/10"
                }`}
              >
                {dest.name}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================================
            4. VIBRANT PACKAGE CARDS (LARGER FONTS + HIGH CONTRAST)
        ========================================================= */}
        <div className="min-h-[600px] transition-all duration-300">
          {filteredPackages.length === 0 ? (
            <div className="text-center py-24 rounded-3xl border-2 border-white/15 bg-[#122A56]/60 p-10 space-y-5">
              <Compass size={48} className="mx-auto text-amber-400/60" />
              <h3 className="font-serif text-3xl text-white font-light">No Journeys Match Your Search</h3>
              <p className="text-base text-white/70 font-sans max-w-lg mx-auto">
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
                  className="px-8 py-3 rounded-full bg-amber-400 text-slate-950 text-sm uppercase tracking-wider font-extrabold shadow-lg shadow-amber-500/30"
                >
                  Reset All Filters
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredPackages.map((pkg) => {
              const currentStar = getCardStar(pkg);
              const tierHotels = getHotelsForTier(pkg, currentStar);
              const routeStops = extractRouteStops(pkg);
              const waUrl = generateWhatsAppInquiryUrl(pkg, currentStar);
              const tierImage = STAR_TIER_IMAGES[currentStar];

              return (
                <div
                  key={pkg.id}
                  className="group relative rounded-3xl border-2 border-amber-500/25 bg-gradient-to-b from-[#0E2040] via-[#0E2246] to-[#0A1A36] hover:border-amber-400 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.65)] hover:shadow-[0_25px_70px_rgba(245,158,11,0.22)]"
                >
                  {/* Top Glowing Metallic Accent */}
                  <div className="h-1.5 bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 opacity-80 group-hover:opacity-100 transition-opacity" />

                  {/* Hero Cover Image Slot */}
                  {pkg.coverImage && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#11264E]">
                      <Image
                        src={pkg.coverImage}
                        alt={pkg.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        priority={false}
                      />
                      {/* Rich Dual-Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E2040] via-[#0E2246]/40 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="px-3.5 py-1.5 rounded-full bg-amber-400 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider shadow-lg">
                            {pkg.type}
                          </span>
                          <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white font-mono text-xs flex items-center gap-1.5 shadow-lg">
                            <Clock size={13} className="text-amber-400" />
                            <span>{pkg.duration}</span>
                          </span>
                        </div>

                        <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-mono text-xs uppercase font-extrabold shadow-lg">
                          ★ 3★ to 5★ Ready
                        </span>
                      </div>

                      {/* Bottom Title Overlay */}
                      <div className="absolute bottom-5 left-6 right-6">
                        <p className="font-mono text-sm sm:text-base uppercase tracking-widest text-amber-300 font-bold drop-shadow-md">
                          {pkg.destinationName}
                        </p>
                        <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.35rem] text-white font-normal mt-1 drop-shadow-lg leading-tight">
                          {pkg.title}
                        </h3>
                      </div>
                    </div>
                  )}

                  {/* Card Main Body */}
                  <div className="p-7 sm:p-8 space-y-6 flex-1">
                    {/* Route Progression Breadcrumb Ribbon */}
                    {routeStops.length > 0 && (
                      <div className="p-3.5 rounded-2xl bg-amber-500/[0.08] border border-amber-400/30 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono uppercase tracking-widest text-amber-300 font-bold flex items-center gap-1.5">
                            <MapPin size={13} className="text-amber-400" />
                            <span>Expedition Route Map:</span>
                          </span>
                          <span className="text-xs font-mono text-amber-300 font-bold">
                            {pkg.itinerary.length} Days Itinerary
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-sans font-semibold text-white">
                          {routeStops.map((stop, sIdx) => (
                            <React.Fragment key={stop}>
                              <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/20 text-white font-medium">
                                {stop}
                              </span>
                              {sIdx < routeStops.length - 1 && (
                                <ChevronRight size={14} className="text-amber-400" />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Brief Narrative - Larger Font */}
                    <p className="text-sm sm:text-base text-white/85 font-sans leading-relaxed line-clamp-3">
                      {pkg.description}
                    </p>

                    {/* Inclusions Highlights */}
                    <div className="space-y-2.5 pt-3 border-t border-white/15">
                      <p className="text-xs uppercase font-mono tracking-wider text-amber-300 font-bold">
                        Signature Master-Plan Inclusions:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-white/90 font-sans">
                        {pkg.inclusions.slice(0, 4).map((inc, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <Check size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-2 leading-snug">{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Interactive Hotel Tier Switcher with Room Preview Image! */}
                    <div className="pt-3 border-t border-white/15 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase font-mono tracking-wider text-amber-300 font-bold flex items-center gap-1.5">
                          <Hotel size={15} className="text-amber-400" />
                          <span>Explore Hotel Tier &amp; Stays:</span>
                        </span>
                        <span className="text-xs font-mono text-amber-300 font-bold">
                          Selected: {currentStar}★ Tier
                        </span>
                      </div>

                      {/* Star Buttons */}
                      <div className="grid grid-cols-3 gap-2">
                        {([3, 4, 5] as const).map((star) => {
                          const isSelected = currentStar === star;
                          const starLabel =
                            star === 5 ? "Luxury" : star === 4 ? "Boutique (Default)" : "Comfort";
                          return (
                            <button
                              key={star}
                              type="button"
                              onClick={() => handleStarTierChange(pkg.id, star)}
                              className={`p-2.5 rounded-xl text-center transition-all ${
                                isSelected
                                  ? "bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/30 scale-[1.03]"
                                  : "bg-white/[0.06] hover:bg-white/[0.12] text-white/85 border border-white/15"
                              }`}
                            >
                              <span className="text-base sm:text-lg block font-extrabold leading-tight">
                                {star}★
                              </span>
                              <span className="text-[10px] sm:text-xs uppercase tracking-wider block font-semibold truncate">
                                {starLabel}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Featured Hotel Card with Photo Thumbnail! */}
                      <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-amber-400/25 flex items-center gap-3.5">
                        <div className="relative w-20 h-20 sm:w-24 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 border border-white/20 bg-slate-900">
                          <Image
                            src={tierImage}
                            alt={`${currentStar} Star Hotel`}
                            fill
                            sizes="100px"
                            className="object-cover"
                          />
                          <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 font-mono text-[9px] text-amber-300 font-bold">
                            {currentStar}★
                          </div>
                        </div>

                        <div className="flex-1 min-w-0 space-y-1">
                          {tierHotels.length > 0 ? (
                            <>
                              <div className="flex items-center justify-between gap-2">
                                <h4 className="font-bold text-white text-sm sm:text-base truncate">
                                  {tierHotels[0].name}
                                </h4>
                                <span className="font-mono text-amber-300 text-xs font-semibold whitespace-nowrap">
                                  {tierHotels[0].location.split(",")[0]}
                                </span>
                              </div>
                              <p className="text-xs sm:text-sm text-white/70 line-clamp-1 italic">
                                "{tierHotels[0].tagline}"
                              </p>
                            </>
                          ) : (
                            <p className="text-xs sm:text-sm text-white/70 italic">
                              Handpicked verified {currentStar}★ hotel allocations by Darsh Dream Tours wholesale desk.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Day-by-Day Interactive Ribbon */}
                    {pkg.itinerary && pkg.itinerary.length > 0 && (
                      <div className="pt-3 border-t border-white/15 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs uppercase font-mono tracking-wider text-amber-300 font-bold flex items-center gap-1.5">
                            <Calendar size={14} />
                            <span>Day-by-Day Schedule ({pkg.itinerary.length} Days)</span>
                          </span>
                          <button
                            type="button"
                            onClick={() => openItineraryModal(pkg, 0)}
                            className="text-xs sm:text-sm text-amber-300 hover:text-white underline inline-flex items-center gap-1 font-sans font-bold"
                          >
                            <span>Open Digital Dossier</span>
                            <ChevronRight size={14} />
                          </button>
                        </div>

                        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                          {pkg.itinerary.map((day, idx) => (
                            <button
                              key={day.day}
                              type="button"
                              onClick={() => openItineraryModal(pkg, idx)}
                              className="px-3 py-2 rounded-xl bg-white/10 hover:bg-amber-400 hover:text-slate-950 border border-white/15 text-xs font-mono text-white/90 whitespace-nowrap text-left transition-colors flex-shrink-0 font-medium"
                            >
                              <span className="text-amber-300 font-bold">D{day.day}:</span>{" "}
                              <span>{day.location.split(",")[0]}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-7 pt-0 flex flex-col sm:flex-row gap-3.5">
                    <button
                      type="button"
                      onClick={() => openItineraryModal(pkg, 0)}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/30 bg-white/10 hover:bg-white/20 py-4 px-5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300"
                    >
                      <Layers size={16} className="text-amber-400" />
                      <span>View Day-by-Day</span>
                    </button>

                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-500 text-white py-4 px-5 text-sm font-extrabold uppercase tracking-wider transition-all duration-300 shadow-xl shadow-emerald-900/30"
                    >
                      <MessageSquare size={16} />
                      <span>Book on WhatsApp</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

        {/* =========================================================
            5. BESPOKE CUSTOM JOURNEY CONCIERGE BANNER
        ========================================================= */}
        <div className="mt-24 p-8 sm:p-14 rounded-3xl border-2 border-amber-500/30 bg-gradient-to-r from-[#122A56] via-[#0E2246] to-[#122A56] backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-2xl">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-amber-300 text-xs sm:text-sm font-mono uppercase tracking-widest font-bold">
              <ShieldCheck size={16} />
              <span>Tailor-Made Tour Architect</span>
            </div>
            <h4 className="font-serif text-3xl sm:text-4xl text-white font-light">
              Designing a Multi-Country Expedition or Private Family Retreat?
            </h4>
            <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed">
              We customize flights, private chauffeur transfers, VIP sightseeing access, and multi-star combinations across any destinations you envision.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openInquiry({ serviceType: "holiday" })}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 px-8 py-4 text-sm font-extrabold uppercase tracking-wider transition-all shadow-xl shadow-amber-500/25 hover:scale-[1.03]"
            >
              <Compass size={16} />
              <span>Start Custom Inquiry</span>
            </button>
            <a
              href="https://wa.me/917487083499?text=Hello%20Darsh%20Dream%20Tours%2C%20I%20would%20like%20to%20plan%20a%20tailor-made%20custom%20holiday%20itinerary."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-emerald-400 bg-emerald-950/60 hover:bg-emerald-600 text-emerald-200 hover:text-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all shadow-md"
            >
              <MessageSquare size={16} />
              <span>WhatsApp Tours Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================
          6. DIGITAL TRAVEL DOSSIER MODAL (DAY-BY-DAY + HOTELS)
      ========================================================= */}
      {selectedPackageForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 overflow-y-auto">
          <div className="relative w-full max-w-4xl rounded-3xl border-2 border-amber-500/40 bg-[#0D2040] text-white shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-6 sm:p-8 border-b border-white/15 flex items-center justify-between bg-[#0B1A38]">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-mono text-amber-300 uppercase tracking-widest font-bold">
                    {selectedPackageForModal.destinationName}
                  </span>
                  <span className="text-white/40">·</span>
                  <span className="text-xs sm:text-sm font-mono text-white/80">
                    {selectedPackageForModal.duration}
                  </span>
                  <span className="text-white/40">·</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-xs font-mono font-bold">
                    {selectedPackageForModal.type}
                  </span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
                  {selectedPackageForModal.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={closeItineraryModal}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close Dossier Modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Day Selector Ribbon */}
            <div className="p-4 sm:p-5 border-b border-white/15 bg-[#0A1A36] overflow-x-auto flex gap-2.5 scrollbar-none">
              {selectedPackageForModal.itinerary.map((day, idx) => (
                <button
                  key={day.day}
                  type="button"
                  onClick={() => setActiveDayIndex(idx)}
                  className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-mono uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 font-bold ${
                    activeDayIndex === idx
                      ? "bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/30 scale-[1.02]"
                      : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border border-white/15"
                  }`}
                >
                  <span>Day {day.day}</span>
                  <span className="text-xs opacity-80">· {day.location.split(",")[0]}</span>
                </button>
              ))}
            </div>

            {/* Active Day Narrative Content */}
            {selectedPackageForModal.itinerary[activeDayIndex] && (
              <div className="p-6 sm:p-8 overflow-y-auto space-y-7 flex-1">
                {(() => {
                  const currentDay = selectedPackageForModal.itinerary[activeDayIndex];
                  const dayImg = currentDay.image || selectedPackageForModal.coverImage || STAR_TIER_IMAGES[5];

                  return (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                      {/* Photo Slot for that Day (5 cols) */}
                      <div className="md:col-span-5 space-y-3">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white/20 bg-[#11264E] shadow-xl">
                          <Image
                            src={dayImg}
                            alt={currentDay.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="object-cover"
                          />
                          <div className="absolute top-3 left-3 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-xs font-mono font-bold text-amber-300 border border-amber-400/30">
                            Day 0{currentDay.day}
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-white/80 font-sans flex items-center gap-1.5 font-medium">
                          <MapPin size={15} className="text-amber-400" />
                          <span>{currentDay.location}</span>
                        </p>
                      </div>

                      {/* Day Breakdown Schedule (7 cols) */}
                      <div className="md:col-span-7 space-y-5">
                        <div>
                          <h4 className="font-serif text-2xl sm:text-3xl text-white font-light">
                            {currentDay.title}
                          </h4>
                          <p className="text-sm text-amber-300 font-mono mt-1 font-semibold">
                            {currentDay.location}
                          </p>
                        </div>

                        {/* Morning / Noon / Evening Schedule Blocks */}
                        <div className="space-y-3 pt-2">
                          {currentDay.fullDay && (
                            <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/15 text-sm font-sans">
                              <span className="text-amber-300 font-mono text-xs uppercase font-bold block mb-1 flex items-center gap-1.5">
                                <Clock size={14} />
                                <span>Full-Day Excursion:</span>
                              </span>
                              <span className="text-white/95 leading-relaxed block">{currentDay.fullDay}</span>
                            </div>
                          )}

                          {currentDay.morning && (
                            <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/15 text-sm font-sans">
                              <span className="text-amber-300 font-mono text-xs uppercase font-bold block mb-1 flex items-center gap-1.5">
                                <Sun size={14} />
                                <span>Morning:</span>
                              </span>
                              <span className="text-white/95 leading-relaxed block">{currentDay.morning}</span>
                            </div>
                          )}

                          {currentDay.noonToEvening && (
                            <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/15 text-sm font-sans">
                              <span className="text-orange-300 font-mono text-xs uppercase font-bold block mb-1 flex items-center gap-1.5">
                                <Sunset size={14} />
                                <span>Afternoon to Evening:</span>
                              </span>
                              <span className="text-white/95 leading-relaxed block">{currentDay.noonToEvening}</span>
                            </div>
                          )}

                          {currentDay.evening && (
                            <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/15 text-sm font-sans">
                              <span className="text-sky-300 font-mono text-xs uppercase font-bold block mb-1 flex items-center gap-1.5">
                                <Moon size={14} />
                                <span>Evening &amp; Night:</span>
                              </span>
                              <span className="text-white/95 leading-relaxed block">{currentDay.evening}</span>
                            </div>
                          )}
                        </div>

                        {/* Full Detailed Description */}
                        <div className="pt-2 border-t border-white/15">
                          <p className="text-sm sm:text-base text-white/90 font-sans font-light leading-relaxed">
                            {currentDay.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* Accommodations with Visual Hotel Star Photos Inside Modal */}
                <div className="pt-7 border-t border-white/15 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <h5 className="font-serif text-xl sm:text-2xl text-white font-light flex items-center gap-2">
                      <Hotel size={18} className="text-amber-400" />
                      <span>Available Accommodations in {selectedPackageForModal.destinationName}</span>
                    </h5>

                    {/* Star Tier Tabs */}
                    <div className="flex gap-1.5">
                      {([3, 4, 5] as const).map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setModalStarTab(s)}
                          className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-mono uppercase font-bold transition-colors ${
                            modalStarTab === s
                              ? "bg-amber-400 text-slate-950 shadow-md"
                              : "bg-white/10 text-white/80 hover:text-white"
                          }`}
                        >
                          {s}★ {s === 4 ? "Tier (Default)" : "Tier"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Hotels List for Active Modal Star */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {getHotelsForTier(selectedPackageForModal, modalStarTab).map((hotel, hIdx) => (
                      <div
                        key={hIdx}
                        className="p-4 rounded-2xl bg-white/[0.05] border border-white/15 space-y-2 flex gap-3.5 items-start"
                      >
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-white/20 bg-slate-900 mt-1">
                          <Image
                            src={STAR_TIER_IMAGES[modalStarTab]}
                            alt={hotel.name}
                            fill
                            sizes="70px"
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0 space-y-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-bold text-white text-sm sm:text-base truncate">
                              {hotel.name}
                            </span>
                            <span className="font-mono text-amber-300 text-xs font-bold">
                              {hotel.stars}★
                            </span>
                          </div>
                          <p className="text-xs text-white/70">{hotel.location}</p>
                          <p className="text-xs text-white/80 italic line-clamp-2">"{hotel.tagline}"</p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {hotel.features.slice(0, 3).map((f, fi) => (
                              <span
                                key={fi}
                                className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-mono text-white/80 font-medium"
                              >
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Modal Bottom Action Controls */}
            <div className="p-6 sm:p-7 border-t border-white/15 bg-[#0B1A38] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  disabled={activeDayIndex === 0}
                  onClick={() => setActiveDayIndex((prev) => Math.max(0, prev - 1))}
                  className="px-5 py-3 rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 text-xs sm:text-sm font-mono uppercase font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
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
                  className="px-5 py-3 rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 text-xs sm:text-sm font-mono uppercase font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Next Day →
                </button>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={generateWhatsAppInquiryUrl(selectedPackageForModal, modalStarTab)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-500 text-white text-sm font-extrabold uppercase tracking-wider transition-colors shadow-xl shadow-emerald-900/30"
                >
                  <MessageSquare size={16} />
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
