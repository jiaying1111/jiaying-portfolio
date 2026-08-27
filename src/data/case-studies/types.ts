export type CaseStudyMedia = {
  src: string;
  alt: string;
  caption?: string;
  /** Intrinsic pixel size of the export; also caps the rendered width. */
  width: number;
  height: number;
  /** Rendered width when Frame 13-2 places the image below its intrinsic size. */
  displayWidth?: number;
};

/** A titled text + image pair inside a module, e.g. one research finding. */
export type CaseStudyEntry = {
  id: string;
  title: string;
  copy: string;
  media?: CaseStudyMedia;
};

export type CaseStudyModule = {
  id: string;
  title: string;
  copy?: string;
  /** Set apart from `copy` at display size — the HTML "how might we" question. */
  statement?: string;
  points?: { term: string; detail: string }[];
  steps?: string[];
  entries?: CaseStudyEntry[];
  media?: CaseStudyMedia[];
  /** Two related images share a row on desktop; they stack below 900px. */
  pair?: boolean;
};

export type CaseStudyChapter = {
  id: string;
  number: string;
  label: string;
  title: string;
  lead: string;
  modules: CaseStudyModule[];
};

export type CaseStudy = {
  slug: string;
  category: string;
  year: string;
  summary: string;
  hero: CaseStudyMedia;
  metadata: { label: string; value: string }[];
  chapters: CaseStudyChapter[];
};
