"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { MapPin, Phone, Mail, RotateCcw, ShieldCheck, Plane, Compass, Palmtree } from "lucide-react";
import GoogleTrustBadge from "./GoogleTrustBadge";
import { useInquiry } from "@/context/InquiryContext";

interface FooterProps {
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayIntro }) => {
  const { openInquiry } = useInquiry();

  const deptIcons = [
    <Plane key="plane" size={13} className="text-[#E2B18D]" />,
    <Compass key="compass" size={13} className="text-[#E2B18D]" />,
    <Palmtree key="palm" size={13} className="text-[#E2B18D]" />,
  ];

  return (
    <footer id="contact" className="bg-[#07101F] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="inline-block mb-6">
              <div className="relative h-[72px] w-[230px] sm:h-[84px] sm:w-[260px]">
                <Image
                  src="/images/logo-light.png"
                  alt={siteConfig.name}
                  fill
                  sizes="260px"
                  className="object-contain object-left drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)]"
                />
              </div>
            </Link>

            <p className="font-serif italic text-xl sm:text-2xl text-[#E2B18D] mb-3">
              "{siteConfig.tagline}"
            </p>

            <p className="text-sm sm:text-base text-white/80 font-sans font-light max-w-sm leading-relaxed mb-6">
              Bespoke travel curation based in Vadodara, Gujarat. Thoughtfully planned journeys across India and beyond.
            </p>

            <div className="mb-6 flex flex-col gap-3.5">
              <GoogleTrustBadge variant="pill" />
              <button
                type="button"
                onClick={() => openInquiry({ department: "tours" })}
                className="w-fit inline-flex items-center gap-2 rounded-full border border-[#B87543] bg-[#B87543] hover:bg-white hover:text-[#07101F] px-6 py-3 font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white transition-all shadow-md"
              >
                <span>Submit Travel Enquiry</span>
              </button>
            </div>

            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.2em] text-white/50 hover:text-[#E2B18D] transition-colors py-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Replay Journey Intro</span>
              </button>
            )}
          </div>

          {/* Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-[#E2B18D] font-bold mb-5">
              Explore
            </h4>
            <nav className="flex flex-col gap-3.5 font-sans text-sm sm:text-base">
              <Link href="/destinations" className="w-fit text-white/80 hover:text-white transition-colors">
                Destinations
              </Link>
              <Link href="/experiences" className="w-fit text-white/80 hover:text-white transition-colors">
                Experiences
              </Link>
              <Link href="/about" className="w-fit text-white/80 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/plan" className="w-fit text-white/80 hover:text-white transition-colors">
                Plan a Journey
              </Link>
              <Link href="/sitemap" className="w-fit text-white/80 hover:text-white transition-colors">
                Sitemap
              </Link>
            </nav>
          </div>

          {/* 3 Dedicated Desks (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-[#E2B18D] font-bold mb-5">
              Dedicated Desks
            </h4>

            <div className="space-y-5 font-sans text-sm">
              {siteConfig.departments.map((dept, idx) => (
                <div key={dept.id} className="border-l-2 border-[#B87543] pl-3.5">
                  <div className="font-bold text-sm sm:text-base text-white">
                    <span>{idx + 1}. {dept.title}</span>
                  </div>
                  <div className="mt-1.5 space-y-1 text-white/85">
                    <p>
                      <a href={`tel:${dept.phone}`} className="font-mono text-sm sm:text-base text-[#E2B18D] font-bold hover:underline">
                        {dept.phoneDisplay}
                      </a>
                    </p>
                    <p>
                      <a href={`mailto:${dept.email}`} className="text-white/65 hover:text-white text-xs sm:text-sm transition-colors">
                        {dept.email}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Office Address & Registered Details (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-[#E2B18D] font-bold mb-5">
              Vadodara Office & Bank Details
            </h4>

            <div className="space-y-4 font-sans text-xs sm:text-sm text-white/85">
              <p className="leading-relaxed text-white/70">
                {siteConfig.contact.address.line1}
                <br />
                {siteConfig.contact.address.line2}
                <br />
                {siteConfig.contact.address.city}{" "}
                {siteConfig.contact.address.pincode}
              </p>

              <div className="pt-3 border-t border-white/15 text-xs sm:text-sm space-y-2 text-white/80">
                <p className="font-bold text-white text-sm">
                  {siteConfig.legal.entityName}
                </p>
                <p>
                  GSTIN:{" "}
                  <span className="text-white font-mono font-bold bg-white/10 px-2 py-0.5 rounded text-xs sm:text-sm">
                    {siteConfig.legal.gstin}
                  </span>
                </p>
              </div>

              {/* Official Bank Transfer Details */}
              <div className="pt-3.5 border-t border-white/15 text-xs sm:text-sm space-y-1.5 text-white/80 font-sans">
                <p className="text-[#E2B18D] font-mono uppercase tracking-wider font-bold mb-1">
                  Official Bank Details (RTGS/NEFT):
                </p>
                <p>Bank: <span className="text-white font-medium">{siteConfig.bank.bankName}</span> ({siteConfig.bank.accountType})</p>
                <p>A/c No: <span className="text-white font-mono font-bold text-xs sm:text-sm">{siteConfig.bank.accountNumber}</span></p>
                <p>IFSC: <span className="text-[#E2B18D] font-mono font-bold text-xs sm:text-sm">{siteConfig.bank.ifscCode}</span></p>
                <p>Branch: <span className="text-white/85">{siteConfig.bank.branch}</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-white/60 font-sans tracking-wide gap-4">
          <p>© {new Date().getFullYear()} DARSH DREAM TOURS LLP. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/sitemap" className="hover:text-[#E2B18D] transition-colors">
              Sitemap
            </Link>
            <span className="text-white/20">·</span>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-[#E2B18D] transition-colors">
              XML
            </a>
            <span className="text-white/20">·</span>
            <p>Registered Travel Agency · Vadodara, Gujarat</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
