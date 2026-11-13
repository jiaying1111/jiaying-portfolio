"use client";

import { useFormaReadingStep } from "./useFormaReadingStep";
import { readingTitles, workflowSteps } from "@/data/forma-source/reading";
import { useLocale } from "@/i18n/LocaleProvider";
import { FormaInterface } from "./FormaInterface";
import { useWords } from "./FormaSourceGraphic";

function WorkflowScreen({ index }: { index: number }) {
  const { locale } = useLocale();
  const t = useWords();
  const step = workflowSteps[index];
  const caption = t(...step.screen);

  return <figure className="forma-flow-screen">
    <FormaInterface src={`/images/projects/forma/${step.image(locale)}`} label={caption} />
    <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{caption}</figcaption>
  </figure>;
}

export function FormaWorkflow() {
  const t = useWords();
  const { list, active } = useFormaReadingStep();

  return <section id="forma-workflow" className="forma-timeline" aria-labelledby="forma-timeline-title">
    <header>
      <p className="forma-source-eyebrow">{t(...readingTitles.workflow)}</p>
      <h2 id="forma-timeline-title">{t("一张横版设计稿如何交付", "How a landscape design reaches approval")}</h2>
    </header>
    <div className="forma-flow-body">
      <ol ref={list} className="forma-flow-steps" role="list">
        {workflowSteps.map((step, index) => <li key={step.id} id={`forma-flow-${step.id}`} data-current={active === index}>
          <span className="forma-flow-node" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <div className="forma-flow-step">
            <p className="forma-flow-actor">{t(...step.actor)}</p>
            <h3>{t(...step.title)}</h3>
            <p className="forma-flow-action">{t(...step.action)}</p>
          </div>
          <div className="forma-flow-inline"><WorkflowScreen index={index} /></div>
        </li>)}
      </ol>
      <div className="forma-flow-sticky"><WorkflowScreen index={active} /></div>
    </div>
  </section>;
}
