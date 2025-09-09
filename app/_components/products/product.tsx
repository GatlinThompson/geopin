import Image from "next/image";
import React from "react";

import InlineLink from "@/components/ui/inline_link/inline_link";
import { ProductsProps } from "./product_config";

type ProductProps = {
  product: ProductsProps;
  index: number;
};

export default function Product({ product, index }: ProductProps) {
  // Determine if this is an even index (0, 2, 4...) for alternating layout
  const isEven = index % 2 === 0;
  return (
    <div className="py-8 grid grid-cols-1 lg:grid-cols-2 gap-10 ">
      <div className={` swoop-up ${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <h3 className="text-xl md:text-2xl font-semibold font-montserrat pb-3">
          {product.name}
        </h3>
        <p className="text-secondary-foreground pb-3 lg:text-lg ">
          {product.description}
        </p>
        <ul className="flex flex-col gap-4 pt-3">
          {product.links?.map((link, index) => (
            <li key={index}>
              <InlineLink
                icon={link.icon}
                href={link.href}
                iconSize={24}
                iconColor={product.icon_color}
              >
                {link.name}
              </InlineLink>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`${
          isEven ? "lg:order-2" : "lg:order-1"
        } md:max-w-[550px] mx-auto lg:px-10 swoop-up`}
      >
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
