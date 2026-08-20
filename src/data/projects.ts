import {
  experienceCardSequenceAssets,
  experiencePracticeDetailAssets,
  experienceProjectDetailAssets,
  projectCardAssets,
  type MediaAsset,
  type ProjectCardAssets,
} from "@/data/assets";
import type { CopyStatus } from "@/data/site";

export type ProjectListingGroup = "projects" | "practice";

export type Project = {
  slug: string;
  title: string;
  listingTitle: string;
  category: string;
  year: string;
  summary: string;
  summaryStatus: CopyStatus;
  type: string;
  tools: string;
  listingGroup: ProjectListingGroup;
  listingMedia: MediaAsset;
  role: string | null;
  duration: string | null;
  collaborators: string | null;
  context: string | null;
  research: string | null;
  process: string | null;
  outcome: string | null;
  credits: string | null;
  externalLinks: string | null;
  card: ProjectCardAssets;
  detailMedia: MediaAsset[];
};

const LISTING_SUMMARY =
  "This project etc is a uiux design. This project etc is a uiux. This project etc is a uiux design. This project etc is a uiux design. This project etc is a uiux. This project etc is a uiux design";

const [digitalNomadListingMedia] = experienceCardSequenceAssets;
const [dreamWhorlListingMedia] = experienceProjectDetailAssets;
const [littleRedListingMedia, nushuListingMedia] =
  experiencePracticeDetailAssets;

export const projects: Project[] = [
  {
    slug: "digital-nomad",
    title: "Digital Nomad",
    listingTitle: "Digital No More Mad",
    category: "UIUX",
    year: "2025",
    summary: LISTING_SUMMARY,
    summaryStatus: "placeholder",
    type: "Independent Project",
    tools: "Figma",
    listingGroup: "projects",
    listingMedia: digitalNomadListingMedia,
    role: null,
    duration: null,
    collaborators: null,
    context: null,
    research: null,
    process: null,
    outcome: null,
    credits: null,
    externalLinks: null,
    card: projectCardAssets.digitalNomad,
    detailMedia: experienceCardSequenceAssets,
  },
  {
    slug: "dreamwhorl",
    title: "DreamWhorl",
    listingTitle: "DreamScope",
    category: "UIUX",
    year: "2025",
    summary: LISTING_SUMMARY,
    summaryStatus: "placeholder",
    type: "Collaboration Project",
    tools: "Figma, Vibe Coding, Arduino, ESP-32",
    listingGroup: "projects",
    listingMedia: dreamWhorlListingMedia,
    role: null,
    duration: null,
    collaborators: null,
    context: null,
    research: null,
    process: null,
    outcome: null,
    credits: null,
    externalLinks: null,
    card: projectCardAssets.dreamWhorl,
    detailMedia: experienceProjectDetailAssets,
  },
  {
    slug: "little-red-riding-hood",
    title: "Little Red Riding Hood",
    listingTitle: "Little Red Riding Hood",
    category: "UIUX",
    year: "2025",
    summary: LISTING_SUMMARY,
    summaryStatus: "placeholder",
    type: "Independent Project",
    tools: "Figma",
    listingGroup: "practice",
    listingMedia: littleRedListingMedia,
    role: null,
    duration: null,
    collaborators: null,
    context: null,
    research: null,
    process: null,
    outcome: null,
    credits: null,
    externalLinks: null,
    card: projectCardAssets.littleRedRidingHood,
    detailMedia: experiencePracticeDetailAssets,
  },
  {
    slug: "nushu",
    title: "Nushu",
    listingTitle: "Nushu",
    category: "UIUX",
    year: "2025",
    summary: LISTING_SUMMARY,
    summaryStatus: "placeholder",
    type: "Independent Project",
    tools: "Figma",
    listingGroup: "practice",
    listingMedia: nushuListingMedia,
    role: null,
    duration: null,
    collaborators: null,
    context: null,
    research: null,
    process: null,
    outcome: null,
    credits: null,
    externalLinks: null,
    card: projectCardAssets.nushu,
    detailMedia: [],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByGroup(group: ProjectListingGroup) {
  return projects.filter((project) => project.listingGroup === group);
}
