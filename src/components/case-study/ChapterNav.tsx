"use client";

import { useCallback, useEffect, useState } from "react";
import { joinClassNames } from "@/lib/utils";
import { useLocale } from "@/i18n/LocaleProvider";
import { ui } from "@/i18n/ui";

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
  const { locale } = useLocale();
  const copy = ui(locale);
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

    let frame = 0;
    const updateActiveChapter = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const marker = window.innerWidth < 900 ? 96 : 72;
        const active = sections.reduce(
          (current, section) =>
            section.getBoundingClientRect().top <= marker ? section : current,
          sections[0],
        );
        setActiveId(active.id);
      });
    };

    updateActiveChapter();
    window.addEventListener("scroll", updateActiveChapter, { passive: true });
    window.addEventListener("resize", updateActiveChapter);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveChapter);
      window.removeEventListener("resize", updateActiveChapter);
    };
  }, [chapters]);

  return (
    <nav className="case-nav" aria-label={copy.caseChapters}>
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
