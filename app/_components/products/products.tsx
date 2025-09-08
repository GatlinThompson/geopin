import Partners from "@/components/ui/partners/partners";
import React from "react";

export default function Products() {
  return (
    <section
      id="products"
      className="relative min-h-screen  max-w-[var(--max-width)] mx-auto w-full"
    >
      <Partners />

      <div className="px-3">
        <h2 className=" font-montserrat text-3xl font-semibold lg:text-5xl pt-30">
          Geopin products
        </h2>
      </div>
    </section>
  );
}
