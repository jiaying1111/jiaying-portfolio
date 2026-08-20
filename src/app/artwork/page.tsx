import type { Metadata } from "next";
import { ArtworkView } from "@/components/artwork/ArtworkView";
import type { ArtworkSectionId } from "@/data/artworks";

export const metadata: Metadata = {
  title: "Artwork — Jiaying Li",
};

type ArtworkPageProps = {
  searchParams: Promise<{ tab?: string | string[] }>;
};

export default async function ArtworkPage({ searchParams }: ArtworkPageProps) {
  const params = await searchParams;
  const raw = Array.isArray(params.tab) ? params.tab[0] : params.tab;
  const activeTab: ArtworkSectionId =
    raw === "illustration" ? "illustration" : "installation";

  return <ArtworkView activeTab={activeTab} />;
}
