"use client";

import React, { useState } from "react";
import { getWhatsAppUrl, siteConfig } from "@/data/siteConfig";
import { MessageCircle, X } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/gtag";

export const WhatsAppButton: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-3 select-none">
      {/* Sleek Dark Frosted Tooltip */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center space-x-2.5 bg-[#07101F]/90 text-white py-2 px-4 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-white/15 text-xs font-sans backdrop-blur-xl animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-medium text-white/90">Talk to Us</span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-white/40 hover:text-white ml-1 p-0.5 transition-colors"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl(siteConfig.social.whatsappDefaultMessage)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("floating_button")}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.55)] transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Chat directly on WhatsApp with Darsh Dream Tours"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-25 group-hover:opacity-40 animate-ping pointer-events-none" />
        <MessageCircle className="w-6 h-6 relative z-10" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
