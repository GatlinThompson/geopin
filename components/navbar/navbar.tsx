"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "./nav/nav";

export default function Navbar() {
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
      className={`fixed top-0 w-full lg:pb-1 transition-all duration-300${
        isSticky ? " shadow-lg shadow-gray/20 " : ""
      } ${showNav ? "" : "-translate-y-full shadow-none"}`}
    >
      <div
        className={`flex flex-wrap row justify-start items-center px-3 pt-3 gap-4 max-w-[var(--max-width)] mx-auto 
            w-full bg-background z-50`}
      >
        <div className="flex justify-between w-full">
          <div>
            <Link href="/">
              <h1 className="header font-bold text-2xl">Geopin</h1>
            </Link>
          </div>
          <Nav />
        </div>
      </div>
    </div>
  );
}
