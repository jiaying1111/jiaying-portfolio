"use client";

import { useRef } from "react";
import { joinClassNames } from "@/lib/utils";

export type PageTab<Id extends string> = {
  id: Id;
  label: string;
};

type PageTabsProps<Id extends string> = {
  tabs: PageTab<Id>[];
  activeId: Id;
  ariaLabel: string;
  onSelect: (id: Id) => void;
};

export function PageTabs<Id extends string>({
  tabs,
  activeId,
  ariaLabel,
  onSelect,
}: PageTabsProps<Id>) {
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const onKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (
      event.key !== "ArrowRight" &&
      event.key !== "ArrowLeft" &&
      event.key !== "Home" &&
      event.key !== "End"
    ) {
      return;
    }

    event.preventDefault();
    const last = tabs.length - 1;
    let next = index;
    if (event.key === "ArrowRight") next = index === last ? 0 : index + 1;
    if (event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;
    tabRefs.current[next]?.focus();
    onSelect(tabs[next].id);
  };

  return (
    <div className="page-tabs" role="tablist" aria-label={ariaLabel}>
      {tabs.map((tab, index) => {
        const selected = activeId === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={selected}
            aria-controls={`panel-${tab.id}`}
            tabIndex={selected ? 0 : -1}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            className={joinClassNames("page-tab", selected && "is-current")}
            onClick={() => onSelect(tab.id)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
