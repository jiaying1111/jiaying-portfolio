"use client";

import Link from "next/link";
import { useState } from "react";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { homepageHeroAsset, homepageSocialIconAssets } from "@/data/assets";
import { homepageCopy } from "@/data/site";

type HeroSlide = "intro" | "featured";

function CircleArrow() {
  return (
    <svg width="18" height="10" viewBox="0 0 18 10" aria-hidden="true">
      <path
        d="M0 5h16.5M13 1.2 17.3 5 13 8.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function HeroSection() {
  const [slide, setSlide] = useState<HeroSlide>("intro");
  const featured = slide === "featured";

  return (
    <section
      className={featured ? "hero hero--featured" : "hero"}
      aria-label="Introduction"
    >
      <div className="hero__copy">
        {featured ? (
          <>
            <p
              className="hero__category"
              data-copy-status={homepageCopy.featuredCategory.status}
            >
              {homepageCopy.featuredCategory.text}
            </p>
            <h1
              className="hero__title"
              data-copy-status={homepageCopy.featuredTitle.status}
            >
              {homepageCopy.featuredTitle.text}
            </h1>
            <p
              className="hero__summary"
              data-copy-status={homepageCopy.featuredSummary.status}
            >
              {homepageCopy.featuredSummary.text}
            </p>
            <div className="hero__actions">
              <Link
                href="/projects/digital-nomad"
                className="hero-circle"
                aria-label="View Digital No More Mad"
              >
                <CircleArrow />
              </Link>
            </div>
          </>
        ) : (
          <>
            <p
              className="hero__eyebrow"
              data-copy-status={homepageCopy.introEyebrow.status}
            >
              {homepageCopy.introEyebrow.text}
            </p>
            <h1
              className="hero__name"
              data-copy-status={homepageCopy.introName.status}
            >
              {homepageCopy.introName.text}
            </h1>
            <p
              className="hero__tagline"
              data-copy-status={homepageCopy.introTagline.status}
            >
              {homepageCopy.introTagline.text}
            </p>
            <div className="hero__actions">
              {homepageSocialIconAssets.map((icon) => (
                <span
                  key={icon.id}
                  className="hero-circle"
                  data-figma-node={icon.nodeId}
                  aria-hidden="true"
                />
              ))}
              <button
                type="button"
                className="hero-circle"
                aria-label="Show featured project"
                onClick={() => setSlide("featured")}
              >
                <CircleArrow />
              </button>
            </div>
          </>
        )}
      </div>
      <div className="hero__media">
        <MediaPlaceholder
          nodeId={homepageHeroAsset.nodeId}
          width={homepageHeroAsset.width}
          height={homepageHeroAsset.height}
          alt="Homepage hero image not yet provided"
          decorative
        />
      </div>
      <div className="hero-dots" role="tablist" aria-label="Hero slides">
        <button
          type="button"
          role="tab"
          aria-selected={!featured}
          aria-label="Introduction"
          onClick={() => setSlide("intro")}
        />
        <button
          type="button"
          role="tab"
          aria-selected={featured}
          aria-label="Featured project"
          onClick={() => setSlide("featured")}
        />
      </div>
    </section>
  );
}
