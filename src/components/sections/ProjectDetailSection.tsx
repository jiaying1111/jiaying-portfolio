import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import type { Project } from "@/data/projects";

type ProjectDetailSectionProps = {
  project: Project;
};

export function ProjectDetailSection({ project }: ProjectDetailSectionProps) {
  return (
    <div className="project-detail">
      <p className="work-item__meta">
        {project.category} {project.year}
      </p>
      <h1 className="project-detail__title">{project.listingTitle}</h1>
      <p data-copy-status={project.summaryStatus}>{project.summary}</p>
      <dl className="project-detail__meta">
        <div>
          <dt>Type</dt>
          <dd>{project.type}</dd>
        </div>
        <div>
          <dt>Tools</dt>
          <dd>{project.tools}</dd>
        </div>
      </dl>
      {project.detailMedia.length > 0 ? (
        <ul className="project-detail__media">
          {project.detailMedia.map((asset) => (
            <li key={asset.id}>
              <MediaPlaceholder
                nodeId={asset.nodeId}
                width={asset.width}
                height={asset.height}
                alt={`${project.title} image not yet provided`}
                assignmentStatus={asset.assignmentStatus}
              />
            </li>
          ))}
        </ul>
      ) : null}
      <p className="provisional-note">
        Project detail layout is provisional. No approved Figma case-study frame
        has been supplied.
      </p>
    </div>
  );
}
