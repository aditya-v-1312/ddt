"use client";

import React, { useState, useEffect } from "react";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";
import { destinations } from "@/data/destinations";
import {
  Compass,
  Calendar,
  Users,
  Send,
  CheckCircle2,
  MessageCircle,
  Mail,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

interface JourneyPlannerProps {
  prefilledDestination?: string;
}

export interface EnquiryData {
  destination: string;
  travelMonth: string;
  travelType: string;
  travelersCount: number;
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const JourneyPlanner: React.FC<JourneyPlannerProps> = ({ prefilledDestination }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<EnquiryData>({
    destination: "",
    travelMonth: "Upcoming Months",
    travelType: "Couple",
    travelersCount: 2,
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (prefilledDestination) {
      setFormData((prev) => ({ ...prev, destination: prefilledDestination }));
    }
  }, [prefilledDestination]);

  const travelTypes = ["Solo", "Couple", "Family", "Friends", "Group", "Honeymoon"];
  const popularDestinations = [
    "Dubai",
    "Switzerland & Europe",
    "Kashmir",
    "Maldives",
    "Bali",
    "Kerala",
    "Rajasthan",
    "Singapore",
    "Thailand",
    "Andaman",
    "Goa",
  ];
  const months = [
    "Next 30 Days",
    "October",
    "November",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June – August",
    "Flexible Dates",
  ];

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Generate dynamic WhatsApp message containing user's full enquiry
  const generatedWhatsAppText = `*New Travel Enquiry - Darsh Dream Tours*
• Destination: ${formData.destination || "To be discussed"}
• Travel Window: ${formData.travelMonth}
• Travel Type: ${formData.travelType} (${formData.travelersCount} Travelers)
• Name: ${formData.name || "Traveler"}
• Phone: ${formData.phone || "Not specified"}
• Email: ${formData.email || "Not specified"}
• Special Requests: ${formData.message || "None"}`;

  const generatedMailtoUrl = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    `Travel Enquiry: ${formData.destination || "New Journey"} - ${formData.name}`
  )}&body=${encodeURIComponent(generatedWhatsAppText)}`;

  const resetForm = () => {
    setSubmitted(false);
    setCurrentStep(1);
    setFormData({
      destination: "",
      travelMonth: "Upcoming Months",
      travelType: "Couple",
      travelersCount: 2,
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="planner" className="py-24 sm:py-32 bg-[#08152F] text-white relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[900px] h-[900px] rounded-full border border-[#B87543]/30 border-dashed" />
        <div className="w-[600px] h-[600px] rounded-full border border-[#244586]/40" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-[#D99767] text-xs font-sans uppercase tracking-[0.25em] mb-3">
            <Compass className="w-3.5 h-3.5 text-[#B87543]" />
            <span>Bespoke Travel Planner</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
            WHERE DO YOU WANT TO GO?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 font-sans font-light max-w-xl mx-auto leading-relaxed">
            Tell us a little about your trip and let's start planning. Every itinerary is shaped around you.
          </p>
        </div>

        {/* Multi-step Planner Card */}
        <div className="bg-[#050D20] border border-[#1C366B] rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          {!submitted ? (
            <div>
              {/* Step Indicators */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-8 sm:mb-12 pb-6 border-b border-white/10">
                {[
                  { step: 1, label: "WHERE?" },
                  { step: 2, label: "WHEN?" },
                  { step: 3, label: "WHO?" },
                  { step: 4, label: "LET'S PLAN" },
                ].map((s) => (
                  <button
                    key={s.step}
                    type="button"
                    onClick={() => setCurrentStep(s.step)}
                    className="text-left group focus:outline-none"
                  >
                    <span
                      className={`block text-[10px] font-sans font-semibold tracking-widest ${
                        currentStep === s.step
                          ? "text-[#D99767]"
                          : currentStep > s.step
                          ? "text-white/80"
                          : "text-white/30"
                      }`}
                    >
                      0{s.step}
                    </span>
                    <span
                      className={`block font-serif text-xs sm:text-sm tracking-wider uppercase transition-colors ${
                        currentStep === s.step
                          ? "text-white font-medium"
                          : currentStep > s.step
                          ? "text-white/70"
                          : "text-white/40"
                      }`}
                    >
                      {s.label}
                    </span>
                    <div
                      className={`h-[2px] mt-2 transition-all duration-300 ${
                        currentStep === s.step
                          ? "bg-[#9A5B2D] w-full"
                          : currentStep > s.step
                          ? "bg-white/40 w-full"
                          : "bg-white/10 w-full"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit}>
                {/* STEP 1: WHERE */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block font-serif text-2xl text-white mb-2">
                        Select or enter your dream destination
                      </label>
                      <p className="text-xs text-white/60 font-sans mb-4">
                        Choose from popular destinations or type any location worldwide.
                      </p>
                    </div>

                    {/* Popular destination pills */}
                    <div className="flex flex-wrap gap-2 sm:gap-2.5">
                      {popularDestinations.map((dest) => (
                        <button
                          key={dest}
                          type="button"
                          onClick={() => setFormData({ ...formData, destination: dest })}
                          className={`px-4 py-2 rounded-full text-xs font-sans tracking-wide transition-all ${
                            formData.destination === dest
                              ? "bg-[#9A5B2D] text-white font-semibold shadow-md"
                              : "bg-white/5 border border-white/15 text-white/80 hover:bg-white/10 hover:border-white/30"
                          }`}
                        >
                          {dest}
                        </button>
                      ))}
                    </div>

                    <div className="pt-3">
                      <label className="block text-xs font-sans uppercase tracking-widest text-white/50 mb-2">
                        Or enter a custom destination / multiple countries
                      </label>
                      <input
                        type="text"
                        value={formData.destination}
                        onChange={(e) =>
                          setFormData({ ...formData, destination: e.target.value })
                        }
                        placeholder="e.g. South of France, Japan, New Zealand, Golden Triangle..."
                        className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/30 text-sm font-sans focus:outline-none focus:border-[#D99767] transition-colors"
                      />
                    </div>

                    <div className="pt-6 flex justify-end">
                      <button
                        type="button"
                        onClick={handleNext}
                        disabled={!formData.destination}
                        className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-[#9A5B2D] hover:bg-[#B87543] disabled:opacity-40 disabled:hover:bg-[#9A5B2D] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md"
                      >
                        <span>Next: When?</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: WHEN */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block font-serif text-2xl text-white mb-2">
                        When are you looking to travel?
                      </label>
                      <p className="text-xs text-white/60 font-sans mb-4">
                        Timing helps us recommend the most scenic seasons and pleasant weather.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {months.map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setFormData({ ...formData, travelMonth: m })}
                          className={`p-3 rounded-xl text-left border text-xs sm:text-sm font-sans transition-all ${
                            formData.travelMonth === m
                              ? "bg-[#9A5B2D]/20 border-[#D99767] text-white font-medium shadow-sm"
                              : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/25"
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-3.5 h-3.5 text-[#B87543]" />
                            <span>{m}</span>
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="pt-6 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-white/60 hover:text-white font-sans"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-[#9A5B2D] hover:bg-[#B87543] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md"
                      >
                        <span>Next: Who?</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: WHO */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block font-serif text-2xl text-white mb-2">
                        Who is travelling on this journey?
                      </label>
                      <p className="text-xs text-white/60 font-sans mb-4">
                        Select travel style and group size.
                      </p>
                    </div>

                    {/* Travel Type */}
                    <div>
                      <span className="block text-xs uppercase tracking-widest text-white/50 font-sans mb-3">
                        Travel Style
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {travelTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, travelType: type })}
                            className={`p-3 rounded-xl border text-xs sm:text-sm font-sans transition-all text-center ${
                              formData.travelType === type
                                ? "bg-[#9A5B2D] border-[#9A5B2D] text-white font-semibold"
                                : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Travelers Count */}
                    <div className="pt-2">
                      <span className="block text-xs uppercase tracking-widest text-white/50 font-sans mb-3">
                        Number of Travellers: {formData.travelersCount}
                      </span>
                      <div className="flex items-center space-x-3">
                        {[1, 2, 3, 4, 5, 6, "7+"].map((num) => {
                          const val = typeof num === "number" ? num : 8;
                          const isSel =
                            typeof num === "number"
                              ? formData.travelersCount === num
                              : formData.travelersCount >= 7;
                          return (
                            <button
                              key={num}
                              type="button"
                              onClick={() => setFormData({ ...formData, travelersCount: val })}
                              className={`w-11 h-11 rounded-full border text-xs font-sans font-semibold transition-all ${
                                isSel
                                  ? "bg-[#9A5B2D] border-[#9A5B2D] text-white"
                                  : "bg-white/5 border-white/15 text-white/70 hover:bg-white/10"
                              }`}
                            >
                              {num}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-6 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-white/60 hover:text-white font-sans"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-[#9A5B2D] hover:bg-[#B87543] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md"
                      >
                        <span>Next: Final Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4: LET'S PLAN */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block font-serif text-2xl text-white mb-2">
                        How should Sakshi reach you?
                      </label>
                      <p className="text-xs text-white/60 font-sans mb-4">
                        We respect your privacy and will never share your details.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-white/70 font-sans mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Priya Sharma"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/30 text-sm font-sans focus:outline-none focus:border-[#D99767]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-white/70 font-sans mb-1.5">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/30 text-sm font-sans focus:outline-none focus:border-[#D99767]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-white/70 font-sans mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/30 text-sm font-sans focus:outline-none focus:border-[#D99767]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-white/70 font-sans mb-1.5">
                        Special Wishes or Requests (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="e.g. Vegetarian dining preference, anniversary surprise, slow paced mornings..."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/30 text-sm font-sans focus:outline-none focus:border-[#D99767]"
                      />
                    </div>

                    <div className="pt-6 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-white/60 hover:text-white font-sans"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="submit"
                        disabled={!formData.name || !formData.phone}
                        className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-[#9A5B2D] hover:bg-[#B87543] disabled:opacity-40 text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md"
                      >
                        <Send className="w-4 h-4" />
                        <span>Start Planning</span>
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          ) : (
            /* SUBMITTED / CONFIRMATION STATE */
            <div className="py-8 text-center animate-in fade-in duration-500">
              <div className="w-16 h-16 rounded-full bg-[#9A5B2D]/20 border border-[#B87543] text-[#D99767] mx-auto flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#D99767]" />
              </div>

              <span className="text-xs uppercase tracking-[0.25em] text-[#D99767] font-sans">
                Itinerary Request Prepared
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl text-white mt-2 mb-4">
                Thank You, {formData.name}
              </h3>

              <p className="text-sm sm:text-base text-white/80 font-sans max-w-lg mx-auto leading-relaxed mb-8">
                Your journey request for <strong className="text-white">{formData.destination}</strong> in{" "}
                <strong className="text-white">{formData.travelMonth}</strong> ({formData.travelType}, {formData.travelersCount} guests) is ready.
              </p>

              {/* Instant WhatsApp Send Button */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-md mx-auto mb-8 text-left">
                <div className="flex items-center space-x-2 text-xs uppercase tracking-wider text-[#D99767] font-semibold mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Send Directly To Sakshi</span>
                </div>
                <p className="text-xs text-white/70 font-sans leading-relaxed mb-5">
                  Click below to open WhatsApp with your pre-formatted enquiry details directly sent to Sakshi Chandiramani (+91 97243 91674).
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={getWhatsAppUrl(generatedWhatsAppText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-2 py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-semibold shadow-lg transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>

                  <a
                    href={generatedMailtoUrl}
                    className="inline-flex items-center justify-center space-x-2 py-3.5 px-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-wider font-medium border border-white/15 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email</span>
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={resetForm}
                className="text-xs uppercase tracking-widest text-white/40 hover:text-white font-sans transition-colors"
              >
                Plan Another Trip
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default JourneyPlanner;
