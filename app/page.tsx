import React from "react";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import HeroSection from "./_components/hero_section/hero_section";
import AddressDemo from "./_components/address_demo/address_demo";
import ValidAddress from "./_components/valid_address/valid_address";
import BackgroundContainer from "@/components/ui/background_container/background_container";
import Products from "./_components/products/products";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="mt-8 lg:mt-16 relative">
        <HeroSection />
        <AddressDemo />
        <ValidAddress />
        <BackgroundContainer color="primary-blue" className="mt-30">
          <Products />
        </BackgroundContainer>
      </main>
      <Footer />
    </>
  );
}
