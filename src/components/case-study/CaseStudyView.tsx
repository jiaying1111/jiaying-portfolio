import Image from "next/image";
import Link from "next/link";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { ChapterNav } from "@/components/case-study/ChapterNav";
import { ProjectMetadata } from "@/components/case-study/ProjectMetadata";
import type { CaseStudy } from "@/data/case-studies/types";
import type { Project } from "@/data/projects";

type CaseStudyViewProps = {
  project: Project;
  caseStudy: CaseStudy;
  previous?: Project;
  next?: Project;
};

export function CaseStudyView({
  project,
  caseStudy,
  previous,
  next,
}: CaseStudyViewProps) {
  return (
    <main className="case">
      <div className="case-hero">
        <Image
          src={caseStudy.hero.src}
          alt={caseStudy.hero.alt}
          width={caseStudy.hero.width}
          height={caseStudy.hero.height}
          sizes="100vw"
          priority
          className="case-hero__image"
        />
      </div>

      <div className="case-overview measure">
        <div className="case-overview__lead">
          <Link href="/experience-design" className="case-overview__back">
            {"<  Back"}
          </Link>
          <h1 className="case-overview__title">{project.title}</h1>
          <p className="case-overview__tags">
            <span>{caseStudy.category}</span>
            <span>{caseStudy.year}</span>
          </p>
          <p className="case-overview__summary">{caseStudy.summary}</p>
        </div>
        <ProjectMetadata items={caseStudy.metadata} />
      </div>

      <div className="case-body measure">
        <ChapterNav chapters={caseStudy.chapters} />
        <div className="case-content">
          {caseStudy.chapters.map((chapter, index) => (
            <CaseStudySection
              key={chapter.id}
              chapter={chapter}
              priorityMedia={index === 0}
            />
          ))}

          <nav className="case-pager" aria-label="Project navigation">
            {previous ? (
              <Link href={`/projects/${previous.slug}`}>
                {"\u2190 Previous project"}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/projects/${next.slug}`}>
                {"Next project \u2192"}
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
