import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import type { MediaAsset } from "@/data/assets";
import { joinClassNames } from "@/lib/utils";

type ArtworkGalleryProps = {
  items: MediaAsset[];
  label: string;
  className?: string;
};

export function ArtworkGallery({
  items,
  label,
  className,
}: ArtworkGalleryProps) {
  return (
    <ul
      aria-label={label}
      className={joinClassNames("artwork-gallery", className)}
    >
      {items.map((item) => (
        <li key={item.id}>
          <MediaPlaceholder
            nodeId={item.nodeId}
            width={item.width}
            height={item.height}
            alt="Artwork image not yet provided"
            assignmentStatus={item.assignmentStatus}
          />
        </li>
      ))}
    </ul>
  );
}
