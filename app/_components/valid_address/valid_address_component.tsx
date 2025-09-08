import React from "react";

type ValidAddressComponentProps = {
  title: string;
  description: string | number;
};

export default function ValidAddressComponent({
  title,
  description,
}: ValidAddressComponentProps) {
  return (
    <div className="w-full h-15 flex flex-col justify-center ">
      <span className="text-secondary-foreground font-light">{title}</span>
      <span className="font-bold text-lg">{description}</span>
    </div>
  );
}
