import Link from "next/link";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { homepageCopy } from "@/data/site";

export function ProjectGridSection() {
  return (
    <section className="home-experience measure" aria-labelledby="home-experience-title">
      <div className="home-section__head">
        <h2 className="home-section__title" id="home-experience-title">
          {homepageCopy.experienceLabel}
        </h2>
        <Link href="/experience-design" className="home-section__more">
          {homepageCopy.moreLabel}
          <span className="visually-hidden"> Experience Design projects</span>
        </Link>
      </div>
      <ul className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </ul>
    </section>
  );
}
