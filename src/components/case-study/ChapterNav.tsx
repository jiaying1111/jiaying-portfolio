"use client";

import { useEffect, useState } from "react";
import { joinClassNames } from "@/lib/utils";

type ChapterNavProps = {
  chapters: { id: string; number: string; label: string }[];
};

export function ChapterNav({ chapters }: ChapterNavProps) {
  const [activeId, setActiveId] = useState(chapters[0]?.id ?? "");

  useEffect(() => {
    const sections = chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      // Only the band just below the header counts, so the chapter being read
      // wins over the one that merely still has pixels on screen.
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [chapters]);

  return (
    <nav className="case-nav" aria-label="Case study chapters">
      <ol className="case-nav__list">
        {chapters.map((chapter) => {
          const current = chapter.id === activeId;
          return (
            <li key={chapter.id}>
              <a
                href={`#${chapter.id}`}
                aria-current={current ? "true" : undefined}
                className={joinClassNames(
                  "case-nav__link",
                  current && "is-current",
                )}
              >
                <span className="case-nav__number">{chapter.number}</span>
                <span className="case-nav__label">{chapter.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
