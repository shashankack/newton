import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sign-Age | Machine Protection Systems Manufacturer",
    template: "%s | Sign-Age",
  },
  description:
    "Manufacturer of telescopic way covers, roll-up covers, apron covers, CNC machine enclosures, and custom machine protection systems with 35+ years of engineering experience.",
  keywords: [
    "telescopic way covers manufacturer",
    "machine protection systems",
    "CNC machine enclosures",
    "roll up way covers",
    "apron covers for CNC machines",
    "machine tool protection systems",
    "sheet metal machine enclosures",
    "CNC machine guards",
    "custom machine covers",
    "industrial machine covers manufacturer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
