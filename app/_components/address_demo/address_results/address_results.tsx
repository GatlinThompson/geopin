"use client";
import React, { useContext, useEffect, useState } from "react";
import AddressResult from "./address_result/address_result";
import { AddressContext } from "../address_context/address_context";
import { addressResults, AddressProps } from "./address_result/address_config";

export default function AddressResults() {
  const { displayedText } = useContext(AddressContext);
  const [results, setResults] = useState<AddressProps[] | null>(null);

  useEffect(() => {
    if (!displayedText || displayedText.length <= 3) return setResults(null);
    const results = addressResults.filter(
      (result) => result.typed <= (displayedText?.length || 0)
    );

    setResults(results[results.length - 1].addresses);
  }, [displayedText]);

  return (
    <div className="pt-4 md:pt-10">
      <ul className="flex flex-col gap-2">
        {results?.map((address) => (
          <AddressResult
            key={address.address}
            address={address.address}
            correct={address.correct}
          />
        ))}
      </ul>
    </div>
  );
}
