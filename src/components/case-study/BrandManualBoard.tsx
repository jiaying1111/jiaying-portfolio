"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { brandFontVariables } from "@/components/case-study/brand-fonts";
import type {
  BrandGallery,
  BrandSpec,
  CaseStudyMedia,
  CaseStudyModule,
  CaseStudyModuleLayout,
} from "@/data/case-studies/types";
import { useLocale } from "@/i18n/LocaleProvider";
import { t } from "@/i18n/localize";
import { joinClassNames } from "@/lib/utils";

const BRAND_LAYOUTS = new Set<CaseStudyModuleLayout>([
  "brand-logo",
  "brand-type",
  "brand-color",
  "brand-imagery",
  "brand-grid",
  "brand-apps",
]);

export function isBrandLayout(layout?: CaseStudyModuleLayout) {
  return Boolean(layout && BRAND_LAYOUTS.has(layout));
}

const GALLERY_SIZES: Record<BrandGallery["columns"], string> = {
  1: "(max-width: 899px) 100vw, 1200px",
  2: "(max-width: 899px) 100vw, 600px",
  3: "(max-width: 899px) 50vw, 400px",
  4: "(max-width: 899px) 50vw, 300px",
};

function Still({
  media,
  sizes,
  priority = false,
}: {
  media: CaseStudyMedia;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <figure className="brand-still">
      <Image
        src={media.src}
        alt={media.alt}
        width={media.width}
        height={media.height}
        sizes={sizes}
        quality={85}
        priority={priority}
        className="brand-still__image"
      />
      {media.caption ? (
        <figcaption className="brand-still__caption">{media.caption}</figcaption>
      ) : null}
    </figure>
  );
}

function Galleries({
  galleries,
  priority,
}: {
  galleries: BrandGallery[];
  priority: boolean;
}) {
  return (
    <>
      {galleries.map((gallery, galleryIndex) => (
        <section key={gallery.title} className="brand-gallery" aria-label={gallery.title}>
          {galleries.length > 1 || gallery.copy ? (
            <header className="brand-gallery__head">
              <h4 className="brand-label">{gallery.title}</h4>
              {gallery.copy ? <p className="brand-gallery__copy">{gallery.copy}</p> : null}
            </header>
          ) : null}
          <div className={`brand-gallery__grid brand-gallery__grid--${gallery.columns}`}>
            {gallery.items.map((item, index) => (
              <Still
                key={item.src}
                media={item}
                sizes={GALLERY_SIZES[gallery.columns]}
                priority={priority && galleryIndex === 0 && index === 0}
              />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

function Rules({ rules }: { rules: NonNullable<BrandSpec["rules"]> }) {
  const { locale } = useLocale();
  return (
    <div className="brand-rules">
      <div className="brand-rules__col brand-rules__col--do">
        <h4 className="brand-label">{t("Do", locale)}</h4>
        <ul>
          {rules.do.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </div>
      <div className="brand-rules__col brand-rules__col--avoid">
        <h4 className="brand-label">{t("Avoid", locale)}</h4>
        <ul>
          {rules.avoid.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function LogoBoard({ module, priority }: { module: CaseStudyModule; priority: boolean }) {
  const { locale } = useLocale();
  const [skyline, ...partners] = module.media ?? [];
  return (
    <>
      <div className="brand-logo">
        {skyline ? (
          <figure className="brand-logo__cell brand-logo__cell--hero">
            <Image
              src={skyline.src}
              alt={skyline.alt}
              width={skyline.width}
              height={skyline.height}
              sizes="(max-width: 899px) 80vw, 420px"
              priority={priority}
              className="brand-logo__skyline"
            />
            {skyline.caption ? (
              <figcaption className="brand-still__caption">{skyline.caption}</figcaption>
            ) : null}
          </figure>
        ) : null}
        <div className="brand-logo__cell">
          <p className="brand-lockup">
            <span className="brand-lockup__mark">
              Future
              <br />
              Reality
            </span>{" "}
            <span className="brand-lockup__line">AI Film Festival</span>
          </p>
          <p className="brand-still__caption">{t("Compact lockup · white", locale)}</p>
        </div>
        {partners.length ? (
          <div className="brand-logo__cell brand-logo__cell--partners">
            <div className="brand-logo__partners">
              {partners.map((logo) => (
                <Image
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  sizes="140px"
                  className="brand-logo__partner"
                />
              ))}
            </div>
            <p className="brand-still__caption">{t("Presenting partners", locale)}</p>
          </div>
        ) : null}
      </div>
      {module.brand?.rules ? <Rules rules={module.brand.rules} /> : null}
    </>
  );
}

function TypeBoard({ brand }: { brand: BrandSpec }) {
  const { locale } = useLocale();
  return (
    <>
      {brand.typefaces ? (
        <div className="brand-type">
          {brand.typefaces.map((face) => (
            <article key={face.family} className="brand-type__card">
              <header className="brand-type__head">
                <h4 className="brand-type__family">{face.family}</h4>
                <p className="brand-type__role">{face.role}</p>
              </header>
              <p
                className={joinClassNames(
                  "brand-type__sample",
                  `brand-face--${face.face}`,
                  face.uppercase && "brand-type__sample--upper",
                )}
              >
                {face.sample}
              </p>
              <p className={joinClassNames("brand-type__glyphs", `brand-face--${face.face}`)} aria-hidden="true">
                Aa Bb Cc 0123456789
              </p>
              <p className="brand-type__weights">{face.weights}</p>
            </article>
          ))}
        </div>
      ) : null}
      {brand.typeScale ? (
        <div className="brand-scale-wrap">
          <table className="brand-scale">
            <caption className="visually-hidden">{t("Type scale", locale)}</caption>
            <thead>
              <tr>
                <th scope="col">{t("Sample", locale)}</th>
                <th scope="col">{t("Font family", locale)}</th>
                <th scope="col">{t("Size", locale)}</th>
                <th scope="col">{t("Use", locale)}</th>
                <th scope="col">{t("Hex", locale)}</th>
              </tr>
            </thead>
            <tbody>
              {brand.typeScale.map((row) => (
                <tr key={`${row.role}-${row.size}`}>
                  <td>
                    <span
                      className={joinClassNames(
                        "brand-scale__sample",
                        `brand-face--${row.face}`,
                        row.uppercase && "brand-type__sample--upper",
                      )}
                      style={
                        {
                          color: row.hex,
                          fontSize: `clamp(14px, ${row.size / 6}px, 48px)`,
                          fontWeight: /bold/i.test(row.family)
                            ? 700
                            : /medium/i.test(row.family)
                              ? 500
                              : 400,
                        } as CSSProperties
                      }
                    >
                      {row.role}
                    </span>
                  </td>
                  <td>{row.family}</td>
                  <td>{row.size}px</td>
                  <td>{row.detail}</td>
                  <td>
                    <span className="brand-scale__hex">
                      <span
                        className="brand-scale__dot"
                        style={{ backgroundColor: row.hex }}
                        aria-hidden="true"
                      />
                      {row.hex}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </>
  );
}

function luminance(hex: string) {
  const value = Number.parseInt(hex.slice(1), 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}

function ColorBoard({ brand }: { brand: BrandSpec }) {
  return (
    <div className="brand-colors">
      {brand.swatchGroups?.map((group) => (
        <section key={group.title} className="brand-colors__group" aria-label={group.title}>
          <header className="brand-gallery__head">
            <h4 className="brand-label">{group.title}</h4>
            {group.note ? <p className="brand-gallery__copy">{group.note}</p> : null}
          </header>
          <ul
            className={joinClassNames(
              "brand-colors__list",
              group.swatches.length > 5 && "brand-colors__list--dense",
            )}
          >
            {group.swatches.map((swatch) => (
              <li key={swatch.hex} className="brand-swatch">
                <span
                  className={joinClassNames(
                    "brand-swatch__chip",
                    luminance(swatch.hex) > 0.6 && "brand-swatch__chip--light",
                    luminance(swatch.hex) < 0.05 && "brand-swatch__chip--dark",
                  )}
                  style={{ backgroundColor: swatch.hex }}
                  aria-hidden="true"
                />
                <span className="brand-swatch__name">{swatch.name}</span>
                <span className="brand-swatch__hex">{swatch.hex}</span>
                <span className="brand-swatch__usage">{swatch.usage}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function GridBoard({ brand, priority }: { brand: BrandSpec; priority: boolean }) {
  const { locale } = useLocale();
  const [showGrid, setShowGrid] = useState(true);
  const grid = brand.grid;
  if (!grid) {
    return null;
  }
  const { width, height } = grid.artboard;
  const pct = (value: number, total: number) => `${(value / total) * 100}%`;

  return (
    <div className="brand-grid">
      <div className="brand-grid__stage">
        <div className="brand-grid__poster" style={{ aspectRatio: `${width} / ${height}` }}>
          <Image
            src={grid.media.src}
            alt={grid.media.alt}
            fill
            sizes="(max-width: 899px) 100vw, 520px"
            quality={85}
            priority={priority}
            className="brand-grid__image"
          />
          <div
            className={joinClassNames("brand-grid__overlay", showGrid && "brand-grid__overlay--on")}
            aria-hidden="true"
          >
            <span
              className="brand-grid__margin"
              style={{
                left: pct(49, width),
                right: pct(46, width),
                top: pct(45, height),
                bottom: pct(39, height),
              }}
            />
            {grid.zones.map((zone, index) => (
              <span
                key={zone.label}
                className={joinClassNames("brand-grid__zone", zone.round && "brand-grid__zone--round")}
                style={{
                  left: pct(zone.x, width),
                  top: pct(zone.y, height),
                  width: pct(zone.w, width),
                  height: pct(zone.h, height),
                }}
              >
                <span className="brand-grid__tag">{index + 1}</span>
              </span>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="brand-grid__toggle"
          aria-pressed={showGrid}
          onClick={() => setShowGrid((value) => !value)}
        >
          {showGrid ? t("Hide grid", locale) : t("Show grid", locale)}
        </button>
      </div>
      <ol className="brand-grid__legend">
        {grid.zones.map((zone, index) => (
          <li key={zone.label}>
            <span className="brand-grid__tag brand-grid__tag--static" aria-hidden="true">
              {index + 1}
            </span>
            <span className="brand-grid__legend-label">{zone.label}</span>
            <span className="brand-grid__legend-spec">
              {zone.spec} · x {zone.x}, y {zone.y}
            </span>
          </li>
        ))}
        <li className="brand-grid__legend-note">
          {t("Artboard", locale)} {width} × {height} · {t("margin", locale)} 49px
        </li>
      </ol>
    </div>
  );
}

export function BrandManualBoard({
  module,
  priority = false,
}: {
  module: CaseStudyModule;
  priority?: boolean;
}) {
  const brand = module.brand ?? {};

  return (
    <div className={joinClassNames("brand-board", `brand-board--${module.layout}`, brandFontVariables)}>
      {module.layout === "brand-logo" ? <LogoBoard module={module} priority={priority} /> : null}
      {module.layout === "brand-type" ? <TypeBoard brand={brand} /> : null}
      {module.layout === "brand-color" ? <ColorBoard brand={brand} /> : null}
      {module.layout === "brand-grid" ? <GridBoard brand={brand} priority={priority} /> : null}
      {module.layout === "brand-imagery" || module.layout === "brand-apps" ? (
        <>
          {brand.galleries ? <Galleries galleries={brand.galleries} priority={priority} /> : null}
          {brand.rules ? <Rules rules={brand.rules} /> : null}
        </>
      ) : null}
    </div>
  );
}
