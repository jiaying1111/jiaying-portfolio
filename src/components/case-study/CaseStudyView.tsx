"use client";

import Image from "next/image";
import Link from "next/link";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { ChapterNav } from "@/components/case-study/ChapterNav";
import { ProjectMetadata } from "@/components/case-study/ProjectMetadata";
import type { CaseStudy } from "@/data/case-studies/types";
import type { Project } from "@/data/projects";
import { useLocale } from "@/i18n/LocaleProvider";
import { localize, t } from "@/i18n/localize";
import { backToLabel, ui } from "@/i18n/ui";
import { joinClassNames } from "@/lib/utils";

type CaseStudyViewProps = {
  project: Pick<Project, "title">;
  caseStudy: CaseStudy;
  previous?: Project;
  next?: Project;
  backHref?: string;
  backLabel?: string;
  theme?: "illustration";
};

export function CaseStudyView({
  project,
  caseStudy,
  previous,
  next,
  backHref = "/experience-design",
  backLabel = "Experience Design",
  theme,
}: CaseStudyViewProps) {
  const { locale } = useLocale();
  const copy = ui(locale);
  const study = localize(caseStudy, locale);
  const overlayHero = Boolean(study.kicker || study.heroIntro);
  const pageTitle = study.title ?? t(project.title, locale);
  const sectionLabel = t(backLabel, locale);

  return (
    <main
      className={joinClassNames(
        "case",
        `case--${caseStudy.slug}`,
        theme === "illustration" && "case--illustration",
      )}
    >
      {theme === "illustration" ? null : (
        <div className="case-hero">
          <Image
            src={study.hero.src}
            alt={study.hero.alt}
            width={study.hero.width}
            height={study.hero.height}
            sizes="100vw"
            priority
            className="case-hero__image"
          />
          <div className="hero-mask" aria-hidden="true" />
          <div className="hero-fade" aria-hidden="true" />
          {overlayHero ? (
            <>
              <div className="case-hero__copy">
                {study.kicker ? (
                  <p className="case-hero__kicker">{study.kicker}</p>
                ) : null}
                <h1 className="case-hero__title">{pageTitle}</h1>
                {study.heroIntro ? (
                  <p className="case-hero__intro">{study.heroIntro}</p>
                ) : null}
              </div>
              <p className="case-hero__scroll">{copy.scrollToExplore}</p>
            </>
          ) : null}
        </div>
      )}

      <div className="case-overview measure">
        {theme === "illustration" && study.kicker ? (
          <p className="case-hero__kicker">{study.kicker}</p>
        ) : null}
        {theme === "illustration" ? (
          <h1 className="case-hero__title">{pageTitle}</h1>
        ) : null}
        <div className="case-overview__lead">
          <Link href={backHref} className="case-overview__back">
            {overlayHero || theme === "illustration"
              ? backToLabel(locale, sectionLabel)
              : copy.backShort}
          </Link>
          {theme === "illustration" ? null : overlayHero ? (
            study.editorialTitle ? (
              <h2 className="case-overview__title">{study.editorialTitle}</h2>
            ) : null
          ) : (
            <h1 className="case-overview__title">{pageTitle}</h1>
          )}
          {theme === "illustration" || overlayHero ? null : (
            <p className="case-overview__tags">
              <span>{study.category}</span>
              <span>{study.year}</span>
            </p>
          )}
          <p className="case-overview__summary">{study.summary}</p>
          {study.links ? (
            <ul className="case-overview__links">
              {study.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="case-overview__link"
                    {...(link.download
                      ? { download: true }
                      : { target: "_blank", rel: "noreferrer" })}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <ProjectMetadata items={study.metadata} />
      </div>

      <div className="case-body measure">
        {theme === "illustration" ? null : (
          <ChapterNav chapters={study.chapters} />
        )}
        <div className="case-content">
          {study.chapters.map((chapter, index) => (
            <CaseStudySection
              key={chapter.id}
              chapter={chapter}
              priorityMedia={index === 0}
              plain={theme === "illustration"}
            />
          ))}

          <nav className="case-pager" aria-label={copy.projectNav}>
            {previous ? (
              <Link href={`/projects/${previous.slug}`}>
                {copy.previousProjectLink}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/projects/${next.slug}`}>
                {copy.nextProjectLink}
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>
      </div>
    </main>
  );
}
