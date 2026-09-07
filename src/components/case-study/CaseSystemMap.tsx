"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import type { CaseStudyEntry, CaseStudyMedia } from "@/data/case-studies/types";
import { joinClassNames } from "@/lib/utils";

const HOTSPOTS: Record<string, CSSProperties> = {
  client: { left: "48.5%", top: "2.3%", width: "17.8%" },
  nomad: { left: "16.3%", top: "48.1%", width: "17.8%" },
  platform: { left: "47.6%", top: "49.8%", width: "17.8%" },
  bank: { left: "80.5%", top: "50.2%", width: "17.8%" },
};

export function CaseSystemMap({
  items,
  figure,
  label,
}: {
  items: CaseStudyEntry[];
  figure?: CaseStudyMedia;
  label: string;
}) {
  const [selectedId, setSelectedId] = useState("platform");
  const [hoverId, setHoverId] = useState<string | null>(null);
  const activeId = hoverId ?? selectedId;
  const active = items.find((item) => item.id === activeId) ?? items[0];

  return (
    <div className="case-sysmap">
      {figure ? (
        <figure className="case-sysmap__figure">
          <Image
            src={figure.src}
            alt={figure.alt}
            width={figure.width}
            height={figure.height}
            quality={90}
            sizes="(max-width: 899px) 100vw, (max-width: 1439px) 62vw, 895px"
            className="case-sysmap__image"
          />
          <div className="case-sysmap__nodes" role="radiogroup" aria-label={label}>
            {items.map((item) => {
              const checked = item.id === selectedId;
              const preview = item.id === activeId;

              return (
                <button
                  key={item.id}
                  type="button"
                  role="radio"
                  aria-checked={checked}
                  aria-label={item.title}
                  className={joinClassNames(
                    "case-sysmap__hotspot",
                    preview && "case-sysmap__hotspot--active",
                  )}
                  style={HOTSPOTS[item.id]}
                  onClick={() => setSelectedId(item.id)}
                  onMouseEnter={() => setHoverId(item.id)}
                  onMouseLeave={() => setHoverId(null)}
                  onFocus={() => setHoverId(item.id)}
                  onBlur={() => setHoverId(null)}
                >
                  <span className="visually-hidden">{item.title}</span>
                </button>
              );
            })}
          </div>
        </figure>
      ) : null}

      {active?.copy ? (
        <div className="case-sysmap__detail" aria-live="polite">
          {active.role ? <p className="case-sysmap__detail-kicker">{active.role}</p> : null}
          <p className="case-sysmap__detail-title">{active.title}</p>
          <p className="case-sysmap__detail-copy">{active.copy}</p>
        </div>
      ) : null}
    </div>
  );
}
