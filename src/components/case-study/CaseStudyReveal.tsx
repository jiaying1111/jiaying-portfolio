"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTOR =
  "main > section, .home-section__head, .project-card, .work-item, .about__intro, .about-section, .project-detail, .case-module, .case-chapter__headline, .case-chapter__lead, .case--dreamwhorl .case-entry, .case--resounding-nature .case-entry, .case--nushu .case-entry, .case--little-red-riding-hood .case-entry, .case-flow__card, .case-installation-wireframe, .case-installation-pair, .case-installation-studio";

export function CaseStudyReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.querySelector("main");
    if (!root) {
      return;
    }

    const nodes = [...root.querySelectorAll(SELECTOR)];
    if (nodes.length === 0) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    nodes.forEach((node) => node.classList.add("case-reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -24px 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
