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

  const heroStill = study.gallery[0];
  const stills = study.gallery.map((still, index) => stillToMedia(still, study.title, index));
  const summary = study.summary.join(" ");

  return {
    slug: study.slug,
    title: study.title,
    category: artwork.category,
    year: study.year,
    kicker: `${artwork.category} · ${study.year}`,
    summary,
    hero: stillToMedia(heroStill, study.title, 0),
    metadata: [
      { label: "Role", value: "Visual Design Intern" },
      { label: "Organization", value: "Lenovo (Beijing) Co., Ltd" },
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
        modules: [
          {
            id: "stills",
            title: "Selected work",
            media: stills,
          },
        ],
      },
    ],
  };
}

export const visualDesignCaseStudies = visualDesignStudies.map(toCaseStudy);

export const visualDesignCaseStudiesBySlug: Record<string, CaseStudy> = Object.fromEntries(
  visualDesignCaseStudies.map((study) => [study.slug, study]),
);
