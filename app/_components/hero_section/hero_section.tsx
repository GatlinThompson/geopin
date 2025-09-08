import React from "react";
import HeroTitle from "./hero_title";
import HeroList from "./hero_list";
import Parterns from "@/components/ui/partners/partners";
import Button from "@/components/ui/button/button";
import ScrollSider from "@/util/hooks/scroll_slider";
import Image from "next/image";
import CityBlock from "@/public/city_blocks/mobile-city.png";

export default function HeroSection() {
  return (
    <section className=" max-w-[var(--max-width)] mx-auto w-full lg:px-10min-h-screen">
      <div className="px-3 mb-10 md:mb-20 lg:mb-60 relative">
        <div className="mt-3 pb-7 ">
          <HeroTitle />
        </div>
        <div>
          <HeroList />
        </div>
        <ScrollSider className="flex gap-4 mt-10 md:mt-14 swoop-up flex-wrap relative sticky top-0">
          <Button variant="blue" href="#">
            Get Started
          </Button>
          <Button variant="outline" href="#">
            Talk to an Location Expert
          </Button>
        </ScrollSider>
        <div className="block lg:hidden w-full h-auto mt-14 opacity-75 mx-auto max-w-[600px]">
          <Image
            src={CityBlock}
            alt="city block mobile image"
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="pt-8 lg:pt-0">
        <Parterns />
      </div>
    </section>
  );
}
