import type { Project } from "@/data/projects";

/**
 * No approved Figma case-study frame exists for the detail routes, so this
 * renders only verified copy from docs/content.md plus the project's resting
 * listing frame. It deliberately does not invent an Idea / Research / Process /
 * Outcome layout.
 */
export function ProjectDetailSection({ project }: { project: Project }) {
  const hero = project.listingMedia.frames[0];

  return (
    <div className="project-detail">
      <h1 className="project-detail__title">{project.title}</h1>
      <p className="project-detail__meta">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </p>
      <p className="project-detail__summary">{project.summary}</p>

      <div className="project-detail__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hero.src}
          alt={hero.alt || project.title}
          width={hero.width}
          height={hero.height}
          decoding="async"
        />
      </div>

      <dl className="project-detail__specs">
        <div>
          <dt>Type</dt>
          <dd>{project.type}</dd>
        </div>
        <div>
          <dt>Tools</dt>
          <dd>{project.tools}</dd>
        </div>
      </dl>
    </div>
  );
}
