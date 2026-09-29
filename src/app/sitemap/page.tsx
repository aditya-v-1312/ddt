import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { destinations } from "@/data/destinations";
import { travelCategories } from "@/data/travelCategories";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUpRight, Compass, MapPin, Sparkles, FileCode, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Sitemap & Website Directory | Darsh Dream Tours",
  description:
    "Explore the complete website directory for Darsh Dream Tours. Access curated international and domestic destinations, bespoke travel styles, and itinerary planning services.",
};

export default function SitemapPage() {
  const international = destinations.filter((d) => d.region === "international");
  const domestic = destinations.filter((d) => d.region === "india");

  return (
    <main className="min-h-screen bg-[#F8F7F3] text-[#17213A] selection:bg-[#9A5B2D] selection:text-white flex flex-col justify-between">
      <Navbar />

      <section className="pt-36 sm:pt-44 pb-20 px-5 sm:px-8 lg:px-12 max-w-[1440px] mx-auto w-full">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B87543]/20 bg-[#B87543]/5 px-3 py-1 font-sans text-[10px] uppercase tracking-[0.25em] text-[#9A5B2D] font-semibold mb-6">
            <Compass className="w-3 h-3 text-[#B87543]" />
            <span>Architecture &amp; Navigation</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#101A2E] leading-tight">
            Website <span className="italic font-normal text-[#9A5B2D]">Directory</span> &amp; Sitemap
          </h1>

          <p className="mt-5 font-sans text-sm sm:text-base text-[#17213A]/70 leading-relaxed font-light">
            A comprehensive overview of every journey, curated destination, and bespoke service provided by Darsh Dream Tours.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#101A2E] text-white px-4 py-2 font-sans text-xs font-medium hover:bg-[#9A5B2D] transition-colors"
            >
              <FileCode className="w-3.5 h-3.5 text-[#E2B18D]" />
              <span>View Machine-Readable sitemap.xml</span>
              <ArrowUpRight className="w-3 h-3 text-white/50" />
            </a>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Pages */}
          <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#101A2E] text-[#E2B18D]">
                <Compass className="h-4 w-4" />
              </span>
              <div>
                <h2 className="font-serif text-xl font-medium text-[#101A2E]">Core Pages</h2>
                <p className="font-sans text-[11px] text-[#17213A]/50">Main site waypoints</p>
              </div>
            </div>

            <ul className="space-y-4 font-sans text-sm">
              <li>
                <Link
                  href="/"
                  className="group flex items-center justify-between font-medium text-[#17213A] hover:text-[#9A5B2D] transition-colors"
                >
                  <span>Home</span>
                  <ArrowUpRight className="w-4 h-4 text-black/30 group-hover:text-[#9A5B2D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
                <p className="text-[11px] text-[#17213A]/50 font-light mt-0.5">
                  Welcome showcase, featured highlights &amp; concierge intro
                </p>
              </li>

              <li>
                <Link
                  href="/destinations"
                  className="group flex items-center justify-between font-medium text-[#17213A] hover:text-[#9A5B2D] transition-colors"
                >
                  <span>Curated Destinations</span>
                  <ArrowUpRight className="w-4 h-4 text-black/30 group-hover:text-[#9A5B2D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
                <p className="text-[11px] text-[#17213A]/50 font-light mt-0.5">
                  International escapes &amp; domestic Indian journeys
                </p>
              </li>

              <li>
                <Link
                  href="/experiences"
                  className="group flex items-center justify-between font-medium text-[#17213A] hover:text-[#9A5B2D] transition-colors"
                >
                  <span>Travel Styles &amp; Experiences</span>
                  <ArrowUpRight className="w-4 h-4 text-black/30 group-hover:text-[#9A5B2D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
                <p className="text-[11px] text-[#17213A]/50 font-light mt-0.5">
                  Family, romance, small groups &amp; custom retreats
                </p>
              </li>

              <li>
                <Link
                  href="/about"
                  className="group flex items-center justify-between font-medium text-[#17213A] hover:text-[#9A5B2D] transition-colors"
                >
                  <span>About Sakshi Chandiramani</span>
                  <ArrowUpRight className="w-4 h-4 text-black/30 group-hover:text-[#9A5B2D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
                <p className="text-[11px] text-[#17213A]/50 font-light mt-0.5">
                  Our boutique philosophy, 3-step curation process &amp; story
                </p>
              </li>

              <li>
                <Link
                  href="/plan"
                  className="group flex items-center justify-between font-medium text-[#17213A] hover:text-[#9A5B2D] transition-colors"
                >
                  <span>Plan a Custom Journey</span>
                  <ArrowUpRight className="w-4 h-4 text-black/30 group-hover:text-[#9A5B2D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
                <p className="text-[11px] text-[#17213A]/50 font-light mt-0.5">
                  4-step custom itinerary consultation suite
                </p>
              </li>
            </ul>
          </div>

          {/* International Destinations */}
          <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#9A5B2D]/10 text-[#9A5B2D]">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <h2 className="font-serif text-xl font-medium text-[#101A2E]">International</h2>
                <p className="font-sans text-[11px] text-[#17213A]/50">Global escapes &amp; landmarks</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {international.map((dest) => (
                <Link
                  key={dest.id}
                  href={`/plan?destination=${dest.name}`}
                  className="flex flex-col p-3 rounded-xl border border-black/5 bg-[#F8F7F3]/50 hover:bg-[#101A2E] hover:text-white transition-all group"
                >
                  <span className="font-sans text-xs font-semibold text-[#101A2E] group-hover:text-white transition-colors">
                    {dest.name}
                  </span>
                  <span className="font-sans text-[10px] text-[#17213A]/50 group-hover:text-white/60 transition-colors truncate">
                    {dest.subtitle}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* India & Experiences */}
          <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#B87543]/10 text-[#9A5B2D]">
                  <Sparkles className="h-4 w-4" />
                </span>
                <div>
                  <h2 className="font-serif text-xl font-medium text-[#101A2E]">Incredible India</h2>
                  <p className="font-sans text-[11px] text-[#17213A]/50">Domestic retreats</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 mb-8">
                {domestic.map((dest) => (
                  <Link
                    key={dest.id}
                    href={`/plan?destination=${dest.name}`}
                    className="flex flex-col p-3 rounded-xl border border-black/5 bg-[#F8F7F3]/50 hover:bg-[#101A2E] hover:text-white transition-all group"
                  >
                    <span className="font-sans text-xs font-semibold text-[#101A2E] group-hover:text-white transition-colors">
                      {dest.name}
                    </span>
                    <span className="font-sans text-[10px] text-[#17213A]/50 group-hover:text-white/60 transition-colors truncate">
                      {dest.subtitle}
                    </span>
                  </Link>
                ))}
              </div>

              <h3 className="font-serif text-lg font-medium text-[#101A2E] mb-3">Travel Styles</h3>
              <ul className="space-y-2 font-sans text-xs text-[#17213A]/70">
                {travelCategories.map((exp) => (
                  <li key={exp.id} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9A5B2D]" />
                    <Link href="/experiences" className="hover:text-[#9A5B2D] transition-colors">
                      {exp.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Contact Card */}
            <div className="mt-8 pt-6 border-t border-black/5">
              <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-[#9A5B2D] mb-2">
                Vadodara Office
              </h4>
              <p className="font-sans text-xs text-[#17213A]/70 leading-relaxed mb-3">
                {siteConfig.contact.address.line1}, {siteConfig.contact.address.city}
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-medium text-[#101A2E]">
                <a href="tel:+919724391674" className="hover:text-[#9A5B2D] inline-flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-[#9A5B2D]" />
                  <span>+91 97243 91674</span>
                </a>
                <a href="mailto:sakshi@darshdreamtours.com" className="hover:text-[#9A5B2D] inline-flex items-center gap-1.5">
                  <Mail className="w-3 h-3 text-[#9A5B2D]" />
                  <span>sakshi@darshdreamtours.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
