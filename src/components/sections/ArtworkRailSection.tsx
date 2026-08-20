import Link from "next/link";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { homepageArtworkRailAssets } from "@/data/assets";

export function ArtworkRailSection() {
  return (
    <section className="home-section" aria-labelledby="artwork-heading">
      <div className="home-section__header">
        <h2 id="artwork-heading">Artwork</h2>
        <Link href="/artwork" className="home-section__more">
          More
        </Link>
      </div>
      <ul className="artwork-rail">
        {homepageArtworkRailAssets.map((asset) => (
          <li key={asset.id}>
            <MediaPlaceholder
              nodeId={asset.nodeId}
              width={asset.width}
              height={asset.height}
              alt="Artwork preview not yet provided"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
