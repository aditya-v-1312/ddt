"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import {
  Compass,
  Calendar,
  Users,
  User,
  Send,
  CheckCircle2,
  MessageCircle,
  Mail,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Phone,
  ShieldCheck,
  Loader2,
  Hotel,
  Clock,
  MapPin,
  Check,
  Plus,
  Minus,
  Luggage,
  Heart,
  Plane,
  Car,
  Utensils,
  Ticket,
} from "lucide-react";
import { trackPlannerSubmission } from "@/lib/gtag";

interface JourneyPlannerProps {
  prefilledDestination?: string;
}

export interface ItineraryFormData {
  destination: string;
  travelMonth: string;
  duration: string;
  hotelTier: 3 | 4 | 5;
  travelStyle: string;
  travelersCount: number;
  specialRequests: string[];
  name: string;
  phone: string;
  email: string;
  customNotes: string;
}

export const JourneyPlanner: React.FC<JourneyPlannerProps> = ({ prefilledDestination }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string>("");

  const [formData, setFormData] = useState<ItineraryFormData>({
    destination: "",
    travelMonth: "Upcoming Months",
    duration: "6–8 Days",
    hotelTier: 4,
    travelStyle: "Couple / Honeymoon",
    travelersCount: 2,
    specialRequests: ["Private Chauffeur & Transfers"],
    name: "",
    phone: "",
    email: "",
    customNotes: "",
  });

  useEffect(() => {
    if (prefilledDestination) {
      setFormData((prev) => ({ ...prev, destination: prefilledDestination }));
    }
  }, [prefilledDestination]);

  // Comprehensive authentic destination recommendations
  const curatedDestinations = [
    { name: "Dubai & Emirates", tag: "Luxury & Dunes" },
    { name: "Switzerland & Alps", tag: "Panoramic Rail" },
    { name: "Hong Kong & Macau", tag: "Skyline & Parks" },
    { name: "Bali & Indonesia", tag: "Tropical Island" },
    { name: "Japan (Tokyo & Osaka)", tag: "Culture & Tech" },
    { name: "Central Europe (Prague, Vienna, Budapest)", tag: "Imperial Capitals" },
    { name: "Maldives", tag: "Overwater Villas" },
    { name: "Singapore & Malaysia", tag: "Twin Nation Escape" },
    { name: "Egypt & Nile Cruise", tag: "Ancient Pyramids" },
    { name: "Australia (Sydney & Melbourne)", tag: "Harbour & Reef" },
    { name: "Kashmir & Vaishno Devi", tag: "Himalayan Solitude" },
    { name: "Uttarakhand Himalayan Circuit", tag: "Sacred Rivers & Lakes" },
    { name: "Kerala Backwaters", tag: "Houseboats & Spice" },
    { name: "Rajasthan Royal Heritage", tag: "Forts & Palaces" },
    { name: "South Korea (Seoul & Jeju)", tag: "K-Culture & Hanok" },
    { name: "Vietnam & Halong Bay", tag: "Emerald Karsts" },
    { name: "Morocco Imperial Cities", tag: "Sahara & Medinas" },
    { name: "Georgia & Caucasus", tag: "Glaciers & Wine" },
    { name: "Azerbaijan (Baku)", tag: "Flame Towers & Caspian" },
    { name: "Mauritius", tag: "Turquoise Lagoons" },
    { name: "Thailand (Phuket & Krabi)", tag: "Andaman Islands" },
    { name: "United Kingdom & Scotland", tag: "Castles & Highlands" },
  ];

  const travelMonths = [
    "Next 30 Days (Immediate)",
    "November",
    "December (Festive Season)",
    "January",
    "February",
    "March",
    "April (Spring Escapes)",
    "May",
    "June – August (Summer Vacations)",
    "September – October",
    "Flexible / Undecided",
  ];

  const durationOptions = [
    { label: "3–5 Days", desc: "Short Weekend Break" },
    { label: "6–8 Days", desc: "Classic Signature Voyage" },
    { label: "9–12 Days", desc: "Grand Multi-City Expedition" },
    { label: "13+ Days", desc: "In-Depth Extended Discovery" },
  ];

  const travelStyles = [
    { label: "Couple / Honeymoon", icon: <Heart size={16} /> },
    { label: "Family with Kids", icon: <Users size={16} /> },
    { label: "Solo Explorer", icon: <Compass size={16} /> },
    { label: "Friends & Adventure", icon: <Luggage size={16} /> },
    { label: "Relaxed / Senior Friendly", icon: <Sparkles size={16} /> },
    { label: "Corporate / Private Group", icon: <Users size={16} /> },
  ];

  const wishlistTags = [
    "Private Chauffeur & Transfers",
    "Flight Bookings Assistance",
    "Vegetarian / Jain Meals Preference",
    "Fast-Track Visa Documentation",
    "VIP Sightseeing & Theme Park Passes",
    "Ocean / Mountain View Rooms",
    "Anniversary / Birthday Special Setup",
    "Self-Paced / No Rushed Mornings",
  ];

  const toggleWishlistTag = (tag: string) => {
    setFormData((prev) => {
      const exists = prev.specialRequests.includes(tag);
      return {
        ...prev,
        specialRequests: exists
          ? prev.specialRequests.filter((t) => t !== tag)
          : [...prev.specialRequests, tag],
      };
    });
  };

  const handleTravelStyleSelect = (styleLabel: string) => {
    setFormData((prev) => {
      let nextCount = prev.travelersCount;
      if (styleLabel === "Solo Explorer") {
        nextCount = 1;
      } else if (styleLabel === "Couple / Honeymoon") {
        nextCount = 2;
      } else if (styleLabel === "Family with Kids" && prev.travelersCount < 3) {
        nextCount = 3;
      } else if (styleLabel === "Corporate / Private Group" && prev.travelersCount < 5) {
        nextCount = 6;
      } else if (styleLabel === "Friends & Adventure" && prev.travelersCount < 2) {
        nextCount = 3;
      }
      return {
        ...prev,
        travelStyle: styleLabel,
        travelersCount: nextCount,
      };
    });
  };

  const handleTravelersCountChange = (delta: number) => {
    setFormData((prev) => {
      const nextCount = Math.max(1, prev.travelersCount + delta);
      let nextStyle = prev.travelStyle;
      if (nextCount === 1 && prev.travelStyle === "Couple / Honeymoon") {
        nextStyle = "Solo Explorer";
      } else if (nextCount === 2 && prev.travelStyle === "Solo Explorer") {
        nextStyle = "Couple / Honeymoon";
      } else if (nextCount > 2 && prev.travelStyle === "Solo Explorer") {
        nextStyle = "Friends & Adventure";
      }
      return {
        ...prev,
        travelersCount: nextCount,
        travelStyle: nextStyle,
      };
    });
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Client-side validation: Name is mandatory
    if (!formData.name.trim()) {
      setSubmitError("Please enter your full name.");
      return;
    }

    // Client-side validation: Phone must contain at least 7 digits
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim() || phoneDigits.length < 7) {
      setSubmitError("Please enter a valid phone or WhatsApp number (e.g. +91 98765 43210).");
      return;
    }

    // Client-side validation: Email is optional, but if entered it must look like an email
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setSubmitError("Please enter a valid email address or leave it blank.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          department: "tours",
          destination: formData.destination,
          travelMonth: formData.travelMonth,
          travelersCount: formData.travelersCount,
          message: `[Bespoke Planner] Duration: ${formData.duration}. Style: ${formData.travelStyle}. Hotel Tier: ${formData.hotelTier}★. Special Tags: ${formData.specialRequests.join(", ") || "None"}. Notes: ${formData.customNotes || "None"}`,
          sourceUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      const data = await response.json();
      if (!response.ok || data.error) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setReferenceId(data.referenceId || "DDT-PLAN");
      trackPlannerSubmission(formData.destination, formData.travelMonth);
      setSubmitted(true);
    } catch (err: any) {
      setSubmitError(err.message || "Failed to submit enquiry. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const generateWhatsAppBlueprintUrl = () => {
    const text = encodeURIComponent(
      `*Bespoke Itinerary Request - Darsh Dream Tours*\n` +
      `• Destination: ${formData.destination || "Custom Itinerary"}\n` +
      `• Travel Month: ${formData.travelMonth}\n` +
      `• Duration: ${formData.duration}\n` +
      `• Hotel Tier: ${formData.hotelTier}-Star Accommodations\n` +
      `• Travel Style: ${formData.travelStyle} (${formData.travelersCount} ${formData.travelersCount === 1 ? "Guest" : "Guests"})\n` +
      `• Inclusions Requested: ${formData.specialRequests.join(", ") || "Standard"}\n` +
      `• Name: ${formData.name || "Guest"}\n` +
      `• Phone: ${formData.phone || "Not specified"}\n` +
      `• Custom Notes: ${formData.customNotes || "Please suggest best options"}`
    );
    return `https://wa.me/917487083499?text=${text}`;
  };

  const resetForm = () => {
    setSubmitted(false);
    setCurrentStep(1);
    setFormData({
      destination: "",
      travelMonth: "Upcoming Months",
      duration: "6–8 Days",
      hotelTier: 4,
      travelStyle: "Couple / Honeymoon",
      travelersCount: 2,
      specialRequests: ["Private Chauffeur & Transfers"],
      name: "",
      phone: "",
      email: "",
      customNotes: "",
    });
  };

  return (
    <section id="planner" className="py-24 sm:py-32 bg-[#F7F5F0] text-[#101A2E] relative border-t border-[#101A2E]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#B87543] text-xs font-mono font-bold uppercase tracking-[0.25em] bg-[#B87543]/10 border border-[#B87543]/20 px-4 py-1.5 rounded-full">
            <Compass className="w-4 h-4 text-[#B87543]" />
            <span>Custom Itinerary Studio</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#0C1E3D] tracking-tight leading-[1.04]">
            Craft Your Dream Journey
          </h2>
          <p className="text-base sm:text-lg text-[#697181] font-sans font-light max-w-xl mx-auto leading-relaxed">
            Every itinerary is personally curated around your rhythm. Select your preferences below to receive a custom travel blueprint.
          </p>
        </div>

        {/* Master Consultation Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border-2 border-[#101A2E]/10 shadow-[0_20px_60px_rgba(7,16,31,0.06)] relative overflow-hidden">
          {!submitted ? (
            <div>
              {/* Step Progress Indicators */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-10 sm:mb-12 pb-6 border-b border-[#101A2E]/10">
                {[
                  { step: 1, label: "DESTINATION", sub: "Where?" },
                  { step: 2, label: "TIMING", sub: "When & Days" },
                  { step: 3, label: "STAYS & STYLE", sub: "Stars & Guests" },
                  { step: 4, label: "CONTACT", sub: "Final Blueprint" },
                ].map((s) => (
                  <button
                    key={s.step}
                    type="button"
                    onClick={() => setCurrentStep(s.step)}
                    className="text-left group focus:outline-none"
                  >
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`text-xs font-mono font-bold tracking-widest ${
                          currentStep === s.step
                            ? "text-[#B87543]"
                            : currentStep > s.step
                            ? "text-[#101A2E]"
                            : "text-[#697181]/40"
                        }`}
                      >
                        0{s.step}
                      </span>
                      {currentStep > s.step && (
                        <Check size={12} className="text-emerald-600 stroke-[3]" />
                      )}
                    </div>
                    <span
                      className={`block font-serif text-sm sm:text-base tracking-wide uppercase transition-colors truncate ${
                        currentStep === s.step
                          ? "text-[#101A2E] font-medium"
                          : currentStep > s.step
                          ? "text-[#101A2E]/80"
                          : "text-[#697181]/40"
                      }`}
                    >
                      {s.label}
                    </span>
                    <span className="hidden sm:block text-[11px] font-sans text-[#697181]/70">
                      {s.sub}
                    </span>
                    <div
                      className={`h-[3px] mt-2 transition-all duration-300 rounded-full ${
                        currentStep === s.step
                          ? "bg-[#B87543] w-full shadow-sm"
                          : currentStep > s.step
                          ? "bg-[#101A2E] w-full"
                          : "bg-[#101A2E]/10 w-full"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Form Multi-Step View */}
              <form onSubmit={handleSubmit}>
                {/* STEP 1: DESTINATION */}
                {currentStep === 1 && (
                  <div className="space-y-8 animate-in fade-in duration-300">
                    <div>
                      <h3 className="font-serif text-3xl sm:text-4xl text-[#0C1E3D] font-light">
                        Where would you like to travel?
                      </h3>
                      <p className="text-sm sm:text-base text-[#697181] font-sans mt-1">
                        Select one of our signature destinations or type any country, island, or region worldwide.
                      </p>
                    </div>

                    {/* Curated destination pill grid */}
                    <div className="flex flex-wrap gap-2.5">
                      {curatedDestinations.map((dest) => {
                        const isSelected = formData.destination === dest.name;
                        return (
                          <button
                            key={dest.name}
                            type="button"
                            onClick={() => setFormData({ ...formData, destination: dest.name })}
                            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-sans tracking-wide transition-all flex items-center gap-2 ${
                              isSelected
                                ? "bg-[#0C1E3D] text-white font-semibold shadow-md scale-[1.02]"
                                : "bg-[#F7F5F0] border border-[#101A2E]/15 text-[#101A2E] hover:border-[#B87543] hover:bg-white"
                            }`}
                          >
                            <span>{dest.name}</span>
                            <span className="text-[10px] opacity-60 font-mono hidden sm:inline">
                              · {dest.tag}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Custom input */}
                    <div className="pt-2">
                      <label className="block text-xs font-mono uppercase tracking-widest text-[#697181] mb-2 font-bold">
                        Or Type a Custom Destination / Multi-Country Route:
                      </label>
                      <div className="relative">
                        <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B87543]" />
                        <input
                          type="text"
                          value={formData.destination}
                          onChange={(e) =>
                            setFormData({ ...formData, destination: e.target.value })
                          }
                          placeholder="e.g. South of France & Swiss Alps, Japan Sakura Tour, Golden Triangle..."
                          className="w-full pl-12 pr-5 py-4 rounded-2xl bg-[#F7F5F0] border border-[#101A2E]/20 text-[#0C1E3D] placeholder-[#697181]/60 text-base font-sans focus:outline-none focus:border-[#B87543] transition-colors font-medium"
                        />
                      </div>
                    </div>

                    <div className="pt-6 flex justify-end">
                      <button
                        type="button"
                        onClick={handleNext}
                        disabled={!formData.destination.trim()}
                        className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-[#0C1E3D] hover:bg-[#B87543] disabled:opacity-40 text-white text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-md hover:scale-[1.02]"
                      >
                        <span>Next: When &amp; Days</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: TIMING & DURATION */}
                {currentStep === 2 && (
                  <div className="space-y-8 animate-in fade-in duration-300">
                    <div>
                      <h3 className="font-serif text-3xl sm:text-4xl text-[#0C1E3D] font-light">
                        When &amp; for how long?
                      </h3>
                      <p className="text-sm sm:text-base text-[#697181] font-sans mt-1">
                        Timing guides us toward the ideal weather, calmest seas, and best seasonal experiences.
                      </p>
                    </div>

                    {/* Travel Months */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-[#697181] mb-3 font-bold">
                        Estimated Travel Month:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {travelMonths.map((m) => {
                          const isSel = formData.travelMonth === m;
                          return (
                            <button
                              key={m}
                              type="button"
                              onClick={() => setFormData({ ...formData, travelMonth: m })}
                              className={`p-3.5 rounded-2xl text-left border text-xs sm:text-sm font-sans transition-all flex items-center gap-2.5 ${
                                isSel
                                  ? "bg-[#0C1E3D] text-white border-[#0C1E3D] font-semibold shadow-md"
                                  : "bg-[#F7F5F0] border-[#101A2E]/15 text-[#101A2E] hover:border-[#B87543] hover:bg-white"
                              }`}
                            >
                              <Calendar className="w-4 h-4 text-[#B87543] flex-shrink-0" />
                              <span className="truncate">{m}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Approximate Duration */}
                    <div className="pt-2">
                      <label className="block text-xs font-mono uppercase tracking-widest text-[#697181] mb-3 font-bold">
                        Ideal Journey Duration:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {durationOptions.map((dur) => {
                          const isSel = formData.duration === dur.label;
                          return (
                            <button
                              key={dur.label}
                              type="button"
                              onClick={() => setFormData({ ...formData, duration: dur.label })}
                              className={`p-4 rounded-2xl text-center border transition-all ${
                                isSel
                                  ? "bg-[#B87543] text-white border-[#B87543] font-bold shadow-md scale-[1.02]"
                                  : "bg-[#F7F5F0] border-[#101A2E]/15 text-[#101A2E] hover:border-[#B87543] hover:bg-white"
                              }`}
                            >
                              <Clock size={16} className="mx-auto mb-1 opacity-80" />
                              <span className="block text-sm sm:text-base font-bold">{dur.label}</span>
                              <span className="text-[11px] opacity-80 font-sans block">{dur.desc}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-6 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#697181] hover:text-[#0C1E3D] font-mono font-bold transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-[#0C1E3D] hover:bg-[#B87543] text-white text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-md hover:scale-[1.02]"
                      >
                        <span>Next: Stays &amp; Style</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: HOTEL TIERS & TRAVEL STYLE */}
                {currentStep === 3 && (
                  <div className="space-y-8 animate-in fade-in duration-300">
                    <div>
                      <h3 className="font-serif text-3xl sm:text-4xl text-[#0C1E3D] font-light">
                        Accommodations &amp; Travel Style
                      </h3>
                      <p className="text-sm sm:text-base text-[#697181] font-sans mt-1">
                        Darsh Dream Tours provides direct wholesale inventory across 3★, 4★, and 5★ luxury tiers.
                      </p>
                    </div>

                    {/* Hotel Star Tier Selector */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-[#697181] mb-3 font-bold">
                        Preferred Hotel Category:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          { tier: 4 as const, title: "4★ Premium Boutique (Default)", desc: "Kerry Hotel, Boutique & Heritage Stays" },
                          { tier: 5 as const, title: "5★ Ultra Luxury", desc: "Ritz-Carlton, Peninsula, Luxury Resorts" },
                          { tier: 3 as const, title: "3★ Modern Comfort", desc: "Clean, Verified Central City Stays" },
                        ].map((h) => {
                          const isSel = formData.hotelTier === h.tier;
                          return (
                            <button
                              key={h.tier}
                              type="button"
                              onClick={() => setFormData({ ...formData, hotelTier: h.tier })}
                              className={`p-4 rounded-2xl text-left border transition-all ${
                                isSel
                                  ? "bg-[#0C1E3D] text-white border-[#0C1E3D] font-bold shadow-lg scale-[1.02]"
                                  : "bg-[#F7F5F0] border-[#101A2E]/15 text-[#101A2E] hover:border-[#B87543] hover:bg-white"
                              }`}
                            >
                              <span className="text-lg font-bold block text-[#B87543]">{h.title}</span>
                              <span className="text-xs opacity-75 font-sans block mt-1 leading-snug">{h.desc}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Travel Style */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-[#697181] mb-3 font-bold">
                        Who is traveling?
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {travelStyles.map((style) => {
                          const isSel = formData.travelStyle === style.label;
                          return (
                            <button
                              key={style.label}
                              type="button"
                              onClick={() => handleTravelStyleSelect(style.label)}
                              className={`p-3.5 rounded-2xl border text-xs sm:text-sm font-sans transition-all flex items-center gap-2.5 ${
                                isSel
                                  ? "bg-[#B87543] text-white border-[#B87543] font-bold shadow-md scale-[1.01]"
                                  : "bg-[#F7F5F0] border-[#101A2E]/15 text-[#101A2E] hover:border-[#B87543] hover:bg-white"
                              }`}
                            >
                              {style.icon}
                              <span className="truncate">{style.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Guest Counter */}
                    <div className="pt-2">
                      <label className="block text-xs font-mono uppercase tracking-widest text-[#697181] mb-3 font-bold">
                        Number of Travelers:
                      </label>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => handleTravelersCountChange(-1)}
                          disabled={formData.travelersCount <= 1}
                          className="w-11 h-11 rounded-2xl border border-[#101A2E]/20 bg-[#F7F5F0] hover:bg-white disabled:opacity-40 text-[#101A2E] flex items-center justify-center font-bold transition-all shadow-sm"
                          aria-label="Decrease Travelers"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-16 text-center font-mono text-xl font-bold text-[#0C1E3D]">
                          {formData.travelersCount}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleTravelersCountChange(1)}
                          className="w-11 h-11 rounded-2xl border border-[#101A2E]/20 bg-[#F7F5F0] hover:bg-white text-[#101A2E] flex items-center justify-center font-bold transition-all shadow-sm"
                          aria-label="Increase Travelers"
                        >
                          <Plus size={16} />
                        </button>
                        <span className="text-xs text-[#697181] font-sans ml-2 font-medium">
                          {formData.travelersCount === 1 ? "Solo Passenger (1 Guest)" : `${formData.travelersCount} Total Guests`}
                        </span>
                      </div>
                    </div>

                    {/* Special Wishlist Tags */}
                    <div className="pt-2">
                      <label className="block text-xs font-mono uppercase tracking-widest text-[#697181] mb-2 font-bold">
                        Special Curations Wishlist (Optional):
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {wishlistTags.map((tag) => {
                          const active = formData.specialRequests.includes(tag);
                          return (
                            <button
                              key={tag}
                              type="button"
                              onClick={() => toggleWishlistTag(tag)}
                              className={`px-3.5 py-1.5 rounded-xl text-xs font-sans transition-all flex items-center gap-1.5 ${
                                active
                                  ? "bg-emerald-950 text-emerald-200 border border-emerald-500/40 font-semibold shadow-sm"
                                  : "bg-[#F7F5F0] border border-[#101A2E]/15 text-[#101A2E] hover:border-[#B87543]"
                              }`}
                            >
                              {active && <Check size={12} className="text-emerald-400" />}
                              <span>{tag}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-6 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#697181] hover:text-[#0C1E3D] font-mono font-bold transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-[#0C1E3D] hover:bg-[#B87543] text-white text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-md hover:scale-[1.02]"
                      >
                        <span>Next: Review &amp; Contact</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4: CONTACT & REVIEW */}
                {currentStep === 4 && (
                  <div className="space-y-7 animate-in fade-in duration-300">
                    <div>
                      <h3 className="font-serif text-3xl sm:text-4xl text-[#0C1E3D] font-light">
                        Where should we send your travel plan?
                      </h3>
                      <p className="text-sm sm:text-base text-[#697181] font-sans mt-1">
                        Our dedicated desks will craft a bespoke day-by-day proposal and reach out via WhatsApp/Phone.
                      </p>
                    </div>

                    {/* Live Blueprint Summary Box */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#0C1E3D] text-white space-y-2 border border-[#B87543]/30 shadow-md">
                      <div className="flex items-center justify-between text-xs font-mono text-[#E2B18D] uppercase tracking-wider font-bold">
                        <span className="flex items-center gap-1.5">
                          <Sparkles size={14} className="text-[#E2B18D]" />
                          <span>Your Custom Itinerary Blueprint</span>
                        </span>
                        <span>{formData.hotelTier}★ Accommodation</span>
                      </div>
                      <h4 className="font-serif text-xl sm:text-2xl text-white font-normal">
                        {formData.destination || "Custom Itinerary"} · {formData.duration}
                      </h4>
                      <p className="text-xs sm:text-sm text-white/70 font-sans">
                        Timing: <strong>{formData.travelMonth}</strong> · Style: <strong>{formData.travelStyle}</strong> ({formData.travelersCount} {formData.travelersCount === 1 ? "Guest" : "Guests"})
                      </p>
                      {formData.specialRequests.length > 0 && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {formData.specialRequests.map((r) => (
                            <span key={r} className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-mono text-emerald-300">
                              ✓ {r}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Contact Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#697181] mb-1.5 font-bold">
                          Your Full Name *
                        </label>
                        <div className="relative">
                          <User className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#697181]/50 pointer-events-none" />
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => {
                              setSubmitError(null);
                              setFormData({ ...formData, name: e.target.value });
                            }}
                            placeholder="Enter your full name"
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#F7F5F0] border border-[#101A2E]/20 text-[#0C1E3D] placeholder-[#697181]/50 text-base font-sans focus:outline-none focus:border-[#B87543] font-medium transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block text-xs font-mono uppercase tracking-wider text-[#697181] font-bold">
                            WhatsApp / Phone Number *
                          </label>
                          <span className="text-[11px] text-emerald-700 font-sans font-medium flex items-center gap-1">
                            <ShieldCheck size={12} className="text-emerald-600" />
                            Direct Proposal Delivery
                          </span>
                        </div>
                        <div className="relative">
                          <Phone className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#B87543] pointer-events-none" />
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => {
                              setSubmitError(null);
                              setFormData({ ...formData, phone: e.target.value });
                            }}
                            placeholder="+91 98765 43210"
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#F7F5F0] border border-[#101A2E]/20 text-[#0C1E3D] placeholder-[#697181]/50 text-base font-sans focus:outline-none focus:border-[#B87543] font-medium transition-colors"
                          />
                        </div>
                        <span className="text-[11px] text-[#697181] font-sans mt-1 block">
                          Enter 10-digit mobile number with or without +91 (e.g. +91 98765 43210)
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#697181] font-bold">
                          Email Address <span className="text-[11px] text-[#697181]/70 font-normal lowercase">(optional)</span>
                        </label>
                        <span className="text-[11px] text-[#697181] font-sans">For formal PDF quotation copy</span>
                      </div>
                      <div className="relative">
                        <Mail className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#697181]/50 pointer-events-none" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setSubmitError(null);
                            setFormData({ ...formData, email: e.target.value });
                          }}
                          placeholder="yourname@domain.com (optional)"
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#F7F5F0] border border-[#101A2E]/20 text-[#0C1E3D] placeholder-[#697181]/50 text-base font-sans focus:outline-none focus:border-[#B87543] font-medium transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#697181] mb-1.5 font-bold">
                        Additional Wishes / Notes (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.customNotes}
                        onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
                        placeholder="e.g. Specific flight schedule, private candlelight dinner, infant cot needed..."
                        className="w-full px-5 py-3.5 rounded-xl bg-[#F7F5F0] border border-[#101A2E]/20 text-[#0C1E3D] placeholder-[#697181]/50 text-sm font-sans focus:outline-none focus:border-[#B87543]"
                      />
                    </div>

                    {submitError && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 text-xs sm:text-sm font-sans font-medium">
                        {submitError}
                      </div>
                    )}

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={handleBack}
                        disabled={submitting}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#697181] hover:text-[#0C1E3D] font-mono font-bold transition-colors order-2 sm:order-1"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto order-1 sm:order-2">
                        <a
                          href={generateWhatsAppBlueprintUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-emerald-500 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs uppercase tracking-[0.2em] font-extrabold transition-all shadow-sm"
                        >
                          <MessageCircle className="w-4 h-4 text-emerald-600" />
                          <span>Send via WhatsApp</span>
                        </a>

                        <button
                          type="submit"
                          disabled={!formData.name.trim() || !formData.phone.trim() || submitting}
                          className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-[#0C1E3D] hover:bg-[#B87543] disabled:opacity-40 text-white text-xs uppercase tracking-[0.2em] font-extrabold transition-all shadow-md hover:scale-[1.02]"
                        >
                          {submitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Submitting Blueprint...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>Submit Travel Enquiry →</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-center gap-2 text-xs text-[#697181] font-sans">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Encrypted direct submission to Darsh Dream Tours · No data sold or shared</span>
                    </div>
                  </div>
                )}
              </form>
            </div>
          ) : (
            /* CONFIRMATION STATE */
            <div className="py-10 text-center animate-in fade-in duration-500 space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-500/30 shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
                  Ref: {referenceId} · Enquiry Confirmed
                </p>
                <h3 className="font-serif text-3xl sm:text-5xl text-[#0C1E3D]">
                  Thank you, {formData.name}!
                </h3>
                <p className="text-base sm:text-lg text-[#697181] font-sans font-light max-w-lg mx-auto">
                  Your custom travel request for <strong>{formData.destination}</strong> has been routed directly to our senior Tours &amp; Holidays desk.
                </p>
              </div>

              {/* Summary card */}
              <div className="max-w-md mx-auto p-5 rounded-2xl bg-[#F7F5F0] border border-[#101A2E]/10 text-left text-xs font-sans space-y-1.5 text-[#101A2E]">
                <div className="flex justify-between font-medium">
                  <span className="text-[#697181]">Destination:</span>
                  <span className="font-bold">{formData.destination}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span className="text-[#697181]">Timing &amp; Duration:</span>
                  <span>{formData.travelMonth} · {formData.duration}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span className="text-[#697181]">Hotel Tier:</span>
                  <span>{formData.hotelTier}★ Accommodations</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span className="text-[#697181]">Travelers:</span>
                  <span>{formData.travelersCount} {formData.travelersCount === 1 ? "Guest" : "Guests"} ({formData.travelStyle})</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={generateWhatsAppBlueprintUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-widest font-extrabold shadow-lg shadow-emerald-900/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>

                <button
                  type="button"
                  onClick={resetForm}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#101A2E]/20 bg-white hover:bg-[#F7F5F0] text-[#101A2E] text-xs uppercase tracking-widest font-bold"
                >
                  <span>Plan Another Trip</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default JourneyPlanner;
