"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { PageTabs } from "@/components/ui/PageTabs";
import { WorkListingItem } from "@/components/ui/WorkListingItem";
import { artworkSections, type ArtworkSectionId } from "@/data/artworks";
import { artworkPageCopy } from "@/data/site";

export function ArtworkView({ activeTab }: { activeTab: ArtworkSectionId }) {
  const router = useRouter();
  const section =
    artworkSections.find((entry) => entry.id === activeTab) ??
    artworkSections[0];

  const onSelect = (id: ArtworkSectionId) => {
    router.replace(id === "installation" ? "/artwork" : `/artwork?tab=${id}`, {
      scroll: false,
    });
  };

  return (
    <main className="listing measure">
      <Link href="/" className="listing__back">
        {artworkPageCopy.back}
      </Link>
      <h1 className="listing__title">{artworkPageCopy.title}</h1>
      <p className="listing__intro listing__intro--artwork">
        {artworkPageCopy.intro}
      </p>

      <PageTabs
        tabs={artworkSections.map((entry) => ({
          id: entry.id,
          label: entry.label,
        }))}
        activeId={section.id}
        ariaLabel="Artwork categories"
        onSelect={onSelect}
      />
      <div className="listing__rule" />

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
            priority={index === 0}
          />
        ))}
      </ul>

      <p className="listing__more">{artworkPageCopy.moreInProgress}</p>
    </main>
  );
}
