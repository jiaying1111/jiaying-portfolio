import { ArtworkGallery } from "@/components/ui/ArtworkGallery";
import { PageSection } from "@/components/sections/PageSection";
import { artworkSections } from "@/data/artworks";

export function ArtworkPageSections() {
  return (
    <>
      {artworkSections.map((section) => (
        <PageSection
          key={section.id}
          id={section.id}
          title={section.title}
          frameId={section.frameId}
        >
          <ArtworkGallery
            items={section.items.map((item) => item.media)}
            label={`${section.title} artwork`}
          />
        </PageSection>
      ))}
    </>
  );
}
