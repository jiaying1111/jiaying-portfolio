"use client";

import { Fragment, useSyncExternalStore, type ReactNode } from "react";
import { useFormaReadingStep } from "./useFormaReadingStep";

const desktopQuery = "(min-width: 901px) and (min-height: 600px)";
function subscribeLayout(notify: () => void) {
  const layout = window.matchMedia(desktopQuery);
  layout.addEventListener("change", notify);
  return () => layout.removeEventListener("change", notify);
}

export type FeatureStep = {
  key: string;
  title: string;
  copy: ReactNode;
  media: ReactNode;
  anchor?: string;
};

export function FormaFeatureReader({ steps, heading: Heading = "h5" }: {
  steps: FeatureStep[];
  heading?: "h3" | "h5" | "h6";
}) {
  const desktop = useSyncExternalStore(subscribeLayout, () => window.matchMedia(desktopQuery).matches, () => false);
  const { list, active } = useFormaReadingStep(desktop);
  const current = steps[active];

  function read(index: number) {
    const row = list.current?.children[index];
    if (row) window.scrollBy({ top: row.getBoundingClientRect().top - Math.min(window.innerHeight * .42, 390) + 2, behavior: "instant" });
  }

  return <div className="forma-feature-reader" data-layout={desktop ? "pinned" : "inline"}>
    <ol className="forma-feature-steps" ref={list} role="list">
      {steps.map((step, index) => <li key={step.key} id={step.anchor} data-step={step.key} data-current={desktop && active === index}>
        <div className="forma-feature-step-copy">
          <Heading>{desktop
            ? <button type="button" aria-pressed={active === index} onClick={() => read(index)}>{step.title}</button>
            : step.title}</Heading>
          <div className="forma-feature-step-note">{step.copy}</div>
        </div>
        {!desktop && <div className="forma-reader-media" data-screen={step.key}>{step.media}</div>}
      </li>)}
    </ol>
    {desktop && <div className="forma-feature-stage">
      <div className="forma-reader-media" data-screen={current.key}>
        <Fragment key={current.key}>{current.media}</Fragment>
      </div>
    </div>}
  </div>;
}
