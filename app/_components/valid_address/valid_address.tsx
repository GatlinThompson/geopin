import ScrollContainer from "@/util/hooks/scroll_container";
import React from "react";

export default function ValidAddress() {
  return (
    <ScrollContainer container={"valid-address"}>
      <section
        id="valid-address"
        className="relative min-h-screen px-3 max-w-[var(--max-width)] mx-auto w-full relative mt-12 hide"
      >
        <h2 className="sticky top-0  font-montserrat text-3xl font-semibold lg:text-5xl pt-18">
          Found 1 Valid Address
        </h2>
      </section>
    </ScrollContainer>
  );
}
