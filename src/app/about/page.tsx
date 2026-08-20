import type { Metadata } from "next";
import Link from "next/link";
import { AboutSection } from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About — Jiaying Li",
};

export default function AboutPage() {
  return (
    <main className="page-shell">
      <Link href="/" className="page-back">
        {"< Back to Home"}
      </Link>
      <AboutSection />
    </main>
  );
}
