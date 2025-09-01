"use client";

import { useEffect, useState } from "react";

export type StickyHeaderProps = {
  children?: React.ReactNode;
  bannerOpen?: boolean;
};

export default function StickyHeader({ children }: StickyHeaderProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0); //default window scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsSticky(currentScrollY > 75);
      if (currentScrollY > lastScrollY && currentScrollY > 75) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  // Banner height (adjust if your banner height changes)
  const bannerHeight = 48; // px

  // Check if banner is present in DOM
  const bannerElement =
    typeof window !== "undefined" ? document.getElementById("banner") : null;
  const isBannerVisible = bannerElement && bannerElement.offsetHeight > 0;

  return (
    <div
      className={`sticky   flex flex-col w-full  w-full lg:pb-1 transition-all duration-300${
        isSticky ? " shadow-lg shadow-gray/20 " : ""
      } ${showNav ? "" : "-translate-y-full shadow-none"}`}
      style={{ marginTop: isBannerVisible ? `${bannerHeight}px` : "0" }}
    >
      {children}
    </div>
  );
}
