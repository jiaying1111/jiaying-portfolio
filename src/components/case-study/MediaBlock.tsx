import Image from "next/image";
import type { CaseStudyMedia } from "@/data/case-studies/digital-no-more-mad";

type MediaBlockProps = {
  media: CaseStudyMedia;
  /** The first image on the page is the LCP candidate. */
  priority?: boolean;
};

/**
 * Diagrams, personas, and interface boards are exported artwork with baked-in
 * text, so they are never cropped: the figure caps at the export width and the
 * image keeps its intrinsic ratio.
 */
export function MediaBlock({ media, priority = false }: MediaBlockProps) {
  const cap = media.displayWidth ?? media.width;
  /* The content column is 895px at 1440px, so nothing ever renders wider. */
  const rendered = Math.min(cap, 895);

  return (
    <figure className="case-media" style={{ maxWidth: `${cap}px` }}>
      <Image
        src={media.src}
        alt={media.alt}
        width={media.width}
        height={media.height}
        sizes={`(max-width: 899px) 100vw, (max-width: 1439px) 62vw, ${rendered}px`}
        priority={priority}
        className="case-media__image"
      />
      {media.caption ? (
        <figcaption className="case-media__caption">{media.caption}</figcaption>
      ) : null}
    </figure>
  );
}
