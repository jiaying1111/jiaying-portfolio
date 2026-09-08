"use client";

import Link from "next/link";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { homepageCopy } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { localize } from "@/i18n/localize";
import { ui } from "@/i18n/ui";

/** Homepage Experience grid keeps the four featured projects only. */
const homepageProjectSlugs = new Set([
  "digital-nomad",
  "dreamwhorl",
  "little-red-riding-hood",
  "nushu",
]);

export function ProjectGridSection() {
  const { locale } = useLocale();
  const copy = localize(homepageCopy, locale);
  const items = localize(
    projects.filter((project) => homepageProjectSlugs.has(project.slug)),
    locale,
  );
  const moreCopy = ui(locale);

  return (
    <section className="home-experience measure" aria-labelledby="home-experience-title">
      <div className="home-section__head">
        <h2 className="home-section__title" id="home-experience-title">
          {copy.experienceLabel}
        </h2>
        <Link href="/experience-design" className="home-section__more">
          {copy.moreLabel}
          <span className="visually-hidden">{moreCopy.moreExperience}</span>
        </Link>
      </div>
      <ul className="project-grid">
        {items.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </ul>
    </section>
  );
}
