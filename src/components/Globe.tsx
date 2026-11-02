"use client";

import React, { useState } from "react";
import WorldGlobeScene from "./WorldGlobeScene";
import GlobeCard from "./GlobeCard";
import type { Location } from "@/data/countries";

interface GlobeProps {
  onSelect?: (loc: Location) => void;
  className?: string;
}

export default function Globe({ onSelect, className }: GlobeProps) {
  const [selected, setSelected] = useState<Location | null>(null);

  const handleSelect = (loc: Location) => {
    setSelected(loc);
    if (onSelect) onSelect(loc);
  };

  return (
    <div className={`relative w-full h-[480px] sm:h-[580px] lg:h-[700px] ${className || ""}`}>
      <WorldGlobeScene selected={selected} onSelect={handleSelect} />
      <GlobeCard location={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
