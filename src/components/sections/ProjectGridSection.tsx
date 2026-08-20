import Link from "next/link";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function ProjectGridSection() {
  return (
    <section className="home-section" id="experience" aria-labelledby="experience-heading">
      <div className="home-section__header">
        <h2 id="experience-heading">Experience Design</h2>
        <Link href="/experience-design" className="home-section__more">
          More
        </Link>
      </div>
      <ul className="project-grid">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
