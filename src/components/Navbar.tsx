"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Destinations", href: "#destinations" },
    { name: "Experiences", href: "#categories" },
    { name: "Featured", href: "#featured" },
    { name: "About", href: "#about" },
    { name: "Plan Your Journey", href: "#planner" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#F8F7F3]/95 backdrop-blur-md py-3 shadow-[0_4px_20px_rgba(8,21,47,0.05)] border-b border-[#E7E4DA]"
            : "bg-transparent py-5 text-[#17213A]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo Asset */}
          <Link
            href="#"
            className="flex items-center space-x-3 group focus:outline-none"
            aria-label="Darsh Dream Tours - Return to top"
          >
            <div className="relative h-11 w-36 sm:h-12 sm:w-40 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.jpg"
                alt={siteConfig.name}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 140px, 160px"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center space-x-8 text-[12px] tracking-[0.2em] uppercase font-sans font-medium text-[#17213A]"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 text-[#17213A]/80 hover:text-[#08152F] transition-colors duration-300 group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#9A5B2D] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action: Let's Talk CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={getWhatsAppUrl("Hello Sakshi, I would like to talk with Darsh Dream Tours about planning a journey.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-sans font-semibold px-5 py-2.5 rounded-full border border-[#08152F]/20 text-[#08152F] hover:bg-[#08152F] hover:text-white transition-all duration-300 shadow-sm"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#9A5B2D]" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#08152F] rounded-lg focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (Overlay) */}
      <div
        className={`fixed inset-0 z-50 md:hidden bg-[#08152F] text-white transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 ${
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {/* Top bar inside mobile drawer */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="relative h-11 w-32 bg-white rounded p-1">
            <Image
              src="/images/logo.jpg"
              alt={siteConfig.name}
              fill
              className="object-contain"
            />
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-white/80 hover:text-white rounded-lg focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col space-y-6 my-auto text-left">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-3xl sm:text-4xl text-white/90 hover:text-[#B87543] transition-colors flex items-center justify-between"
            >
              <span>{link.name}</span>
              <span className="text-sm font-sans tracking-widest text-[#B87543]">→</span>
            </a>
          ))}
        </nav>

        {/* Bottom CTA on mobile drawer */}
        <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-3 bg-[#9A5B2D] hover:bg-[#B87543] text-white py-3.5 px-6 rounded-full font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-colors shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
          <div className="text-center text-xs text-white/50 tracking-wider">
            Vadodara, Gujarat • +91 97243 91674
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
