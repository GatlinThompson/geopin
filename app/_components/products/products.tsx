import Partners from "@/components/ui/partners/partners";
import React from "react";
import Button from "@/components/ui/button/button";
import ProductsContainer from "./products_container";

export default function Products() {
  return (
    <section
      id="products"
      className="  max-w-[var(--max-width)] mx-auto w-full pb-12"
    >
      <Partners />

      <div className="px-3">
        <h2 className=" font-montserrat text-3xl font-semibold lg:text-5xl pt-30">
          Geopin products
        </h2>
        <div className="mt-7 md:mt-10 lg:mt-12">
          <ProductsContainer />
        </div>

        <div className="mt-20 justify-center flex">
          <Button
            variant="blue"
            href="#"
            className="inline-flex justify-start items-center !px-1 !py-1"
          >
            <span className="ps-3">Explore All Geopin Products</span>

            <span className="ms-5 bg-background w-12 h-12 rounded-full text-primary-blue flex justify-center items-center">
              -&gt;
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
