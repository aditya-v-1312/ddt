"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Phone, MessageCircle } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/data/siteConfig";

const navLinks = [
  { label: "Destinations", href: "/destinations" },
  { label: "Experiences", href: "/experiences" },
  { label: "About Sakshi", href: "/about" },
  { label: "Plan a Journey", href: "/plan" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#F7F5F0]/90 backdrop-blur-xl border-b border-[#101A2E]/[0.07] shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
            : "py-5 sm:py-7 bg-gradient-to-b from-[#07101F]/80 via-[#07101F]/30 to-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Logo */}
          <Link
            href="/"
            className="group relative z-10 block transition-transform duration-300 hover:scale-[1.02]"
            aria-label="Darsh Dream Tours home"
          >
            <div className="relative h-[50px] w-[165px] sm:h-[60px] sm:w-[195px] transition-all duration-300">
              <Image
                src="/images/logo.png"
                alt={siteConfig.name}
                fill
                priority
                sizes="(max-width: 640px) 165px, 195px"
                className={`object-contain object-left transition-all duration-300 ${
                  !scrolled
                    ? "drop-shadow-[0_2px_10px_rgba(255,255,255,0.22)] brightness-110"
                    : ""
                }`}
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 xl:gap-2 rounded-full px-6 py-2 transition-all duration-500 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative px-4 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                    scrolled
                      ? isActive
                        ? "text-[#B87543]"
                        : "text-[#101A2E]/70 hover:text-[#101A2E]"
                      : isActive
                      ? "text-[#E2B18D]"
                      : "text-white/75 hover:text-white"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.label}
                    {isActive && (
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          scrolled ? "bg-[#B87543]" : "bg-[#E2B18D]"
                        }`}
                      />
                    )}
                  </span>
                  {/* Subtle hover pill */}
                  <span
                    className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
                      scrolled
                        ? "bg-[#101A2E]/[0.04] opacity-0 group-hover:opacity-100"
                        : "bg-white/[0.08] opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Concierge Pill & WhatsApp CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div
              className={`hidden xl:flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.2em] transition-colors ${
                scrolled ? "text-[#697181]" : "text-white/50"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Vadodara, IN</span>
            </div>

            <a
              href={getWhatsAppUrl(
                "Hello Sakshi, I would like to plan a bespoke journey with Darsh Dream Tours."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                scrolled
                  ? "border border-[#101A2E]/15 bg-[#101A2E] text-white hover:bg-[#B87543] hover:border-[#B87543] shadow-sm"
                  : "border border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-[#07101F]"
              }`}
            >
              <span>Enquire</span>
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 lg:hidden ${
              scrolled
                ? "border border-[#101A2E]/10 bg-white/80 text-[#101A2E]"
                : "border border-white/20 bg-white/10 text-white backdrop-blur-md"
            }`}
            aria-label="Open menu"
          >
            <Menu size={20} strokeWidth={1.75} />
          </button>
        </div>
      </header>

      {/* Sleek Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-[#07101F]/98 backdrop-blur-2xl text-white transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-[82px] items-center justify-between px-5 sm:px-8 border-b border-white/10">
          <div className="relative h-[48px] w-[150px]">
            <Image
              src="/images/logo.png"
              alt={siteConfig.name}
              fill
              sizes="150px"
              className="object-contain object-left drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)] brightness-110"
            />
          </div>

          <button
            type="button"
            onClick={closeMobile}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:text-white"
            aria-label="Close menu"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex h-[calc(100vh-82px)] flex-col justify-between px-6 pb-10 pt-10 sm:px-10 overflow-y-auto">
          <nav className="flex flex-col space-y-2">
            <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#E2B18D] mb-4">
              Navigation
            </p>
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className={`group flex items-center justify-between border-b border-white/[0.08] py-5 transition-colors ${
                    isActive ? "text-[#E2B18D]" : "text-white hover:text-white"
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-sans text-[10px] tracking-[0.25em] text-[#B87543]">
                      0{index + 1}
                    </span>
                    <span className="font-serif text-3xl font-light">
                      {link.label}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                      isActive ? "text-[#E2B18D]" : "text-white/40"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-white/10 pt-8 mt-8 space-y-5">
            <div>
              <p className="font-sans text-[9px] uppercase tracking-[0.25em] text-white/40">
                Direct Consultation
              </p>
              <p className="font-serif text-xl font-light text-white mt-1">
                Sakshi Chandiramani
              </p>
              <p className="font-sans text-xs text-white/60">
                Vadodara, Gujarat · +91 97243 91674
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={getWhatsAppUrl(
                  "Hello Sakshi, I would like to plan a journey with Darsh Dream Tours."
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
                className="inline-flex items-center justify-center gap-2 border border-[#B87543] bg-[#B87543] py-3.5 px-4 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#a06233] transition-colors"
              >
                <MessageCircle size={14} />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:+919724391674"
                onClick={closeMobile}
                className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 py-3.5 px-4 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/10 transition-colors"
              >
                <Phone size={13} />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
