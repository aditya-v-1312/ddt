"use client";

import React from "react";
import Image from "next/image";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";
import { travelImages } from "@/data/images";
import { MessageCircle, MapPin, Sparkles, Phone, Mail } from "lucide-react";

export const AboutSakshi: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white text-[#17213A] relative border-t border-[#E7E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait / Travel Curator Visual Slot */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Frame */}
              <div className="absolute -inset-3 rounded-3xl border border-[#9A5B2D]/20 transform -rotate-1 pointer-events-none" />

              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,21,47,0.1)] bg-[#08152F]">
                {/* Note: This slot is ready for Sakshi's official portrait */}
                <Image
                  src={travelImages.aboutSakshi.url}
                  alt={travelImages.aboutSakshi.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08152F]/70 via-transparent to-transparent" />

                {/* Bottom Tag */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-serif text-2xl font-light">
                    {siteConfig.partner.name}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-[#D99767] font-sans mt-0.5">
                    {siteConfig.partner.role} • {siteConfig.name}
                  </p>
                </div>
              </div>

              {/* Vadodara Base Floating Badge */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white py-3 px-5 rounded-2xl border border-[#E7E4DA] shadow-lg flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#9A5B2D]" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-[#687080] font-sans">Boutique Agency</div>
                  <div className="text-xs font-semibold text-[#08152F] font-sans">Vadodara, Gujarat</div>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 text-[#9A5B2D] text-xs font-sans font-semibold uppercase tracking-[0.25em] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personal Touch</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#08152F] tracking-tight leading-[1.1] mb-2">
              MEET SAKSHI
            </h2>

            <p className="font-serif text-lg sm:text-xl text-[#9A5B2D] tracking-wide mb-6">
              {siteConfig.partner.name} • {siteConfig.partner.role}
            </p>

            <blockquote className="border-l-2 border-[#9A5B2D] pl-6 my-4">
              <p className="font-serif italic text-xl sm:text-2xl text-[#08152F] leading-snug">
                "{siteConfig.partner.bioIntro}"
              </p>
            </blockquote>

            <div className="space-y-4 text-base text-[#687080] font-sans font-light leading-relaxed my-6">
              <p>
                At Darsh Dream Tours, travel is never treated as a transaction. Whether you are mapping out your first overseas voyage, a romantic honeymoon in the Swiss Alps, or a tranquil family retreat through the waterways of Kerala, Sakshi is personally involved in designing an itinerary tailored to your rhythm.
              </p>
              <p>
                From coordinating comfortable flight connections and verified boutique hotels to sharing practical tips on weather and local etiquette, you have a caring travel advisor just a WhatsApp message or call away.
              </p>
            </div>

            {/* Direct Connect Actions */}
            <div className="pt-6 border-t border-[#E7E4DA] flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppUrl("Hello Sakshi, I would like to talk with you about planning a trip with Darsh Dream Tours.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-[#08152F] hover:bg-[#9A5B2D] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-md group"
              >
                <MessageCircle className="w-4 h-4 text-[#D99767] group-hover:text-white transition-colors" />
                <span>Talk To Sakshi</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-full border border-[#E7E4DA] hover:border-[#08152F] text-[#08152F] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#9A5B2D]" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-full border border-[#E7E4DA] hover:border-[#08152F] text-[#08152F] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#9A5B2D]" />
                <span>Email Sakshi</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSakshi;
