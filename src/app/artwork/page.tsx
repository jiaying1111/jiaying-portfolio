import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { ArtworkView } from "@/components/artwork/ArtworkView";
import type { ArtworkSectionId } from "@/data/artworks";

export const metadata: Metadata = {
  title: "Visual Design & Artwork — Jiaying Li",
};

type ArtworkPageProps = {
  searchParams: Promise<{ tab?: string | string[] }>;
};

type ArtworkListingTab = Exclude<ArtworkSectionId, "visual-design">;

function parseTab(raw: string | undefined): ArtworkListingTab | "redirect-vd" {
  if (raw === "visual-design") {
    return "redirect-vd";
  }
  if (raw === "illustration") {
    return "illustration";
  }
  return "installation";
}

export default async function ArtworkPage({ searchParams }: ArtworkPageProps) {
  const params = await searchParams;
  const raw = Array.isArray(params.tab) ? params.tab[0] : params.tab;
  const activeTab = parseTab(raw);

  if (activeTab === "redirect-vd") {
    redirect("/ai-practice?tab=visual-design");
  }

  return <ArtworkView activeTab={activeTab} />;
}
