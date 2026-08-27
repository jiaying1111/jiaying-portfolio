"use client";

import { useCallback, useEffect, useState } from "react";
import { joinClassNames } from "@/lib/utils";

type ChapterNavProps = {
  chapters: { id: string; number: string; label: string }[];
};

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function scrollToChapter(id: string) {
  const section = document.getElementById(id);
  if (!section) {
    return;
  }

  section.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
}

export function ChapterNav({ chapters }: ChapterNavProps) {
  const [activeId, setActiveId] = useState(chapters[0]?.id ?? "");

  const goTo = useCallback((id: string, updateHistory: boolean) => {
    if (!chapters.some((chapter) => chapter.id === id)) {
      return;
    }

    setActiveId(id);
    scrollToChapter(id);

    if (updateHistory) {
      const next = `${window.location.pathname}${window.location.search}#${id}`;
      window.history.pushState(null, "", next);
    }
  }, [chapters]);

  useEffect(() => {
    const onHash = () => {
      const id = window.location.hash.replace(/^#/, "");
      if (id) {
        goTo(id, false);
      }
    };

    const frame = window.requestAnimationFrame(onHash);
    window.addEventListener("hashchange", onHash);
    window.addEventListener("popstate", onHash);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("popstate", onHash);
    };
  }, [goTo]);

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
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  event.nativeEvent.stopImmediatePropagation();
                  goTo(chapter.id, true);
                }}
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
