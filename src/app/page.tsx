"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DestinationExplorer from "@/components/DestinationExplorer";
import WorldMap from "@/components/WorldMap";
import TravelCategories from "@/components/TravelCategories";
import FeaturedJourneys from "@/components/FeaturedJourneys";
import WhyDarshDream from "@/components/WhyDarshDream";
import AboutSakshi from "@/components/AboutSakshi";
import JourneyPlanner from "@/components/JourneyPlanner";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  const [plannerDestination, setPlannerDestination] = useState<string>("");
  const [replayCounter, setReplayCounter] = useState<number>(0);

  const handleSelectDestination = (destName: string) => {
    setPlannerDestination(destName);
  };

  const handleReplayIntro = () => {
    try {
      sessionStorage.removeItem("darsh_intro_seen");
    } catch {
      // ignore
    }
    setReplayCounter((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#F8F7F3] text-[#17213A] relative">
      {/* 1. Minimal Luxury Top Navigation */}
      <Navbar />

      {/* 2. Unified Hero + Opening Flight Experience */}
      <Hero onReplayTrigger={replayCounter} />

      {/* 3. Explore The World: Editorial Destination Layout */}
      <DestinationExplorer onSelectDestination={handleSelectDestination} />

      {/* 4. Signature World Map & Interactive Flight Waypoints (Deep Navy Contrast) */}
      <WorldMap onSelectDestination={handleSelectDestination} />

      {/* 5. Find Your Journey: Editorial Travel Styles */}
      <TravelCategories onSelectCategory={handleSelectDestination} />

      {/* 6. Featured Journeys: Luxury Travel Magazine Spreads */}
      <FeaturedJourneys onSelectJourney={handleSelectDestination} />

      {/* 7. Why Darsh Dream Tours: 4 Authentic Numbered Principles */}
      <WhyDarshDream />

      {/* 8. Meet Sakshi: Human Boutique Agency & Direct Consultation */}
      <AboutSakshi />

      {/* 9. Plan Your Journey: Bespoke Multi-Step Travel Planner */}
      <JourneyPlanner prefilledDestination={plannerDestination} />

      {/* 10. Testimonials Architecture (Cleanly preserved, hidden until real reviews exist) */}
      <Testimonials />

      {/* 11. Cinematic Final Adventure CTA */}
      <FinalCTA />

      {/* 12. Minimal Luxury Footer */}
      <Footer onReplayIntro={handleReplayIntro} />

      {/* 13. Floating WhatsApp Instant Connect Button */}
      <WhatsAppButton />
    </main>
  );
}
