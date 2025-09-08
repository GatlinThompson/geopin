import React from "react";
import products from "./product_config";
import Product from "./product";

export default function ProductsContainer() {
  return (
    <div className="px-3 md:px-5 lg:px-10">
      {products.map((product, index) => (
        <Product key={index} product={product} index={index} />
      ))}
    </div>
  );
}
