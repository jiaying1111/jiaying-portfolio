"use client";

import Link from "next/link";
import { useState } from "react";
import { HoverLoopMedia } from "@/components/ui/HoverLoopMedia";
import type { HoverLoopSet } from "@/data/assets";

function ArrowRight() {
  return (
    <svg
      className="view-project__arrow"
      viewBox="0 0 24 12"
      width="24"
      height="12"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0.5 6h21M16.5 1l5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

type WorkListingItemProps = {
  title: string;
  category: string;
  year: string;
  summary: string;
  type: string;
  tools: string;
  media: HoverLoopSet;
  href?: string;
  priority?: boolean;
};

export function WorkListingItem({
  title,
  category,
  year,
  summary,
  type,
  tools,
  media,
  href,
  priority = false,
}: WorkListingItemProps) {
  const [active, setActive] = useState(false);

  const mediaBlock = (
    <HoverLoopMedia media={media} priority={priority} active={active} />
  );

  return (
    <li
      className="work-item"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocusCapture={() => setActive(true)}
      onBlurCapture={() => setActive(false)}
    >
      {href ? (
        <Link href={href} tabIndex={-1} aria-hidden="true">
          {mediaBlock}
        </Link>
      ) : (
        mediaBlock
      )}

      <div className="work-item__info">
        <h3 className="work-item__title">{title}</h3>
        <p className="work-item__meta">
          <span>{category}</span>
          <span>{year}</span>
        </p>
        <p className="work-item__summary">{summary}</p>
        <div className="work-item__separator" aria-hidden="true" />
        <dl className="work-item__specs">
          <div>
            <dt>Type</dt>
            <dd>{type}</dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>{tools}</dd>
          </div>
        </dl>
        <div className="work-item__action">
          {href ? (
            <Link href={href} className="view-project">
              <span>
                View Project
                <span className="visually-hidden">{` — ${title}`}</span>
              </span>
              <ArrowRight />
            </Link>
          ) : (
            /*
             * No detail route exists for artwork yet, so the Figma CTA is kept
             * as static text instead of a control that cannot be activated.
             */
            <p className="view-project view-project--inert">
              <span>View Project</span>
              <ArrowRight />
            </p>
          )}
        </div>
      </div>
    </li>
  );
}
