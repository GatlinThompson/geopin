"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import BannerContainer from "./banner_container/banner_container";

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState(true);

  // Don't render if banner is closed
  if (!bannerOpen) return null;

  return (
    <BannerContainer bannerOpen={bannerOpen}>
      <div className="flex justify-between max-w-[var(--max-width)] mx-auto w-full items-center px-3 lg:px-10">
        <p className="text-primary-white px-3 grow">Banner Bar Text Here</p>
        <button onClick={() => setBannerOpen(false)}>
          <X className="text-primary-white" size={32} />
        </button>
      </div>
    </BannerContainer>
  );
}
