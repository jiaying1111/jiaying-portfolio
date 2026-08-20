import type { AssignmentStatus } from "@/data/assets";
import { joinClassNames } from "@/lib/utils";

type MediaPlaceholderProps = {
  nodeId?: string;
  width?: number;
  height?: number;
  alt?: string;
  assignmentStatus?: AssignmentStatus;
  decorative?: boolean;
  className?: string;
};

export function MediaPlaceholder({
  nodeId,
  width,
  height,
  alt = "Image not yet provided",
  assignmentStatus,
  decorative = false,
  className,
}: MediaPlaceholderProps) {
  const hasDocumentedRatio = width != null && height != null;

  return (
    <div
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : alt}
      data-figma-node={nodeId}
      data-assignment-status={assignmentStatus}
      className={joinClassNames("media-placeholder", className)}
      style={
        hasDocumentedRatio
          ? { aspectRatio: `${width} / ${height}` }
          : undefined
      }
    />
  );
}
