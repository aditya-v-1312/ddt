"use client";

import React, { useState, useEffect } from "react";
import { useInquiry, DepartmentType } from "@/context/InquiryContext";
import { siteConfig } from "@/data/siteConfig";
import {
  X,
  Plane,
  Compass,
  Palmtree,
  CheckCircle2,
  Phone,
  Mail,
  User,
  MapPin,
  Calendar,
  Users,
  Send,
  Loader2,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";

export default function InquiryModal() {
  const { isOpen, closeInquiry, initialData } = useInquiry();

  const [department, setDepartment] = useState<DepartmentType>("tours");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState("");
  const [travelMonth, setTravelMonth] = useState("Flexible");
  const [travelersCount, setTravelersCount] = useState("2");
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    referenceId: string;
    assignedContact: string;
    targetEmail: string;
  } | null>(null);

  // Sync initialData when modal opens
  useEffect(() => {
    if (isOpen) {
      if (initialData.department) setDepartment(initialData.department);
      if (initialData.destination) setDestination(initialData.destination);
      if (initialData.travelMonth) setTravelMonth(initialData.travelMonth);
      if (initialData.travelersCount) setTravelersCount(String(initialData.travelersCount));
      if (initialData.message) setMessage(initialData.message);
      setError(null);
      setSuccessData(null);
    }
  }, [isOpen, initialData]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeInquiry();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeInquiry]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !phone.trim() || !email.trim()) {
      setError("Please fill in your name, phone number, and email.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          department,
          destination: destination.trim(),
          travelMonth,
          travelersCount,
          message: message.trim(),
          _honey: honey,
          sourceUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || "Failed to submit enquiry. Please try again.");
      }

      setSuccessData({
        referenceId: data.referenceId,
        assignedContact: data.assignedContact,
        targetEmail: data.targetEmail,
      });
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Please try again or call our desk.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetAndClose = () => {
    setName("");
    setPhone("");
    setEmail("");
    setDestination("");
    setMessage("");
    setSuccessData(null);
    closeInquiry();
  };

  const currentDeptInfo = siteConfig.departments.find((d) => d.id === department);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#07101F]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#0B1528] border border-white/15 rounded-3xl shadow-2xl text-white overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative gradient top glow */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#B87543] via-[#E2B18D] to-[#B87543]" />

        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 sm:p-8 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E2B18D]" />
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E2B18D]">
                Darsh Dream Tours · Official Inquiry
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-white tracking-tight">
              {successData ? "Enquiry Received" : "Plan Your Journey With Us"}
            </h2>
            <p className="font-sans text-xs text-white/60 mt-1">
              {successData
                ? "Your travel request has been logged securely."
                : "Fill out the form below. Your request goes directly to our dedicated desk."}
            </p>
          </div>

          <button
            type="button"
            onClick={closeInquiry}
            className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close inquiry modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {successData ? (
            /* =========================================================
               CONFIRMATION STATE
            ========================================================= */
            <div className="text-center py-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-5">
                <CheckCircle2 size={32} />
              </div>

              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#E2B18D] font-semibold">
                Confirmed Reference ID
              </span>
              <p className="font-mono text-2xl text-white font-bold tracking-wider mt-1 mb-4">
                {successData.referenceId}
              </p>

              <p className="font-sans text-sm text-white/80 max-w-lg mx-auto leading-relaxed mb-6">
                Thank you, <strong className="text-white">{name}</strong>! Your travel enquiry has been securely logged to our system and forwarded to our dedicated desk.
              </p>

              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 max-w-md mx-auto text-left mb-6">
                <p className="text-[10px] uppercase tracking-wider text-white/40 font-semibold mb-2">
                  Assigned Desk
                </p>
                <p className="font-sans text-sm text-white font-medium">
                  {successData.assignedContact}
                </p>
                <p className="font-sans text-xs text-[#E2B18D] mt-0.5">
                  {successData.targetEmail}
                </p>
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-white/60">
                  <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
                  <span>Your enquiry is logged to Google Sheets and sent to our team.</span>
                </div>
              </div>

              {/* Quick direct contact links */}
              <div className="border-t border-white/10 pt-5 mt-5">
                <p className="font-sans text-[11px] text-white/50 mb-3">
                  Need urgent assistance? Call our desk directly:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {siteConfig.departments.map((dept, idx) => (
                    <a
                      key={dept.id}
                      href={`tel:${dept.phone}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-sans text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      <Phone size={11} className="text-[#E2B18D]" />
                      <span>{idx + 1}. {dept.title}: {dept.phoneDisplay}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#07101F] font-sans text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-[#E2B18D] transition-colors"
                >
                  Done & Close
                </button>
              </div>
            </div>
          ) : (
            /* =========================================================
               INQUIRY FORM
            ========================================================= */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Department Tabs */}
              <div>
                <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-white/60 font-semibold mb-2.5">
                  1. Select Department
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {siteConfig.departments.map((dept, idx) => {
                    const isSelected = department === dept.id;
                    const icons = [
                      <Plane key="plane" size={15} />,
                      <Compass key="compass" size={15} />,
                      <Palmtree key="palm" size={15} />,
                    ];
                    return (
                      <button
                        type="button"
                        key={dept.id}
                        onClick={() => setDepartment(dept.id)}
                        className={`text-left p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                          isSelected
                            ? "bg-[#B87543]/20 border-[#E2B18D] text-white shadow-md ring-1 ring-[#E2B18D]/40"
                            : "bg-white/[0.03] border-white/10 text-white/70 hover:bg-white/[0.06] hover:text-white"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#E2B18D]">
                            0{idx + 1}
                          </span>
                          <span className={isSelected ? "text-[#E2B18D]" : "text-white/40"}>
                            {icons[idx]}
                          </span>
                        </div>
                        <div>
                          <p className="font-sans text-xs font-semibold text-white">
                            {dept.title}
                          </p>
                          <p className="font-sans text-[10px] text-white/50 mt-0.5 truncate">
                            {dept.person}
                          </p>
                          <p className="font-mono text-[10px] text-[#E2B18D]/80 mt-1">
                            {dept.phoneDisplay}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Customer Contact Details */}
              <div className="space-y-4 pt-1">
                <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-white/60 font-semibold">
                  2. Your Contact Information
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Full Name */}
                  <div>
                    <div className="relative">
                      <User size={15} className="absolute left-3.5 top-3.5 text-white/40 pointer-events-none" />
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white/[0.05] border border-white/15 focus:border-[#E2B18D] rounded-xl pl-10 pr-4 py-3 font-sans text-xs text-white placeholder-white/35 focus:outline-none focus:ring-1 focus:ring-[#E2B18D] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <div className="relative">
                      <Phone size={15} className="absolute left-3.5 top-3.5 text-white/40 pointer-events-none" />
                      <input
                        type="tel"
                        required
                        placeholder="Phone / WhatsApp Number *"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white/[0.05] border border-white/15 focus:border-[#E2B18D] rounded-xl pl-10 pr-4 py-3 font-sans text-xs text-white placeholder-white/35 focus:outline-none focus:ring-1 focus:ring-[#E2B18D] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <div className="relative">
                    <Mail size={15} className="absolute left-3.5 top-3.5 text-white/40 pointer-events-none" />
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/[0.05] border border-white/15 focus:border-[#E2B18D] rounded-xl pl-10 pr-4 py-3 font-sans text-xs text-white placeholder-white/35 focus:outline-none focus:ring-1 focus:ring-[#E2B18D] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Trip Preferences */}
              <div className="space-y-4 pt-1">
                <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-white/60 font-semibold">
                  3. Travel Details (Optional)
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {/* Destination */}
                  <div className="relative">
                    <MapPin size={15} className="absolute left-3.5 top-3.5 text-white/40 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Destination / City"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full bg-white/[0.05] border border-white/15 focus:border-[#E2B18D] rounded-xl pl-10 pr-4 py-3 font-sans text-xs text-white placeholder-white/35 focus:outline-none focus:ring-1 focus:ring-[#E2B18D] transition-colors"
                    />
                  </div>

                  {/* Timing */}
                  <div className="relative">
                    <Calendar size={15} className="absolute left-3.5 top-3.5 text-white/40 pointer-events-none" />
                    <select
                      value={travelMonth}
                      onChange={(e) => setTravelMonth(e.target.value)}
                      className="w-full bg-[#0B1528] border border-white/15 focus:border-[#E2B18D] rounded-xl pl-10 pr-4 py-3 font-sans text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#E2B18D] transition-colors"
                    >
                      <option value="Next 30 Days">Next 30 Days</option>
                      <option value="Upcoming Months">Upcoming Months</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="Flexible">Flexible Dates</option>
                    </select>
                  </div>

                  {/* Travelers Count */}
                  <div className="relative">
                    <Users size={15} className="absolute left-3.5 top-3.5 text-white/40 pointer-events-none" />
                    <select
                      value={travelersCount}
                      onChange={(e) => setTravelersCount(e.target.value)}
                      className="w-full bg-[#0B1528] border border-white/15 focus:border-[#E2B18D] rounded-xl pl-10 pr-4 py-3 font-sans text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#E2B18D] transition-colors"
                    >
                      <option value="1">1 Traveler (Solo)</option>
                      <option value="2">2 Travelers (Couple)</option>
                      <option value="3-4">3 – 4 Travelers</option>
                      <option value="5+">5+ Travelers (Family/Group)</option>
                    </select>
                  </div>
                </div>

                {/* Message / Requirements */}
                <div>
                  <textarea
                    rows={3}
                    placeholder="Tell us what you have in mind (e.g. flight preference, visa needed, luxury hotel, specific budget, etc.)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white/[0.05] border border-white/15 focus:border-[#E2B18D] rounded-xl p-3.5 font-sans text-xs text-white placeholder-white/35 focus:outline-none focus:ring-1 focus:ring-[#E2B18D] transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Bot Honeypot (Hidden) */}
              <input
                type="text"
                name="_honey"
                value={honey}
                onChange={(e) => setHoney(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Error Banner */}
              {error && (
                <div className="flex items-center gap-2 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-sans">
                  <AlertCircle size={15} className="shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Submission CTA & Security Note */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full group inline-flex items-center justify-center gap-3 rounded-full bg-white py-4 px-8 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#07101F] shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:bg-[#E2B18D] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin text-[#07101F]" />
                      <span>Submitting Securely...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} className="text-[#07101F]" />
                      <span>Submit Travel Enquiry</span>
                    </>
                  )}
                </button>

                <div className="mt-3.5 flex items-center justify-center gap-2 text-[10px] font-sans text-white/45">
                  <ShieldCheck size={13} className="text-emerald-400" />
                  <span>
                    Direct to {currentDeptInfo?.title} Desk ({currentDeptInfo?.person}) · Contact info kept strictly confidential
                  </span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
