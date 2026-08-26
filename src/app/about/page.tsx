import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About — Jiaying Li",
};

export default function AboutPage() {
  return <AboutSection />;
}
