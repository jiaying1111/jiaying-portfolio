"use client";

import { useCallback, useEffect, useState } from "react";
import { heroSlides, socialControls } from "@/data/site";
import { socialIcons } from "@/data/assets";
import { HERO_AUTOPLAY_MS, HERO_CROSSFADE_MS } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [interacting, setInteracting] = useState(false);
  const [documentHidden, setDocumentHidden] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  const slide = heroSlides[index];
  const isIntro = index === 0;

  const goNext = useCallback(() => {
    setIndex((current) => (current + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const onVisibilityChange = () => setDocumentHidden(document.hidden);
    onVisibilityChange();
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  const autoplayPaused = reducedMotion || interacting || documentHidden;

  useEffect(() => {
    if (autoplayPaused) return;
    const timer = window.setTimeout(goNext, HERO_AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [autoplayPaused, goNext, index]);

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Featured work"
      style={
        { "--hero-crossfade": `${HERO_CROSSFADE_MS}ms` } as React.CSSProperties
      }
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocusCapture={() => setInteracting(true)}
      onBlurCapture={() => setInteracting(false)}
    >
      <div className="hero__stage" aria-hidden="true">
        {heroSlides.map((item, slideIndex) => (
          <div
            key={item.id}
            className={`hero__slide${slideIndex === index ? " is-active" : ""}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image.src}
              alt=""
              width={item.image.width}
              height={item.image.height}
              loading={slideIndex === 0 ? "eager" : "lazy"}
              fetchPriority={slideIndex === 0 ? "high" : "auto"}
              decoding="async"
            />
          </div>
        ))}
      </div>

      <div className="hero__content measure">
        <p className="hero__eyebrow">{slide.eyebrow}</p>
        {isIntro ? (
          <h1 className="hero__display">{slide.display}</h1>
        ) : (
          <h2 className="hero__display">{slide.display}</h2>
        )}
        <p className="hero__summary">{slide.summary}</p>

        <div className="hero__controls">
          {isIntro
            ? socialControls.map((control) =>
                control.href ? (
                  <a
                    key={control.id}
                    className="hero-circle"
                    href={control.href}
                    aria-label={control.label}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={control.icon.src} alt="" width={19} height={19} />
                  </a>
                ) : (
                  /*
                   * docs/content.md records that the Instagram and LinkedIn
                   * URLs are still unverified, so these keep the Figma
                   * composition without pretending to be working controls.
                   */
                  <span
                    key={control.id}
                    className="hero-circle hero-circle--static"
                    aria-hidden="true"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={control.icon.src} alt="" width={19} height={19} />
                  </span>
                ),
              )
            : null}
          <button
            type="button"
            className="hero-circle"
            onClick={goNext}
            aria-label={`Next slide (${index + 1} of ${heroSlides.length})`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="hero-circle__arrow"
              src={socialIcons.nextArrow.src}
              alt=""
              width={14}
              height={18}
            />
          </button>
        </div>
      </div>

      <p className="visually-hidden" aria-live="polite">
        {`Slide ${index + 1} of ${heroSlides.length}: ${slide.display}`}
      </p>
    </section>
  );
}
