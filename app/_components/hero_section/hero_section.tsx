import React from "react";
import HeroTitle from "./hero_title/hero_title";
import HeroList from "./hero_list/hero_list";
import HeroPartners from "./hero_partners/hero_partners";
import Button from "@/components/ui/button/button";
import ScrollSider from "@/util/hooks/scroll_slider";
import Image from "next/image";
import CityBlock from "@/public/city_blocks/city-block-1.png";

export default function HeroSection() {
  return (
    <section className=" max-w-[var(--max-width)] mx-auto w-full lg:px-10">
      <div className="px-3 mb-10 md:mb-20 lg:mb-80">
        <div className="mt-3 pb-7">
          <HeroTitle />
        </div>
        <div>
          <HeroList />
        </div>
        <div className="flex gap-4 mt-10 md:mt-14 swoop-up flex-wrap">
          <Button variant="blue" href="#">
            Get Started
          </Button>
          <Button variant="outline" href="#">
            Talk to an Location Expert
          </Button>
        </div>
        <div className="block lg:hidden w-full h-auto mt-14 opacity-75 mx-auto max-w-[600px]">
          <Image
            src={CityBlock}
            alt="city block mobile image"
            width={375}
            height={375}
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="py-8">
        <HeroPartners />
      </div>
    </section>
  );
}
