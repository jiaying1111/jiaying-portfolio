import type { Metadata } from "next";
import { ExperienceView } from "@/components/sections/ExperienceView";
import type { ProjectListingGroup } from "@/data/projects";

export const metadata: Metadata = {
  title: "Experience Design — Jiaying Li",
};

type ExperiencePageProps = {
  searchParams: Promise<{ tab?: string | string[] }>;
};

export default async function ExperienceDesignPage({
  searchParams,
}: ExperiencePageProps) {
  const params = await searchParams;
  const raw = Array.isArray(params.tab) ? params.tab[0] : params.tab;
  const activeTab: ProjectListingGroup =
    raw === "practice" ? "practice" : "projects";

  return <ExperienceView activeTab={activeTab} />;
}
