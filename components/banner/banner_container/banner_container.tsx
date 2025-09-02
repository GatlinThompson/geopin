import React, { useState, useEffect } from "react";

type BannerContainerProps = {
  children?: React.ReactNode;
  bannerOpen: boolean;
};

export default function BannerContainer({
  children,
  bannerOpen,
}: BannerContainerProps) {
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0); //default window scroll position

  // Handle scroll to show/hide banner based on scroll position at top of page
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 1) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      id="banner"
      className={`bg-banner flex justify-center transform transition-all duration-300 ease-in-out  ${
        isAtTop ? `h-12` : "h-0"
      }`}
      role="alert"
    >
      {children}
    </div>
  );
}
