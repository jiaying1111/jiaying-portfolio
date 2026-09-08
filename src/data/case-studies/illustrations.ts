import { getArtworkById } from "@/data/artworks";
import type { CaseStudy, CaseStudyLink, CaseStudyMedia } from "@/data/case-studies/types";
import {
  illustrationStudies,
  type IllustrationStill,
  type IllustrationStudy,
} from "@/data/illustration-studies";

const clipRoot = "/images/artwork/imaginary-beings/detail/clips";

type IllustrationExtras = {
  film?: {
    src: string;
    width: number;
    height: number;
    youtube?: string;
  };
  clips?: CaseStudyMedia[];
};

const extrasBySlug: Record<string, IllustrationExtras> = {
  hypnagogia: {
    film: {
      src: "/videos/Other-Illustration.mp4",
      width: 1016,
      height: 720,
      youtube: "https://youtu.be/jkLcmsXiURE",
    },
  },
  "your-destination": {
    film: {
      src: "/videos/Other-Animation.mp4",
      width: 960,
      height: 720,
      youtube: "https://youtu.be/MBwVtRZANLI",
    },
  },
  "imaginary-beings": {
    clips: Array.from({ length: 6 }, (_, index) => {
      const n = String(index + 1).padStart(2, "0");
      return {
        src: `${clipRoot}/${n}.mp4`,
        poster: `${clipRoot}/${n}.jpg`,
        alt: `Imaginary being ${index + 1}, looping animation`,
        width: 1100,
        height: 1162,
        kind: "video" as const,
        loop: true,
      };
    }),
  },
};

function stillToMedia(still: IllustrationStill, title: string, index: number): CaseStudyMedia {
  return {
    src: still.src,
    alt: still.alt || `${title}, image ${index + 1}`,
    width: still.width,
    height: still.height,
  };
}

function toCaseStudy(study: IllustrationStudy): CaseStudy {
  const artwork = getArtworkById(study.slug);
  if (!artwork) {
    throw new Error(`Missing artwork listing for illustration slug "${study.slug}"`);
  }

  const extras = extrasBySlug[study.slug];
  const heroStill = study.gallery[0];
  const stills = study.gallery.map((still, index) => stillToMedia(still, study.title, index));
  const gallery = extras?.clips;
  const summaryParts = study.summary;
  const summary = summaryParts.join(" ");
  const links: CaseStudyLink[] | undefined = extras?.film?.youtube
    ? [{ label: "Video link", href: extras.film.youtube }]
    : undefined;

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
      { label: "Role", value: "Artist" },
      { label: "Tools", value: artwork.tools },
      ...(artwork.tools === study.medium
        ? []
        : [{ label: "Media", value: study.medium }]),
      { label: "Year", value: study.year },
    ],
    links,
    chapters: [
      {
        id: "work",
        number: "01",
        label: "Work",
        title: study.title,
        lead: summary,
        modules: [
          ...(stills.length
            ? [
                {
                  id: "stills",
                  title: "Selected work",
                  media: stills,
                },
              ]
            : []),
          ...(gallery?.length
            ? [
                {
                  id: "animations",
                  title: "Animations",
                  layout: "pairs" as const,
                  media: gallery,
                },
              ]
            : []),
          ...(extras?.film
            ? [
                {
                  id: "final-video",
                  title: "Final video",
                  copy: "A walkthrough of the finished work.",
                  media: [
                    {
                      src: extras.film.youtube ?? extras.film.src,
                      youtube: extras.film.youtube,
                      alt: `Film of ${study.title}`,
                      width: extras.film.width,
                      height: extras.film.height,
                      kind: "video" as const,
                      poster: heroStill.src,
                    },
                  ],
                },
              ]
            : []),
        ],
      },
    ],
  };
}

export const illustrationCaseStudies = illustrationStudies.map(toCaseStudy);

export const illustrationCaseStudiesBySlug: Record<string, CaseStudy> = Object.fromEntries(
  illustrationCaseStudies.map((study) => [study.slug, study]),
);
