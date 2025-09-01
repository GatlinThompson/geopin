"use client";

import React, { useState, useEffect, forwardRef } from "react";
import { X } from "lucide-react";

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <div
      id="banner"
      className={`bg-banner flex justify-center transition-all duration-300 ease-in-out overflow-hidden ${
        bannerOpen ? "h-12" : "h-0"
      }`}
      role="alert"
    >
      <div className="flex justify-between max-w-[var(--max-width)] mx-auto w-full items-center px-3">
        <p className="text-primary-white px-3 grow">Banner Bar Text Here</p>
        <button onClick={() => setBannerOpen(false)}>
          <X className="text-primary-white" size={32} />
        </button>
      </div>
    </div>
  );
}
