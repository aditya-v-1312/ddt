import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#07101F] text-white flex flex-col justify-between selection:bg-[#B87543] selection:text-white">
      <Navbar />

      <section className="relative flex-1 flex items-center justify-center px-5 py-40 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#B87543]/10 blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#E2B18D] font-semibold mb-4">
            404 · Uncharted Waypoint
          </p>

          <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-light text-white leading-none">
            Page Not
            <br />
            <span className="italic text-[#E2B18D]">Found.</span>
          </h1>

          <p className="mt-8 font-sans text-sm sm:text-base font-light text-white/60 leading-relaxed max-w-md mx-auto">
            The coordinates you were looking for don't seem to exist. Let's guide you back to our curated destinations.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#07101F] hover:bg-[#E2B18D] transition-all duration-300 shadow-md hover:scale-[1.02]"
            >
              <span>Return to Homepage</span>
              <ArrowUpRight size={14} />
            </Link>

            <Link
              href="/destinations"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white hover:border-[#E2B18D] hover:text-[#E2B18D] transition-colors"
            >
              <span>Explore Destinations</span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 px-5 sm:px-8 text-center text-xs font-sans text-white/40">
        <p>© {new Date().getFullYear()} DARSH DREAM TOURS · Vadodara, Gujarat</p>
      </footer>
    </main>
  );
}
