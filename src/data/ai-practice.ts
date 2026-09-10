import { visualDesignArtworks, type Artwork } from "@/data/artworks";
import {
  getVibeCodingProjects,
  type Project,
  type ProjectListingGroup,
} from "@/data/projects";

export type AiPracticeTabId = "vibe-coding" | "visual-design";

export type AiPracticeTab = {
  id: AiPracticeTabId;
  label: string;
};

export const aiPracticeTabs: AiPracticeTab[] = [
  { id: "vibe-coding", label: "Vibe Coding" },
  { id: "visual-design", label: "Visual Design" },
];

export const aiPracticePageCopy = {
  title: "AI Practice",
  intro:
    "Experiments with AI tools, vibe coding, and campaign visual systems that keep authorship and judgment with the designer.",
  back: "< Back to Home",
  moreInProgress: "More In Progress...",
  tabs: aiPracticeTabs,
} as const;

export function isAiPracticeTab(value: string | undefined): value is AiPracticeTabId {
  return value === "vibe-coding" || value === "visual-design";
}

export function getAiPracticeProjects(): Project[] {
  return getVibeCodingProjects();
}

export function getAiPracticeVisualDesign(): Artwork[] {
  return visualDesignArtworks;
}

export function isVibeCodingProject(slug: string) {
  return getVibeCodingProjects().some((project) => project.slug === slug);
}

/** Experience listing only uses Projects / Practice. */
export type ExperienceListingGroup = Extract<
  ProjectListingGroup,
  "projects" | "practice"
>;
