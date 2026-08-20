import Link from "next/link";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import type { MediaAsset } from "@/data/assets";
import type { CopyStatus } from "@/data/site";

export type WorkListingItemData = {
  id: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  summaryStatus: CopyStatus;
  type: string;
  tools: string;
  media: MediaAsset;
  href?: string | null;
};

function ViewProjectArrow() {
  return (
    <svg
      className="view-project__arrow"
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

type WorkListingItemProps = {
  item: WorkListingItemData;
};

export function WorkListingItem({ item }: WorkListingItemProps) {
  const width = item.media.width ?? 623;
  const height = item.media.height ?? 420;
  const action = (
    <>
      <span>View Project</span>
      <ViewProjectArrow />
    </>
  );

  return (
    <article className="work-item">
      <MediaPlaceholder
        nodeId={item.media.nodeId}
        width={width}
        height={height}
        alt={`${item.title} image not yet provided`}
        assignmentStatus={item.media.assignmentStatus}
        className="work-item__photo"
      />
      <div className="work-item__info">
        <div className="work-item__copy">
          <h2 className="work-item__title">{item.title}</h2>
          <p className="work-item__meta">
            {item.category} {item.year}
          </p>
          <p
            className="work-item__summary"
            data-copy-status={item.summaryStatus}
          >
            {item.summary}
          </p>
          <div className="work-item__rule" />
          <dl className="work-item__specs">
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
        {item.href ? (
          <Link href={item.href} className="view-project">
            {action}
          </Link>
        ) : (
          <button type="button" className="view-project" aria-disabled="true">
            {action}
          </button>
        )}
      </div>
    </article>
  );
}
