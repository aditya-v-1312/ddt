"use client";

import React, { useState, useEffect } from "react";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";
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
import { trackPlannerSubmission } from "@/lib/gtag";

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

  const travelTypes = ["Couple", "Family", "Honeymoon", "Solo", "Friends", "Small Group"];
  const curatedDestinations = [
    "Dubai",
    "Switzerland",
    "Kashmir",
    "Maldives",
    "Bali",
    "Kerala",
    "Rajasthan",
    "Singapore",
    "Thailand",
    "Andaman",
    "Goa",
    "Himachal Pradesh",
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
    trackPlannerSubmission(formData.destination, formData.travelMonth);
    setSubmitted(true);
  };

  const generatedWhatsAppText = `*Travel Enquiry - Darsh Dream Tours*
• Destination: ${formData.destination || "Flexible / To be planned"}
• Timing: ${formData.travelMonth}
• Travel Style: ${formData.travelType} (${formData.travelersCount} Travelers)
• Name: ${formData.name || "Guest"}
• Phone / WhatsApp: ${formData.phone || "Not specified"}
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
    <section id="planner" className="py-20 sm:py-28 bg-[#F7F5F0] text-[#101A2E] relative border-t border-[#101A2E]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-[#B87543] text-[10px] font-sans font-semibold uppercase tracking-[0.25em] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Consultation Suite</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#07101F] tracking-tight leading-[1.04]">
            Where do you want to go?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#697181] font-sans font-light max-w-lg mx-auto leading-relaxed">
            Tell us a little about your trip and let's start planning. Every itinerary is shaped around your personal style.
          </p>
        </div>

        {/* Multi-step Editorial Consultation Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#101A2E]/10 shadow-[0_12px_40px_rgba(7,16,31,0.04)] relative">
          {!submitted ? (
            <div>
              {/* Step Progression Indicators */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-10 sm:mb-12 pb-6 border-b border-[#101A2E]/10">
                {[
                  { step: 1, label: "WHERE?" },
                  { step: 2, label: "WHEN?" },
                  { step: 3, label: "WHO?" },
                  { step: 4, label: "DETAILS" },
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
                          ? "text-[#B87543]"
                          : currentStep > s.step
                          ? "text-[#101A2E]"
                          : "text-[#697181]/40"
                      }`}
                    >
                      0{s.step}
                    </span>
                    <span
                      className={`block font-serif text-xs sm:text-base tracking-wider uppercase transition-colors ${
                        currentStep === s.step
                          ? "text-[#101A2E] font-medium"
                          : currentStep > s.step
                          ? "text-[#101A2E]/70"
                          : "text-[#697181]/40"
                      }`}
                    >
                      {s.label}
                    </span>
                    <div
                      className={`h-[2px] mt-2 transition-all duration-300 rounded-full ${
                        currentStep === s.step
                          ? "bg-[#B87543] w-full"
                          : currentStep > s.step
                          ? "bg-[#101A2E] w-full"
                          : "bg-[#101A2E]/10 w-full"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit}>
                {/* STEP 1: WHERE */}
                {currentStep === 1 && (
                  <div className="space-y-8">
                    <div>
                      <label className="block font-serif text-3xl sm:text-4xl text-[#07101F] mb-2 font-light">
                        Which destination is calling you?
                      </label>
                      <p className="text-sm text-[#697181] font-sans">
                        Select a curated destination or type any country or region across the world.
                      </p>
                    </div>

                    {/* Curated destination pills */}
                    <div className="flex flex-wrap gap-2.5">
                      {curatedDestinations.map((dest) => (
                        <button
                          key={dest}
                          type="button"
                          onClick={() => setFormData({ ...formData, destination: dest })}
                          className={`px-4 py-2.5 rounded-full text-xs font-sans tracking-wide transition-all ${
                            formData.destination === dest
                              ? "bg-[#07101F] text-white font-medium shadow-sm"
                              : "bg-[#F7F5F0] border border-[#101A2E]/10 text-[#101A2E] hover:border-[#B87543]"
                          }`}
                        >
                          {dest}
                        </button>
                      ))}
                    </div>

                    <div className="pt-2">
                      <label className="block text-[11px] font-sans uppercase tracking-widest text-[#697181] mb-2 font-medium">
                        Or enter a custom destination / multiple countries
                      </label>
                      <input
                        type="text"
                        value={formData.destination}
                        onChange={(e) =>
                          setFormData({ ...formData, destination: e.target.value })
                        }
                        placeholder="e.g. South of France, Japan, New Zealand, Golden Triangle..."
                        className="w-full px-5 py-4 rounded-xl bg-[#F7F5F0] border border-[#101A2E]/15 text-[#07101F] placeholder-[#697181]/50 text-sm font-sans focus:outline-none focus:border-[#B87543] transition-colors"
                      />
                    </div>

                    <div className="pt-6 flex justify-end">
                      <button
                        type="button"
                        onClick={handleNext}
                        disabled={!formData.destination}
                        className="inline-flex items-center space-x-2 px-9 py-4 rounded-full bg-[#07101F] hover:bg-[#B87543] disabled:opacity-40 text-white text-[10px] uppercase tracking-[0.2em] font-semibold transition-all shadow-md hover:scale-[1.02]"
                      >
                        <span>Next: When?</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: WHEN */}
                {currentStep === 2 && (
                  <div className="space-y-8">
                    <div>
                      <label className="block font-serif text-3xl sm:text-4xl text-[#07101F] mb-2 font-light">
                        When are you looking to travel?
                      </label>
                      <p className="text-sm text-[#697181] font-sans">
                        Timing guides us toward the ideal seasons, calmest waters, and pleasant weather.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {months.map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setFormData({ ...formData, travelMonth: m })}
                          className={`p-4 rounded-2xl text-left border text-xs sm:text-sm font-sans transition-all ${
                            formData.travelMonth === m
                              ? "bg-[#07101F] text-white border-[#07101F] font-medium shadow-sm"
                              : "bg-[#F7F5F0] border-[#101A2E]/10 text-[#101A2E] hover:border-[#B87543]"
                          }`}
                        >
                          <div className="flex items-center space-x-2.5">
                            <Calendar className="w-4 h-4 text-[#B87543]" />
                            <span>{m}</span>
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="pt-6 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest text-[#697181] hover:text-[#07101F] font-sans transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex items-center space-x-2 px-9 py-4 rounded-full bg-[#07101F] hover:bg-[#B87543] text-white text-[10px] uppercase tracking-[0.2em] font-semibold transition-all shadow-md hover:scale-[1.02]"
                      >
                        <span>Next: Who?</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: WHO */}
                {currentStep === 3 && (
                  <div className="space-y-8">
                    <div>
                      <label className="block font-serif text-3xl sm:text-4xl text-[#07101F] mb-2 font-light">
                        Who is joining this journey?
                      </label>
                      <p className="text-sm text-[#697181] font-sans">
                        Select travel style and party size to help us recommend suited stays.
                      </p>
                    </div>

                    {/* Travel Type */}
                    <div>
                      <span className="block text-[11px] uppercase tracking-widest text-[#697181] font-sans mb-3 font-semibold">
                        Travel Style
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {travelTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, travelType: type })}
                            className={`p-4 rounded-2xl border text-xs sm:text-sm font-sans transition-all text-center ${
                              formData.travelType === type
                                ? "bg-[#07101F] text-white border-[#07101F] font-medium"
                                : "bg-[#F7F5F0] border-[#101A2E]/10 text-[#101A2E] hover:border-[#B87543]"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Travelers Count */}
                    <div className="pt-2">
                      <span className="block text-[11px] uppercase tracking-widest text-[#697181] font-sans mb-3 font-semibold">
                        Number of Guests: {formData.travelersCount}
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
                                  ? "bg-[#B87543] border-[#B87543] text-white"
                                  : "bg-[#F7F5F0] border-[#101A2E]/10 text-[#101A2E] hover:border-[#07101F]"
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
                        className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest text-[#697181] hover:text-[#07101F] font-sans transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex items-center space-x-2 px-9 py-4 rounded-full bg-[#07101F] hover:bg-[#B87543] text-white text-[10px] uppercase tracking-[0.2em] font-semibold transition-all shadow-md hover:scale-[1.02]"
                      >
                        <span>Next: Final Step</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4: DETAILS */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block font-serif text-3xl sm:text-4xl text-[#07101F] mb-2 font-light">
                        How should we reach you?
                      </label>
                      <p className="text-sm text-[#697181] font-sans">
                        We value your trust and privacy. Your information is only used to curate your trip.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#697181] font-sans mb-1.5 font-semibold">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Priya Sharma"
                          className="w-full px-5 py-3.5 rounded-xl bg-[#F7F5F0] border border-[#101A2E]/15 text-[#07101F] placeholder-[#697181]/50 text-sm font-sans focus:outline-none focus:border-[#B87543]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#697181] font-sans mb-1.5 font-semibold">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-5 py-3.5 rounded-xl bg-[#F7F5F0] border border-[#101A2E]/15 text-[#07101F] placeholder-[#697181]/50 text-sm font-sans focus:outline-none focus:border-[#B87543]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#697181] font-sans mb-1.5 font-semibold">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@domain.com"
                        className="w-full px-5 py-3.5 rounded-xl bg-[#F7F5F0] border border-[#101A2E]/15 text-[#07101F] placeholder-[#697181]/50 text-sm font-sans focus:outline-none focus:border-[#B87543]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#697181] font-sans mb-1.5 font-semibold">
                        Special Wishes or Requests (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="e.g. Vegetarian dining preference, wedding anniversary celebration, slow paced mornings..."
                        className="w-full px-5 py-3.5 rounded-xl bg-[#F7F5F0] border border-[#101A2E]/15 text-[#07101F] placeholder-[#697181]/50 text-sm font-sans focus:outline-none focus:border-[#B87543]"
                      />
                    </div>

                    <div className="pt-6 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest text-[#697181] hover:text-[#07101F] font-sans transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="submit"
                        disabled={!formData.name || !formData.phone}
                        className="inline-flex items-center space-x-2 px-9 py-4 rounded-full bg-[#07101F] hover:bg-[#B87543] disabled:opacity-40 text-white text-[10px] uppercase tracking-[0.2em] font-semibold transition-all shadow-md hover:scale-[1.02]"
                      >
                        <Send className="w-4 h-4" />
                        <span>Start Planning →</span>
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          ) : (
            /* CONFIRMATION STATE */
            <div className="py-8 text-center animate-in fade-in duration-500">
              <div className="w-16 h-16 rounded-full bg-[#B87543]/10 text-[#B87543] mx-auto flex items-center justify-center mb-6 border border-[#B87543]/20">
                <CheckCircle2 className="w-8 h-8 text-[#B87543]" />
              </div>

              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B87543] font-sans font-semibold">
                Itinerary Request Ready
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#07101F] mt-2 mb-4 font-light">
                Thank You, {formData.name}
              </h3>

              <p className="text-sm sm:text-base text-[#697181] font-sans max-w-lg mx-auto leading-relaxed mb-8">
                Your journey request for <strong className="text-[#07101F] font-medium">{formData.destination}</strong> in{" "}
                <strong className="text-[#07101F] font-medium">{formData.travelMonth}</strong> ({formData.travelType}, {formData.travelersCount} guests) has been formatted.
              </p>

              {/* Instant WhatsApp Dispatch Card */}
              <div className="bg-[#FAF9F5] border border-[#101A2E]/10 rounded-2xl p-6 sm:p-8 max-w-md mx-auto mb-8 text-left">
                <div className="flex items-center space-x-2 text-[10px] uppercase tracking-wider text-[#B87543] font-semibold mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Send Directly via WhatsApp</span>
                </div>
                <p className="text-xs text-[#697181] font-sans leading-relaxed mb-6">
                  Click below to open WhatsApp with your pre-formatted enquiry details directly sent to Darsh Dream Tours (+91 97243 91674).
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={getWhatsAppUrl(generatedWhatsAppText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-2 py-3.5 px-5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-[10px] uppercase tracking-wider font-semibold shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>

                  <a
                    href={generatedMailtoUrl}
                    className="inline-flex items-center justify-center space-x-2 py-3.5 px-5 rounded-full bg-white hover:bg-gray-50 text-[#07101F] text-[10px] uppercase tracking-wider font-medium border border-[#101A2E]/15 transition-all"
                  >
                    <Mail className="w-4 h-4 text-[#B87543]" />
                    <span>Email</span>
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={resetForm}
                className="text-[10px] uppercase tracking-widest text-[#697181] hover:text-[#07101F] font-sans transition-colors"
              >
                ← Plan Another Journey
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default JourneyPlanner;
