"use client";

import { useState, type CSSProperties } from "react";
import { MediaBlock } from "@/components/case-study/MediaBlock";
import type { CaseStudyMedia } from "@/data/case-studies/types";
import { useLocale } from "@/i18n/LocaleProvider";
import { t } from "@/i18n/localize";
import { joinClassNames } from "@/lib/utils";

type TypeRow = {
  role: string;
  family: string;
  size: string;
  hex: string;
};

type Swatch = {
  hex: string;
  label: string;
  name?: string;
  usage?: string;
};

export function CaseVisualSystem({
  typeScale,
  swatches,
  figure,
}: {
  typeScale?: TypeRow[];
  swatches?: Swatch[];
  figure?: CaseStudyMedia;
}) {
  const { locale } = useLocale();
  const [selected, setSelected] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const active = swatches?.[hover ?? selected];

  return (
    <div className="case-visual">
      {typeScale && typeScale.length > 0 ? (
        <section className="case-visual__section" aria-labelledby="visual-font-title">
          <h4 className="case-visual__heading" id="visual-font-title">
            {t("Font", locale)}
          </h4>
          <div className="case-visual__type-wrap">
          <table className="case-visual__type">
            <caption className="visually-hidden">{t("Type scale", locale)}</caption>
            <thead>
              <tr>
                <th>{t("Type", locale)}</th>
                <th>{t("Font family", locale)}</th>
                <th>{t("Size", locale)}</th>
                <th>{t("Hex", locale)}</th>
              </tr>
            </thead>
            <tbody>
              {typeScale.map((row) => (
                <tr key={row.role}>
                  <td>
                    <span
                      className="case-visual__sample"
                      style={
                        {
                          color: row.hex,
                          fontSize: `${row.size}px`,
                          fontWeight: /bold/i.test(row.family) ? 700 : 400,
                        } as CSSProperties
                      }
                    >
                      {row.role}
                    </span>
                  </td>
                  <td>{row.family}</td>
                  <td>{row.size}pt</td>
                  <td>{row.hex}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </section>
      ) : null}

      {swatches && swatches.length > 0 ? (
        <section className="case-visual__section" aria-labelledby="visual-color-title">
          <h4 className="case-visual__heading" id="visual-color-title">
            {t("Color", locale)}
          </h4>
          <div
            className="case-visual__swatches"
            role="radiogroup"
            aria-label={t("Colour system", locale)}
          >
            {swatches.map((swatch, index) => {
              const light = swatch.hex.toLowerCase() === "#ffffff";
              const checked = index === selected;
              const preview = index === (hover ?? selected);

              return (
                <button
                  key={swatch.hex}
                  type="button"
                  role="radio"
                  aria-checked={checked}
                  aria-label={swatch.name ? `${swatch.name} ${swatch.label}` : swatch.label}
                  className={joinClassNames(
                    "case-visual__swatch",
                    light && "case-visual__swatch--light",
                    preview && "case-visual__swatch--active",
                  )}
                  onClick={() => setSelected(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(index)}
                  onBlur={() => setHover(null)}
                >
                  <span
                    className="case-visual__chip"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <span className="case-visual__hex">{swatch.label}</span>
                </button>
              );
            })}
          </div>
          {active?.usage ? (
            <p className="case-visual__swatch-detail" aria-live="polite">
              <strong>{active.name ?? active.label}</strong>
              <span>{active.usage}</span>
            </p>
          ) : null}
        </section>
      ) : null}

      {figure ? (
        <section className="case-visual__section" aria-labelledby="visual-icon-title">
          <h4 className="case-visual__heading" id="visual-icon-title">
            {t("Icon", locale)}
          </h4>
          <div className="case-visual__icons">
            <MediaBlock media={{ ...figure, caption: undefined }} fullWidth />
          </div>
        </section>
      ) : null}
    </div>
  );
}
