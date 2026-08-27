import Image from "next/image";
import type { CaseStudyMedia } from "@/data/case-studies/types";

type MediaBlockProps = {
  media: CaseStudyMedia;
  /** The first image on the page is the LCP candidate. */
  priority?: boolean;
  /** When true, the figure fills its grid cell instead of a pixel cap. */
  inPair?: boolean;
};

/**
 * Diagrams, personas, and interface boards are exported artwork with baked-in
 * text, so they are never cropped: the figure caps at the export width and the
 * image keeps its intrinsic ratio.
 */
export function MediaBlock({
  media,
  priority = false,
  inPair = false,
}: MediaBlockProps) {
  const cap = inPair ? undefined : (media.displayWidth ?? media.width);
  const rendered = Math.min(cap ?? 895, 895);

  return (
    <figure
      className="case-media"
      style={cap ? { maxWidth: `${cap}px` } : undefined}
    >
      <Image
        src={media.src}
        alt={media.alt}
        width={media.width}
        height={media.height}
        sizes={
          inPair
            ? "(max-width: 899px) 100vw, (max-width: 1439px) 30vw, 430px"
            : `(max-width: 899px) 100vw, (max-width: 1439px) 62vw, ${rendered}px`
        }
        priority={priority}
        className="case-media__image"
      />
      {media.caption ? (
        <figcaption className="case-media__caption">{media.caption}</figcaption>
      ) : null}
    </figure>
  );
}
