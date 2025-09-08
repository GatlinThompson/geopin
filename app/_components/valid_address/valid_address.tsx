import ScrollContainer from "@/util/hooks/scroll_container";
import React from "react";
import ValidAddressContainer from "./valid_address_container";
import Button from "@/components/ui/button/button";

export default function ValidAddress() {
  return (
    <ScrollContainer container={"valid-addresss"}>
      <section
        id="valid-address"
        className="relative min-h-screen px-3 max-w-[var(--max-width)] mx-auto w-full relative mb-16"
      >
        <div className="sticky top-0 ">
          <h2 className=" font-montserrat text-3xl font-semibold lg:text-5xl pt-18">
            Found 1 Valid Address
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-3 mb-6 px-0 md:px-10 lg:px-0">
            <ValidAddressContainer />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 ">
            <p className="pt-6 lg:pt-0 text-secondary-foreground text-lg">
              GeoPin’s Address Verification delivers pinpoint accuracy and rich
              metadata for every address—fueling smarter decisions, cleaner
              data, and flawless deliveries. Trusted by leading brands, it turns
              simple addresses into powerful business intelligence.
            </p>
          </div>
          <div className="pt-10 lg:pt-20">
            <Button
              variant="blue"
              href="#"
              className="inline-flex justify-start items-center !px-1 !py-1"
            >
              <span className="ps-3">Try It Yourself</span>

              <span className="ms-5 bg-background w-12 h-12 rounded-full text-primary-blue flex justify-center items-center">
                -&gt;
              </span>
            </Button>
          </div>
        </div>
      </section>
    </ScrollContainer>
  );
}
