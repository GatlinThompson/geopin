"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ScrollSider({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  console.log("Title Renders");
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (titleRef.current) {
            const translateX = Math.min(
              window.scrollY * 0.8,
              window.innerWidth * 500
            );
            titleRef.current.style.transform = `translateX(-${translateX}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={titleRef} className={className}>
      {children}
    </div>
  );
}
