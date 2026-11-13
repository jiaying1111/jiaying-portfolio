"use client";

import { useEffect, useRef, useState } from "react";

export function useFormaReadingStep(enabled = true) {
  const list = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const element = list.current;
    if (!enabled || !element) return;
    const rows = Array.from(element.children);
    let frame = 0;
    function measure() {
      frame = 0;
      const readingLine = Math.min(window.innerHeight * .42, 390);
      const next = rows.findIndex(row => row.getBoundingClientRect().top > readingLine);
      setActive(next === -1 ? Math.max(0, rows.length - 1) : Math.max(0, next - 1));
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(measure);
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        schedule();
        window.addEventListener("scroll", schedule, { passive: true });
      } else {
        window.removeEventListener("scroll", schedule);
      }
    }, { rootMargin: "160px 0px" });
    const resize = new ResizeObserver(schedule);
    observer.observe(element);
    resize.observe(element);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
    };
  }, [enabled]);

  return { list, active };
}
