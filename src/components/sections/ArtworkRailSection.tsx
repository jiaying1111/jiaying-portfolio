"use client";

import Link from "next/link";
import { useState } from "react";
import { homepageArtworkRailItems } from "@/data/assets";
import { getArtworkById } from "@/data/artworks";
import { homepageCopy } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { localize, t } from "@/i18n/localize";
import { ARTWORK_RAIL_DURATION_MS } from "@/lib/motion";
import { ui } from "@/i18n/ui";

/**
 * One eight-item track, duplicated once in the DOM so the translation can loop
 * seamlessly. The initial offset reproduces the 1440px crop in home-intro.png.
 */
export function ArtworkRailSection() {
  const [paused, setPaused] = useState(false);
  const { locale } = useLocale();
  const copy = localize(homepageCopy, locale);
  const moreCopy = ui(locale);
  const track = [...homepageArtworkRailItems, ...homepageArtworkRailItems];

  return (
    <section className="home-artwork" aria-labelledby="home-artwork-title">
      <div className="home-section__head measure">
        <h2 className="home-section__title" id="home-artwork-title">
          {copy.artworkLabel}
        </h2>
        <Link
          href="/artwork"
          className="home-section__more home-section__more--quiet"
        >
          {copy.moreLabel}
          <span className="visually-hidden">{moreCopy.moreArtwork}</span>
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
          {track.map((item, index) => {
            const artwork = getArtworkById(item.artworkId);
            const title = artwork ? t(artwork.title, locale) : item.artworkId;
            const duplicate = index >= homepageArtworkRailItems.length;

            return (
              <li key={`${item.id}-${index}`} aria-hidden={duplicate}>
                <Link
                  href={item.href}
                  className="artwork-rail__link"
                  aria-label={title}
                  tabIndex={duplicate ? -1 : undefined}
                  aria-hidden={duplicate || undefined}
                >
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
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
