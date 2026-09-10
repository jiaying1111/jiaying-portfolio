import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AiPracticeView } from "@/components/sections/AiPracticeView";
import { isAiPracticeTab, type AiPracticeTabId } from "@/data/ai-practice";

export const metadata: Metadata = {
  title: "AI Practice — Jiaying Li",
};

type AiPracticePageProps = {
  searchParams: Promise<{ tab?: string | string[] }>;
};

export default async function AiPracticePage({ searchParams }: AiPracticePageProps) {
  const params = await searchParams;
  const raw = Array.isArray(params.tab) ? params.tab[0] : params.tab;

  if (raw && !isAiPracticeTab(raw)) {
    redirect("/ai-practice");
  }

  const activeTab: AiPracticeTabId = isAiPracticeTab(raw) ? raw : "vibe-coding";

  return <AiPracticeView activeTab={activeTab} />;
}
