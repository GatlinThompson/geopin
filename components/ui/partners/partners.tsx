import React from "react";
import Partner from "@/components/ui/partners/partner";
import partners from "./partners-config";

const loopPartners = partners.concat(partners);

export default function Partners() {
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
