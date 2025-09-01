"use client";

import { useEffect, useState } from "react";

type StickyHeaderProps = {
  children?: React.ReactNode;
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
  return (
    <div
      className={`fixed flex flex-col w-full top-0 w-full lg:pb-1 transition-all duration-300${
        isSticky ? " shadow-lg shadow-gray/20 " : ""
      } ${showNav ? "" : "-translate-y-full shadow-none"}`}
    >
      {children}
    </div>
  );
}
