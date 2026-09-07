"use client";

import { useId, useState } from "react";
import type { AboutRoleEntry } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";

function RoleAccordionItem({
  entry,
  sectionId,
  open,
  onOpen,
  onToggle,
}: {
  entry: AboutRoleEntry;
  sectionId: string;
  open: boolean;
  onOpen: () => void;
  onToggle: () => void;
}) {
  const { locale } = useLocale();
  const reactId = useId();
  const panelId = `${sectionId}-panel-${entry.index}-${reactId}`;

  return (
    <li>
      <div
        className={open ? "about-accordion is-open" : "about-accordion"}
        onMouseEnter={onOpen}
        onFocus={onOpen}
      >
        <div className="about-accordion__trigger">
          <button
            type="button"
            className="about-accordion__toggle"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={`${open ? (locale === "zh" ? "收起" : "Collapse") : locale === "zh" ? "展开" : "Expand"} ${entry.organization} details`}
            onClick={() => {
              if (window.matchMedia("(hover: hover)").matches) {
                onOpen();
              } else {
                onToggle();
              }
            }}
          />
          <span className="about-entry__index-wrap">
            <span className="about-entry__index">{entry.index}</span>
            <span className="about-entry__date">{entry.date}</span>
          </span>
          <span className="about-accordion__heading">
            {entry.href ? (
              <a
                className="about-entry__organization about-entry__organization-link"
                href={entry.href}
                target="_blank"
                rel="noreferrer"
              >
                {entry.organization} ↗
              </a>
            ) : (
              <span className="about-entry__organization">
                {entry.organization}
              </span>
            )}
            <span className="about-entry__role">{entry.role}</span>
          </span>
          <span className="about-accordion__icon" aria-hidden="true" />
        </div>
        <div
          id={panelId}
          className="about-accordion__panel"
          role="region"
          aria-hidden={!open}
          inert={!open}
        >
          <div className="about-accordion__panel-inner">
            <div className="about-accordion__details">
              <ul className="about-entry__bullets">
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export function AboutRoleAccordion({
  entries,
  sectionId,
}: {
  entries: readonly AboutRoleEntry[];
  sectionId: string;
}) {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <ol className="about-entries about-entries--accordion">
      {entries.map((entry) => (
        <RoleAccordionItem
          key={`${entry.index}-${entry.organization}`}
          entry={entry}
          sectionId={sectionId}
          open={openIndex === entry.index}
          onOpen={() => setOpenIndex(entry.index)}
          onToggle={() =>
            setOpenIndex((current) =>
              current === entry.index ? null : entry.index,
            )
          }
        />
      ))}
    </ol>
  );
}
