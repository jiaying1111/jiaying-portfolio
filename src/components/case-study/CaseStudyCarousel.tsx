"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";
import type { CaseStudyMedia } from "@/data/case-studies/types";
import { CASE_CAROUSEL_AUTOPLAY_MS, CASE_CAROUSEL_FADE_MS } from "@/lib/motion";
import { useLocale } from "@/i18n/LocaleProvider";
import { showSlideLabel, slideStatus } from "@/i18n/ui";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

type CaseStudyCarouselProps = {
  items: CaseStudyMedia[];
  label: string;
};

export function CaseStudyCarousel({ items, label }: CaseStudyCarouselProps) {
  const { locale } = useLocale();
  const [index, setIndex] = useState(0);
  const [hidden, setHidden] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const total = items.length;
  const autoplay = !reducedMotion && !hidden && total > 1;

  useEffect(() => {
    const onVisibility = () => setHidden(document.hidden);
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    if (!autoplay) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % total);
    }, CASE_CAROUSEL_AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [autoplay, index, total]);

  if (total === 0) {
    return null;
  }

  const current = items[index];

  return (
    <div
      className="case-carousel"
      aria-roledescription="carousel"
      aria-label={label}
      style={
        {
          "--case-carousel-fade": `${CASE_CAROUSEL_FADE_MS}ms`,
          "--carousel-ratio": `${items[0].width} / ${items[0].height}`,
        } as CSSProperties
      }
    >
      <div className="case-carousel__stage">
        {items.map((item, slideIndex) => (
          <div
            key={item.src}
            className={`case-carousel__slide${slideIndex === index ? " is-active" : ""}`}
            aria-hidden={slideIndex !== index}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              sizes="(max-width: 899px) 100vw, 1200px"
              quality={90}
              className="case-carousel__image"
              priority={slideIndex === 0}
            />
          </div>
        ))}
      </div>

      {total > 1 ? (
        <div className="case-carousel__dots">
          {items.map((item, slideIndex) => (
            <button
              key={item.src}
              type="button"
              aria-label={showSlideLabel(locale, slideIndex + 1, total)}
              aria-current={slideIndex === index ? "true" : undefined}
              className={`case-carousel__dot${slideIndex === index ? " is-active" : ""}`}
              onClick={() => setIndex(slideIndex)}
            />
          ))}
        </div>
      ) : null}

      <p className="visually-hidden">
        {slideStatus(locale, index + 1, total, current.alt)}
      </p>
    </div>
  );
}
