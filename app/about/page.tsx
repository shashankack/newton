import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sign-Age 35+ years of machine protection engineering, OEM-focused manufacturing, and custom solutions for the global machine tool industry.",
};

export default function AboutPage() {
  return <AboutContent />;
}
