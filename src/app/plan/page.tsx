"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JourneyPlanner from "@/components/JourneyPlanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUpRight, Compass, Phone } from "lucide-react";
import GoogleTrustBadge from "@/components/GoogleTrustBadge";
import { useInquiry } from "@/context/InquiryContext";

function PlanContent() {
  const searchParams = useSearchParams();
  const prefilledDestination = searchParams?.get("destination") || undefined;
  return <JourneyPlanner prefilledDestination={prefilledDestination} />;
}

export default function PlanPage() {
  const { openInquiry } = useInquiry();
  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#101A2E] selection:bg-[#B87543] selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#07101F] px-5 pb-20 pt-36 text-white sm:px-8 sm:pb-28 sm:pt-40 lg:px-12">
        <div className="absolute right-[-120px] top-[-140px] h-[520px] w-[520px] rounded-full border border-[#B87543]/15 pointer-events-none" />
        <div className="absolute right-[-40px] top-[-60px] h-[360px] w-[360px] rounded-full border border-[#B87543]/10 pointer-events-none" />
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#B87543]/15 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-[1440px]">
          <div className="mb-6 flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E2B18D]" />
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E2B18D]">
                Bespoke Planning Suite
              </span>
            </span>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h1 className="display-heading text-6xl sm:text-7xl lg:text-[8rem] text-white">
                Plan your
                <br />
                <span className="italic font-normal text-[#E2B18D]">journey.</span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:pb-4">
              <p className="max-w-md font-sans text-sm sm:text-base font-light leading-7 text-white/60">
                Tell us where you want to go, when you want to travel, and what
                kind of trip you have in mind. We shape everything around you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Bespoke Journey Planner */}
      <div className="py-12 sm:py-20">
        <Suspense fallback={<JourneyPlanner />}>
          <PlanContent />
        </Suspense>
      </div>

      {/* Alternative direct contact banner */}
      <section className="bg-[#07101F] px-5 py-20 text-white sm:px-8 lg:px-12 border-t border-white/10">
        <div className="mx-auto max-w-[1440px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <p className="eyebrow mb-3 !text-[#E2B18D]">
              Prefer a Direct Conversation?
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-white">
              Speak directly with our dedicated desks
            </h2>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-sans text-white/70">
              <a href="tel:+917048386900" className="hover:text-white transition-colors">
                1. Ticketing: <span className="text-[#E2B18D] font-mono">+91 70483 86900</span> (Pratik)
              </a>
              <span className="text-white/20">·</span>
              <a href="tel:+917487083499" className="hover:text-white transition-colors">
                2. Tours: <span className="text-[#E2B18D] font-mono">+91 74870 83499</span> (Sakshi)
              </a>
              <span className="text-white/20">·</span>
              <a href="tel:+919724391674" className="hover:text-white transition-colors">
                3. Holidays: <span className="text-[#E2B18D] font-mono">+91 97243 91674</span> (Office)
              </a>
            </div>
            <div className="mt-4">
              <GoogleTrustBadge variant="pill" />
            </div>
          </div>

          <button
            type="button"
            onClick={() => openInquiry({ department: "tours" })}
            className="inline-flex items-center gap-3 rounded-full border border-[#B87543] bg-[#B87543] px-8 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-[#07101F] transition-all duration-300 shadow-md"
          >
            <Compass size={16} />
            <span>Open Fast Inquiry Form</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <WhatsAppButton />
    </main>
  );
}
