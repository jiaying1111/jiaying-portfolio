"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { PageTabs } from "@/components/ui/PageTabs";
import { WorkListingItem } from "@/components/ui/WorkListingItem";
import { getProjectsByGroup, type ProjectListingGroup } from "@/data/projects";
import { experiencePageCopy } from "@/data/site";

export function ExperienceView({
  activeTab,
}: {
  activeTab: ProjectListingGroup;
}) {
  const router = useRouter();
  const items = getProjectsByGroup(activeTab);

  const onSelect = (id: ProjectListingGroup) => {
    router.replace(
      id === "projects" ? "/experience-design" : `/experience-design?tab=${id}`,
      { scroll: false },
    );
  };

  return (
    <main className="listing measure">
      <Link href="/" className="listing__back">
        {experiencePageCopy.back}
      </Link>
      <h1 className="listing__title">{experiencePageCopy.title}</h1>
      <p className="listing__intro listing__intro--experience">
        {experiencePageCopy.intro}
      </p>

      <PageTabs
        tabs={experiencePageCopy.tabs.map((tab) => ({
          id: tab.id as ProjectListingGroup,
          label: tab.label,
        }))}
        activeId={activeTab}
        ariaLabel="Experience Design categories"
        onSelect={onSelect}
      />
      <div className="listing__rule" />

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

      <p className="listing__more">{experiencePageCopy.moreInProgress}</p>
    </main>
  );
}
