"use client";

import React, { useState } from "react";
import { getWhatsAppUrl, siteConfig } from "@/data/siteConfig";
import { MessageCircle, X } from "lucide-react";

export const WhatsAppButton: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-3 select-none">
      {/* Optional Subtle Callout Tooltip */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center space-x-2 bg-white text-[#08152F] py-2 px-3.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-[#E7E4DA] text-xs font-sans animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="font-medium">Plan with Sakshi</span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-[#687080] hover:text-[#08152F] ml-1 p-0.5"
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
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_10px_35px_rgba(37,211,102,0.6)] transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Chat directly on WhatsApp with Darsh Dream Tours"
      >
        {/* Pulsing radar ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-50 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 relative z-10" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
