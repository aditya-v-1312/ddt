"use client";

import React, { useState } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorldMap from "@/components/WorldMap";
import DestinationExplorer from "@/components/DestinationExplorer";
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
  const [introCompleted, setIntroCompleted] = useState(false);
  const [plannerDestination, setPlannerDestination] = useState<string>("");
  const [showReplayIntro, setShowReplayIntro] = useState(false);

  const handleSelectDestination = (destName: string) => {
    setPlannerDestination(destName);
  };

  const handleReplayIntro = () => {
    try {
      sessionStorage.removeItem("darsh_intro_seen");
    } catch {
      // ignore
    }
    setShowReplayIntro(true);
    setIntroCompleted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#F8F7F3] text-[#17213A] relative">
      {/* 1. Cinematic Opening Airplane Sequence (plays once per session) */}
      {(!introCompleted || showReplayIntro) && (
        <IntroAnimation
          onComplete={() => {
            setIntroCompleted(true);
            setShowReplayIntro(false);
          }}
        />
      )}

      {/* 2. Top Navigation Bar */}
      <Navbar />

      {/* 3. Hero Section */}
      <Hero />

      {/* 4. Signature World Map & Flight Waypoints */}
      <WorldMap onSelectDestination={handleSelectDestination} />

      {/* 5. Explore The World: Asymmetrical Destination Layouts */}
      <DestinationExplorer onSelectDestination={handleSelectDestination} />

      {/* 6. Find Your Journey: Travel Categories Photography Collage */}
      <TravelCategories onSelectCategory={handleSelectDestination} />

      {/* 7. Featured Journeys: Luxury Travel Magazine Spreads */}
      <FeaturedJourneys onSelectJourney={handleSelectDestination} />

      {/* 8. Why Darsh Dream Tours: 4 Authentic Positioning Pillars */}
      <WhyDarshDream />

      {/* 9. Meet Sakshi: Human Boutique Agency & Direct Consultation */}
      <AboutSakshi />

      {/* 10. Plan Your Journey: 4-Step Interactive Enquiry Experience */}
      <JourneyPlanner prefilledDestination={plannerDestination} />

      {/* 11. Testimonials Architecture (Strictly hidden until verified reviews exist) */}
      <Testimonials />

      {/* 12. Cinematic Final Adventure CTA */}
      <FinalCTA />

      {/* 13. Minimal Luxury Footer */}
      <Footer onReplayIntro={handleReplayIntro} />

      {/* 14. Floating WhatsApp Instant Connect Button */}
      <WhatsAppButton />
    </main>
  );
}
