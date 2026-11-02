"use client";

import React, { useState } from "react";
import { useInquiry } from "@/context/InquiryContext";
import { Compass, X, Sparkles } from "lucide-react";

export const WhatsAppButton: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);
  const { openInquiry } = useInquiry();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-3 select-none">
      {/* Sleek Dark Frosted Tooltip */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center space-x-2.5 bg-[#07101F]/90 text-white py-2 px-4 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-white/15 text-xs font-sans backdrop-blur-xl animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E2B18D] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B87543]"></span>
          </span>
          <span className="font-medium text-white/90">Plan With Us</span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-white/40 hover:text-white ml-1 p-0.5 transition-colors"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button Opening Inquiry Modal */}
      <button
        type="button"
        onClick={() => openInquiry({ department: "tours" })}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#07101F] border border-[#E2B18D]/40 hover:border-[#E2B18D] text-white shadow-[0_8px_30px_rgba(7,16,31,0.5)] hover:shadow-[0_12px_40px_rgba(184,117,67,0.35)] transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#E2B18D]/30"
        aria-label="Open travel enquiry form for Darsh Dream Tours"
      >
        <span className="absolute -inset-1 rounded-full bg-[#B87543] opacity-20 group-hover:opacity-40 animate-ping pointer-events-none" />
        <Compass className="w-6 h-6 text-[#E2B18D] relative z-10 transition-transform duration-300 group-hover:rotate-45" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
