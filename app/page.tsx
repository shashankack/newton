import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8";

export const metadata: Metadata = {
  title: "Machine Protection Systems for CNC and Industrial Machinery",
  description:
    "Sign-Age manufactures telescopic way covers, roll-up covers, apron covers, and CNC machine enclosures for OEM and industrial applications.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </>
  );
}
