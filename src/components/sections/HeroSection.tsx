"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { socialIcons } from "@/data/assets";
import { heroSlides, socialControls } from "@/data/site";
import { HERO_AUTOPLAY_MS, HERO_SLIDE_MS } from "@/lib/motion";
import { useLocale } from "@/i18n/LocaleProvider";
import { localize, t } from "@/i18n/localize";
import { slideStatus, ui, viewNamed } from "@/i18n/ui";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

function slideOffset(slideIndex: number, current: number, total: number) {
  let delta = slideIndex - current;
  const half = total / 2;
  if (delta > half) {
    delta -= total;
  }
  if (delta < -half) {
    delta += total;
  }
  return delta * 100;
}

export function HeroSection() {
  const { locale } = useLocale();
  const copy = ui(locale);
  const slides = localize(heroSlides, locale);
  const controls = localize(socialControls, locale);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [instantIds, setInstantIds] = useState<ReadonlySet<string>>(
    () => new Set(),
  );
  const [documentHidden, setDocumentHidden] = useState(false);
  const indexRef = useRef(0);
  const reducedMotion = usePrefersReducedMotion();

  const slide = slides[index];
  const isIntro = index === 0;
  const projectHref = heroSlides[index].href;
  const imageLabel = isIntro
    ? viewNamed(locale, t("Re:Sounding Nature", locale))
    : viewNamed(locale, slide.display);

  const goTo = useCallback((step: 1 | -1) => {
    const current = indexRef.current;
    const total = heroSlides.length;
    const next = (current + step + total) % total;
    if (next === current) {
      return;
    }

    const jumping = new Set<string>();
    heroSlides.forEach((item, slideIndex) => {
      const from = slideOffset(slideIndex, current, total);
      const to = slideOffset(slideIndex, next, total);
      if (Math.abs(to - from) > 100) {
        jumping.add(item.id);
      }
    });

    indexRef.current = next;
    setDirection(step);
    setInstantIds(jumping);
    setIndex(next);
  }, []);

  const goPrev = useCallback(() => goTo(-1), [goTo]);
  const goNext = useCallback(() => goTo(1), [goTo]);

  useLayoutEffect(() => {
    if (instantIds.size === 0) {
      return;
    }

    let inner = 0;
    const outer = window.requestAnimationFrame(() => {
      inner = window.requestAnimationFrame(() => {
        setInstantIds(new Set());
      });
    });

    return () => {
      window.cancelAnimationFrame(outer);
      window.cancelAnimationFrame(inner);
    };
  }, [index, instantIds]);

  useEffect(() => {
    const onVisibilityChange = () => setDocumentHidden(document.hidden);
    onVisibilityChange();
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  const autoplayPaused = reducedMotion || documentHidden;

  useEffect(() => {
    if (autoplayPaused) {
      return;
    }

    const timer = window.setTimeout(goNext, HERO_AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [autoplayPaused, goNext, index]);

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label={copy.featuredWork}
      style={{ "--hero-slide": `${HERO_SLIDE_MS}ms` } as CSSProperties}
    >
      <div className="hero__stage" aria-hidden="true">
        {heroSlides.map((item, slideIndex) => {
          const isCurrent = slideIndex === index;
          const isInstant = instantIds.has(item.id);

          return (
            <div
              key={item.id}
              className={[
                "hero__slide",
                isCurrent ? "is-current" : "",
                isInstant ? "is-instant" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              style={
                {
                  "--hero-slide-x": `${slideOffset(slideIndex, index, heroSlides.length)}%`,
                } as CSSProperties
              }
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image.src}
                alt=""
                width={item.image.width}
                height={item.image.height}
                loading="eager"
                fetchPriority={slideIndex === 0 ? "high" : "auto"}
                decoding="async"
              />
            </div>
          );
        })}
      </div>
      <div className="hero-fade" aria-hidden="true" />

      {projectHref ? (
        <Link
          href={projectHref}
          className="hero__image-link"
          aria-label={imageLabel}
        />
      ) : null}

      <button
        type="button"
        className="hero-circle hero__nav-button hero__nav-button--prev"
        aria-label={copy.previousProject}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          goPrev();
        }}
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

      <button
        type="button"
        className="hero-circle hero__nav-button hero__nav-button--next"
        aria-label={copy.nextProject}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          goNext();
        }}
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

      <div className="hero__content measure">
        <div
          key={slide.id}
          className={`hero__copy hero__copy--${direction > 0 ? "next" : "prev"}`}
        >
          <p className="hero__eyebrow">{slide.eyebrow}</p>
          {isIntro ? (
            <h1 className="hero__display">{slide.display}</h1>
          ) : (
            <h2 className="hero__display">{slide.display}</h2>
          )}
          <p className="hero__summary">{slide.summary}</p>

          {isIntro ? (
            <div className="hero__controls">
              {controls.map((control) =>
                control.href ? (
                  <a
                    key={control.id}
                    className={`hero-circle hero-circle--${control.id}`}
                    href={control.href}
                    aria-label={control.label}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={control.icon.src} alt="" width={19} height={19} />
                  </a>
                ) : (
                  <span
                    key={control.id}
                    className={`hero-circle hero-circle--static hero-circle--${control.id}`}
                    aria-hidden="true"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={control.icon.src} alt="" width={19} height={19} />
                  </span>
                ),
              )}
            </div>
          ) : (
            <div className="hero__controls" aria-hidden="true" />
          )}
        </div>
      </div>

      <p className="visually-hidden" aria-live="polite">
        {slideStatus(locale, index + 1, heroSlides.length, slide.display)}
      </p>
    </section>
  );
}
