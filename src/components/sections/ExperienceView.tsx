"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ListingScrollGuide } from "@/components/ui/ListingScrollGuide";
import { PageTabs } from "@/components/ui/PageTabs";
import { WorkListingItem } from "@/components/ui/WorkListingItem";
import { getProjectsByGroup } from "@/data/projects";
import type { ExperienceListingGroup } from "@/data/ai-practice";
import { experiencePageCopy } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { localize } from "@/i18n/localize";
import { ui } from "@/i18n/ui";

export function ExperienceView({
  activeTab,
}: {
  activeTab: ExperienceListingGroup;
}) {
  const router = useRouter();
  const { locale } = useLocale();
  const pageCopy = localize(experiencePageCopy, locale);
  const items = localize(getProjectsByGroup(activeTab), locale);
  const copy = ui(locale);

  const onSelect = (id: ExperienceListingGroup) => {
    router.replace(
      id === "projects" ? "/experience-design" : `/experience-design?tab=${id}`,
      { scroll: false },
    );
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
          id: tab.id as ExperienceListingGroup,
          label: tab.label,
        }))}
        activeId={activeTab}
        ariaLabel={copy.experienceCategories}
        onSelect={onSelect}
      />

      <ListingScrollGuide itemCount={items.length} />

      <ul
        className="work-list"
        id={`panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
      >
        {items.map((project, index) => (
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
        ))}
      </ul>

      <p className="listing__more">{pageCopy.moreInProgress}</p>
    </main>
  );
}
