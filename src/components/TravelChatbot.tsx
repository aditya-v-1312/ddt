"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useInquiry } from "@/context/InquiryContext";
import { travelPackages, TravelPackage, getPackagesByDestination } from "@/data/packages";
import { destinationHotels, getHotelsByDestination, HotelOption } from "@/data/hotels";
import { siteConfig } from "@/data/siteConfig";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Zap,
  Star,
  Hotel,
  Compass,
  Calendar,
  Users,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  RotateCcw,
  ShieldCheck,
  ChevronRight,
  Clock,
} from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text?: string;
  type?: "text" | "service_select" | "destination_select" | "package_select" | "hotel_select" | "timing_select" | "travelers_select" | "contact_form" | "confirmation";
  payload?: any;
  timestamp: string;
}

export default function TravelChatbot() {
  const { isOpen, initialData, closeInquiry, openInquiry } = useInquiry();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unreadBadge, setUnreadBadge] = useState(false);
  const [proactiveToast, setProactiveToast] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Accumulated Consultation State
  const [consultation, setConsultation] = useState<{
    serviceType?: string;
    urgentLastMinute?: boolean;
    destination?: string;
    packageTitle?: string;
    hotelRating?: string;
    hotelName?: string;
    travelMonth?: string;
    travelersCount?: string;
    name?: string;
    phone?: string;
    email?: string;
    message?: string;
    referenceId?: string;
    assignedDesk?: string;
  }>({});

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Proactive welcome toast after 4 seconds if not opened
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setProactiveToast(true);
        setUnreadBadge(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Initialize Conversation when Chatbot Opens
  useEffect(() => {
    if (!isOpen) return;

    setProactiveToast(false);
    setUnreadBadge(false);

    // If prefilled with specific intent (e.g. Last-Minute Hotel Desk or Package)
    if (initialData.urgentLastMinute || initialData.serviceType === "last_minute_hotel") {
      startLastMinuteFlow(initialData.destination);
    } else if (initialData.destination && initialData.packageTitle) {
      startPackageFlow(initialData.destination, initialData.packageTitle, initialData.starRating);
    } else if (initialData.destination) {
      startDestinationFlow(initialData.destination);
    } else {
      startFreshWelcome();
    }
  }, [isOpen, initialData]);

  const getTimeString = () => {
    return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const addBotMessage = (text: string, type: ChatMessage["type"] = "text", payload?: any, delay = 450) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}-${Math.random()}`,
          sender: "bot",
          text,
          type,
          payload,
          timestamp: getTimeString(),
        },
      ]);
    }, delay);
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        sender: "user",
        text,
        timestamp: getTimeString(),
      },
    ]);
  };

  // --- FLOW INITIALIZERS ---
  const startFreshWelcome = () => {
    setConsultation({});
    setMessages([
      {
        id: "msg-welcome-1",
        sender: "bot",
        text: "Namaste & Welcome to Darsh Dream Tours! ✨ I am your personal travel concierge.",
        timestamp: getTimeString(),
      },
      {
        id: "msg-welcome-2",
        sender: "bot",
        text: "Whether you are looking for a bespoke holiday package, 2★ to 5★ hotel reservations, or urgent last-minute room allocations, I am here to help you get the best wholesale IATA rates. How can our team assist you today?",
        type: "service_select",
        timestamp: getTimeString(),
      },
    ]);
  };

  const startLastMinuteFlow = (dest?: string) => {
    setConsultation((prev) => ({
      ...prev,
      serviceType: "last_minute_hotel",
      urgentLastMinute: true,
      destination: dest || "",
    }));
    setMessages([
      {
        id: "msg-lm-1",
        sender: "bot",
        text: "⚡ Welcome to our Last-Minute Urgent Hotel Desk!",
        timestamp: getTimeString(),
      },
      {
        id: "msg-lm-2",
        sender: "bot",
        text: "As an IATA Accredited Agent (IATA: 14039896), we have direct GDS & bedbank allocations across 2★, 3★, 4★, and 5★ hotels even when online booking apps show 'Sold Out'.",
        timestamp: getTimeString(),
      },
    ]);
    if (dest) {
      addBotMessage(`You are looking for urgent accommodations in ${dest}. When do you need to check in?`, "timing_select", { isLastMinute: true }, 600);
    } else {
      addBotMessage("Which destination or city do you need an urgent hotel for?", "destination_select", { isLastMinute: true }, 600);
    }
  };

  const startDestinationFlow = (dest: string) => {
    setConsultation((prev) => ({ ...prev, destination: dest, serviceType: "holiday" }));
    setMessages([
      {
        id: "msg-dest-1",
        sender: "bot",
        text: `Wonderful choice! ${dest} is one of our most treasured destinations. 🌍`,
        timestamp: getTimeString(),
      },
    ]);
    addBotMessage(`Would you like to explore our curated packages for ${dest}, or select a specific hotel category (2★ to 5★)?`, "package_select", { destination: dest }, 600);
  };

  const startPackageFlow = (dest: string, pkgTitle: string, stars?: 2 | 3 | 4 | 5) => {
    setConsultation((prev) => ({
      ...prev,
      destination: dest,
      packageTitle: pkgTitle,
      hotelRating: stars ? `${stars}-Star` : undefined,
      serviceType: "holiday",
    }));
    setMessages([
      {
        id: "msg-pkg-1",
        sender: "bot",
        text: `You have selected our curated package: "${pkgTitle}". An exceptional itinerary! ✨`,
        timestamp: getTimeString(),
      },
    ]);
    addBotMessage(`What hotel tier would you prefer for this package in ${dest}? We offer verified 2★, 3★, 4★, and 5★ options.`, "hotel_select", { destination: dest }, 600);
  };

  // --- INTERACTIVE HANDLERS ---
  const handleServiceSelect = (serviceKey: string, label: string) => {
    addUserMessage(label);

    if (serviceKey === "last_minute_hotel") {
      setConsultation((prev) => ({ ...prev, serviceType: "last_minute_hotel", urgentLastMinute: true }));
      addBotMessage("⚡ Understood! Our Last-Minute Desk operates with priority turnaround. Which city or destination are you traveling to?", "destination_select", { isLastMinute: true });
    } else if (serviceKey === "holiday") {
      setConsultation((prev) => ({ ...prev, serviceType: "holiday", urgentLastMinute: false }));
      addBotMessage("Exciting! Where are you dreaming of traveling? Choose a popular destination below or tell me your dream location:", "destination_select");
    } else if (serviceKey === "ticketing") {
      setConsultation((prev) => ({ ...prev, serviceType: "ticketing", urgentLastMinute: false }));
      addBotMessage("✈️ Our IATA Ticketing Desk handles domestic & international flights, visa assistance, and corporate travel. Where is your departure or destination?", "destination_select", { isTicketing: true });
    } else {
      setConsultation((prev) => ({ ...prev, serviceType: "hotel_only", urgentLastMinute: false }));
      addBotMessage("🏨 We provide negotiated wholesale rates across 2-star, 3-star, 4-star, and 5-star hotels globally. Which city do you need a stay in?", "destination_select");
    }
  };

  const handleDestinationSelect = (destName: string) => {
    addUserMessage(destName);
    setConsultation((prev) => ({ ...prev, destination: destName }));

    if (consultation.urgentLastMinute) {
      addBotMessage(`Noted: ${destName}. For last-minute bookings, when is your required check-in?`, "timing_select", { isLastMinute: true });
    } else if (consultation.serviceType === "ticketing") {
      addBotMessage(`Perfect. For flight & visa services to ${destName}, what is your approximate travel timing?`, "timing_select");
    } else {
      const availablePackages = getPackagesByDestination(destName);
      if (availablePackages.length > 0) {
        addBotMessage(`Here are our most popular curated packages for ${destName}. You can pick one or customize your stay:`, "package_select", { destination: destName });
      } else {
        addBotMessage(`What style of accommodation would you prefer in ${destName}? We partner with verified 2★, 3★, 4★, and 5★ hotels:`, "hotel_select", { destination: destName });
      }
    }
  };

  const handlePackageSelect = (pkg: TravelPackage | "custom") => {
    if (pkg === "custom") {
      addUserMessage("Custom Bespoke Itinerary");
      setConsultation((prev) => ({ ...prev, packageTitle: "Custom Bespoke Itinerary" }));
      addBotMessage("We love creating tailored itineraries from scratch! What hotel category best matches your preference?", "hotel_select", { destination: consultation.destination });
    } else {
      addUserMessage(`${pkg.title} (${pkg.duration})`);
      setConsultation((prev) => ({ ...prev, packageTitle: pkg.title }));
      addBotMessage(`Selected: "${pkg.title}". Now, please choose your preferred hotel category for this journey:`, "hotel_select", { destination: consultation.destination, selectedPackage: pkg });
    }
  };

  const handleHotelSelect = (starLevel: string, specificHotelName?: string) => {
    const userText = specificHotelName ? `${starLevel} (${specificHotelName})` : starLevel;
    addUserMessage(userText);

    setConsultation((prev) => ({
      ...prev,
      hotelRating: starLevel,
      hotelName: specificHotelName || undefined,
    }));

    if (consultation.urgentLastMinute) {
      addBotMessage("Got it! How many travelers/rooms will you need?", "travelers_select");
    } else {
      addBotMessage("Excellent choice! When are you planning to travel?", "timing_select");
    }
  };

  const handleTimingSelect = (timing: string) => {
    addUserMessage(timing);
    setConsultation((prev) => ({ ...prev, travelMonth: timing }));

    if (consultation.travelersCount) {
      askContactDetails();
    } else {
      addBotMessage("How many guests will be traveling?", "travelers_select");
    }
  };

  const handleTravelersSelect = (count: string) => {
    addUserMessage(count);
    setConsultation((prev) => ({ ...prev, travelersCount: count }));
    askContactDetails();
  };

  const askContactDetails = () => {
    const isUrgent = consultation.urgentLastMinute;
    const prompt = isUrgent
      ? "⚡ Almost done! Please enter your details so our urgent IATA desk can secure your room and call you within 15-30 minutes:"
      : "Wonderful! Where should our team send your tailored itinerary with our exclusive wholesale rates?";

    addBotMessage(prompt, "contact_form");
  };

  const handleFormSubmit = async (formData: { name: string; phone: string; email: string; message: string }) => {
    addUserMessage(`${formData.name} · ${formData.phone}`);
    setIsTyping(true);

    const merged = {
      ...consultation,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: merged.name,
          phone: merged.phone,
          email: merged.email,
          department: merged.urgentLastMinute ? "ticketing" : "tours",
          serviceType: merged.serviceType || "holiday",
          destination: merged.destination || "",
          packageTitle: merged.packageTitle || "",
          hotelRating: merged.hotelRating || "",
          hotelName: merged.hotelName || "",
          travelMonth: merged.travelMonth || "",
          travelersCount: merged.travelersCount || "2",
          urgentLastMinute: !!merged.urgentLastMinute,
          message: merged.message || "",
        }),
      });

      const resData = await response.json();
      setIsTyping(false);

      if (resData.success) {
        setConsultation((prev) => ({
          ...prev,
          ...merged,
          referenceId: resData.referenceId,
          assignedDesk: resData.assignedContact,
        }));

        addBotMessage(
          `Thank you, ${formData.name}! Your request has been registered under Reference ID: ${resData.referenceId}.`,
          "confirmation",
          {
            ...merged,
            referenceId: resData.referenceId,
            assignedDesk: resData.assignedContact,
          }
        );
      } else {
        addBotMessage("We received your request, but an error occurred. Please call our central desk directly at +91 97243 91674.");
      }
    } catch (err) {
      setIsTyping(false);
      addBotMessage("Thank you! Your inquiry has been saved. Our team will contact you shortly.");
    }
  };

  // Direct Text Input Handler
  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const text = inputText.trim();
    setInputText("");

    addUserMessage(text);

    // Contextual handling of free-text
    if (!consultation.destination) {
      handleDestinationSelect(text);
    } else if (!consultation.hotelRating) {
      handleHotelSelect(text);
    } else if (!consultation.travelMonth) {
      handleTimingSelect(text);
    } else {
      addBotMessage(`Noted: "${text}". Please complete your contact details below to finalize your quote:`, "contact_form");
    }
  };

  // Build WhatsApp URL with clean prefilled message
  const getWhatsAppLink = (data: typeof consultation) => {
    let targetPhone = "919724391674"; // Default Office
    if (data.urgentLastMinute || data.serviceType === "last_minute_hotel" || data.serviceType === "ticketing") {
      targetPhone = "917048386900"; // Pratik - Ticketing & Urgent Desk
    } else if (data.serviceType === "holiday" || data.packageTitle) {
      targetPhone = "917487083499"; // Sakshi - Tours & Packages
    }

    const lines = [
      `*Darsh Dream Tours Consultation Request*`,
      `*Ref ID:* ${data.referenceId || "Pending"}`,
      `*Name:* ${data.name || "Client"}`,
      data.destination ? `*Destination:* ${data.destination}` : null,
      data.packageTitle ? `*Package:* ${data.packageTitle}` : null,
      data.hotelRating ? `*Hotel Preference:* ${data.hotelRating}${data.hotelName ? ` (${data.hotelName})` : ""}` : null,
      data.urgentLastMinute ? `⚡ *URGENT LAST-MINUTE BOOKING*` : null,
      data.travelMonth ? `*Timing:* ${data.travelMonth}` : null,
      data.travelersCount ? `*Travelers:* ${data.travelersCount}` : null,
      data.message ? `*Notes:* ${data.message}` : null,
    ].filter(Boolean);

    return `https://wa.me/${targetPhone}?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const hotelDataForDest = consultation.destination ? getHotelsByDestination(consultation.destination) : null;
  const packagesForDest = consultation.destination ? getPackagesByDestination(consultation.destination) : [];

  return (
    <>
      {/* 1. FLOATING PROACTIVE TOAST & CONCIERGE BUTTON (BOTTOM-RIGHT) */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
          {/* Proactive Welcome Speech Bubble */}
          {proactiveToast && (
            <div className="relative max-w-xs sm:max-w-sm rounded-2xl bg-[#07101F]/95 border border-[#E2B18D]/40 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl text-white animate-in fade-in slide-in-from-bottom-3 duration-300">
              <button
                type="button"
                onClick={() => setProactiveToast(false)}
                className="absolute top-2 right-2 p-1 text-white/50 hover:text-white"
                aria-label="Dismiss toast"
              >
                <X size={13} />
              </button>
              <div className="flex items-start gap-3">
                <div className="relative h-9 w-9 flex-shrink-0 rounded-full bg-gradient-to-br from-[#B87543] to-[#E2B18D] flex items-center justify-center text-[#07101F] font-bold text-xs shadow-md">
                  <Compass size={18} />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-[#07101F]" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-wider text-[#E2B18D] font-mono font-semibold">
                    Darsh AI Travel Concierge
                  </p>
                  <p className="text-xs text-white/90 font-sans leading-relaxed">
                    Planning a trip or need an <strong>urgent last-minute hotel</strong>? Chat with our team for direct wholesale IATA rates.
                  </p>
                  <div className="pt-1.5 flex gap-2">
                    <button
                      type="button"
                      onClick={() => openInquiry({ serviceType: "holiday" })}
                      className="px-2.5 py-1 rounded-full bg-white text-[#07101F] text-[10px] font-semibold hover:bg-[#E2B18D] transition-colors"
                    >
                      Plan a Trip ✨
                    </button>
                    <button
                      type="button"
                      onClick={() => openInquiry({ serviceType: "last_minute_hotel", urgentLastMinute: true })}
                      className="px-2.5 py-1 rounded-full bg-red-600/30 border border-red-500/50 text-red-200 text-[10px] font-semibold hover:bg-red-600 hover:text-white transition-colors"
                    >
                      ⚡ Last-Minute Desk
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Floating Circle Launcher Button */}
          <button
            type="button"
            onClick={() => openInquiry()}
            className="group relative flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0E1C38] via-[#07101F] to-[#0E1C38] border border-[#E2B18D]/50 hover:border-[#E2B18D] px-4 py-3 sm:px-5 sm:py-3.5 text-white shadow-[0_10px_35px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Open Darsh Travel Concierge Chatbot"
          >
            <div className="relative">
              <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#B87543] to-[#E2B18D] flex items-center justify-center text-[#07101F] shadow-md group-hover:rotate-12 transition-transform">
                <MessageSquare size={17} className="fill-[#07101F]" />
              </div>
              <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-emerald-500 ring-2 ring-[#07101F] animate-pulse" />
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-[10px] uppercase font-mono tracking-widest text-[#E2B18D]">
                Personal Travel Concierge
              </p>
              <p className="text-xs font-semibold text-white">
                Chat & Get Instant Rates
              </p>
            </div>
            {unreadBadge && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E2B18D] text-[10px] font-bold text-[#07101F]">
                1
              </span>
            )}
          </button>
        </div>
      )}

      {/* 2. CHATBOT WINDOW DIALOG */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative flex flex-col w-full h-[94vh] sm:h-[85vh] sm:max-h-[720px] max-w-lg rounded-t-3xl sm:rounded-3xl border border-white/15 bg-[#07101F] text-white shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#0A162D]">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full bg-gradient-to-tr from-[#B87543] to-[#E2B18D] p-0.5 shadow-md">
                  <div className="h-full w-full rounded-full bg-[#07101F] flex items-center justify-center">
                    <Compass size={20} className="text-[#E2B18D]" />
                  </div>
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-[#07101F]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-base tracking-wide text-white">
                      Darsh Travel Concierge
                    </h3>
                    <span className="rounded bg-[#E2B18D]/20 px-1.5 py-0.5 text-[9px] font-mono font-semibold uppercase text-[#E2B18D]">
                      IATA Live
                    </span>
                  </div>
                  <p className="text-[11px] font-sans text-white/60">
                    Online · Curated Packages & Wholesale Stays
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={startFreshWelcome}
                  title="Restart Conversation"
                  className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                >
                  <RotateCcw size={15} />
                </button>
                <button
                  type="button"
                  onClick={closeInquiry}
                  className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                  aria-label="Close Chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Sub-Header Trust Ribbon */}
            <div className="px-5 py-2 bg-[#0E1C38] border-b border-white/5 flex items-center justify-between text-[10px] font-sans text-white/60">
              <span className="flex items-center gap-1.5 text-[#E2B18D]">
                <ShieldCheck size={12} />
                <span>IATA Accredited: 14039896</span>
              </span>
              <span>2★ · 3★ · 4★ · 5★ Hotel Inventories</span>
              <span className="text-red-400 font-medium">⚡ Last-Minute Desk</span>
            </div>

            {/* Scrollable Message History Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  {/* Message Bubble */}
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-[#B87543] to-[#E2B18D] text-[#07101F] font-medium rounded-br-none shadow-md"
                        : "bg-white/10 border border-white/10 text-white/95 rounded-bl-none backdrop-blur-md"
                    }`}
                  >
                    {msg.text && <p className="whitespace-pre-line">{msg.text}</p>}

                    {/* Step: Service Selection */}
                    {msg.type === "service_select" && (
                      <div className="mt-3 grid grid-cols-1 gap-2">
                        <button
                          type="button"
                          onClick={() => handleServiceSelect("holiday", "🌴 Plan a Holiday / Curated Package")}
                          className="flex items-center justify-between p-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-[#E2B18D] hover:text-[#07101F] hover:border-transparent transition-all text-left text-xs font-semibold group"
                        >
                          <span className="flex items-center gap-2">
                            <span>🌴</span>
                            <span>Curated Holiday Packages</span>
                          </span>
                          <ChevronRight size={14} className="opacity-60 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleServiceSelect("last_minute_hotel", "⚡ Urgent Last-Minute Hotel Desk")}
                          className="flex items-center justify-between p-2.5 rounded-xl border border-red-500/40 bg-red-950/30 hover:bg-red-600 hover:text-white transition-all text-left text-xs font-semibold text-red-200 group"
                        >
                          <span className="flex items-center gap-2">
                            <span className="animate-pulse">⚡</span>
                            <span>Last-Minute Hotel Desk (Next 24-72h)</span>
                          </span>
                          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-red-600/40 text-white">Priority</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleServiceSelect("ticketing", "✈️ Flight & Visa Desk (Ticketing)")}
                          className="flex items-center justify-between p-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-[#E2B18D] hover:text-[#07101F] hover:border-transparent transition-all text-left text-xs font-semibold group"
                        >
                          <span className="flex items-center gap-2">
                            <span>✈️</span>
                            <span>Flight Tickets & Visa Care</span>
                          </span>
                          <ChevronRight size={14} className="opacity-60 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleServiceSelect("hotel_only", "🏨 Hotel Booking (2★ to 5★)")}
                          className="flex items-center justify-between p-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-[#E2B18D] hover:text-[#07101F] hover:border-transparent transition-all text-left text-xs font-semibold group"
                        >
                          <span className="flex items-center gap-2">
                            <span>🏨</span>
                            <span>Hotel Stays Only (2★, 3★, 4★, 5★)</span>
                          </span>
                          <ChevronRight size={14} className="opacity-60 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    )}

                    {/* Step: Destination Selector */}
                    {msg.type === "destination_select" && (
                      <div className="mt-3 space-y-2">
                        <div className="grid grid-cols-2 gap-1.5">
                          {[
                            { name: "Dubai", flag: "🇦🇪" },
                            { name: "Switzerland & Europe", flag: "🇨🇭" },
                            { name: "Maldives", flag: "🇲🇻" },
                            { name: "Bali", flag: "🇮🇩" },
                            { name: "Kashmir", flag: "🏔️" },
                            { name: "Kerala", flag: "🌴" },
                            { name: "Singapore", flag: "🇸🇬" },
                            { name: "Thailand", flag: "🇹🇭" },
                          ].map((d) => (
                            <button
                              key={d.name}
                              type="button"
                              onClick={() => handleDestinationSelect(d.name)}
                              className="px-2.5 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-[#E2B18D] hover:text-[#07101F] text-xs font-medium text-left flex items-center gap-2 transition-all truncate"
                            >
                              <span>{d.flag}</span>
                              <span className="truncate">{d.name}</span>
                            </button>
                          ))}
                        </div>
                        <p className="text-[10px] text-white/50 text-center pt-1">
                          Or type any custom city or country in the input below ↓
                        </p>
                      </div>
                    )}

                    {/* Step: Package Selector */}
                    {msg.type === "package_select" && (
                      <div className="mt-3 space-y-2.5">
                        {packagesForDest.length > 0 ? (
                          packagesForDest.map((pkg) => (
                            <div
                              key={pkg.id}
                              className="p-3 rounded-xl border border-white/15 bg-black/40 hover:border-[#E2B18D] transition-all"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  <span className="text-[9px] uppercase tracking-wider font-mono text-[#E2B18D]">
                                    {pkg.type} · {pkg.duration}
                                  </span>
                                  <h4 className="font-serif text-sm font-light text-white">
                                    {pkg.title}
                                  </h4>
                                </div>
                                <span className="rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-mono text-white/70">
                                  {pkg.startingStar}★+
                                </span>
                              </div>
                              <p className="mt-1 text-xs text-white/70 font-sans line-clamp-2">
                                {pkg.tagline}
                              </p>
                              <div className="mt-2 flex items-center justify-between pt-2 border-t border-white/10">
                                <span className="text-[10px] text-emerald-400 font-mono">
                                  {pkg.priceNote}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handlePackageSelect(pkg)}
                                  className="px-3 py-1 rounded-full bg-[#E2B18D] text-[#07101F] text-[10px] font-bold hover:bg-white transition-colors"
                                >
                                  Select Package →
                                </button>
                              </div>
                            </div>
                          ))
                        ) : null}

                        <button
                          type="button"
                          onClick={() => handlePackageSelect("custom")}
                          className="w-full py-2 px-3 rounded-xl border border-dashed border-white/30 hover:border-[#E2B18D] text-xs font-semibold text-center hover:bg-white/5 text-[#E2B18D] transition-colors"
                        >
                          ✨ Request Custom Tailored Itinerary for {consultation.destination}
                        </button>
                      </div>
                    )}

                    {/* Step: Hotel Star Selector (2★, 3★, 4★, 5★) */}
                    {msg.type === "hotel_select" && (
                      <div className="mt-3 space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {/* 5-STAR */}
                          <button
                            type="button"
                            onClick={() => handleHotelSelect("5-Star Luxury", hotelDataForDest?.hotels.star5[0]?.name)}
                            className="p-3 rounded-xl border border-amber-500/30 bg-amber-950/20 hover:bg-amber-600/30 hover:border-amber-400 transition-all text-left group"
                          >
                            <div className="flex items-center gap-1 text-amber-400">
                              <Star size={12} className="fill-amber-400" />
                              <Star size={12} className="fill-amber-400" />
                              <Star size={12} className="fill-amber-400" />
                              <Star size={12} className="fill-amber-400" />
                              <Star size={12} className="fill-amber-400" />
                            </div>
                            <h5 className="font-semibold text-xs text-white mt-1">5-Star Ultra Luxury</h5>
                            <p className="text-[10px] text-white/60 mt-0.5 line-clamp-2">
                              {hotelDataForDest?.hotels.star5[0]?.name || "Palace, beachfront villas, private butler, Michelin dining"}
                            </p>
                          </button>

                          {/* 4-STAR */}
                          <button
                            type="button"
                            onClick={() => handleHotelSelect("4-Star Premium", hotelDataForDest?.hotels.star4[0]?.name)}
                            className="p-3 rounded-xl border border-blue-500/30 bg-blue-950/20 hover:bg-blue-600/30 hover:border-blue-400 transition-all text-left group"
                          >
                            <div className="flex items-center gap-1 text-blue-400">
                              <Star size={12} className="fill-blue-400" />
                              <Star size={12} className="fill-blue-400" />
                              <Star size={12} className="fill-blue-400" />
                              <Star size={12} className="fill-blue-400" />
                            </div>
                            <h5 className="font-semibold text-xs text-white mt-1">4-Star Premium Boutique</h5>
                            <p className="text-[10px] text-white/60 mt-0.5 line-clamp-2">
                              {hotelDataForDest?.hotels.star4[0]?.name || "Chic upscale boutique hotels, pools, prime city view rooms"}
                            </p>
                          </button>

                          {/* 3-STAR */}
                          <button
                            type="button"
                            onClick={() => handleHotelSelect("3-Star Comfort", hotelDataForDest?.hotels.star3[0]?.name)}
                            className="p-3 rounded-xl border border-emerald-500/30 bg-emerald-950/20 hover:bg-emerald-600/30 hover:border-emerald-400 transition-all text-left group"
                          >
                            <div className="flex items-center gap-1 text-emerald-400">
                              <Star size={12} className="fill-emerald-400" />
                              <Star size={12} className="fill-emerald-400" />
                              <Star size={12} className="fill-emerald-400" />
                            </div>
                            <h5 className="font-semibold text-xs text-white mt-1">3-Star Comfort & Central</h5>
                            <p className="text-[10px] text-white/60 mt-0.5 line-clamp-2">
                              {hotelDataForDest?.hotels.star3[0]?.name || "Clean, contemporary, top-rated central location with breakfast"}
                            </p>
                          </button>

                          {/* 2-STAR */}
                          <button
                            type="button"
                            onClick={() => handleHotelSelect("2-Star Budget Smart", hotelDataForDest?.hotels.star2[0]?.name)}
                            className="p-3 rounded-xl border border-purple-500/30 bg-purple-950/20 hover:bg-purple-600/30 hover:border-purple-400 transition-all text-left group"
                          >
                            <div className="flex items-center gap-1 text-purple-400">
                              <Star size={12} className="fill-purple-400" />
                              <Star size={12} className="fill-purple-400" />
                            </div>
                            <h5 className="font-semibold text-xs text-white mt-1">2-Star Value Smart</h5>
                            <p className="text-[10px] text-white/60 mt-0.5 line-clamp-2">
                              {hotelDataForDest?.hotels.star2[0]?.name || "Spotless, IATA-vetted budget lodgings for smart corporate/leisure travelers"}
                            </p>
                          </button>
                        </div>

                        {/* Display named hotels if available */}
                        {hotelDataForDest && (
                          <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                            <span className="text-[10px] uppercase font-mono text-[#E2B18D] block mb-1.5">
                              Verified Hotels in {hotelDataForDest.destinationName}:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {[
                                ...hotelDataForDest.hotels.star5.slice(0, 1),
                                ...hotelDataForDest.hotels.star4.slice(0, 1),
                                ...hotelDataForDest.hotels.star3.slice(0, 1),
                                ...hotelDataForDest.hotels.star2.slice(0, 1),
                              ].map((h) => (
                                <button
                                  key={h.name}
                                  type="button"
                                  onClick={() => handleHotelSelect(`${h.stars}-Star`, h.name)}
                                  className="px-2 py-0.5 rounded-full bg-white/10 hover:bg-white/20 text-[10px] text-white/90 border border-white/10 transition-colors"
                                >
                                  {h.stars}★ {h.name.split("/")[0]}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Step: Timing / Date Selector */}
                    {msg.type === "timing_select" && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {msg.payload?.isLastMinute ? (
                          <>
                            <button
                              type="button"
                              onClick={() => handleTimingSelect("Tonight (Urgent Check-in)")}
                              className="px-3 py-1.5 rounded-lg bg-red-600/30 border border-red-500 text-xs font-semibold text-red-200 hover:bg-red-600 hover:text-white transition-all"
                            >
                              ⚡ Tonight (Immediate)
                            </button>
                            <button
                              type="button"
                              onClick={() => handleTimingSelect("Tomorrow")}
                              className="px-3 py-1.5 rounded-lg bg-red-600/20 border border-red-500/40 text-xs font-semibold text-red-200 hover:bg-red-600 hover:text-white transition-all"
                            >
                              ⚡ Tomorrow
                            </button>
                            <button
                              type="button"
                              onClick={() => handleTimingSelect("Within Next 48-72 Hours")}
                              className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs font-medium hover:bg-[#E2B18D] hover:text-[#07101F] transition-all"
                            >
                              Next 48–72 Hours
                            </button>
                            <button
                              type="button"
                              onClick={() => handleTimingSelect("This Weekend")}
                              className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs font-medium hover:bg-[#E2B18D] hover:text-[#07101F] transition-all"
                            >
                              This Weekend
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              type="button"
                              onClick={() => handleTimingSelect("This Month")}
                              className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs font-medium hover:bg-[#E2B18D] hover:text-[#07101F] transition-all"
                            >
                              This Month
                            </button>
                            <button
                              type="button"
                              onClick={() => handleTimingSelect("Next Month")}
                              className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs font-medium hover:bg-[#E2B18D] hover:text-[#07101F] transition-all"
                            >
                              Next Month
                            </button>
                            <button
                              type="button"
                              onClick={() => handleTimingSelect("In 2-3 Months")}
                              className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs font-medium hover:bg-[#E2B18D] hover:text-[#07101F] transition-all"
                            >
                              In 2–3 Months
                            </button>
                            <button
                              type="button"
                              onClick={() => handleTimingSelect("Diwali / Festive Holidays")}
                              className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs font-medium hover:bg-[#E2B18D] hover:text-[#07101F] transition-all"
                            >
                              Festive Season
                            </button>
                            <button
                              type="button"
                              onClick={() => handleTimingSelect("Flexible / Exploring Dates")}
                              className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs font-medium hover:bg-[#E2B18D] hover:text-[#07101F] transition-all"
                            >
                              Flexible
                            </button>
                          </>
                        )}
                      </div>
                    )}

                    {/* Step: Travelers Count Selector */}
                    {msg.type === "travelers_select" && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        <button
                          type="button"
                          onClick={() => handleTravelersSelect("1 Solo Traveler")}
                          className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs font-medium hover:bg-[#E2B18D] hover:text-[#07101F] transition-all"
                        >
                          👤 Solo (1)
                        </button>
                        <button
                          type="button"
                          onClick={() => handleTravelersSelect("2 Travelers (Couple / Honeymoon)")}
                          className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs font-medium hover:bg-[#E2B18D] hover:text-[#07101F] transition-all"
                        >
                          👫 Couple (2)
                        </button>
                        <button
                          type="button"
                          onClick={() => handleTravelersSelect("Family with Kids (3-4)")}
                          className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs font-medium hover:bg-[#E2B18D] hover:text-[#07101F] transition-all"
                        >
                          👨‍👩‍👧 Family (3–4)
                        </button>
                        <button
                          type="button"
                          onClick={() => handleTravelersSelect("Group / Corporate (5+)")}
                          className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs font-medium hover:bg-[#E2B18D] hover:text-[#07101F] transition-all"
                        >
                          👥 Group (5+)
                        </button>
                      </div>
                    )}

                    {/* Step: High-Converting Contact Capture Form */}
                    {msg.type === "contact_form" && (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          const target = e.currentTarget as any;
                          handleFormSubmit({
                            name: target.clientName.value,
                            phone: target.clientPhone.value,
                            email: target.clientEmail.value,
                            message: target.clientNotes.value,
                          });
                        }}
                        className="mt-3 space-y-2.5"
                      >
                        <div>
                          <label className="text-[10px] uppercase font-mono tracking-wider text-[#E2B18D] block mb-1">
                            Your Full Name *
                          </label>
                          <input
                            required
                            name="clientName"
                            type="text"
                            placeholder="e.g. Aditya Patel"
                            defaultValue={consultation.name || ""}
                            className="w-full rounded-xl border border-white/20 bg-black/50 px-3 py-2 text-xs text-white placeholder-white/30 focus:border-[#E2B18D] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-[10px] uppercase font-mono tracking-wider text-[#E2B18D] block mb-1">
                            WhatsApp / Mobile Number *
                          </label>
                          <input
                            required
                            name="clientPhone"
                            type="tel"
                            placeholder="+91 98765 43210"
                            defaultValue={consultation.phone || "+91 "}
                            className="w-full rounded-xl border border-white/20 bg-black/50 px-3 py-2 text-xs text-white placeholder-white/30 focus:border-[#E2B18D] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-[10px] uppercase font-mono tracking-wider text-[#E2B18D] block mb-1">
                            Email Address *
                          </label>
                          <input
                            required
                            name="clientEmail"
                            type="email"
                            placeholder="aditya@example.com"
                            defaultValue={consultation.email || ""}
                            className="w-full rounded-xl border border-white/20 bg-black/50 px-3 py-2 text-xs text-white placeholder-white/30 focus:border-[#E2B18D] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-[10px] uppercase font-mono tracking-wider text-[#E2B18D] block mb-1">
                            Special Requests / Notes (Optional)
                          </label>
                          <textarea
                            name="clientNotes"
                            rows={2}
                            placeholder="e.g. Pure veg food, honeymoon surprise, airport transfer"
                            defaultValue={consultation.message || ""}
                            className="w-full rounded-xl border border-white/20 bg-black/50 px-3 py-2 text-xs text-white placeholder-white/30 focus:border-[#E2B18D] focus:outline-none resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#B87543] to-[#E2B18D] text-[#07101F] text-xs font-bold uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                        >
                          <Sparkles size={14} />
                          <span>Get My Tailored Itinerary & Rates</span>
                        </button>
                      </form>
                    )}

                    {/* Step: Confirmation & WhatsApp Direct Hand-off */}
                    {msg.type === "confirmation" && (
                      <div className="mt-3 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 space-y-3">
                        <div className="flex items-center gap-2 text-emerald-400">
                          <CheckCircle2 size={16} />
                          <span className="font-semibold text-xs uppercase tracking-wider">
                            Consultation Confirmed
                          </span>
                        </div>

                        <div className="text-xs text-white/80 space-y-1">
                          <p>
                            <strong>Ref ID:</strong>{" "}
                            <span className="font-mono text-[#E2B18D]">
                              {msg.payload?.referenceId}
                            </span>
                          </p>
                          <p>
                            <strong>Assigned Desk:</strong> {msg.payload?.assignedDesk}
                          </p>
                          {msg.payload?.urgentLastMinute && (
                            <p className="text-red-400 font-bold">
                              ⚡ Priority: Our urgent desk is checking live wholesale inventory now.
                            </p>
                          )}
                        </div>

                        {/* Direct WhatsApp Action Button */}
                        <a
                          href={getWhatsAppLink(msg.payload || consultation)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] py-2.5 px-4 text-xs font-bold text-white transition-all shadow-md"
                        >
                          <MessageSquare size={14} />
                          <span>Chat on WhatsApp With This Itinerary</span>
                          <ArrowRight size={13} />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Timestamp */}
                  <span className="text-[10px] text-white/40 mt-1 px-1 font-mono">
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {/* Bot Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-white/10 w-fit">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E2B18D] animate-bounce" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E2B18D] animate-bounce [animation-delay:0.2s]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E2B18D] animate-bounce [animation-delay:0.4s]" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Bottom Quick-Action Bar */}
            <div className="px-4 py-2 bg-[#0A162D] border-t border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar">
              <button
                type="button"
                onClick={() => handleServiceSelect("last_minute_hotel", "⚡ Urgent Hotel Desk")}
                className="px-2.5 py-1 rounded-full bg-red-900/40 border border-red-500/50 text-red-200 text-[10px] font-semibold whitespace-nowrap hover:bg-red-800 transition-colors flex items-center gap-1"
              >
                <span>⚡ Last-Minute Desk</span>
              </button>
              <button
                type="button"
                onClick={() => handleServiceSelect("holiday", "🌴 Holiday Packages")}
                className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-white/80 text-[10px] font-semibold whitespace-nowrap hover:bg-white/20 transition-colors"
              >
                🌴 Packages
              </button>
              <button
                type="button"
                onClick={() => handleHotelSelect("5-Star Luxury")}
                className="px-2.5 py-1 rounded-full bg-amber-900/40 border border-amber-500/40 text-amber-200 text-[10px] font-semibold whitespace-nowrap hover:bg-amber-800 transition-colors"
              >
                ⭐️ 5★ Luxury
              </button>
              <button
                type="button"
                onClick={() => handleHotelSelect("2-Star Budget Smart")}
                className="px-2.5 py-1 rounded-full bg-purple-900/40 border border-purple-500/40 text-purple-200 text-[10px] font-semibold whitespace-nowrap hover:bg-purple-800 transition-colors"
              >
                ⭐️ 2★ Budget Smart
              </button>
            </div>

            {/* Bottom Free-Text Chat Input */}
            <form
              onSubmit={handleTextSubmit}
              className="p-3 sm:p-4 bg-[#07101F] border-t border-white/10 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type a destination, hotel, or question..."
                className="flex-1 rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-white/40 focus:border-[#E2B18D] focus:outline-none"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="h-9 w-9 rounded-full bg-[#E2B18D] text-[#07101F] flex items-center justify-center hover:bg-white transition-colors disabled:opacity-40 disabled:hover:bg-[#E2B18D]"
              >
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
