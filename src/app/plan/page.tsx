"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import JourneyPlanner from "@/components/JourneyPlanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getWhatsAppUrl, siteConfig } from "@/data/siteConfig";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import GoogleTrustBadge from "@/components/GoogleTrustBadge";

function PlanContent() {
  const searchParams = useSearchParams();
  const prefilledDestination = searchParams?.get("destination") || undefined;
  return <JourneyPlanner prefilledDestination={prefilledDestination} />;
}

export default function PlanPage() {
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
        <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="eyebrow mb-3 !text-[#E2B18D]">
              Prefer a Direct Conversation?
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-white">
              Speak directly with Darsh Dream Tours
            </h2>
            <p className="mt-2 font-sans text-sm text-white/60">
              Vadodara Office: +91 97243 91674 · info@darshdreamtours.com
            </p>
            <div className="mt-4">
              <GoogleTrustBadge variant="pill" />
            </div>
          </div>

          <a
            href={getWhatsAppUrl(
              "Hello Darsh Dream Tours, I would like to plan a journey with you."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-[#B87543] bg-[#B87543] px-8 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-[#07101F] transition-all duration-300 shadow-md"
          >
            <MessageCircle size={16} />
            <span>Chat on WhatsApp</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#07101F] px-5 pb-12 pt-16 text-white sm:px-8 lg:px-12 border-t border-white/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 pb-14 border-b border-white/10">
            <div className="md:col-span-5">
              <Link href="/" className="inline-block">
                <div className="relative h-[72px] w-[230px] sm:h-[84px] sm:w-[260px]">
                  <Image
                    src="/images/logo-light.png"
                    alt="Darsh Dream Tours"
                    fill
                    sizes="260px"
                    className="object-contain object-left drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)]"
                  />
                </div>
              </Link>

              <p className="mt-5 max-w-sm font-sans text-xs leading-6 text-white/50">
                Thoughtfully planned journeys across India and beyond. Personal
                planning by Darsh Dream Tours in Vadodara, Gujarat.
              </p>
            </div>

            <div className="md:col-span-3 md:col-start-7">
              <p className="mb-5 font-sans text-[9px] uppercase tracking-[0.25em] text-white/40 font-semibold">
                Explore
              </p>

              <nav className="flex flex-col gap-3 font-sans text-xs">
                <Link href="/destinations" className="w-fit text-white/70 hover:text-white transition-colors">
                  Destinations
                </Link>
                <Link href="/experiences" className="w-fit text-white/70 hover:text-white transition-colors">
                  Experiences
                </Link>
                <Link href="/about" className="w-fit text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="/plan" className="w-fit text-white/70 hover:text-white transition-colors">
                  Plan a Journey
                </Link>
              </nav>
            </div>

            <div className="md:col-span-3">
              <p className="mb-5 font-sans text-[9px] uppercase tracking-[0.25em] text-white/40 font-semibold">
                Vadodara Office
              </p>

              <div className="space-y-3 font-sans text-xs text-white/70">
                <p className="leading-relaxed text-white/50">
                  {siteConfig.contact.address.line1}
                  <br />
                  {siteConfig.contact.address.line2}
                  <br />
                  {siteConfig.contact.address.city}{" "}
                  {siteConfig.contact.address.pincode}
                </p>

                <p className="pt-2">
                  <a href="tel:+919724391674" className="hover:text-[#E2B18D] transition-colors">
                    Office: +91 97243 91674
                  </a>
                </p>

                <p>
                  <a href="mailto:info@darshdreamtours.com" className="hover:text-[#E2B18D] transition-colors">
                    info@darshdreamtours.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans text-white/40">
            <p>© {new Date().getFullYear()} DARSH DREAM TOURS. All rights reserved.</p>
            <p>Crafted for Sakshi Chandiramani · Vadodara, Gujarat</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </main>
  );
}
