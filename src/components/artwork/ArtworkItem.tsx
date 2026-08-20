import { PhotoPlaceholder } from "@/components/artwork/PhotoPlaceholder";
import type { Artwork } from "@/data/artworks";

type ArtworkItemProps = {
  item: Artwork;
};

function ViewProjectArrow() {
  return (
    <svg
      className="artwork-view__arrow"
      width="18"
      height="10"
      viewBox="0 0 18 10"
      aria-hidden="true"
    >
      <path
        d="M0 5h16.5M13 1.2 17.3 5 13 8.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function ArtworkItem({ item }: ArtworkItemProps) {
  const width = item.media.width ?? 623;
  const height = item.media.height ?? 420;

  return (
    <article className="artwork-item">
      <PhotoPlaceholder
        nodeId={item.media.nodeId}
        width={width}
        height={height}
        alt={item.alt}
        src={item.media.src}
      />
      <div className="artwork-item__info">
        <div className="artwork-item__copy">
          <h2 className="artwork-item__title">{item.title}</h2>
          <p className="artwork-item__meta">
            {item.category} {item.year}
          </p>
          <p
            className="artwork-item__summary"
            data-copy-status={item.summaryStatus}
          >
            {item.summary}
          </p>
          <div className="artwork-item__rule" />
          <dl className="artwork-item__specs">
            <div>
              <dt>Type</dt>
              <dd>{item.type}</dd>
            </div>
            <div>
              <dt>Tools</dt>
              <dd>{item.tools}</dd>
            </div>
          </dl>
        </div>
        <button type="button" className="artwork-view">
          <span>View Project</span>
          <ViewProjectArrow />
        </button>
      </div>
    </article>
  );
}
