"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { PageTabs } from "@/components/ui/PageTabs";
import { WorkListingItem } from "@/components/ui/WorkListingItem";
import { artworkSections, type ArtworkSectionId } from "@/data/artworks";
import { artworkPageCopy } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { localize } from "@/i18n/localize";
import { ui } from "@/i18n/ui";

export function ArtworkView({ activeTab }: { activeTab: ArtworkSectionId }) {
  const router = useRouter();
  const { locale } = useLocale();
  const pageCopy = localize(artworkPageCopy, locale);
  const sections = localize(artworkSections, locale);
  const copy = ui(locale);
  const section =
    sections.find((entry) => entry.id === activeTab) ?? sections[0];

  const onSelect = (id: ArtworkSectionId) => {
    router.replace(id === "installation" ? "/artwork" : `/artwork?tab=${id}`, {
      scroll: false,
    });
  };

  return (
    <main className="listing measure">
      <Link href="/" className="listing__back">
        {pageCopy.back}
      </Link>
      <h1 className="listing__title">{pageCopy.title}</h1>
      <p className="listing__intro listing__intro--artwork">
        {pageCopy.intro}
      </p>

      <PageTabs
        tabs={sections.map((entry) => ({
          id: entry.id,
          label: entry.label,
        }))}
        activeId={section.id}
        ariaLabel={copy.artworkCategories}
        onSelect={onSelect}
      />

      <ul
        className="work-list"
        id={`panel-${section.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${section.id}`}
      >
        {section.items.map((item, index) => (
          <WorkListingItem
            key={item.id}
            title={item.title}
            category={item.category}
            year={item.year}
            summary={item.summary}
            type={item.type}
            tools={item.tools}
            media={item.listingMedia}
            href={
              item.section === "illustration" ||
              item.id === "resounding-nature" ||
              item.id === "present-and-absent"
                ? `/artwork/${item.id}`
                : undefined
            }
            priority={index === 0}
          />
        ))}
      </ul>

      <p className="listing__more">{pageCopy.moreInProgress}</p>
    </main>
  );
}
