"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { MapPin, Phone, Mail, Globe, RotateCcw } from "lucide-react";

interface FooterProps {
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayIntro }) => {
  return (
    <footer id="contact" className="bg-[#050D20] text-white pt-20 pb-12 border-t border-[#1C366B]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="#" className="inline-block bg-white p-2.5 rounded-lg mb-6 shadow-sm">
              <div className="relative h-12 w-40">
                <Image
                  src="/images/logo.jpg"
                  alt={siteConfig.name}
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="font-serif italic text-lg text-[#D99767] mb-2">
              "{siteConfig.tagline}"
            </p>

            <p className="text-sm text-white/60 font-sans font-light max-w-sm leading-relaxed mb-6">
              Bespoke travel curation based in Vadodara, Gujarat. Crafting thoughtful escapes across India and worldwide destinations.
            </p>

            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-[#B87543] hover:text-[#D99767] transition-colors py-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Replay Opening Flight</span>
              </button>
            )}
          </div>

          {/* Partner & Leadership (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-xl text-white tracking-wide mb-5">
              Leadership
            </h4>
            <div className="space-y-2 text-sm font-sans">
              <p className="font-medium text-white text-base">
                {siteConfig.partner.name}
              </p>
              <p className="text-xs uppercase tracking-widest text-[#D99767]">
                {siteConfig.partner.role}
              </p>
              <p className="text-xs text-white/60 pt-2 font-light leading-relaxed">
                Direct personal planning and end-to-end guidance for all your domestic and international travels.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
              <h5 className="text-xs uppercase tracking-widest text-white/40 font-sans mb-3">
                Navigation
              </h5>
              <ul className="space-y-2 text-xs uppercase tracking-wider font-sans text-white/70">
                <li>
                  <a href="#destinations" className="hover:text-[#D99767] transition-colors">
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="#categories" className="hover:text-[#D99767] transition-colors">
                    Experiences
                  </a>
                </li>
                <li>
                  <a href="#featured" className="hover:text-[#D99767] transition-colors">
                    Featured Journeys
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#D99767] transition-colors">
                    About Sakshi
                  </a>
                </li>
                <li>
                  <a href="#planner" className="hover:text-[#D99767] transition-colors">
                    Plan Your Journey
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact & Location (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-xl text-white tracking-wide mb-5">
              Office & Contact
            </h4>

            <div className="space-y-4 text-xs sm:text-sm font-sans text-white/75">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#B87543] shrink-0 mt-1" />
                <address className="not-italic leading-relaxed">
                  {siteConfig.contact.address.line1}
                  <br />
                  {siteConfig.contact.address.line2}
                  <br />
                  {siteConfig.contact.address.city} {siteConfig.contact.address.pincode}
                  <br />
                  Gujarat, India
                </address>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#B87543] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-[#D99767] transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#B87543] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-[#D99767] transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-[#B87543] shrink-0" />
                <span className="text-white/80">{siteConfig.contact.website}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 font-sans tracking-wider gap-4">
          <p>© {new Date().getFullYear()} DARSH DREAM TOURS. All rights reserved.</p>
          <p className="text-[11px] text-white/30">
            Crafted for Sakshi Chandiramani • Vadodara
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
