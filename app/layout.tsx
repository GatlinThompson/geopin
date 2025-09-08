import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";

import ClientHooks from "@/util/hooks/client_hooks";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "US Location Validation and Enrichment - Geopin",
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
      <body className={` ${montserrat.variable} ${inter.variable} antialiased`}>
        {children}
        <ClientHooks />
      </body>
    </html>
  );
}
