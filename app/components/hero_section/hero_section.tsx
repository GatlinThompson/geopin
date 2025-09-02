import React from "react";
import HeroTitle from "./hero_title/hero_title";
import HeroList from "./hero_list/hero_list";
import Button from "@/components/button/button";

export default function HeroSection() {
  return (
    <section className="px-3 max-w-[var(--max-width)] mx-auto w-full lg:px-10">
      <div className="mt-3 pb-7 swoop-up">
        <HeroTitle />
      </div>
      <div>
        <HeroList />
      </div>
      <div className="flex gap-4 mt-10 md:mt-14 swoop-up">
        <Button variant="blue">Get Started</Button>
        <Button variant="outline">Talk to an Expert</Button>
      </div>
    </section>
  );
}
