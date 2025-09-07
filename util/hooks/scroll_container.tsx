"use client";

import React, { useState, useContext, useEffect } from "react";

type ScrollContainerProps = {
  children: React.ReactNode;
  container: string;
};

export default function ScrollContainer({
  children,
  container,
}: ScrollContainerProps) {
  //handle scroll event listener
  const handleScroll = () => {
    const containerSection = document.getElementById(container);

    if (!containerSection) return;

    const sectionRect = containerSection.getBoundingClientRect();

    const sectionTop = sectionRect.top;
    const sectionBottom = sectionRect.bottom;
    const viewportHeight = window.innerHeight;

    // Check if section is at top AND still in view
    const isAtTop = sectionTop <= 0;
    const isInView = sectionBottom > 0; // Bottom of section is still visible

    if (isAtTop) {
      containerSection.classList.add("show");
    } else {
      containerSection.classList.remove("show");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <>{children}</>;
}
