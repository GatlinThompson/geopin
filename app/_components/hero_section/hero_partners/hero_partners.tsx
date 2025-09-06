import React from "react";
import Partner from "./partner";
import partners from "./partners-config";

const loopPartners = partners.concat(partners);

export default function HeroPartners() {
  return (
    <div className="h-20 flex overflow-hidden">
      <div className="slide-left flex h-full">
        {loopPartners.map((partner, index) => (
          <Partner key={index} partner={partner} />
        ))}
      </div>
    </div>
  );
}
