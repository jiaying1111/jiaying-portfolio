"use client";

import Image from "next/image";
import type { CaseStudyMedia, CaseStudyModuleLayout } from "@/data/case-studies/types";
import { joinClassNames } from "@/lib/utils";

const VD_LAYOUTS = new Set<CaseStudyModuleLayout>([
  "vd-kv",
  "vd-assets",
  "vd-online",
  "vd-print",
  "vd-photos",
  "vd-stamps",
  "vd-passport",
  "vd-extensions",
  "vd-gift-ext",
]);

export function isVisualDesignLayout(
  layout?: CaseStudyModuleLayout,
): layout is CaseStudyModuleLayout {
  return Boolean(layout && VD_LAYOUTS.has(layout));
}

function Figure({
  media,
  className,
  priority = false,
  sizes = "(max-width: 900px) 100vw, 70vw",
  fit = "contain",
  fill = false,
  quality = 80,
}: {
  media: CaseStudyMedia;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fit?: "contain" | "cover";
  fill?: boolean;
  quality?: number;
}) {
  return (
    <figure
      className={joinClassNames(
        "vd-fig",
        fill && "vd-fig--fill",
        fit === "cover" && "vd-fig--cover",
        className,
      )}
    >
      {fill ? (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes={sizes}
          quality={quality}
          priority={priority}
          className={joinClassNames("vd-fig__image", `vd-fig__image--${fit}`)}
        />
      ) : (
        <Image
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          sizes={sizes}
          quality={quality}
          priority={priority}
          className={joinClassNames("vd-fig__image", `vd-fig__image--${fit}`)}
        />
      )}
    </figure>
  );
}

export function VisualDesignBoard({
  layout,
  media,
  priority = false,
}: {
  layout: CaseStudyModuleLayout;
  media: CaseStudyMedia[];
  points?: { term: string; detail: string }[];
  priority?: boolean;
}) {
  if (!media.length) {
    return null;
  }

  if (layout === "vd-kv") {
    if (media.length === 1) {
      return (
        <div className="vd-board vd-board--kv">
          <Figure
            media={media[0]}
            className="vd-board__hero"
            priority={priority}
            sizes="100vw"
            quality={92}
          />
        </div>
      );
    }

    return (
      <div className="vd-board vd-board--kv vd-board--kv-pair">
        {media.slice(0, 2).map((item, index) => (
          <Figure
            key={item.src}
            media={item}
            className="vd-board__hero"
            priority={priority && index === 0}
            sizes="(max-width: 900px) 100vw, 50vw"
            quality={92}
          />
        ))}
      </div>
    );
  }

  if (layout === "vd-assets") {
    return (
      <div className="vd-board vd-board--assets">
        {media.map((item, index) => (
          <Figure
            key={item.src}
            media={item}
            priority={priority && index === 0}
            sizes="(max-width: 900px) 30vw, 16vw"
          />
        ))}
      </div>
    );
  }

  if (layout === "vd-online") {
    const [tallA, tallB, wide, ...bottom] = media;
    return (
      <div className="vd-board vd-board--online">
        <div className="vd-board__talls">
          {tallA ? (
            <Figure media={tallA} className="vd-board__tall" priority={priority} sizes="10vw" />
          ) : null}
          {tallB ? <Figure media={tallB} className="vd-board__tall" sizes="10vw" /> : null}
        </div>
        <div className="vd-board__online-main">
          {wide ? (
            <Figure
              media={wide}
              className="vd-board__wide"
              sizes="(max-width: 900px) 100vw, 55vw"
            />
          ) : null}
          <div className="vd-board__bottom">
            {bottom.map((item) => (
              <Figure key={item.src} media={item} sizes="(max-width: 900px) 45vw, 14vw" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (layout === "vd-print") {
    const [banner, rollup, arm, ticket1, ticket2, frame] = media;
    return (
      <div className="vd-board vd-board--print">
        <div className="vd-board__print-main">
          {banner ? (
            <Figure
              media={banner}
              className="vd-board__banner"
              priority={priority}
              sizes="(max-width: 900px) 100vw, 60vw"
            />
          ) : null}
          <div className="vd-board__print-row">
            <div className="vd-board__tickets">
              {ticket1 ? (
                <Figure
                  media={ticket1}
                  className="vd-board__ticket"
                  sizes="(max-width: 900px) 100vw, 32vw"
                />
              ) : null}
              {ticket2 ? (
                <Figure
                  media={ticket2}
                  className="vd-board__ticket"
                  sizes="(max-width: 900px) 100vw, 32vw"
                />
              ) : null}
            </div>
            {arm ? (
              <Figure
                media={arm}
                className="vd-board__arm"
                sizes="(max-width: 900px) 40vw, 22vw"
              />
            ) : null}
            {frame ? (
              <Figure
                media={frame}
                className="vd-board__frame"
                sizes="(max-width: 900px) 40vw, 18vw"
              />
            ) : null}
          </div>
        </div>
        {rollup ? (
          <Figure
            media={rollup}
            className="vd-board__rollup"
            sizes="(max-width: 900px) 40vw, 16vw"
          />
        ) : null}
      </div>
    );
  }

  if (layout === "vd-photos") {
    if (media.length === 2) {
      return (
        <div className="vd-board vd-board--photos vd-board--photos-pair">
          {media.map((item, index) => (
            <Figure
              key={item.src}
              media={item}
              className="vd-board__photo"
              priority={priority && index === 0}
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          ))}
        </div>
      );
    }

    const [main, top, bottom] = media;
    return (
      <div className="vd-board vd-board--photos">
        {main ? (
          <Figure
            media={main}
            className="vd-board__photo-main"
            priority={priority}
            sizes="(max-width: 900px) 100vw, 55vw"
          />
        ) : null}
        <div className="vd-board__photo-side">
          {top ? (
            <Figure
              media={top}
              className="vd-board__photo-top"
              sizes="(max-width: 900px) 100vw, 28vw"
            />
          ) : null}
          {bottom ? (
            <Figure
              media={bottom}
              className="vd-board__photo-bottom"
              sizes="(max-width: 900px) 100vw, 28vw"
            />
          ) : null}
        </div>
      </div>
    );
  }

  if (layout === "vd-stamps") {
    const cities = media.filter((item) => item.src.includes("city-"));
    const badges = media.filter((item) => !item.src.includes("city-"));
    return (
      <div className="vd-board vd-board--stamps">
        <div className="vd-board__badge-grid">
          {badges.map((item, index) => (
            <Figure
              key={item.src}
              media={item}
              priority={priority && index === 0}
              sizes="(max-width: 900px) 22vw, 12vw"
            />
          ))}
        </div>
        {cities.length ? (
          <div className="vd-board__city-col">
            {cities.map((item) => (
              <Figure key={item.src} media={item} sizes="140px" />
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  if (layout === "vd-passport") {
    const cover = media.find((item) => item.src.includes("/01.jpg")) ?? media[0];
    const pages = media.filter((item) => item !== cover);
    return (
      <div className="vd-board vd-board--passport">
        <div className="vd-board__passport-pages">
          {pages.map((item) => (
            <Figure key={item.src} media={item} sizes="(max-width: 900px) 18vw, 7vw" />
          ))}
        </div>
        {cover ? (
          <Figure
            media={cover}
            className="vd-board__passport-cover"
            priority={priority}
            sizes="(max-width: 900px) 42vw, 22vw"
          />
        ) : null}
      </div>
    );
  }

  if (layout === "vd-extensions") {
    return (
      <div className="vd-board vd-board--extensions">
        {media.map((item, index) => (
          <Figure
            key={item.src}
            media={item}
            priority={priority && index === 0}
            sizes="(max-width: 900px) 32vw, 14vw"
          />
        ))}
      </div>
    );
  }

  if (layout === "vd-gift-ext") {
    const [detail, arrow, rollup, box, ticket, ticketBack] = media;
    return (
      <div className="vd-board vd-board--gift-ext">
        {detail ? (
          <Figure media={detail} className="vd-board__gift-detail" priority={priority} sizes="12vw" />
        ) : null}
        {arrow ? <Figure media={arrow} className="vd-board__gift-arrow" sizes="24vw" /> : null}
        {rollup ? <Figure media={rollup} className="vd-board__gift-rollup" sizes="16vw" /> : null}
        <div className="vd-board__gift-right">
          {box ? <Figure media={box} className="vd-board__gift-box" sizes="32vw" /> : null}
          <div className="vd-board__gift-tickets">
            {ticket ? <Figure media={ticket} sizes="16vw" /> : null}
            {ticketBack ? <Figure media={ticketBack} sizes="16vw" /> : null}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="vd-board vd-board--stack">
      {media.map((item, index) => (
        <Figure key={item.src} media={item} priority={priority && index === 0} />
      ))}
    </div>
  );
}
