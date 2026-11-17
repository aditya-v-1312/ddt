"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleTrustBadge from "@/components/GoogleTrustBadge";
import { siteConfig } from "@/data/siteConfig";
import {
  FileCheck2,
  ShieldCheck,
  CalendarCheck,
  Headphones,
  CheckCircle2,
  Phone,
  MessageSquare,
  Globe2,
  ArrowRight,
  Sparkles,
  Plane,
  Clock,
  Send,
  AlertCircle,
  Briefcase,
  Compass,
} from "lucide-react";

const VISA_POPULAR_DESTINATIONS = [
  {
    name: "Schengen & Europe",
    countries: "Switzerland, France, Italy, Germany, Austria, Netherlands",
    type: "Tourist & Business",
    processingTime: "15 - 25 Days",
    tag: "High Demand",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "United Kingdom",
    countries: "England, Scotland, Wales & Northern Ireland",
    type: "Standard Visitor (6 Months / Long-Term)",
    processingTime: "15 - 20 Working Days",
    tag: "Family & Holiday",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "United States (US)",
    countries: "B1/B2 Tourist & Business Visitor",
    type: "Appointment Guidance & DS-160 Filing",
    processingTime: "Slot Scheduling Based",
    tag: "Expert Guidance",
    image: "https://images.unsplash.com/photo-1506970845246-18f21d533b20?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Dubai & UAE",
    countries: "Dubai, Abu Dhabi, Sharjah",
    type: "30 & 60-Day Tourist e-Visa",
    processingTime: "24 - 48 Hours Express",
    tag: "Fast Track",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Singapore & Malaysia",
    countries: "Singapore e-Pass & Malaysia eNTRI/e-Visa",
    type: "Tourist & Transit Visas",
    processingTime: "3 - 5 Working Days",
    tag: "Family Favorite",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Australia & New Zealand",
    countries: "Visitor Visa Subclass 600 & NZeTA",
    type: "Tourist & Family Visits",
    processingTime: "20 - 30 Working Days",
    tag: "Scenic Escapes",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Japan & South Korea",
    countries: "Japan Tourist e-Visa / Sticker & Korea C-3",
    type: "Cultural & Holiday Visas",
    processingTime: "7 - 12 Working Days",
    tag: "Cherry Blossom Season",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Vietnam, Bali & Central Asia",
    countries: "Vietnam e-Visa, Bali VOA/e-VOA, Azerbaijan, Georgia",
    type: "Express Tourist Clearances",
    processingTime: "2 - 4 Working Days",
    tag: "Hassle-Free",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=85",
  },
];

const VISA_PILLARS = [
  {
    icon: <FileCheck2 className="h-6 w-6 text-[#E2B18D]" />,
    title: "Hassle-Free Visa Application Assistance",
    description:
      "We eliminate the complexity and guesswork from your visa journey. From initial assessment to application submission, our specialists handle every step with precision.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-[#E2B18D]" />,
    title: "Guidance on Required Documents & Paperwork",
    description:
      "Clear, tailored checklists covering financial proofs, bank statements, ITR filing, employment letters, sponsorship affidavits, and flight/hotel reservation proofs.",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-[#E2B18D]" />,
    title: "Support for Tourist & Business Visas",
    description:
      "Whether you are planning a family holiday, romantic honeymoon, business conference, or client meetings, we prepare category-specific documentation.",
  },
  {
    icon: <Clock className="h-6 w-6 text-[#E2B18D]" />,
    title: "Application Process Guidance & Timely Follow-ups",
    description:
      "We track your application stages closely, ensure deadlines are respected, liaise for updates, and keep you informed every step of the way.",
  },
  {
    icon: <CalendarCheck className="h-6 w-6 text-[#E2B18D]" />,
    title: "Assistance with Appointment Scheduling",
    description:
      "We assist in finding and scheduling biometric, interview, and submission slots at VFS Global, TLScontact, BLS, and consular centers in Gujarat and across India.",
  },
  {
    icon: <Headphones className="h-6 w-6 text-[#E2B18D]" />,
    title: "Dedicated 1-on-1 Customer Support",
    description:
      "Direct phone and WhatsApp access to our visa desk in Vadodara (+91 7048386900). No confusing automated call trees — speak directly with our team.",
  },
];

const VISA_STEPS = [
  {
    num: "01",
    title: "Profile & Itinerary Evaluation",
    desc: "We review your destination, travel dates, passport validity, and purpose of visit to determine the exact visa category and embassy requirements.",
  },
  {
    num: "02",
    title: "Customized Document Dossier",
    desc: "You receive a clean, organized checklist. We review your bank statements, NOC letters, itinerary drafts, and cover letters to ensure 100% compliance.",
  },
  {
    num: "03",
    title: "Appointment Booking & Submission",
    desc: "We secure your VFS/Consulate biometrics appointment slot, complete the online embassy forms, and brief you thoroughly on biometrics or interview protocols.",
  },
  {
    num: "04",
    title: "Tracking & Stamped Passport Collection",
    desc: "We actively monitor consular processing until your visa is issued, readying you for a stress-free departure.",
  },
];

export default function VisaPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "Schengen & Europe",
    visaType: "Tourist Visa",
    travelersCount: "2",
    travelMonth: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus("error");
      setErrorMessage("Please enter both your name and phone number so we can reach you.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          department: "ticketing",
          serviceType: `Visa Assistance: ${formData.visaType}`,
          destination: formData.destination,
          travelersCount: formData.travelersCount,
          travelMonth: formData.travelMonth,
          message: formData.message || `Visa assistance enquiry for ${formData.destination} (${formData.visaType})`,
          sourceUrl: "/visa",
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Unable to submit your enquiry. Please reach us via WhatsApp.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network issue. Please click the WhatsApp button to chat directly.");
    }
  };

  const directWhatsAppUrl = `https://wa.me/917048386900?text=${encodeURIComponent(
    "Hi Sakshi, I am looking for Visa Assistance with Darsh Dream Tours for international travel. Could you please guide me on the documentation and process?"
  )}`;

  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#101A2E] selection:bg-[#B87543] selection:text-white">
      <Navbar />

      {/* =========================================================
          01 — HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#0C1E3D] text-white pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute -right-20 -top-20 h-[550px] w-[550px] rounded-full border border-[#B87543]/20" />
          <div className="absolute right-[10%] top-[20%] h-[350px] w-[350px] rounded-full border border-white/10" />
        </div>
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#B87543]/20 blur-[130px] pointer-events-none" />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
            {/* Left Column: Heading & Value Prop */}
            <div className="lg:col-span-7">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-1.5 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#E2B18D] animate-pulse" />
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E2B18D]">
                    Hassle-Free Visa Services
                  </span>
                </span>
                <span className="font-sans text-xs text-white/60">Darsh Dream Tours LLP</span>
              </div>

              <h1 className="font-serif text-[clamp(2.8rem,5.5vw,5.5rem)] font-light leading-[1.02] tracking-[-0.03em] text-white">
                Your Visa,
                <br />
                <span className="italic font-normal text-[#E2B18D]">Our Assistance!</span>
              </h1>

              <p className="mt-6 font-sans text-base sm:text-lg text-white/80 font-light leading-relaxed max-w-2xl">
                Planning an international trip? Let <strong className="text-white font-medium">Darsh Dream Tours LLP</strong> make
                your visa application process simple, smooth, and hassle-free. From documentation guidance to appointment scheduling and
                application support, our team is here to assist you at every step.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#visa-form"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#B87543] px-7 py-3.5 font-sans text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-[#0C1E3D] transition-all shadow-lg hover:scale-105"
                >
                  <span>Apply for Visa Assistance</span>
                  <ArrowRight size={15} />
                </a>

                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-white hover:text-[#0C1E3D] backdrop-blur-md transition-all"
                >
                  <MessageSquare size={16} className="text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-xs text-white/70">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#E2B18D]" />
                  <span>Documentation Checklist</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#E2B18D]" />
                  <span>VFS &amp; Embassy Appointments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#E2B18D]" />
                  <span>Vadodara-Based Support</span>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Help Desk Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/15 bg-white/[0.08] p-8 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-40 h-40 bg-[#B87543]/20 rounded-full blur-2xl pointer-events-none" />

                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#E2B18D] block mb-2">
                  Dedicated Visa Helpline
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-white mb-3">
                  Just Call Us – <span className="italic font-normal text-[#E2B18D]">We Handle It!</span>
                </h3>
                <p className="font-sans text-xs sm:text-sm text-white/75 font-light leading-relaxed mb-6">
                  Don't let complex visa paperwork or appointment stress delay your holiday or business trip. Speak directly with Sakshi at our Vadodara desk.
                </p>

                <div className="space-y-4 mb-8">
                  <a
                    href="tel:+917048386900"
                    className="flex items-center justify-between rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 p-4 transition-all group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="h-10 w-10 rounded-full bg-[#B87543] flex items-center justify-center text-white">
                        <Phone size={18} />
                      </div>
                      <div>
                        <div className="font-sans text-[10px] uppercase tracking-wider text-white/50">Call Directly</div>
                        <div className="font-sans text-sm font-semibold text-white group-hover:text-[#E2B18D] transition-colors">
                          +91 7048386900
                        </div>
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-white/40 group-hover:translate-x-1 group-hover:text-white transition-all" />
                  </a>

                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 p-4 transition-all group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="h-10 w-10 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                        <MessageSquare size={18} />
                      </div>
                      <div>
                        <div className="font-sans text-[10px] uppercase tracking-wider text-[#25D366]">WhatsApp Support</div>
                        <div className="font-sans text-sm font-semibold text-white group-hover:text-[#E2B18D] transition-colors">
                          Instant Response (Mon – Sat)
                        </div>
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-white/40 group-hover:translate-x-1 group-hover:text-white transition-all" />
                  </a>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="font-serif italic text-sm text-[#E2B18D] text-center">
                    "Your Destination Is Our Responsibility. Your Visa Journey Is Our Priority!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          02 — WHY CHOOSE DARSH DREAM TOURS (THE 6 CORE PILLARS)
      ========================================================= */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B87543]/20 bg-[#B87543]/5 px-4 py-1 font-sans text-[10px] uppercase tracking-[0.25em] text-[#B87543] font-semibold mb-4">
            <Sparkles size={13} className="text-[#B87543]" />
            <span>Why Choose Darsh Dream Tours?</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#101A2E] leading-tight">
            Complete, Transparent &amp; <span className="italic font-normal text-[#B87543]">Stress-Free</span> Visa Support
          </h2>
          <p className="mt-4 font-sans text-sm sm:text-base text-[#101A2E]/70 font-light leading-relaxed">
            Whether you are travelling for business conferences, leisure vacations, or family holidays, our experienced team ensures your visa application is submitted accurately and within required timelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VISA_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="group rounded-3xl border border-[#101A2E]/[0.08] bg-white p-8 sm:p-9 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#0C1E3D] text-white transition-transform group-hover:scale-110">
                {pillar.icon}
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#101A2E] mb-3 group-hover:text-[#B87543] transition-colors">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm text-[#101A2E]/70 font-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          03 — POPULAR DESTINATIONS HANDLED
      ========================================================= */}
      <section className="bg-[#0C1E3D] text-white py-20 sm:py-28 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E2B18D] block mb-3">
                Global Travel Coverage
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-white">
                Visas We Assist With <span className="italic font-normal text-[#E2B18D]">Worldwide</span>
              </h2>
            </div>
            <p className="font-sans text-sm text-white/70 max-w-md font-light leading-relaxed">
              From Schengen countries and the UK to express Dubai and Singapore e-Visas, we provide document checklists tailored specifically for Indian passport holders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VISA_POPULAR_DESTINATIONS.map((dest, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 flex flex-col justify-between hover:border-[#E2B18D]/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Background Image Preview */}
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1E3D] via-[#0C1E3D]/40 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-[#0C1E3D]/80 backdrop-blur-md px-3 py-1 font-sans text-[9px] font-bold uppercase tracking-wider text-[#E2B18D] border border-white/10">
                    {dest.tag}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-light text-white group-hover:text-[#E2B18D] transition-colors mb-2">
                      {dest.name}
                    </h3>
                    <p className="font-sans text-xs text-white/60 mb-4 line-clamp-2">
                      {dest.countries}
                    </p>
                    <div className="border-t border-white/10 pt-3 space-y-1.5 font-sans text-xs text-white/80">
                      <div className="flex justify-between">
                        <span className="text-white/50">Category:</span>
                        <span className="font-medium text-white">{dest.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/50">Avg. Time:</span>
                        <span className="font-medium text-[#E2B18D]">{dest.processingTime}</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#visa-form"
                    className="mt-6 inline-flex items-center justify-between text-xs font-sans font-semibold uppercase tracking-wider text-white/80 group-hover:text-[#E2B18D] transition-colors"
                  >
                    <span>Request Details</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          04 — STEP-BY-STEP PROCESS
      ========================================================= */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#B87543] block mb-3">
            Transparent Workflow
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#101A2E]">
            How Our <span className="italic font-normal text-[#B87543]">Visa Assistance</span> Works
          </h2>
          <p className="mt-4 font-sans text-sm sm:text-base text-[#101A2E]/70 font-light">
            We simplify embassy requirements into a clear, methodical 4-step path.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VISA_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl border border-[#101A2E]/[0.08] bg-white p-8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-4xl font-light text-[#B87543]/40 block mb-4">
                  {step.num}
                </span>
                <h3 className="font-serif text-xl font-normal text-[#101A2E] mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#101A2E]/70 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          05 — INTERACTIVE VISA INQUIRY FORM
      ========================================================= */}
      <section id="visa-form" className="py-20 sm:py-28 bg-[#EFECE6] px-5 sm:px-8 lg:px-12 scroll-mt-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="rounded-3xl border border-[#101A2E]/10 bg-white p-8 sm:p-14 shadow-xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#B87543] block mb-2">
                Online Visa Desk
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#101A2E]">
                Get Your Personalized <span className="italic font-normal text-[#B87543]">Visa Checklist</span>
              </h2>
              <p className="mt-3 font-sans text-xs sm:text-sm text-[#101A2E]/70 font-light">
                Fill out the details below. Our visa team will review your travel profile and get back to you with the exact document checklist and appointment options.
              </p>
            </div>

            {status === "success" ? (
              <div className="rounded-2xl border border-green-200 bg-green-50/80 p-8 text-center max-w-xl mx-auto">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700 mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-serif text-2xl font-normal text-[#101A2E] mb-2">
                  Thank You! Enquiry Received
                </h3>
                <p className="font-sans text-sm text-[#101A2E]/70 mb-6">
                  Our visa team at Darsh Dream Tours will review your requirements and connect with you on WhatsApp / Phone shortly with the complete checklist.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-sans text-xs font-bold uppercase tracking-wider text-white hover:opacity-90 shadow-md"
                  >
                    <MessageSquare size={16} />
                    <span>Ping Sakshi on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        destination: "Schengen & Europe",
                        visaType: "Tourist Visa",
                        travelersCount: "2",
                        travelMonth: "",
                        message: "",
                      });
                    }}
                    className="rounded-full border border-[#101A2E]/20 px-6 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-[#101A2E] hover:bg-black/5"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "error" && (
                  <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-xs text-red-700">
                    <AlertCircle size={18} className="shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Destination */}
                  <div>
                    <label className="font-sans text-xs font-bold uppercase tracking-wider text-[#101A2E]/80 block mb-2">
                      Target Country / Region *
                    </label>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#101A2E]/15 bg-[#F7F5F0] px-4 py-3.5 font-sans text-sm text-[#101A2E] focus:outline-none focus:border-[#B87543] transition-colors"
                      required
                    >
                      <option value="Schengen & Europe (Switzerland, France, Italy, etc.)">Schengen &amp; Europe (France, Switzerland, Italy, etc.)</option>
                      <option value="United Kingdom (UK)">United Kingdom (UK Visitor Visa)</option>
                      <option value="United States (US B1/B2)">United States (US B1/B2 Visa Appointment)</option>
                      <option value="Dubai / United Arab Emirates">Dubai / UAE (Express 30 or 60 Days)</option>
                      <option value="Singapore">Singapore (e-Pass / Tourist Visa)</option>
                      <option value="Malaysia">Malaysia (eNTRI / e-Visa)</option>
                      <option value="Australia">Australia (Tourist Subclass 600)</option>
                      <option value="New Zealand">New Zealand (Visitor Visa / NZeTA)</option>
                      <option value="Japan">Japan (Tourist e-Visa / Sticker)</option>
                      <option value="South Korea">South Korea (Tourist C-3 Visa)</option>
                      <option value="Vietnam">Vietnam (e-Visa clearance)</option>
                      <option value="Bali / Indonesia">Bali / Indonesia (e-VOA assistance)</option>
                      <option value="Azerbaijan / Georgia / Central Asia">Azerbaijan / Georgia / Central Asia</option>
                      <option value="Other International Destination">Other International Destination</option>
                    </select>
                  </div>

                  {/* Visa Type */}
                  <div>
                    <label className="font-sans text-xs font-bold uppercase tracking-wider text-[#101A2E]/80 block mb-2">
                      Visa Category *
                    </label>
                    <select
                      name="visaType"
                      value={formData.visaType}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#101A2E]/15 bg-[#F7F5F0] px-4 py-3.5 font-sans text-sm text-[#101A2E] focus:outline-none focus:border-[#B87543] transition-colors"
                      required
                    >
                      <option value="Tourist Visa">Tourist Visa (Leisure &amp; Sightseeing)</option>
                      <option value="Business Visa">Business Visa (Meetings, Conferences, Exhibitions)</option>
                      <option value="Family / Friend Visit">Family or Friend Visit</option>
                      <option value="Express / Urgent Submission">Urgent / Fast-Track Application</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="font-sans text-xs font-bold uppercase tracking-wider text-[#101A2E]/80 block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Rajesh Patel"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#101A2E]/15 bg-[#F7F5F0] px-4 py-3.5 font-sans text-sm text-[#101A2E] focus:outline-none focus:border-[#B87543] transition-colors"
                      required
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="font-sans text-xs font-bold uppercase tracking-wider text-[#101A2E]/80 block mb-2">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#101A2E]/15 bg-[#F7F5F0] px-4 py-3.5 font-sans text-sm text-[#101A2E] focus:outline-none focus:border-[#B87543] transition-colors"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-sans text-xs font-bold uppercase tracking-wider text-[#101A2E]/80 block mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#101A2E]/15 bg-[#F7F5F0] px-4 py-3.5 font-sans text-sm text-[#101A2E] focus:outline-none focus:border-[#B87543] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Number of Applicants */}
                  <div>
                    <label className="font-sans text-xs font-bold uppercase tracking-wider text-[#101A2E]/80 block mb-2">
                      Number of Applicants
                    </label>
                    <select
                      name="travelersCount"
                      value={formData.travelersCount}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#101A2E]/15 bg-[#F7F5F0] px-4 py-3.5 font-sans text-sm text-[#101A2E] focus:outline-none focus:border-[#B87543] transition-colors"
                    >
                      <option value="1">1 Person (Solo)</option>
                      <option value="2">2 Persons (Couple / Pair)</option>
                      <option value="3-4">3 – 4 Persons (Family)</option>
                      <option value="5+">5+ Persons (Group / Corporate)</option>
                    </select>
                  </div>

                  {/* Approximate Travel Dates */}
                  <div>
                    <label className="font-sans text-xs font-bold uppercase tracking-wider text-[#101A2E]/80 block mb-2">
                      Approximate Travel Timing
                    </label>
                    <input
                      type="text"
                      name="travelMonth"
                      placeholder="e.g. Next month, May 2027, etc."
                      value={formData.travelMonth}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#101A2E]/15 bg-[#F7F5F0] px-4 py-3.5 font-sans text-sm text-[#101A2E] focus:outline-none focus:border-[#B87543] transition-colors"
                    />
                  </div>
                </div>

                {/* Message / Details */}
                <div>
                  <label className="font-sans text-xs font-bold uppercase tracking-wider text-[#101A2E]/80 block mb-2">
                    Additional Notes / Previous Visa History
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us if you have urgent appointment needs, previous travel history, or specific consulate inquiries..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#101A2E]/15 bg-[#F7F5F0] px-4 py-3.5 font-sans text-sm text-[#101A2E] focus:outline-none focus:border-[#B87543] transition-colors"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#101A2E] hover:bg-[#B87543] text-white px-8 py-4 font-sans text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-md disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <span>Sending Details...</span>
                    ) : (
                      <>
                        <span>Submit Visa Inquiry</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-2 text-xs text-[#101A2E]/60">
                    <ShieldCheck size={16} className="text-[#B87543]" />
                    <span>Information kept confidential. No spam guaranteed.</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          06 — FINAL CONTACT BANNER
      ========================================================= */}
      <section className="bg-[#0C1E3D] text-white py-16 px-5 sm:px-8 lg:px-12 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#E2B18D] block mb-2">
              Ready To Start Your Application?
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-white">
              Don't let visa formalities delay your travel plans.
            </h3>
            <p className="font-sans text-xs sm:text-sm text-white/70 font-light mt-1">
              Contact Darsh Dream Tours LLP today, and let our team guide you through the process.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a
              href="tel:+917048386900"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-sans text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-[#0C1E3D] transition-all"
            >
              <Phone size={14} />
              <span>+91 7048386900</span>
            </a>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-sans text-xs font-bold uppercase tracking-wider text-white hover:opacity-90 transition-all shadow-md"
            >
              <MessageSquare size={14} />
              <span>WhatsApp Us Now</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
