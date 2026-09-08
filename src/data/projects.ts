import {
  experienceListingMedia,
  homepageCardAssets,
  type HomepageCardAssets,
  type HoverLoopSet,
} from "@/data/assets";

export type ProjectListingGroup = "projects" | "practice";

export type Project = {
  slug: string;
  /** Public title exactly as written in docs/content.md. */
  title: string;
  category: string;
  year: string;
  summary: string;
  type: string;
  tools: string;
  listingGroup: ProjectListingGroup;
  listingMedia: HoverLoopSet;
  card: HomepageCardAssets;
};

export const projects: Project[] = [
  {
    slug: "digital-nomad",
    title: "Digital No More Mad",
    category: "UIUX",
    year: "2025",
    summary:
      "This project focuses on digital nomadism, building a platform that helps digital nomads expand cooperation channels, grow sustainably, and work and live efficiently.",
    type: "Independent Project",
    tools: "Figma",
    listingGroup: "projects",
    listingMedia: experienceListingMedia["digital-nomad"],
    card: homepageCardAssets["digital-nomad"],
  },
  {
    slug: "dreamwhorl",
    title: "DreamWhorl",
    category: "Product Design",
    year: "2026",
    summary:
      "DreamWhorl lets children speak their dreams into a magical shell. Each dream becomes an ever-changing world to explore, reshape, and keep.",
    type: "Collaboration Project",
    tools: "Figma, Vibe Coding, Rhino, 3D Printing, Arduino",
    listingGroup: "projects",
    listingMedia: experienceListingMedia.dreamwhorl,
    card: homepageCardAssets.dreamwhorl,
  },
  {
    slug: "hxr-digital-map",
    title: "HXR Digital Map",
    category: "Product Management · UX",
    year: "2026",
    summary:
      "The official digital companion for HarvardXR Conference 2026: audience and guest login, an interactive Gund Hall map, digital passport stamps, and one-vote showcase voting. Product Manager & UX Designer with Chloe Ni (UI Design) and Wenxin Li (Backend).",
    type: "Live event product",
    tools: "Next.js, Vercel, Notion, Figma",
    listingGroup: "projects",
    listingMedia: experienceListingMedia["hxr-digital-map"],
    card: homepageCardAssets["hxr-digital-map"],
  },
  {
    slug: "character-studio",
    title: "Character Studio",
    category: "AI Tool · Interaction Design",
    year: "2026",
    summary:
      "An AI-assisted tool for illustrators and world-builders that supports character development through dialogue, note-taking, sketching, and visual organization—without replacing authorship or drawing.",
    type: "Collaboration Project",
    tools: "HTML, CSS, JavaScript, Anthropic API",
    listingGroup: "practice",
    listingMedia: experienceListingMedia["character-studio"],
    card: homepageCardAssets["character-studio"],
  },
  {
    slug: "little-red-riding-hood",
    title: "Little Red Riding Hood",
    category: "Interactive Installation",
    year: "2025",
    summary:
      "This project reimagines Little Red Riding Hood as an open, non-linear story that challenges inherited ideas of morality, gender, and control over nature through a generative website and physical interactive installation.",
    type: "Independent Project",
    tools: "Vibe Coding, 3D Printing, Laser Cut",
    listingGroup: "practice",
    listingMedia: experienceListingMedia["little-red-riding-hood"],
    card: homepageCardAssets["little-red-riding-hood"],
  },
  {
    slug: "nushu",
    title: "Nushu",
    category: "VR Experience",
    year: "2024",
    summary:
      "Inspired by Nushu—the world’s only known script created and used exclusively by women—this VR experience builds an immersive, ink-wash world where “women’s language” is reimagined as fluid and generative.",
    type: "Independent Project",
    tools: "Unreal Engine, Blender",
    listingGroup: "practice",
    listingMedia: experienceListingMedia.nushu,
    card: homepageCardAssets.nushu,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByGroup(group: ProjectListingGroup) {
  return projects.filter((project) => project.listingGroup === group);
}
