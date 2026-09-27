"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/data/siteConfig";

const navLinks = [
  { label: "Destinations", href: "/destinations" },
  { label: "Experiences", href: "/experiences" },
  { label: "About", href: "/about" },
  { label: "Plan a Journey", href: "/plan" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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
            ? "bg-[#F7F5F0]/95 backdrop-blur-xl border-b border-[#101A2E]/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Logo */}
          <a
            href="/"
            className="relative z-10 block h-[56px] w-[175px] sm:h-[66px] sm:w-[205px] transition-all duration-300"
            aria-label="Darsh Dream Tours home"
          >
            <Image
              src="/images/logo.png"
              alt={siteConfig.name}
              fill
              priority
              sizes="(max-width: 640px) 175px, 205px"
              className={`object-contain object-left transition-all duration-300 ${
                !scrolled
                  ? "drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)] brightness-110"
                  : ""
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${
                  scrolled ? "text-[#101A2E]" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={getWhatsAppUrl(
              "Hello Darsh Dream Tours, I would like to plan a journey.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden lg:inline-flex items-center gap-2 border px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
              scrolled
                ? "border-[#101A2E]/20 text-[#101A2E] hover:bg-[#101A2E] hover:text-white"
                : "border-white/50 text-white hover:bg-white hover:text-[#101A2E]"
            }`}
          >
            Let's Talk
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className={`relative z-10 flex h-11 w-11 items-center justify-center lg:hidden ${
              scrolled ? "text-[#101A2E]" : "text-white"
            }`}
            aria-label="Open menu"
          >
            <Menu size={25} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-[#101A2E] text-white transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-[82px] items-center justify-between px-5 sm:px-8">
          <div className="relative h-[56px] w-[175px]">
            <Image
              src="/images/logo.png"
              alt={siteConfig.name}
              fill
              sizes="175px"
              className="object-contain object-left drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)] brightness-110"
            />
          </div>

          <button
            type="button"
            onClick={closeMobile}
            className="flex h-11 w-11 items-center justify-center"
            aria-label="Close menu"
          >
            <X size={27} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex h-[calc(100vh-82px)] flex-col justify-between px-6 pb-8 pt-16 sm:px-10">
          <nav className="flex flex-col">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="group flex items-center justify-between border-b border-white/10 py-6"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-sans text-[10px] tracking-[0.2em] text-[#B87543]">
                    0{index + 1}
                  </span>

                  <span className="font-serif text-4xl font-light">
                    {link.label}
                  </span>
                </div>

                <ArrowUpRight
                  size={21}
                  className="text-white/50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            ))}
          </nav>

          <div className="border-t border-white/10 pt-6">
            <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.2em] text-white/40">
              Vadodara · India & Worldwide
            </p>

            <a
              href={getWhatsAppUrl(
                "Hello Darsh Dream Tours, I would like to plan a journey.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
              className="inline-flex items-center gap-3 border border-[#B87543] px-6 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white"
            >
              Start a Conversation
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
