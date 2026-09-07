"use client";

import { useState, type CSSProperties } from "react";
import { MediaBlock } from "@/components/case-study/MediaBlock";
import type { CaseStudyEntry, CaseStudyMedia } from "@/data/case-studies/types";
import { useLocale } from "@/i18n/LocaleProvider";
import { t } from "@/i18n/localize";
import { joinClassNames } from "@/lib/utils";

type CaseExplainBoardProps = {
  items: CaseStudyEntry[];
  figure?: CaseStudyMedia[];
  pair?: boolean;
  priority?: boolean;
  label: string;
};

function ExplainDetail({ item }: { item: CaseStudyEntry }) {
  if (!item.copy) {
    return null;
  }

  return (
    <div className="case-explain__detail" aria-live="polite">
      {item.role ? <p className="case-explain__detail-kicker">{item.role}</p> : null}
      <p className="case-explain__detail-title">{item.title}</p>
      <p className="case-explain__detail-copy">{item.copy}</p>
    </div>
  );
}

export function CaseExplainBoard({
  items,
  figure,
  pair = false,
  priority = false,
  label,
}: CaseExplainBoardProps) {
  const [selectedId, setSelectedId] = useState(items[0]?.id ?? "");
  const [hoverId, setHoverId] = useState<string | null>(null);
  const activeId = hoverId ?? selectedId;
  const active = items.find((item) => item.id === activeId) ?? items[0];
  const sharedFigure = Boolean(figure && figure.length > 0);
  const gallery = !sharedFigure && items.some((item) => item.media);

  return (
    <div
      className={joinClassNames(
        "case-explain",
        gallery && "case-explain--gallery",
        sharedFigure && "case-explain--figure",
      )}
    >
      {sharedFigure && figure ? (
        <div
          className={joinClassNames(
            "case-explain__figure",
            pair && figure.length === 2 && "case-explain__figure--pair",
            !pair && figure.length > 1 && "case-explain__figure--stack",
          )}
        >
          {figure.map((item, index) => (
            <MediaBlock
              key={item.src}
              media={item}
              priority={priority && index === 0}
              inPair={pair && figure.length === 2}
              fullWidth={!pair || figure.length !== 2}
            />
          ))}
        </div>
      ) : null}

      {sharedFigure && active ? <ExplainDetail item={active} /> : null}

      <div
        className="case-explain__cards"
        role="radiogroup"
        aria-label={label}
        style={{ "--explain-cols": String(Math.min(items.length, 4)) } as CSSProperties}
      >
        {items.map((item, index) => {
          const checked = item.id === selectedId;
          const preview = item.id === activeId;

          return (
            <button
              key={item.id}
              type="button"
              role="radio"
              aria-checked={checked}
              className={joinClassNames(
                "case-explain__card",
                preview && "case-explain__card--active",
                gallery && index === 0 && "case-explain__card--lead",
              )}
              onClick={() => setSelectedId(item.id)}
              onMouseEnter={() => setHoverId(item.id)}
              onMouseLeave={() => setHoverId(null)}
              onFocus={() => setHoverId(item.id)}
              onBlur={() => setHoverId(null)}
            >
              {gallery && item.media ? (
                <MediaBlock
                  media={item.media}
                  priority={priority && index === 0}
                  inPair
                  fullWidth={index === 0}
                />
              ) : null}
              {item.role ? <p className="case-explain__kicker">{item.role}</p> : null}
              <h4 className="case-explain__title">{item.title}</h4>
            </button>
          );
        })}
      </div>

      {gallery && active ? <ExplainDetail item={active} /> : null}
    </div>
  );
}

type Swatch = {
  hex: string;
  label: string;
  name?: string;
  usage?: string;
};

export function CaseSwatchBoard({ swatches }: { swatches: Swatch[] }) {
  const { locale } = useLocale();
  const [selected, setSelected] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const active = swatches[hover ?? selected] ?? swatches[0];
  const interactive = swatches.some((swatch) => swatch.name || swatch.usage);

  if (!interactive) {
    return (
      <div className="case-swatches" role="list">
        {swatches.map((swatch) => (
          <div
            key={swatch.hex}
            className={joinClassNames(
              "case-swatch",
              swatch.hex.toLowerCase() === "#ffffff" && "case-swatch--light",
            )}
            role="listitem"
            style={{ backgroundColor: swatch.hex }}
          >
            <span>{swatch.label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="case-swatch-board">
      <div className="case-swatches" role="radiogroup" aria-label={active?.name ?? t("Colour system", locale)}>
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
              className={joinClassNames(
                "case-swatch",
                light && "case-swatch--light",
                preview && "case-swatch--active",
              )}
              style={{ backgroundColor: swatch.hex }}
              onClick={() => setSelected(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(index)}
              onBlur={() => setHover(null)}
            >
              {swatch.name ? <strong>{swatch.name}</strong> : null}
              <span>{swatch.label}</span>
            </button>
          );
        })}
      </div>
      {active?.usage ? (
        <p className="case-swatch-board__detail" aria-live="polite">
          <strong>{active.name ?? active.label}</strong>
          <span>{active.usage}</span>
        </p>
      ) : null}
    </div>
  );
}
