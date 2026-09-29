"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { googleReviewsData } from "@/data/googleReviews";

export const GoogleIcon: React.FC<{ className?: string }> = ({
  className = "w-4 h-4",
}) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.66-5.17 3.66-9.12z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.27 21.36 7.35 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.57H1.25C.45 8.16 0 9.98 0 12s.45 3.84 1.25 5.43l4.03-3.14z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.27 2.64 1.25 6.57l4.03 3.14c.95-2.83 3.6-4.96 6.72-4.96z"
    />
  </svg>
);

export const GoogleStarRating: React.FC<{
  rating?: number;
  className?: string;
}> = ({ rating = 5, className = "w-3.5 h-3.5" }) => (
  <div
    className="flex items-center gap-0.5 text-[#FBBC05]"
    aria-label={`${rating} out of 5 stars on Google`}
  >
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={className}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

interface GoogleTrustBadgeProps {
  variant?: "pill" | "card" | "minimal";
  className?: string;
}

export const GoogleTrustBadge: React.FC<GoogleTrustBadgeProps> = ({
  variant = "pill",
  className = "",
}) => {
  if (variant === "minimal") {
    return (
      <a
        href={googleReviewsData.googleShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Darsh Dream Tours reviews on Google"
        className={`group inline-flex items-center gap-2.5 text-xs text-white/70 hover:text-white transition-colors ${className}`}
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm shrink-0">
          <GoogleIcon className="w-3.5 h-3.5" />
        </span>
        <GoogleStarRating rating={googleReviewsData.rating} />
        <span className="font-sans font-medium text-[11px] tracking-wide">
          5.0 on Google
        </span>
        <ArrowUpRight
          size={12}
          className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        />
      </a>
    );
  }

  if (variant === "card") {
    return (
      <div
        className={`bg-white/5 border border-white/10 p-5 rounded-none backdrop-blur-sm ${className}`}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md shrink-0">
              <GoogleIcon className="w-5 h-5" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg font-light text-white">
                  5.0
                </span>
                <GoogleStarRating rating={googleReviewsData.rating} />
              </div>
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/50">
                Verified on Google
              </p>
            </div>
          </div>

          <a
            href={googleReviewsData.googleShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border border-white/20 px-3.5 py-2 font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-white hover:border-[#E2B18D] hover:text-[#E2B18D] transition-colors"
          >
            <span>Review Us</span>
            <ArrowUpRight
              size={11}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    );
  }

  // Default "pill" variant
  return (
    <a
      href={googleReviewsData.googleShareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 backdrop-blur-md transition-all duration-300 hover:border-[#E2B18D]/60 hover:bg-white/[0.08] shadow-sm ${className}`}
      aria-label="Darsh Dream Tours 5.0 Google Reviews rating"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm shrink-0">
        <GoogleIcon className="w-3.5 h-3.5" />
      </span>

      <div className="flex items-center gap-2">
        <GoogleStarRating rating={googleReviewsData.rating} />
        <span className="font-sans text-[11px] font-medium tracking-wider text-white">
          5.0 on Google
        </span>
      </div>

      <span className="h-3 w-px bg-white/20" />

      <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#E2B18D] group-hover:text-white transition-colors flex items-center gap-1">
        <span>Reviews</span>
        <ArrowUpRight
          size={11}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </a>
  );
};

export default GoogleTrustBadge;
