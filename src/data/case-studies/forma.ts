import { formaSourceChapters } from "@/data/forma-source/content";
import type { CaseStudy } from "@/data/case-studies/types";

export const formaCaseStudy = {
  "slug": "forma",
  "title": "Forma",
  "heroTone": "light",
  "category": "Product Design · AI Workflow",
  "year": "2026",
  "kicker": "Product Design · AI Workflow · 2026",
  "editorialTitle": "From inspiration to delivery",
  "summary": "Forma is an AI project workbench for professional graphic designers. The project investigates what happens after an initial image exists: how to refine a detail, compare alternatives, extend a visual across sizes, and bring client feedback back to the right version.",
  "hero": {
    "src": "/images/projects/forma/story/hero-monitor.png",
    "width": 1536,
    "height": 1024,
    "alt": "Forma original monitor mockup"
  },
  "metadata": [
    {
      "label": "Focus",
      "value": "Product logic, interaction, and visual system"
    },
    {
      "label": "Audience",
      "value": "Graphic designers and clients"
    },
    {
      "label": "Tools",
      "value": "Figma, HTML, CSS, JavaScript"
    },
    {
      "label": "Output",
      "value": "Design system and browser prototype"
    }
  ],
  "links": [
    {
      "label": "View the complete prototype",
      "href": "https://forma-final-workbench.jiayingli0128.chatgpt.site/"
    }
  ],
  chapters: formaSourceChapters.slice(1).map((chapter, index) => ({
    id: `forma-${chapter.anchor}`,
    number: String(index + 2).padStart(2, "0"),
    label: chapter.title,
    title: chapter.en,
    headline: chapter.en,
    lead: chapter.leadEn,
    modules: [],
  })),
} satisfies CaseStudy;
