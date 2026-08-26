import Link from "next/link";
import type { Project } from "@/data/projects";

/**
 * Regular and hover artwork stay layered inside one stable wrapper so the hit
 * target never changes and the crossfade cannot flicker.
 */
export function ProjectCard({ project }: { project: Project }) {
  const { regular, hover } = project.card;

  return (
    <li>
      <Link
        href={`/projects/${project.slug}`}
        className="project-card"
        aria-label={project.title}
      >
        <span className="project-card__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="project-card__layer"
            src={regular.src}
            alt=""
            width={regular.width}
            height={regular.height}
            loading="lazy"
            decoding="async"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="project-card__layer project-card__layer--hover"
            src={hover.src}
            alt=""
            width={hover.width}
            height={hover.height}
            loading="lazy"
            decoding="async"
          />
        </span>
        <span className="visually-hidden">{project.title}</span>
      </Link>
    </li>
  );
}
