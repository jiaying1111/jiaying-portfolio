import { MediaBlock } from "@/components/case-study/MediaBlock";
import type {
  CaseStudyChapter,
  CaseStudyMedia,
  CaseStudyModule,
} from "@/data/case-studies/types";

function MediaList({
  items,
  pair = false,
  priority = false,
}: {
  items: CaseStudyMedia[];
  pair?: boolean;
  priority?: boolean;
}) {
  if (items.length === 0) {
    return null;
  }

  const blocks = items.map((item, index) => (
    <MediaBlock
      key={item.src}
      media={item}
      priority={priority && index === 0}
      inPair={pair}
    />
  ));

  if (pair && items.length === 2) {
    return <div className="case-media-pair">{blocks}</div>;
  }

  return blocks;
}

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

      {module.media ? (
        <MediaList
          items={module.media}
          pair={module.pair}
          priority={priorityMedia}
        />
      ) : null}

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
      <h2 className="case-chapter__eyebrow" id={`${chapter.id}-title`}>
        {chapter.number} / {chapter.label.toUpperCase()}
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
