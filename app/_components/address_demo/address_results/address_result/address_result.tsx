import React from "react";
import { ArrowUpLeft } from "lucide-react";

const fullText = "552 N Orchard Drive, Salt Lake City, UT 84116";

type AddressResultProps = {
  address: string;
  correct?: boolean;
};

export default function AddressResult({
  address,
  correct = false,
}: AddressResultProps) {
  const color = correct ? "text-foreground" : "text-gray-500";
  return (
    <li className="flex w-full h-full sticky justify-between items-center">
      <p className={` md:text-2xl xl:text-4xl font-semibold theader ${color}`}>
        {address}
      </p>
      <div>
        <span>
          <ArrowUpLeft
            className={` h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-16 xl:w-16 ${color}`}
          />
        </span>
      </div>
    </li>
  );
}
