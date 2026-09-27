"use client";

import React from "react";
import { ArrowUpRight, MessageSquareHeart, CheckCircle2 } from "lucide-react";
import { googleReviewsData } from "@/data/googleReviews";
import { GoogleIcon, GoogleStarRating } from "./GoogleTrustBadge";

interface GoogleReviewsProps {
  theme?: "light" | "dark";
  className?: string;
}

export const GoogleReviews: React.FC<GoogleReviewsProps> = ({
  theme = "light",
  className = "",
}) => {
  const isDark = theme === "dark";

  return (
    <section
      id="google-reviews"
      className={`relative px-5 py-24 sm:px-8 sm:py-32 lg:px-12 border-t ${
        isDark
          ? "bg-[#07101F] text-white border-white/10"
          : "bg-[#F7F5F0] text-[#101A2E] border-[#101A2E]/10"
      } ${className}`}
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 mb-5 px-3 py-1.5 border border-[#B87543]/30 bg-[#B87543]/10 text-[#B87543] font-sans text-[10px] uppercase tracking-[0.25em]">
              <GoogleIcon className="w-3.5 h-3.5" />
              <span>Verified Google Reviews</span>
            </div>

            <h2 className="display-heading text-5xl sm:text-6xl lg:text-[6rem] leading-[0.9]">
              Traveler
              <br />
              <span className="italic text-[#B87543]">stories & feedback.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <p
              className={`max-w-md font-sans text-sm sm:text-base font-light leading-7 ${
                isDark ? "text-white/60" : "text-[#697181]"
              }`}
            >
              Every journey we plan is personal. See what our travelers say on
              Google, or leave a review if Sakshi has curated a trip for you.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={googleReviewsData.googleShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-3 px-6 py-3.5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                  isDark
                    ? "bg-[#E2B18D] text-[#07101F] hover:bg-white"
                    : "bg-[#101A2E] text-white hover:bg-[#B87543]"
                }`}
              >
                <span>Write a Review</span>
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href={googleReviewsData.googleSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors ${
                  isDark
                    ? "text-white/70 hover:text-[#E2B18D]"
                    : "text-[#101A2E] hover:text-[#B87543]"
                }`}
              >
                <span>View on Google</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Overall Rating Hero Strip */}
        <div
          className={`mb-16 border p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${
            isDark
              ? "bg-[#101A2E]/80 border-white/10"
              : "bg-white border-[#101A2E]/10 shadow-sm"
          }`}
        >
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md border border-black/5 shrink-0">
              <GoogleIcon className="w-8 h-8" />
            </div>

            <div>
              <div className="flex items-center gap-3">
                <span className="font-serif text-3xl sm:text-4xl font-light">
                  5.0
                </span>
                <GoogleStarRating
                  rating={5}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </div>
              <p
                className={`font-sans text-xs uppercase tracking-wider mt-1 ${
                  isDark ? "text-white/50" : "text-[#697181]"
                }`}
              >
                {googleReviewsData.businessName} · Vadodara, Gujarat
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-sans">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 border ${
                isDark
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                  : "border-emerald-600/20 bg-emerald-50 text-emerald-700"
              }`}
            >
              <CheckCircle2 size={13} />
              <span>Verified Google Business Profile</span>
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {googleReviewsData.reviews.map((rev) => (
            <div
              key={rev.id}
              className={`border p-8 flex flex-col justify-between transition-all duration-300 ${
                isDark
                  ? "bg-[#101A2E]/60 border-white/10 hover:border-white/20"
                  : "bg-white border-[#101A2E]/10 hover:border-[#101A2E]/25 shadow-sm"
              }`}
            >
              <div>
                {/* Header: Avatar, Name, Google G */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-sans font-medium text-xs ${
                        rev.avatarColor || "bg-[#1C448C]"
                      }`}
                    >
                      {rev.initials}
                    </div>
                    <div>
                      <h3
                        className={`font-sans font-semibold text-sm ${
                          isDark ? "text-white" : "text-[#101A2E]"
                        }`}
                      >
                        {rev.author}
                      </h3>
                      {rev.tripContext && (
                        <p className="font-sans text-[10px] uppercase tracking-wider text-[#B87543]">
                          {rev.tripContext}
                        </p>
                      )}
                    </div>
                  </div>

                  <div
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm shrink-0"
                    title="Verified on Google"
                  >
                    <GoogleIcon className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-2 mb-4">
                  <GoogleStarRating rating={rev.rating} />
                  <span
                    className={`font-sans text-[10px] ${
                      isDark ? "text-white/40" : "text-[#697181]"
                    }`}
                  >
                    {rev.relativeTime}
                  </span>
                </div>

                {/* Review Text */}
                <blockquote
                  className={`font-sans text-sm font-light leading-relaxed ${
                    isDark ? "text-white/80" : "text-[#101A2E]/80"
                  }`}
                >
                  "{rev.text}"
                </blockquote>
              </div>

              {/* Card Footer: Verified on Google Link */}
              <div
                className={`mt-6 pt-4 border-t flex items-center justify-between text-[10px] font-sans ${
                  isDark ? "border-white/10" : "border-[#101A2E]/10"
                }`}
              >
                <span className="text-[#B87543] font-medium flex items-center gap-1">
                  <CheckCircle2 size={11} /> Verified Traveler
                </span>

                <a
                  href={googleReviewsData.googleShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:underline flex items-center gap-1 ${
                    isDark ? "text-white/40" : "text-[#697181]"
                  }`}
                >
                  <span>Google Maps</span>
                  <ArrowUpRight size={10} />
                </a>
              </div>
            </div>
          ))}

          {/* Invitation Card to write a review */}
          <div
            className={`border p-8 flex flex-col justify-between border-dashed ${
              isDark
                ? "bg-white/[0.02] border-white/20 text-white"
                : "bg-[#F0EDE6]/60 border-[#101A2E]/20 text-[#101A2E]"
            }`}
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-[#B87543]/15 flex items-center justify-center text-[#B87543] mb-5">
                <MessageSquareHeart className="w-5 h-5" />
              </div>

              <h3 className="font-serif text-2xl font-light mb-2">
                Travelled with Sakshi?
              </h3>

              <p
                className={`font-sans text-xs sm:text-sm font-light leading-relaxed mb-6 ${
                  isDark ? "text-white/60" : "text-[#697181]"
                }`}
              >
                Your feedback means the world to our boutique agency. Share your
                journey experience on our Google page to help other travellers
                discover custom travel planning.
              </p>
            </div>

            <a
              href={googleReviewsData.googleShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 border border-[#B87543] bg-[#B87543]/10 px-5 py-3.5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B87543] hover:bg-[#B87543] hover:text-white transition-all duration-300"
            >
              <span>Leave a Google Review</span>
              <ArrowUpRight
                size={12}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
