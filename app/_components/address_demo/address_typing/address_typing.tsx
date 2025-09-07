import React from "react";
import AddressText from "../address_text/address_text";
import AddressBar from "../address_bar/address_bar";

export default function AddressTyping() {
  return (
    <div className="flex items-center sticky top-0 gap-2 pt-18">
      <p className=" text-2xl md:text-5xl font-bold">
        <AddressText />
      </p>
      <AddressBar />
    </div>
  );
}
