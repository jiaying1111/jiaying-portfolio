import Image from "next/image";
import { CaseStudyVideo } from "@/components/case-study/CaseStudyVideo";
import type { CaseStudyMedia } from "@/data/case-studies/types";

type MediaBlockProps = {
  media: CaseStudyMedia;
  /** The first image on the page is the LCP candidate. */
  priority?: boolean;
  /** When true, the figure fills its grid cell instead of a pixel cap. */
  inPair?: boolean;
  /** Full-width diagrams skip the 895px cap and request a sharper source. */
  fullWidth?: boolean;
  /** Small mechanism cards request a compact source instead of a half-column. */
  compact?: boolean;
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
  fullWidth = false,
  compact = false,
}: MediaBlockProps) {
  const cap = fullWidth || inPair || compact ? undefined : (media.displayWidth ?? media.width);
  const rendered = Math.min(cap ?? 895, 895);

  return (
    <figure
      className="case-media"
      style={cap ? { maxWidth: `${cap}px` } : undefined}
    >
      {media.kind === "video" ? (
        <CaseStudyVideo media={media} />
      ) : (
        <Image
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          quality={fullWidth ? 90 : compact ? 85 : 75}
          unoptimized={fullWidth && media.width >= 1600}
          sizes={
            fullWidth
              ? "100vw"
              : compact
                ? "(max-width: 899px) 42vw, 160px"
                : inPair
                  ? "(max-width: 899px) 100vw, (max-width: 1439px) 30vw, 430px"
                  : `(max-width: 899px) 100vw, (max-width: 1439px) 62vw, ${rendered}px`
          }
          priority={priority}
          className="case-media__image"
        />
      )}
      {media.caption ? (
        <figcaption className="case-media__caption">{media.caption}</figcaption>
      ) : null}
    </figure>
  );
}
