"use client";

import React, { useState, useEffect } from "react";

const fullText = "552 Orchard D";

export default function AddressText() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const addressSection = document.getElementById("address-demo");
      if (!addressSection) return;

      const sectionRect = addressSection.getBoundingClientRect();
      const sectionHeight = addressSection.offsetHeight;

      // Start revealing when section hits top of viewport
      const start = 0; // sectionRect.top === 0
      const end = sectionHeight * 0.1; // 50% of section height

      // Only start when section is at or above top of viewport
      const scrollProgress = Math.max(0, Math.min(-sectionRect.top, end));
      const percentScrolled = scrollProgress / end;

      const charactersToShow = Math.floor(percentScrolled * fullText.length);

      setDisplayedText(fullText.substring(0, charactersToShow));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <>{displayedText}</>;
}
