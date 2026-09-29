"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { MapPin, Phone, Mail, Globe, RotateCcw } from "lucide-react";
import GoogleTrustBadge from "./GoogleTrustBadge";

interface FooterProps {
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayIntro }) => {
  return (
    <footer id="contact" className="bg-[#07101F] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="inline-block mb-6">
              <div className="relative h-[64px] w-[200px] sm:h-[72px] sm:w-[220px]">
                <Image
                  src="/images/logo.png"
                  alt={siteConfig.name}
                  fill
                  sizes="220px"
                  className="object-contain object-left drop-shadow-[0_2px_10px_rgba(255,255,255,0.22)] brightness-110"
                />
              </div>
            </Link>

            <p className="font-serif italic text-lg text-[#E2B18D] mb-3">
              "{siteConfig.tagline}"
            </p>

            <p className="text-xs text-white/50 font-sans font-light max-w-sm leading-relaxed mb-6">
              Bespoke travel curation based in Vadodara, Gujarat. Crafting thoughtful escapes across India and worldwide destinations.
            </p>

            <div className="mb-6">
              <GoogleTrustBadge variant="pill" />
            </div>

            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="inline-flex items-center space-x-2 text-[10px] font-sans uppercase tracking-[0.2em] text-white/40 hover:text-[#E2B18D] transition-colors py-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Replay Journey Intro</span>
              </button>
            )}
          </div>

          {/* Navigation (3 cols) */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="font-sans text-[9px] uppercase tracking-[0.25em] text-white/40 font-semibold mb-5">
              Explore
            </h4>
            <nav className="flex flex-col gap-3 font-sans text-xs">
              <Link href="/destinations" className="w-fit text-white/70 hover:text-white transition-colors">
                Destinations
              </Link>
              <Link href="/experiences" className="w-fit text-white/70 hover:text-white transition-colors">
                Experiences
              </Link>
              <Link href="/about" className="w-fit text-white/70 hover:text-white transition-colors">
                About Sakshi
              </Link>
              <Link href="/plan" className="w-fit text-white/70 hover:text-white transition-colors">
                Plan a Journey
              </Link>
            </nav>
          </div>

          {/* Office & Contact (4 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-[9px] uppercase tracking-[0.25em] text-white/40 font-semibold mb-5">
              Vadodara Office
            </h4>

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
                  +91 97243 91674
                </a>
              </p>

              <p>
                <a href="mailto:sakshi@darshdreamtours.com" className="hover:text-[#E2B18D] transition-colors">
                  sakshi@darshdreamtours.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/40 font-sans tracking-wide gap-4">
          <p>© {new Date().getFullYear()} DARSH DREAM TOURS. All rights reserved.</p>
          <p>Crafted for Sakshi Chandiramani · Vadodara, Gujarat</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
