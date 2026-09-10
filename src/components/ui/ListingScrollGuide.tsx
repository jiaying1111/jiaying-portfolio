"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { ui } from "@/i18n/ui";
import { joinClassNames } from "@/lib/utils";

/**
 * Right-rail listing cue — same sliding-indicator language as header nav /
 * page tabs, oriented vertically so the active project is underlined.
 */
export function ListingScrollGuide({ itemCount }: { itemCount: number }) {
  const { locale } = useLocale();
  const copy = ui(locale);
  const [activeIndex, setActiveIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [indicator, setIndicator] = useState({
    top: 0,
    height: 0,
    ready: false,
  });
  const navRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    if (itemCount < 2) {
      return;
    }

    const update = () => {
      const list = document.querySelector<HTMLElement>(".work-list");
      if (!list) {
        setShow(false);
        return;
      }

      const items = Array.from(list.querySelectorAll<HTMLElement>(".work-item"));
      if (items.length < 2) {
        setShow(false);
        return;
      }

      let nextActive = 0;
      items.forEach((item, index) => {
        if (item.getBoundingClientRect().top < window.innerHeight * 0.42) {
          nextActive = index;
        }
      });

      const last = items[items.length - 1];
      const lastVisible =
        last.getBoundingClientRect().top < window.innerHeight * 0.72;
      const listBottom = list.getBoundingClientRect().bottom + window.scrollY;
      const hasOverflow = listBottom > window.scrollY + window.innerHeight + 80;

      setActiveIndex(nextActive);
      setShow(hasOverflow && !lastVisible);
    };

    const frame = window.requestAnimationFrame(update);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [itemCount]);

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const item = itemRefs.current[activeIndex];
      const nav = navRef.current;
      if (!item || !nav || activeIndex < 0) {
        setIndicator((current) =>
          current.ready ? { ...current, ready: false } : current,
        );
        return;
      }

      const navRect = nav.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      setIndicator({
        top: itemRect.bottom - navRect.top - 1,
        height: 1,
        ready: true,
      });
    };

    updateIndicator();
    const nav = navRef.current;
    if (!nav) {
      return;
    }

    const observer = new ResizeObserver(updateIndicator);
    observer.observe(nav);
    for (const item of itemRefs.current) {
      if (item) {
        observer.observe(item);
      }
    }
    window.addEventListener("resize", updateIndicator);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeIndex, itemCount, show]);

  const scrollToItem = (index: number) => {
    const items = document.querySelectorAll<HTMLElement>(".work-item");
    const target = items[index];
    if (!target) {
      return;
    }
    const top = target.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const scrollToNext = () => {
    scrollToItem(Math.min(activeIndex + 1, itemCount - 1));
  };

  if (itemCount < 2) {
    return null;
  }

  return (
    <aside
      className={joinClassNames("listing-scroll-guide", show && "is-visible")}
      aria-label={copy.scrollToExplore}
    >
      <nav
        className="listing-scroll-guide__nav"
        ref={navRef}
        aria-label={copy.featuredWork}
      >
        {Array.from({ length: itemCount }, (_, index) => (
          <button
            key={index}
            type="button"
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
            className={joinClassNames(
              "listing-scroll-guide__link",
              index === activeIndex && "is-current",
            )}
            onClick={() => scrollToItem(index)}
            aria-current={index === activeIndex ? "true" : undefined}
          >
            {String(index + 1).padStart(2, "0")}
          </button>
        ))}
        <span
          className={joinClassNames(
            "listing-scroll-guide__indicator",
            indicator.ready && "is-ready",
          )}
          style={{
            transform: `translateY(${indicator.top}px)`,
          }}
          aria-hidden="true"
        />
      </nav>
      <button
        type="button"
        className="listing-scroll-guide__continue"
        onClick={scrollToNext}
        aria-label={copy.scrollNext}
      >
        <span className="listing-scroll-guide__label">{copy.scrollMore}</span>
        <span className="listing-scroll-guide__arrow" aria-hidden="true">
          ↓
        </span>
      </button>
    </aside>
  );
}
