import { MediaBlock } from "@/components/case-study/MediaBlock";
import type {
  CaseStudyChapter,
  CaseStudyModule,
} from "@/data/case-studies/digital-no-more-mad";

function Module({
  module,
  priorityMedia,
}: {
  module: CaseStudyModule;
  priorityMedia: boolean;
}) {
  return (
    <section className="case-module" aria-labelledby={`${module.id}-title`}>
      <h3 className="case-module__title" id={`${module.id}-title`}>
        {module.title}
      </h3>

      {module.copy ? <p className="case-module__copy">{module.copy}</p> : null}

      {module.statement ? (
        <p className="case-module__statement">{module.statement}</p>
      ) : null}

      {module.points ? (
        <dl className="case-points">
          {module.points.map((point) => (
            <div key={point.term} className="case-points__row">
              <dt>{point.term}</dt>
              <dd>{point.detail}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      {module.steps ? (
        <ol className="case-steps">
          {module.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      ) : null}

      {module.media?.map((item, index) => (
        <MediaBlock
          key={item.src}
          media={item}
          priority={priorityMedia && index === 0}
        />
      ))}

      {module.entries ? (
        <div className="case-entries">
          {module.entries.map((entry) => (
            <div key={entry.id} className="case-entry">
              <h4 className="case-entry__title">{entry.title}</h4>
              <p className="case-entry__copy">{entry.copy}</p>
              {entry.media ? <MediaBlock media={entry.media} /> : null}
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export function CaseStudySection({
  chapter,
  priorityMedia = false,
}: {
  chapter: CaseStudyChapter;
  priorityMedia?: boolean;
}) {
  return (
    <section
      id={chapter.id}
      className="case-chapter"
      aria-labelledby={`${chapter.id}-title`}
    >
      <p className="case-chapter__eyebrow">
        {chapter.number} / {chapter.label.toUpperCase()}
      </p>
      <h2 className="case-chapter__title" id={`${chapter.id}-title`}>
        {chapter.title}
      </h2>
      <p className="case-chapter__lead">{chapter.lead}</p>

      {chapter.modules.map((module, index) => (
        <Module
          key={module.id}
          module={module}
          priorityMedia={priorityMedia && index === 0}
        />
      ))}
    </section>
  );
}
