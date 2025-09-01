"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState(true);

  if (!bannerOpen) return null;

  return (
    <>
      {/* Hero Bar */}
      {bannerOpen && (
        <div
          id="banner"
          className={`bg-primary-blue flex justify-center transition-transform duration-300 ease-in-out transform`}
          role="alert"
        >
          <div className="flex justify-between  max-w-[var(--max-width)] mx-auto w-full">
            <p className="max-w-[var(--max-width)] mx-auto text-primary-white px-3 py-2">
              Banner Bar Text Here
            </p>
            <button onClick={() => setBannerOpen(false)}>
              <X className="text-primary-white" size={32} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
