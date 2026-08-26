"use client";

import { useEffect, useState } from "react";
import type { HoverLoopSet } from "@/data/assets";
import {
  HOVER_LOOP_CROSSFADE_MS,
  HOVER_LOOP_INTERVAL_MS,
} from "@/lib/motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

type HoverLoopMediaProps = {
  media: HoverLoopSet;
  /** True for the first above-the-fold row on a listing page. */
  priority?: boolean;
  active: boolean;
};

/**
 * Fixed 623x420 wrapper. frame-01 rests; hover or keyboard focus loops
 * 01 -> 02 -> 03 -> 01 and leaving resets to frame-01 without layout shift.
 */
export function HoverLoopMedia({
  media,
  priority = false,
  active,
}: HoverLoopMediaProps) {
  const [frame, setFrame] = useState(0);
  const [wasLooping, setWasLooping] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const looping = active && !reducedMotion && media.frames.length > 1;

  // Restart from frame-01 whenever the loop starts or stops.
  if (wasLooping !== looping) {
    setWasLooping(looping);
    setFrame(0);
  }

  useEffect(() => {
    if (!looping) return;
    const timer = window.setInterval(() => {
      setFrame((current) => (current + 1) % media.frames.length);
    }, HOVER_LOOP_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [looping, media.frames.length]);

  return (
    <div
      className="hover-loop"
      style={
        {
          "--hover-loop-crossfade": `${HOVER_LOOP_CROSSFADE_MS}ms`,
        } as React.CSSProperties
      }
    >
      {media.frames.map((item, index) => (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          key={item.id}
          className={`hover-loop__frame${index === frame ? " is-active" : ""}`}
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          loading={priority && index === 0 ? "eager" : "lazy"}
          fetchPriority={priority && index === 0 ? "high" : "auto"}
          decoding="async"
        />
      ))}
    </div>
  );
}
