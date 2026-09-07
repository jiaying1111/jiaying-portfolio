"use client";

import type { CaseStudyMedia } from "@/data/case-studies/types";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

type CaseStudyVideoProps = {
  media: CaseStudyMedia;
};

export function CaseStudyVideo({ media }: CaseStudyVideoProps) {
  const reducedMotion = usePrefersReducedMotion();
  const looping = Boolean(media.loop);

  return (
    <video
      className="case-media__video"
      controls={!looping}
      playsInline
      muted={looping}
      loop={looping}
      autoPlay={looping && !reducedMotion}
      preload="metadata"
      poster={media.poster}
      width={media.width}
      height={media.height}
      aria-label={media.alt}
    >
      <source src={media.src} type="video/mp4" />
    </video>
  );
}
