import { getArtworkById } from "@/data/artworks";
import type { CaseStudy, CaseStudyMedia } from "@/data/case-studies/types";
import {
  visualDesignStudies,
  type VisualDesignStill,
  type VisualDesignStudy,
} from "@/data/visual-design-studies";

function stillToMedia(still: VisualDesignStill, title: string, index: number): CaseStudyMedia {
  return {
    src: still.src,
    alt: still.alt || `${title}, image ${index + 1}`,
    width: still.width,
    height: still.height,
  };
}

function toCaseStudy(study: VisualDesignStudy): CaseStudy {
  const artwork = getArtworkById(study.slug);
  if (!artwork) {
    throw new Error(`Missing artwork listing for visual design slug "${study.slug}"`);
  }

  const heroStill = study.sections[0]?.gallery[0];
  if (!heroStill) {
    throw new Error(`Missing gallery for visual design slug "${study.slug}"`);
  }

  const summaryParts = study.summary;
  const summary = summaryParts.join(" ");

  return {
    slug: study.slug,
    title: study.title,
    category: artwork.category,
    year: study.year,
    kicker: `${artwork.category} · ${study.year}`,
    summary,
    summaryParts,
    hero: stillToMedia(heroStill, study.title, 0),
    metadata: [
      { label: "Role", value: study.role },
      { label: "Organization", value: study.company },
      { label: "Tools", value: artwork.tools },
      { label: "Media", value: study.medium },
      { label: "Year", value: study.year },
    ],
    chapters: [
      {
        id: "work",
        number: "01",
        label: "Work",
        title: study.title,
        lead: summary,
        modules: study.sections.map((section) => ({
          id: section.id,
          eyebrow: section.eyebrow,
          title: section.title,
          copy: section.copy,
          layout: section.layout,
          tags: section.features,
          media: section.gallery.map((still, mediaIndex) =>
            stillToMedia(still, `${study.title} — ${section.title}`, mediaIndex),
          ),
        })),
      },
    ],
  };
}

export const visualDesignCaseStudies = visualDesignStudies.map(toCaseStudy);

export const visualDesignCaseStudiesBySlug: Record<string, CaseStudy> = Object.fromEntries(
  visualDesignCaseStudies.map((study) => [study.slug, study]),
);
