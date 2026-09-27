"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import JourneyPlanner from "@/components/JourneyPlanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getWhatsAppUrl } from "@/data/siteConfig";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import GoogleTrustBadge from "@/components/GoogleTrustBadge";

function PlanContent() {
  const searchParams = useSearchParams();
  const prefilledDestination = searchParams?.get("destination") || undefined;
  return <JourneyPlanner prefilledDestination={prefilledDestination} />;
}

export default function PlanPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#101A2E]">
      <Navbar />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#101A2E] px-5 pb-20 pt-36 text-white sm:px-8 sm:pb-28 sm:pt-40 lg:px-12">
        <div className="absolute right-[-120px] top-[-140px] h-[520px] w-[520px] rounded-full border border-[#B87543]/15" />
        <div className="absolute right-[-40px] top-[-60px] h-[360px] w-[360px] rounded-full border border-[#B87543]/10" />

        <div className="relative mx-auto max-w-[1440px]">
          <p className="eyebrow mb-6 !text-[#E2B18D]">Bespoke Planning</p>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h1 className="display-heading text-6xl sm:text-7xl lg:text-[8rem]">
                Plan your
                <br />
                <span className="italic text-[#E2B18D]">journey.</span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:pb-4">
              <p className="max-w-md font-sans text-sm leading-7 text-white/50 sm:text-base">
                Tell us where you want to go, when you want to travel, and what kind of trip you have in mind. We shape everything around you.
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
      <section className="bg-[#101A2E] px-5 py-20 text-white sm:px-8 lg:px-12 border-t border-white/10">
        <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="eyebrow mb-3 !text-[#E2B18D]">Prefer a direct conversation?</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-light">
              Speak directly with Sakshi Chandiramani
            </h2>
            <p className="mt-2 font-sans text-sm text-white/60">
              Vadodara, Gujarat · +91 97243 91674
            </p>
            <div className="mt-4">
              <GoogleTrustBadge variant="pill" />
            </div>
          </div>

          <a
            href={getWhatsAppUrl("Hello Sakshi, I would like to plan a journey with Darsh Dream Tours.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-[#B87543] bg-[#B87543] px-7 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-[#101A2E] transition-all duration-300"
          >
            <MessageCircle size={16} />
            <span>Chat on WhatsApp</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}
