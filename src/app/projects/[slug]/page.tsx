import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyView } from "@/components/case-study/CaseStudyView";
import { ProjectDetailSection } from "@/components/sections/ProjectDetailSection";
import { LocalizedBackLink } from "@/components/ui/LocalizedBackLink";
import { getCaseStudyBySlug } from "@/data/case-studies";
import { getProjectBySlug, projects } from "@/data/projects";

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

  if (caseStudy) {
    const index = projects.findIndex((entry) => entry.slug === slug);
    return (
      <CaseStudyView
        project={project}
        caseStudy={caseStudy}
        previous={projects[index - 1]}
        next={projects[index + 1]}
      />
    );
  }

  return (
    <main className="listing measure">
      <LocalizedBackLink
        href="/experience-design"
        text="< Back to Experience Design"
      />
      <ProjectDetailSection project={project} />
    </main>
  );
}
