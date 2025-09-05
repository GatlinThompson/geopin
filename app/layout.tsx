import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Inter } from "next/font/google";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import Banner from "@/components/banner/banner";
import ClientHooks from "@/util/hooks/client_hooks";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Geopin",
  description:
    "Geopin is a location intelligence platform that helps you find any location as easy as 1, 2, 3.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${montserrat.variable} ${inter.variable} antialiased`}
      >
        <Header />
        <main className="mt-10 lg:mt-14">{children}</main>
        <Footer />
        <ClientHooks />
      </body>
    </html>
  );
}
