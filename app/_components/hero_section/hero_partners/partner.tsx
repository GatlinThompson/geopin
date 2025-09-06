import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";
import { PartnerName } from "./partners-config";

type PartnerProps = {
  partner: {
    name: PartnerName;
    logo: StaticImageData;
  };
};

export default function Partner({ partner }: PartnerProps) {
  return (
    <div className="w-[200px]  lg:w-[300px] h-[40px] lg:h-[45px] xl:h-[50px] bg-gray-100 flex justify-center items-center opacity-35  pe-2 lg:pe-20">
      <Image
        src={partner.logo}
        alt={`${partner.name} logo`}
        width={243}
        height={80}
        className="h-full w-auto"
      />
    </div>
  );
}
