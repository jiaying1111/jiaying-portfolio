"use client";

import { useLayoutEffect, useRef, useState } from "react";

export type SlidingIndicator = {
  left: number;
  width: number;
  ready: boolean;
};

/**
 * Positions a sliding underline from an active item to a container.
 * Shared by header nav and listing page tabs.
 */
export function useSlidingIndicator(activeIndex: number) {
  const containerRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);
  const [indicator, setIndicator] = useState<SlidingIndicator>({
    left: 0,
    width: 0,
    ready: false,
  });

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const item = itemRefs.current[activeIndex];
      const container = containerRef.current;
      if (!item || !container || activeIndex < 0) {
        setIndicator((current) =>
          current.ready ? { ...current, ready: false } : current,
        );
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      setIndicator({
        left: itemRect.left - containerRect.left,
        width: itemRect.width,
        ready: true,
      });
    };

    updateIndicator();

    const container = containerRef.current;
    if (!container) {
      return;
    }

    const observer = new ResizeObserver(updateIndicator);
    observer.observe(container);
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
  }, [activeIndex]);

  return { containerRef, itemRefs, indicator };
}
