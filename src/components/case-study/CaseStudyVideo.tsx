"use client";

import { useEffect, useState } from "react";
import type { CaseStudyMedia } from "@/data/case-studies/types";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

type CaseStudyVideoProps = {
  media: CaseStudyMedia;
};

type EmbedTarget =
  | { provider: "youtube"; src: string }
  | { provider: "bilibili"; src: string };

function isLocalVideo(src: string) {
  return src.startsWith("/") && /\.(mp4|webm|mov)(\?|$)/i.test(src);
}

/** Encode each path segment so filenames like `Present&Absent.mp4` resolve. */
function encodeMediaPath(src: string) {
  if (!src.startsWith("/")) {
    return src;
  }
  return src
    .split("/")
    .map((part, index) => (index === 0 ? part : encodeURIComponent(part)))
    .join("/");
}

function embedFromUrl(url: string): EmbedTarget | null {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = parsed.pathname.replace("/", "").split("/")[0];
      return id
        ? { provider: "youtube", src: `https://www.youtube.com/embed/${id}` }
        : null;
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      const id =
        parsed.searchParams.get("v") ||
        parsed.pathname.split("/").filter(Boolean).pop() ||
        null;
      return id
        ? { provider: "youtube", src: `https://www.youtube.com/embed/${id}` }
        : null;
    }

    if (host === "bilibili.com" || host === "m.bilibili.com") {
      const match = parsed.pathname.match(/\/video\/(BV[\w]+)/i);
      const bvid = match?.[1] ?? parsed.searchParams.get("bvid");
      // Official embed has no “force 720p” knob. high_quality=1 starts at the
      // highest free tier (720p when that is the max, else up to 1080p) instead
      // of auto/360p. qn=64 is the playurl code for 720p — may be ignored by
      // newer players, but harmless when unsupported.
      return bvid
        ? {
            provider: "bilibili",
            src: `https://player.bilibili.com/player.html?isOutside=true&bvid=${bvid}&p=1&page=1&high_quality=1&qn=64&danmaku=0&as_wide=1&autoplay=0`,
          }
        : null;
    }

    if (host === "player.bilibili.com") {
      return { provider: "bilibili", src: url };
    }
  } catch {
    return null;
  }
  return null;
}

export function CaseStudyVideo({ media }: CaseStudyVideoProps) {
  const reducedMotion = usePrefersReducedMotion();
  const looping = Boolean(media.loop);
  const localPath = isLocalVideo(media.src) ? encodeMediaPath(media.src) : null;
  const embed = media.youtube
    ? embedFromUrl(media.youtube)
    : localPath
      ? null
      : embedFromUrl(media.src);
  const [useLocal, setUseLocal] = useState(Boolean(localPath));

  useEffect(() => {
    if (!localPath) {
      return;
    }

    // Prefer hosted MP4 when present; fall back to Bilibili/YouTube if missing (Vercel size limits).
    let cancelled = false;
    fetch(localPath, { method: "HEAD" })
      .then((response) => {
        if (!cancelled) {
          setUseLocal(response.ok);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setUseLocal(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [localPath]);

  if (useLocal && localPath) {
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
        onError={() => setUseLocal(false)}
      >
        <source src={localPath} type="video/mp4" />
      </video>
    );
  }

  if (embed) {
    return (
      <div
        className={`case-media__video case-media__youtube case-media__${embed.provider}`}
      >
        <iframe
          src={embed.src}
          title={media.alt}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          referrerPolicy="no-referrer-when-downgrade"
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
