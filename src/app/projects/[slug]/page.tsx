import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyView } from "@/components/case-study/CaseStudyView";
import { ProjectDetailSection } from "@/components/sections/ProjectDetailSection";
import { LocalizedBackLink } from "@/components/ui/LocalizedBackLink";
import { isVibeCodingProject } from "@/data/ai-practice";
import { getCaseStudyBySlug } from "@/data/case-studies";
import {
  getExperienceProjects,
  getProjectBySlug,
  getVibeCodingProjects,
  projects,
} from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Project — Jiaying Li" };
  }
  const caseStudy = getCaseStudyBySlug(slug);
  return {
    title: `${caseStudy?.title ?? project.title} — Jiaying Li`,
    description: caseStudy?.summary ?? project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const caseStudy = getCaseStudyBySlug(slug);
  const vibeCoding = isVibeCodingProject(slug);
  const neighbors = vibeCoding ? getVibeCodingProjects() : getExperienceProjects();
  const index = neighbors.findIndex((entry) => entry.slug === slug);

  if (caseStudy) {
    return (
      <CaseStudyView
        project={project}
        caseStudy={caseStudy}
        previous={neighbors[index - 1]}
        next={neighbors[index + 1]}
        backHref={vibeCoding ? "/ai-practice" : "/experience-design"}
        backLabel={vibeCoding ? "AI Practice" : "Experience Design"}
      />
    );
  }

  return (
    <main className="listing measure">
      <LocalizedBackLink
        href={vibeCoding ? "/ai-practice" : "/experience-design"}
        text={
          vibeCoding ? "< Back to AI Practice" : "< Back to Experience Design"
        }
      />
      <ProjectDetailSection project={project} />
    </main>
  );
}
