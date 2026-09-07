"use client";

import type { Project } from "@/data/projects";
import { useLocale } from "@/i18n/LocaleProvider";
import { localize } from "@/i18n/localize";
import { ui } from "@/i18n/ui";

/**
 * No approved Figma case-study frame exists for the detail routes, so this
 * renders only verified copy from docs/content.md plus the project's resting
 * listing frame. It deliberately does not invent an Idea / Research / Process /
 * Outcome layout.
 */
export function ProjectDetailSection({ project }: { project: Project }) {
  const { locale } = useLocale();
  const copy = ui(locale);
  const localized = localize(project, locale);
  const hero = localized.listingMedia.frames[0];

  return (
    <div className="project-detail">
      <h1 className="project-detail__title">{localized.title}</h1>
      <p className="project-detail__meta">
        <span>{localized.category}</span>
        <span>{localized.year}</span>
      </p>
      <p className="project-detail__summary">{localized.summary}</p>

      <div className="project-detail__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hero.src}
          alt={hero.alt || localized.title}
          width={hero.width}
          height={hero.height}
          decoding="async"
        />
      </div>

      <dl className="project-detail__specs">
        <div>
          <dt>{copy.type}</dt>
          <dd>{localized.type}</dd>
        </div>
        <div>
          <dt>{copy.tools}</dt>
          <dd>{localized.tools}</dd>
        </div>
      </dl>
    </div>
  );
}
