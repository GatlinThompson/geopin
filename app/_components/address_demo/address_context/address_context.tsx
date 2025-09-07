"use client";

import React, { useState, useContext, useEffect } from "react";

type AddressContextProps = {
  children: React.ReactNode;
  container: string;
};

type AddressContextType = {
  displayedText: string | null;
  handleScroll: () => void;
};

//full text to be displayed for address
export const fullText = "552 Orchard D";

// Create context for address text
export const AddressContext = React.createContext<AddressContextType>({
  displayedText: null,
  handleScroll: () => {},
});

export default function AddressContainer({
  children,
  container,
}: AddressContextProps) {
  const [displayedText, setDisplayedText] = useState("");

  console.log(container);

  const handleScroll = () => {
    const addressSection = document.getElementById(container);

    console.log(addressSection);
    if (!addressSection) return;

    const sectionRect = addressSection.getBoundingClientRect();

    const sectionTop = sectionRect.top;
    const sectionBottom = sectionRect.bottom;
    const viewportHeight = window.innerHeight;

    // Check if section is at top AND still in view
    const isAtTop = sectionTop <= 0;
    const isInView = sectionBottom > 0; // Bottom of section is still visible

    if (isAtTop) {
      addressSection.classList.add("show");
    } else {
      addressSection.classList.remove("show");
    }

    let charactersToShow = 0;

    if (isAtTop && isInView) {
      // Section is at or past the top AND still visible
      const scrolledPastTop = Math.abs(sectionTop);
      const sectionHeight = sectionRect.height;
      const maxScroll = sectionHeight - viewportHeight; // Maximum scroll before section leaves view

      if (maxScroll > 0 && scrolledPastTop <= maxScroll) {
        // Calculate progress while section is still in view
        const scrollProgress = scrolledPastTop / 5; // 20px per character

        charactersToShow = Math.floor(
          Math.min(scrollProgress, fullText.length)
        );
      } else if (maxScroll <= 0) {
        // Section is smaller than viewport, show all characters when at top

        const scrollProgress = scrolledPastTop / 5;

        charactersToShow = Math.floor(
          Math.min(scrollProgress, fullText.length)
        );
      }
    }

    setDisplayedText(fullText.substring(0, charactersToShow));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AddressContext.Provider value={{ displayedText, handleScroll }}>
      {children}
    </AddressContext.Provider>
  );
}
