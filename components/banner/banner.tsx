"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function Banner({
  onStateChange,
}: {
  onStateChange?: (open: boolean) => void;
}) {
  const [bannerOpen, setBannerOpen] = useState(true);

  // Notify parent of state change
  useEffect(() => {
    if (onStateChange) onStateChange(bannerOpen);
  }, [bannerOpen, onStateChange]);

  return (
    <div
      id="banner"
      className={`bg-banner flex justify-center transition-all duration-300 ease-in-out overflow-hidden ${
        bannerOpen ? "h-12" : "h-0"
      }`}
      role="alert"
    >
      <div className="flex justify-between max-w-[var(--max-width)] mx-auto w-full">
        <p className="max-w-[var(--max-width)] mx-auto text-primary-white px-3 py-2">
          Banner Bar Text Here
        </p>
        <button onClick={() => setBannerOpen(false)}>
          <X className="text-primary-white" size={32} />
        </button>
      </div>
    </div>
  );
}
