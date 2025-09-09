import React from "react";
import Image from "next/image";
import PerksContainer from "./perks_container";

export default function Perks() {
  return (
    <section
      id="perks"
      className=" w-full relative  border-secondary-blue  border-t-3"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/perks.webp")',
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
      }}
    >
      <div className="max-w-[var(--max-width)] mx-auto w-full px-3 py-12 lg:py-30">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-green-400 to-yellow-200 font-montserrat text-xl md:text-2xl lg:text-3xl font-semibold  mb-6">
          Quick, Accurate, and Reliable
        </h2>
        <p className="text-white text-3xl lg:text-5xl font-montserrat font-semibold mb-24 md:mb-32 lg:mb-40">
          With our straightforward API and exceptional customer support, you can
          start validating addresses in minutes—no hassle required.
        </p>
        <div>
          <PerksContainer />
        </div>
      </div>
    </section>
  );
}
