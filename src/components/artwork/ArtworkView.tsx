"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import { PageTabs } from "@/components/ui/PageTabs";
import { WorkListingItem } from "@/components/ui/WorkListingItem";
import { homepageCopy } from "@/data/site";
import type { ArtworkSectionId } from "@/data/artworks";
import { artworkSections } from "@/data/artworks";

const TABS: { id: ArtworkSectionId; label: string }[] = [
  { id: "installation", label: "Installation" },
  { id: "illustration", label: "Illustration" },
];

type ArtworkViewProps = {
  activeTab: ArtworkSectionId;
};

export function ArtworkView({ activeTab }: ArtworkViewProps) {
  const router = useRouter();
  const pathname = usePathname();
  const section = artworkSections.find((item) => item.id === activeTab);

  const selectTab = useCallback(
    (id: ArtworkSectionId) => {
      const href =
        id === "illustration" ? `${pathname}?tab=illustration` : pathname;
      router.replace(href, { scroll: false });
    },
    [pathname, router],
  );

  if (!section) {
    return null;
  }

  return (
    <main className="page-shell" data-figma-frame={section.frameId}>
      <Link href="/" className="page-back">
        {"< Back to Home"}
      </Link>
      <h1 className="page-title">Artwork</h1>
      <p className="page-intro" data-copy-status={homepageCopy.pageIntro.status}>
        I design interactive experiences that connect
        <br />
        people, space, and stories.
      </p>
      <PageTabs
        tabs={TABS}
        activeId={activeTab}
        ariaLabel="Artwork categories"
        onSelect={selectTab}
      />
      <div className="page-rule" aria-hidden="true" />
      <div
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className="work-list"
      >
        {section.items.map((item) => (
          <WorkListingItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              category: item.category,
              year: item.year,
              summary: item.summary,
              summaryStatus: item.summaryStatus,
              type: item.type,
              tools: item.tools,
              media: item.media,
              href: null,
            }}
          />
        ))}
      </div>
      <p className="page-more">{homepageCopy.moreInProgress}</p>
    </main>
  );
}
