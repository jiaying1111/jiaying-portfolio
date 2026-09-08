"use client";

import type { CaseStudyMedia } from "@/data/case-studies/types";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

type CaseStudyVideoProps = {
  media: CaseStudyMedia;
};

function youtubeId(url: string) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.replace("/", "").split("/")[0] || null;
    }
    if (parsed.hostname.includes("youtube.com")) {
      return (
        parsed.searchParams.get("v") ||
        parsed.pathname.split("/").filter(Boolean).pop() ||
        null
      );
    }
  } catch {
    return null;
  }
  return null;
}

export function CaseStudyVideo({ media }: CaseStudyVideoProps) {
  const reducedMotion = usePrefersReducedMotion();
  const looping = Boolean(media.loop);
  const embedId = youtubeId(media.youtube ?? media.src);

  if (embedId) {
    return (
      <div className="case-media__video case-media__youtube">
        <iframe
          src={`https://www.youtube.com/embed/${embedId}`}
          title={media.alt}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

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
