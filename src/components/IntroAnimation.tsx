"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<"animating" | "out" | "done">("animating");
  const [progress, setProgress] = useState(0);

  const handleFinish = () => {
    try {
      sessionStorage.setItem("darsh_intro_seen", "true");
    } catch {
      // ignore
    }
    setPhase("out");
    setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 600);
  };

  useEffect(() => {
    try {
      const hasSeen = sessionStorage.getItem("darsh_intro_seen");
      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (hasSeen === "true" || prefersReduced) {
        onComplete();
        return;
      }
    } catch {
      // ignore
    }

    // Lock body scroll during intro
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Auto-advance progress bar over ~4.2 seconds
    const durationMs = 4200;
    const intervalMs = 40;
    const step = (intervalMs / durationMs) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          handleFinish();
          return 100;
        }
        return Math.min(100, prev + step);
      });
    }, intervalMs);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (phase === "done") return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === "out" ? 0 : 1 }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
        className="fixed inset-0 z-[100] flex flex-col justify-between overflow-hidden bg-[#07101F] text-white select-none"
      >
        {/* Background Luxury Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Radial center flare */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.2, 1], opacity: [0, 0.45, 0.35] }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[850px] sm:h-[850px] rounded-full bg-gradient-to-tr from-[#1E4E8C]/20 via-[#B87543]/15 to-transparent blur-[140px]"
          />

          {/* Top subtle blue rim */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#1E4E8C]/15 rounded-full blur-[160px]" />

          {/* Bottom subtle copper rim */}
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#B87543]/15 rounded-full blur-[160px]" />

          {/* Subtle Starlight / Dust Particles */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>

        {/* Top Header Strip */}
        <motion.header
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-20 flex items-center justify-between px-6 py-5 sm:px-10 border-b border-white/5 backdrop-blur-md bg-[#07101F]/40"
        >
          {/* Left status badge */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E2B18D] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B87543]"></span>
            </span>
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E2B18D]">
              Boutique Travel Atelier · Vadodara
            </span>
          </div>

          {/* Right Skip / Enter Website Button */}
          <button
            type="button"
            onClick={handleFinish}
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-[#E2B18D] hover:text-[#07101F] hover:border-[#E2B18D] px-4 py-2 sm:px-5 sm:py-2.5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90 transition-all duration-300 backdrop-blur-md shadow-sm"
          >
            <span>Enter Website</span>
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </motion.header>

        {/* Center Stage: The Signature Logo Assembly */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6">
          <div className="relative flex flex-col items-center">
            {/* Logo Container (517 x 332 aspect ratio) */}
            <div className="relative w-[280px] sm:w-[380px] md:w-[440px] aspect-[517/332]">
              {/* 1. Left Blue Wing (slides from left) */}
              <motion.div
                initial={{ x: -160, opacity: 0, scale: 0.94 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.95,
                  delay: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute inset-0 pointer-events-none"
              >
                <Image
                  src="/images/logo-part-left-blue-light.png"
                  alt="Emblem Left Wing"
                  fill
                  sizes="440px"
                  priority
                  className="object-contain drop-shadow-[0_4px_24px_rgba(30,78,140,0.5)]"
                />
              </motion.div>

              {/* 2. Right Blue Arch (curves from right) */}
              <motion.div
                initial={{ x: 160, opacity: 0, scale: 0.94 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.95,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute inset-0 pointer-events-none"
              >
                <Image
                  src="/images/logo-part-right-blue-light.png"
                  alt="Emblem Right Arch"
                  fill
                  sizes="440px"
                  priority
                  className="object-contain drop-shadow-[0_4px_24px_rgba(30,78,140,0.5)]"
                />
              </motion.div>

              {/* 3. Brown / Copper Path (rises up from bottom into the emblem) */}
              <motion.div
                initial={{ y: 140, opacity: 0, scaleY: 0.8 }}
                animate={{ y: 0, opacity: 1, scaleY: 1 }}
                transition={{
                  duration: 1.05,
                  delay: 0.75,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute inset-0 pointer-events-none origin-bottom"
              >
                <Image
                  src="/images/logo-part-brown-path-light.png"
                  alt="Emblem Journey Path"
                  fill
                  sizes="440px"
                  priority
                  className="object-contain drop-shadow-[0_4px_24px_rgba(184,117,67,0.6)]"
                />
              </motion.div>

              {/* 4. Emblem Unified Glow Flash when parts lock into place */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0.95, 1.04, 1],
                }}
                transition={{
                  duration: 0.8,
                  delay: 1.55,
                  ease: "easeOut",
                }}
                className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md mix-blend-overlay"
              />

              {/* 5. Shimmer Glint that sweeps diagonally across the assembled emblem */}
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "200%", opacity: [0, 0.7, 0] }}
                transition={{
                  duration: 0.85,
                  delay: 1.7,
                  ease: "easeInOut",
                }}
                className="absolute top-0 bottom-1/3 left-0 w-1/3 pointer-events-none bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
              />

              {/* 6. Text Layer: DARSH DREAM TOURS (emerges smoothly underneath) */}
              <motion.div
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.85,
                  delay: 1.85,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute inset-0 pointer-events-none"
              >
                <Image
                  src="/images/logo-part-text-light.png"
                  alt="Darsh Dream Tours Typography"
                  fill
                  sizes="440px"
                  priority
                  className="object-contain drop-shadow-[0_2px_16px_rgba(255,255,255,0.25)]"
                />
              </motion.div>
            </div>

            {/* Subtle Tagline & Attribution Narrative */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 2.3, ease: "easeOut" }}
              className="mt-6 flex flex-col items-center text-center max-w-md px-4"
            >
              {/* Golden Hairline Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
                className="h-px w-24 bg-gradient-to-r from-transparent via-[#E2B18D]/60 to-transparent mb-4"
              />

              <p className="font-serif italic text-base sm:text-lg text-[#E2B18D] tracking-wide font-light">
                "{siteConfig.tagline}"
              </p>

              <p className="mt-2 font-sans text-xs text-white/60 font-light tracking-wider">
                {siteConfig.subTagline}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Status & Smooth Progress Bar */}
        <motion.footer
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-20 px-6 py-4 sm:px-10 border-t border-white/5 backdrop-blur-md bg-[#07101F]/40 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3 text-[10px] font-sans uppercase tracking-[0.2em] text-white/40">
            <Sparkles size={11} className="text-[#E2B18D]" />
            <span>Vadodara · Gujarat · India & Beyond</span>
          </div>

          {/* Minimalist Gold Progress Bar indicator */}
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="flex-1 sm:w-44 h-[2px] rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#B87543] via-[#E2B18D] to-white"
                style={{ width: `${Math.min(100, progress)}%` }}
              />
            </div>
            <button
              type="button"
              onClick={handleFinish}
              className="text-[10px] font-sans uppercase tracking-widest text-white/50 hover:text-[#E2B18D] transition-colors whitespace-nowrap"
            >
              Skip →
            </button>
          </div>
        </motion.footer>
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroAnimation;
