"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import { PageTabs } from "@/components/ui/PageTabs";
import { WorkListingItem } from "@/components/ui/WorkListingItem";
import {
  getProjectsByGroup,
  type ProjectListingGroup,
} from "@/data/projects";
import { homepageCopy } from "@/data/site";

const TABS: { id: ProjectListingGroup; label: string }[] = [
  { id: "projects", label: "Projects" },
  { id: "practice", label: "Practice" },
];

type ExperienceViewProps = {
  activeTab: ProjectListingGroup;
};

export function ExperienceView({ activeTab }: ExperienceViewProps) {
  const router = useRouter();
  const pathname = usePathname();
  const items = getProjectsByGroup(activeTab);
  const frameId = activeTab === "practice" ? "152:448" : "97:66";

  const selectTab = useCallback(
    (id: ProjectListingGroup) => {
      const href = id === "practice" ? `${pathname}?tab=practice` : pathname;
      router.replace(href, { scroll: false });
    },
    [pathname, router],
  );

  return (
    <main className="page-shell" data-figma-frame={frameId}>
      <Link href="/" className="page-back">
        {"< Back to Home"}
      </Link>
      <h1 className="page-title">Experience Design</h1>
      <p className="page-intro" data-copy-status={homepageCopy.pageIntro.status}>
        I design interactive experiences that connect
        <br />
        people, space, and stories.
      </p>
      <PageTabs
        tabs={TABS}
        activeId={activeTab}
        ariaLabel="Experience Design categories"
        onSelect={selectTab}
      />
      <div className="page-rule" aria-hidden="true" />
      <div
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className="work-list"
      >
        {items.map((project) => (
          <WorkListingItem
            key={project.slug}
            item={{
              id: project.slug,
              title: project.listingTitle,
              category: project.category,
              year: project.year,
              summary: project.summary,
              summaryStatus: project.summaryStatus,
              type: project.type,
              tools: project.tools,
              media: project.listingMedia,
              href: `/projects/${project.slug}`,
            }}
          />
        ))}
      </div>
      <p className="page-more">{homepageCopy.moreInProgress}</p>
    </main>
  );
}
