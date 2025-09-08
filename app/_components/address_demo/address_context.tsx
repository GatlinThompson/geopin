"use client";

import React, { useState, useContext, useEffect } from "react";

type AddressContextProps = {
  children: React.ReactNode;
  container: string;
};

type AddressContextType = {
  displayedText: string | null;
};

//full text to be displayed for address
export const fullText = "552 Orchard D";

// Create context for address text
export const AddressContext = React.createContext<AddressContextType>({
  displayedText: null,
});

export default function AddressContainer({
  children,
  container,
}: AddressContextProps) {
  const [displayedText, setDisplayedText] = useState("");

  const handleScroll = () => {
    if (typeof window === "undefined") return;
    const addressSection = document.getElementById(container);
    if (!addressSection) return;

    const sectionRect = addressSection.getBoundingClientRect();
    const sectionHeight = sectionRect.height;

    // Start revealing when section hits top of viewport
    const start = 0;
    const end = sectionHeight * 0.5; // 50% of section height

    const scrollProgress = Math.max(0, Math.min(-sectionRect.top, end));
    const percentScrolled = scrollProgress / end;

    const charactersToShow = Math.floor(percentScrolled * fullText.length);

    setDisplayedText(fullText.substring(0, charactersToShow));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AddressContext.Provider value={{ displayedText }}>
      {children}
    </AddressContext.Provider>
  );
}
