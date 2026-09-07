"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { Project } from "@/data/projects";
import {
  CARD_CROSSFADE_MS,
  CARD_HOVER_LOOP_INTERVAL_MS,
  CARD_HOVER_LOOP_ORDER,
  CARD_OVERLAY_FADE_MS,
} from "@/lib/motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { joinClassNames } from "@/lib/utils";

/**
 * Default, hover frames, overlay, and title stay stacked in one fixed wrapper.
 * Hover only changes opacity and transform so the card cannot resize or flash.
 */
export function ProjectCard({ project }: { project: Project }) {
  const { default: defaultMedia, hoverFrames, overlay } = project.card;
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [step, setStep] = useState(0);
  const [fromStep, setFromStep] = useState<number | null>(null);
  const stepRef = useRef(0);
  const reducedMotion = usePrefersReducedMotion();
  const active = hovered || focused;
  const looping = active && !reducedMotion && hoverFrames.length >= 3;
  const currentFrame = CARD_HOVER_LOOP_ORDER[step] ?? 1;
  const previousFrame =
    fromStep === null ? null : (CARD_HOVER_LOOP_ORDER[fromStep] ?? null);

  useEffect(() => {
    const sources = [...hoverFrames.map((item) => item.src), overlay.src];
    sources.forEach((src) => {
      const image = new window.Image();
      image.decoding = "async";
      image.src = src;
      void image.decode?.().catch(() => undefined);
    });
  }, [hoverFrames, overlay.src]);

  useEffect(() => {
    if (!looping) {
      return;
    }

    const fadeTimers: number[] = [];
    const timer = window.setInterval(() => {
      const current = stepRef.current;
      const next = (current + 1) % CARD_HOVER_LOOP_ORDER.length;
      stepRef.current = next;
      setFromStep(current);
      setStep(next);
      fadeTimers.push(
        window.setTimeout(() => {
          setFromStep((from) => (from === current ? null : from));
        }, CARD_CROSSFADE_MS),
      );
    }, CARD_HOVER_LOOP_INTERVAL_MS);

    return () => {
      window.clearInterval(timer);
      fadeTimers.forEach((id) => window.clearTimeout(id));
    };
  }, [looping]);

  return (
    <li>
      <Link
        href={`/projects/${project.slug}`}
        className={joinClassNames("project-card", active && "is-active")}
        aria-label={project.title}
        style={
          {
            "--card-crossfade": `${CARD_CROSSFADE_MS}ms`,
            "--card-overlay-fade": `${CARD_OVERLAY_FADE_MS}ms`,
          } as CSSProperties
        }
        onMouseEnter={() => {
          stepRef.current = 0;
          setFromStep(null);
          setStep(0);
          setHovered(true);
        }}
        onMouseLeave={() => {
          setFromStep(null);
          setHovered(false);
        }}
        onFocus={(event) => {
          if (event.currentTarget.matches(":focus-visible")) {
            stepRef.current = 0;
            setFromStep(null);
            setStep(0);
            setFocused(true);
          }
        }}
        onBlur={() => {
          setFromStep(null);
          setFocused(false);
        }}
      >
        <span className="project-card__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="project-card__layer project-card__layer--default"
            src={defaultMedia.src}
            alt=""
            width={defaultMedia.width}
            height={defaultMedia.height}
            loading="lazy"
            decoding="async"
          />
          {hoverFrames.map((item, index) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={item.id}
              className={joinClassNames(
                "project-card__layer",
                "project-card__layer--hover",
                index === currentFrame && "is-current",
                index === previousFrame && "is-previous",
              )}
              src={item.src}
              alt=""
              width={item.width}
              height={item.height}
              loading="eager"
              decoding="async"
            />
          ))}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="project-card__overlay"
            src={overlay.src}
            alt=""
            width={overlay.width}
            height={overlay.height}
            loading="eager"
            decoding="async"
          />
          <span className="project-card__title" aria-hidden="true">
            {project.title}
          </span>
        </span>
      </Link>
    </li>
  );
}
