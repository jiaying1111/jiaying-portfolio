"use client";

import type { ReactNode } from "react";
import { CaseArchitectureDiagram } from "@/components/case-study/CaseArchitectureDiagram";
import { CaseStudyCarousel } from "@/components/case-study/CaseStudyCarousel";
import { CaseExplainBoard, CaseSwatchBoard } from "@/components/case-study/CaseExplainBoard";
import { CaseSystemMap } from "@/components/case-study/CaseSystemMap";
import { CaseVisualSystem } from "@/components/case-study/CaseVisualSystem";
import { MediaBlock } from "@/components/case-study/MediaBlock";
import type {
  CaseStudyChapter,
  CaseStudyMedia,
  CaseStudyModule,
} from "@/data/case-studies/types";
import { useLocale } from "@/i18n/LocaleProvider";
import { ui } from "@/i18n/ui";
import { joinClassNames } from "@/lib/utils";

function chunkPairs(items: CaseStudyMedia[]) {
  const pairs: CaseStudyMedia[][] = [];
  for (let index = 0; index < items.length; index += 2) {
    pairs.push(items.slice(index, index + 2));
  }
  return pairs;
}

function MediaList({
  items,
  pair = false,
  pairs = false,
  priority = false,
  inPair = false,
  fullWidth = false,
  compact = false,
}: {
  items: CaseStudyMedia[];
  pair?: boolean;
  pairs?: boolean;
  priority?: boolean;
  inPair?: boolean;
  fullWidth?: boolean;
  compact?: boolean;
}) {
  if (items.length === 0) {
    return null;
  }

  if (pairs) {
    return (
      <div className="case-media-pairs">
        {chunkPairs(items).map((group) => (
          <div key={group.map((item) => item.src).join("-")} className="case-media-pair">
            {group.map((item, index) => (
              <MediaBlock
                key={item.src}
                media={item}
                priority={priority && index === 0}
                inPair
              />
            ))}
          </div>
        ))}
      </div>
    );
  }

  const fill = inPair || pair;
  const blocks = items.map((item, index) => (
    <MediaBlock
      key={item.src}
      media={item}
      priority={priority && index === 0}
      inPair={fill}
      fullWidth={fullWidth}
      compact={compact}
    />
  ));

  if (pair && items.length === 2) {
    return <div className="case-media-pair">{blocks}</div>;
  }

  return blocks;
}

function InstallationPart({
  id,
  title,
  copy,
  className,
  children,
}: {
  id: string;
  title: string;
  copy?: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <section className={className} aria-labelledby={id}>
      <div className={`${className}__head`}>
        <h4 className={`${className}__title`} id={id}>
          {title}
        </h4>
      </div>
      {copy ? <p className={`${className}__copy`}>{copy}</p> : null}
      {children}
    </section>
  );
}

function MechanismBody({
  module,
  priorityMedia,
}: {
  module: CaseStudyModule;
  priorityMedia: boolean;
}) {
  if (!module.mechanism) {
    return null;
  }

  return (
    <>
      <div
        className={joinClassNames(
          "case-installation-mechanism__media",
          module.mechanism.items.length === 2 &&
            "case-installation-mechanism__media--pair",
          module.mechanism.items.length >= 3 &&
            "case-installation-mechanism__media--trio",
        )}
      >
        <MediaList items={module.mechanism.items} inPair priority={priorityMedia} />
      </div>
      {module.steps ? (
        <ol className="case-steps">
          {module.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      ) : null}
    </>
  );
}

function Module({
  module,
  priorityMedia,
  plain = false,
}: {
  module: CaseStudyModule;
  priorityMedia: boolean;
  plain?: boolean;
}) {
  const { locale } = useLocale();
  const copy = ui(locale);
  const pointsClassName = joinClassNames(
    "case-points",
    module.layout === "cards" && "case-points--cards",
    module.layout === "compare" && "case-points--compare",
  );
  const entriesClassName = joinClassNames(
    "case-entries",
    module.layout === "gallery" && "case-entries--gallery",
    module.layout === "credits" && "case-entries--credits",
  );

  const hideHeading = plain && module.id === "stills";

  return (
    <section
      className={`case-module case-module--${module.id}`}
      aria-labelledby={hideHeading ? undefined : `${module.id}-title`}
      aria-label={hideHeading ? module.title : undefined}
    >
      {hideHeading ? null : (
        <h3 className="case-module__title" id={`${module.id}-title`}>
          {module.title}
        </h3>
      )}

      {module.copy ? <p className="case-module__copy">{module.copy}</p> : null}

      {module.layout === "architecture" && module.architecture ? (
        <CaseArchitectureDiagram layers={module.architecture} />
      ) : module.layout === "visual" ? (
        <CaseVisualSystem
          typeScale={module.typeSpec?.scale}
          swatches={module.swatches}
          figure={module.media?.[0]}
        />
      ) : module.swatches ? (
        <CaseSwatchBoard swatches={module.swatches} />
      ) : null}

      {module.layout === "architecture" || module.layout === "visual" ? null : module.typeSpec ? (
        <p className="case-type-spec">
          <strong>{module.typeSpec.family}</strong>
          <span>{module.typeSpec.usage}</span>
        </p>
      ) : null}

      {module.metrics ? (
        <dl className="case-metrics">
          {module.metrics.map((metric) => (
            <div key={metric.label} className="case-metrics__item">
              <dt>{metric.value}</dt>
              <dd>{metric.label}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      {module.statement ? (
        <p className="case-module__statement">{module.statement}</p>
      ) : null}

      {module.layout === "compare" && module.media?.[0] && module.points ? (
        <div className="case-compare">
          <MediaBlock media={module.media[0]} priority={priorityMedia} inPair />
          <dl className={pointsClassName}>
            {module.compareLabels ? (
              <div className="case-points__header">
                <dt>{module.compareLabels.left}</dt>
                <dd>{module.compareLabels.right}</dd>
              </div>
            ) : null}
            {module.points.map((point) => (
              <div key={point.term} className="case-points__row">
                <dt>{point.term}</dt>
                <dd>{point.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      ) : module.points ? (
        <dl className={pointsClassName}>
          {module.compareLabels ? (
            <div className="case-points__header">
              <dt>{module.compareLabels.left}</dt>
              <dd>{module.compareLabels.right}</dd>
            </div>
          ) : null}
          {module.points.map((point) => (
            <div key={point.term} className="case-points__row">
              <dt>{point.term}</dt>
              <dd>{point.detail}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      {module.layout === "architecture" ? null : module.layout === "map" && module.entries ? (
        <CaseSystemMap
          items={module.entries}
          figure={module.media?.[0]}
          label={module.title}
        />
      ) : module.layout === "explain" && module.entries ? (
        <CaseExplainBoard
          items={module.entries}
          figure={module.media}
          pair={module.pair}
          priority={priorityMedia}
          label={module.title}
        />
      ) : module.supportingCarousel || module.mechanism || module.studio ? (
        <>
          {module.media ? (
            <InstallationPart
              id={`${module.id}-wireframe-title`}
              title={copy.wireframe}
              className="case-installation-wireframe"
            >
              <MediaList items={module.media} fullWidth priority={priorityMedia} />
            </InstallationPart>
          ) : null}

          {module.supportingCarousel ? (
            <InstallationPart
              id={`${module.id}-carousel-title`}
              title={module.supportingCarousel.title}
              className="case-installation-carousel"
            >
              <CaseStudyCarousel
                items={module.supportingCarousel.items}
                label={`${module.title}: ${module.supportingCarousel.title}`}
              />
            </InstallationPart>
          ) : null}

          {module.mechanism ? (
            <InstallationPart
              id={`${module.id}-mechanism-title`}
              title={module.mechanism.title ?? copy.mechanism}
              copy={module.mechanism.copy}
              className="case-installation-mechanism"
            >
              <MechanismBody module={module} priorityMedia={priorityMedia} />
            </InstallationPart>
          ) : null}

          {module.studio ? (
            <InstallationPart
              id={`${module.id}-studio-title`}
              title={module.studio.title}
              className="case-installation-studio"
            >
              {(module.studio.items ?? (module.studio.media ? [module.studio.media] : []))
                .length > 1 ? (
                <CaseStudyCarousel
                  items={module.studio.items ?? []}
                  label={`${module.title}: ${module.studio.title}`}
                />
              ) : module.studio.media ? (
                <MediaBlock media={module.studio.media} inPair />
              ) : module.studio.items?.[0] ? (
                <MediaBlock media={module.studio.items[0]} inPair />
              ) : null}
            </InstallationPart>
          ) : null}
        </>
      ) : module.layout === "compare" ? null : module.layout === "carousel" && module.media ? (
        <CaseStudyCarousel
          items={module.media}
          label={module.title}
        />
      ) : module.layout === "analogy" && module.media?.[0] && module.aside ? (
        <div className="case-analogy">
          <MediaBlock media={module.media[0]} priority={priorityMedia} inPair />
          <aside className="case-analogy__copy">
            <p className="case-analogy__label">{module.aside.label}</p>
            <h4 className="case-analogy__title">{module.aside.title}</h4>
            <p className="case-analogy__body">{module.aside.copy}</p>
          </aside>
        </div>
      ) : module.layout === "explain" || module.layout === "map" || module.layout === "visual" ? null : module.media ? (
        <MediaList
          items={module.media}
          pair={module.pair}
          pairs={module.layout === "pairs"}
          priority={priorityMedia}
          fullWidth={
            module.id === "final-video" ||
            module.id === "stills" ||
            Boolean(module.media.some((item) => item.width >= 1600))
          }
        />
      ) : null}

      {module.layout === "architecture" || module.layout === "explain" || module.layout === "map" || module.layout === "visual" ? null : module.layout === "flow" && module.entries ? (
        <div className="case-flow">
          {module.entries.map((entry) => (
            <article
              key={entry.id}
              className={`case-flow__card case-flow__card--${entry.id}`}
            >
              <h4 className="case-flow__header">{entry.title}</h4>
              <div className="case-flow__body">
                {entry.copy ? <p className="case-flow__copy">{entry.copy}</p> : null}
                {entry.href ? (
                  <a
                    href={entry.href}
                    className="case-flow__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {entry.linkLabel ?? entry.href}
                  </a>
                ) : null}
                {entry.gallery?.length || entry.media ? (
                  <div className="case-flow__media">
                    {entry.gallery?.map((item) => (
                        <MediaBlock key={item.src} media={item} inPair />
                      ))}
                    {!entry.gallery && entry.media ? (
                      <MediaBlock media={entry.media} inPair />
                    ) : null}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      ) : module.entries ? (
        <div className={entriesClassName}>
          {module.entries.map((entry) => (
            <div key={entry.id} className="case-entry">
              {module.layout === "gallery" && entry.media ? (
                <MediaBlock media={entry.media} inPair />
              ) : null}
              {module.layout === "gallery" && entry.copy ? (
                <p className="case-entry__kicker">{entry.copy}</p>
              ) : null}
              <h4 className="case-entry__title">{entry.title}</h4>
              {entry.role ? (
                <p className="case-entry__role">{entry.role}</p>
              ) : null}
              {module.layout !== "gallery" && entry.copy ? (
                <p className="case-entry__copy">{entry.copy}</p>
              ) : null}
              {module.layout !== "gallery" && entry.media ? (
                <MediaBlock media={entry.media} />
              ) : null}
            </div>
          ))}
        </div>
      ) : null}

      {module.steps && !module.supportingCarousel && !module.mechanism ? (
        <ol className="case-steps">
          {module.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      ) : null}
    </section>
  );
}

export function CaseStudySection({
  chapter,
  priorityMedia = false,
  plain = false,
}: {
  chapter: CaseStudyChapter;
  priorityMedia?: boolean;
  plain?: boolean;
}) {
  const { locale } = useLocale();
  return (
    <section
      id={chapter.id}
      className="case-chapter"
      aria-labelledby={plain ? undefined : `${chapter.id}-title`}
      aria-label={plain ? chapter.title : undefined}
    >
      {plain ? null : (
        <>
          <h2 className="case-chapter__eyebrow" id={`${chapter.id}-title`}>
            {chapter.number} / {locale === "zh" ? chapter.label : chapter.label.toUpperCase()}
          </h2>
          {chapter.headline ? (
            <p className="case-chapter__headline">{chapter.headline}</p>
          ) : null}
          <p className="case-chapter__lead">{chapter.lead}</p>
        </>
      )}

      {chapter.modules.map((module, index) => (
        <Module
          key={module.id}
          module={module}
          priorityMedia={priorityMedia && index === 0}
          plain={plain}
        />
      ))}
    </section>
  );
}
