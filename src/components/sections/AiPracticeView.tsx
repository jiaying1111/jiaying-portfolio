"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ListingScrollGuide } from "@/components/ui/ListingScrollGuide";
import { PageTabs } from "@/components/ui/PageTabs";
import { WorkListingItem } from "@/components/ui/WorkListingItem";
import {
  aiPracticePageCopy,
  getAiPracticeProjects,
  getAiPracticeVisualDesign,
  type AiPracticeTabId,
} from "@/data/ai-practice";
import { useLocale } from "@/i18n/LocaleProvider";
import { localize } from "@/i18n/localize";
import { ui } from "@/i18n/ui";

function tabHref(id: AiPracticeTabId) {
  return id === "vibe-coding" ? "/ai-practice" : `/ai-practice?tab=${id}`;
}

export function AiPracticeView({ activeTab }: { activeTab: AiPracticeTabId }) {
  const router = useRouter();
  const { locale } = useLocale();
  const pageCopy = localize(aiPracticePageCopy, locale);
  const copy = ui(locale);
  const vibeCoding = localize(getAiPracticeProjects(), locale);
  const visualDesign = localize(getAiPracticeVisualDesign(), locale);

  const onSelect = (id: AiPracticeTabId) => {
    router.replace(tabHref(id), { scroll: false });
  };

  return (
    <main className="listing measure">
      <Link href="/" className="listing__back">
        {pageCopy.back}
      </Link>
      <h1 className="listing__title">{pageCopy.title}</h1>
      <p className="listing__intro listing__intro--experience">
        {pageCopy.intro}
      </p>

      <PageTabs
        tabs={pageCopy.tabs.map((tab) => ({
          id: tab.id,
          label: tab.label,
        }))}
        activeId={activeTab}
        ariaLabel={copy.aiPracticeCategories}
        onSelect={onSelect}
      />

      <ListingScrollGuide
        itemCount={
          activeTab === "vibe-coding" ? vibeCoding.length : visualDesign.length
        }
      />

      <ul
        className="work-list"
        id={`panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
      >
        {activeTab === "vibe-coding"
          ? vibeCoding.map((project, index) => (
              <WorkListingItem
                key={project.slug}
                title={project.title}
                category={project.category}
                year={project.year}
                summary={project.summary}
                type={project.type}
                tools={project.tools}
                media={project.listingMedia}
                href={`/projects/${project.slug}`}
                priority={index === 0}
              />
            ))
          : visualDesign.map((item, index) => (
              <WorkListingItem
                key={item.id}
                title={item.title}
                category={item.category}
                year={item.year}
                summary={item.summary}
                type={item.type}
                tools={item.tools}
                media={item.listingMedia}
                href={`/artwork/${item.id}`}
                priority={index === 0}
              />
            ))}
      </ul>

      <p className="listing__more">{pageCopy.moreInProgress}</p>
    </main>
  );
}
