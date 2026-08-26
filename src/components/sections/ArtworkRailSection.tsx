"use client";

import Link from "next/link";
import { useState } from "react";
import { homepageArtworkRailItems } from "@/data/assets";
import { homepageCopy } from "@/data/site";
import { ARTWORK_RAIL_DURATION_MS } from "@/lib/motion";

/**
 * One eight-item track, duplicated once in the DOM so the translation can loop
 * seamlessly. The initial offset reproduces the 1440px crop in home-intro.png.
 */
export function ArtworkRailSection() {
  const [paused, setPaused] = useState(false);
  const track = [...homepageArtworkRailItems, ...homepageArtworkRailItems];

  return (
    <section className="home-artwork" aria-labelledby="home-artwork-title">
      <div className="home-section__head measure">
        <h2 className="home-section__title" id="home-artwork-title">
          {homepageCopy.artworkLabel}
        </h2>
        <Link
          href="/artwork"
          className="home-section__more home-section__more--quiet"
        >
          {homepageCopy.moreLabel}
          <span className="visually-hidden"> Artwork</span>
        </Link>
      </div>
      <div
        className="artwork-rail"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <ul
          className="artwork-rail__track"
          style={{
            animationPlayState: paused ? "paused" : "running",
            ["--rail-duration" as string]: `${ARTWORK_RAIL_DURATION_MS}ms`,
          }}
        >
          {track.map((item, index) => (
            <li key={`${item.id}-${index}`} aria-hidden={index >= 8}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="artwork-rail__tile"
                src={item.src}
                alt=""
                width={item.width}
                height={item.height}
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
