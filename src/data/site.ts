import { homepageSocialIconAssets } from "@/data/assets";

export type CopyStatus = "source" | "placeholder";

export const siteIdentity = {
  displayName: "Jiaying Li",
  role: null,
  introduction: null,
  location: null,
  email: null,
  linkedIn: null,
  instagram: null,
  resume: null,
} as const;

export const navigation = [
  { href: "/experience-design", label: "Experience Design" },
  { href: "/artwork", label: "Artwork" },
  { href: "/about", label: "About" },
] as const;

export const socialIconAssets = homepageSocialIconAssets;

export const homepageCopy = {
  introEyebrow: { text: "Hi, this is", status: "source" as CopyStatus },
  introName: { text: "Jiaying Li", status: "source" as CopyStatus },
  introTagline: {
    text: "I believe every interaction tells a story.",
    status: "source" as CopyStatus,
  },
  featuredCategory: { text: "UIUX", status: "source" as CopyStatus },
  featuredTitle: { text: "Digital No More Mad", status: "source" as CopyStatus },
  featuredSummary: {
    text: "A platform that helps digital nomads expand cooperation and grow sustainably.",
    status: "source" as CopyStatus,
  },
  pageIntro: {
    text: "I design interactive experiences that connect people, space, and stories.",
    status: "source" as CopyStatus,
  },
  moreInProgress: "More In Progress...",
} as const;

export const aboutCopy = {
  biography: {
    text: "Jiaying Li is a designer working across interactive experience, space, and visual narrative. Full biography is not yet provided.",
    status: "placeholder" as CopyStatus,
  },
  education: {
    text: "Education details are not yet provided.",
    status: "placeholder" as CopyStatus,
  },
  experience: {
    text: "Selected experience is not yet provided.",
    status: "placeholder" as CopyStatus,
  },
  awards: {
    text: "Awards are not yet provided.",
    status: "placeholder" as CopyStatus,
  },
};

export const footerColumns = [
  {
    title: "Home",
    href: "/",
    links: [
      { href: "/experience-design", label: "Experience Design" },
      { href: "/artwork", label: "Artwork" },
      { href: "/about", label: "About" },
    ],
  },
  {
    title: "Experience Design",
    href: "/experience-design",
    links: [
      { href: "/experience-design", label: "Project" },
      { href: "/experience-design?tab=practice", label: "Practice" },
    ],
  },
  {
    title: "Artwork",
    href: "/artwork",
    links: [
      { href: "/artwork", label: "Installation" },
      { href: "/artwork?tab=illustration", label: "Illustration" },
    ],
  },
  {
    title: "About",
    href: "/about",
    links: [{ href: "/about", label: "CV" }],
  },
] as const;
