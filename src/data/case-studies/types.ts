export type CaseStudyMedia = {
  src: string;
  alt: string;
  caption?: string;
  /** Intrinsic pixel size of the export; also caps the rendered width. */
  width: number;
  height: number;
  /** Rendered width when Frame 13-2 places the image below its intrinsic size. */
  displayWidth?: number;
  kind?: "image" | "video";
  poster?: string;
  /** Looping clips autoplay muted, like a compressed GIF. */
  loop?: boolean;
};

/** A titled text + image pair inside a module, e.g. one research finding. */
export type CaseStudyEntry = {
  id: string;
  title: string;
  role?: string;
  copy?: string;
  media?: CaseStudyMedia;
  /** Extra stills inside a flow or gallery card. */
  gallery?: CaseStudyMedia[];
  href?: string;
  linkLabel?: string;
};

export type CaseStudyModuleLayout =
  | "cards"
  | "gallery"
  | "credits"
  | "pairs"
  | "analogy"
  | "compare"
  | "carousel"
  | "flow"
  | "explain"
  | "map"
  | "visual";

export type CaseStudyFlow = {
  id: string;
  from: string;
  to: string;
  label: string;
  kind?: "primary" | "return" | "muted" | "dashed" | "loop";
};

export type CaseStudyModule = {
  id: string;
  title: string;
  copy?: string;
  /** Set apart from `copy` at display size — the HTML "how might we" question. */
  statement?: string;
  points?: { term: string; detail: string }[];
  /** Column titles for a Dreams / Kaleidoscope-style comparison. */
  compareLabels?: { left: string; right: string };
  steps?: string[];
  entries?: CaseStudyEntry[];
  media?: CaseStudyMedia[];
  /** Two related images share a row on desktop; they stack below 900px. */
  pair?: boolean;
  metrics?: { value: string; label: string }[];
  layout?: CaseStudyModuleLayout;
  /** Labeled connections for an interactive system map. */
  flows?: CaseStudyFlow[];
  /** A related image sequence kept inside the same content module. */
  supportingCarousel?: {
    title: string;
    copy?: string;
    items: CaseStudyMedia[];
  };
  /** Mechanism stills for an installation module, kept separate from the wireframe. */
  mechanism?: {
    title?: string;
    copy?: string;
    items: CaseStudyMedia[];
  };
  /** Final studio stills, as one image or a short sequence. */
  studio?: {
    title: string;
    copy?: string;
    media?: CaseStudyMedia;
    items?: CaseStudyMedia[];
  };
  aside?: { label: string; title: string; copy: string };
  /** Colour chips for a visual-system module. */
  swatches?: { hex: string; label: string; name?: string; usage?: string }[];
  /** Type family, and optional product type scale, for a visual-system module. */
  typeSpec?: {
    family: string;
    usage: string;
    scale?: { role: string; family: string; size: string; hex: string }[];
  };
};

export type CaseStudyChapter = {
  id: string;
  number: string;
  label: string;
  title: string;
  /** Optional HTML-style chapter heading under the eyebrow. */
  headline?: string;
  lead: string;
  modules: CaseStudyModule[];
};

export type CaseStudyLink = {
  label: string;
  href: string;
  download?: boolean;
};

export type CaseStudy = {
  slug: string;
  /** Optional editorial title used on the detail page when it differs from the listing title. */
  title?: string;
  /** Large overview heading under the hero, used when the hero already shows the project name. */
  editorialTitle?: string;
  /** Small uppercase line over the hero title. */
  kicker?: string;
  /** Short line sitting on the hero image. */
  heroIntro?: string;
  category: string;
  year: string;
  summary: string;
  hero: CaseStudyMedia;
  metadata: { label: string; value: string }[];
  links?: CaseStudyLink[];
  chapters: CaseStudyChapter[];
};
