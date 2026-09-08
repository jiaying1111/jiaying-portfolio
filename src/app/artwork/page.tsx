import type { Metadata } from "next";
import { ArtworkView } from "@/components/artwork/ArtworkView";
import type { ArtworkSectionId } from "@/data/artworks";

export const metadata: Metadata = {
  title: "Artwork — Jiaying Li",
};

type ArtworkPageProps = {
  searchParams: Promise<{ tab?: string | string[] }>;
};

function parseTab(raw: string | undefined): ArtworkSectionId {
  if (raw === "illustration" || raw === "visual-design") {
    return raw;
  }
  return "installation";
}

export default async function ArtworkPage({ searchParams }: ArtworkPageProps) {
  const params = await searchParams;
  const raw = Array.isArray(params.tab) ? params.tab[0] : params.tab;
  const activeTab = parseTab(raw);

  return <ArtworkView activeTab={activeTab} />;
}
