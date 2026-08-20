import Link from "next/link";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import type { Project } from "@/data/projects";
import { joinClassNames } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const { regular, componentSetId } = project.card;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={joinClassNames("project-card", className)}
      data-figma-node={componentSetId}
    >
      <div className="project-card__media">
        <MediaPlaceholder
          nodeId={regular.nodeId}
          width={regular.width}
          height={regular.height}
          decorative
        />
        <span className="project-card__overlay-title" aria-hidden="true">
          {project.listingTitle}
        </span>
      </div>
      <h3 className="project-card__title">{project.listingTitle}</h3>
    </Link>
  );
}
