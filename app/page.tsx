import React from "react";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import HeroSection from "./_components/hero_section/hero_section";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-10 lg:pt-14">
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}
