import type { CaseStudy, CaseStudyMedia } from "@/data/case-studies/types";

const root = "/images/projects/character-studio";

function image(
  path: string,
  alt: string,
  width: number,
  height: number,
  extras: Partial<CaseStudyMedia> = {},
): CaseStudyMedia {
  return { src: `${root}/${path}`, alt, width, height, ...extras };
}

export const characterStudioCaseStudy: CaseStudy = {
  slug: "character-studio",
  title: "Character Studio",
  category: "AI Tool · Interaction Design",
  year: "2026",
  kicker: "Collaborative Project · AI Tool",
  heroIntro:
    "An AI partner for illustrators that deepens characters through dialogue, notes, and visual thinking—without drawing for you.",
  editorialTitle: "AI as a speculative partner, not a shortcut",
  summary:
    "Character Studio is an AI-assisted tool for illustrators and world-builders. It starts from an uploaded drawing, then supports character development through dialogue, note-taking, sketching, and an infinite canvas—keeping authorship and visual decision-making with the artist.",
  hero: image(
    "hero/character-studio-ui.png",
    "Character Studio interface showing the infinite canvas and workflow sidebar",
    1440,
    900,
  ),
  metadata: [
    { label: "Role", value: "Experience Designer & Creative Technologist" },
    { label: "Tools", value: "HTML, CSS, JavaScript, Anthropic API" },
    { label: "Media", value: "Web tool, dialogue, infinite canvas" },
    { label: "Type", value: "Collaboration Project" },
  ],
  links: [
    { label: "Try the tool", href: "/tools/character-studio/" },
    {
      label: "Project statement",
      href: "https://jiaying1111.github.io/illustratortool/",
    },
  ],
  chapters: [
    {
      id: "idea",
      number: "01",
      label: "Idea",
      title: "From a drawing fragment to a living character world",
      headline: "From a drawing fragment to a living character world",
      lead:
        "In studio, many people can invent an interesting character or image, but struggle to expand that fragment into relationships, emotions, setting, and narrative structure. Character Studio supports that expansion without replacing drawing.",
      modules: [
        {
          id: "problem",
          title: "The gap after the first image",
          copy:
            "We may know what a character looks like, or have a rough sense of their personality, while the surrounding world stays thin. The tool treats the uploaded drawing as a starting point for interpretation, conversation, and iterative worldbuilding.",
          statement:
            "How might AI help illustrators deepen a visual idea without automating the final image?",
        },
        {
          id: "position",
          title: "Design position",
          copy:
            "Many image-generation systems compress the distance between thought and result. This project argues for a different role: AI as a speculative partner that preserves authorship, ambiguity, and visual decision-making.",
          layout: "cards",
          points: [
            {
              term: "Support thought",
              detail: "Interpretation and speculation come before polished output.",
            },
            {
              term: "Keep authorship",
              detail: "The artist corrects, redirects, and decides what stays.",
            },
            {
              term: "Stay visual",
              detail: "Sketches remain central; AI does not replace drawing.",
            },
            {
              term: "Remain open-ended",
              detail: "Provisional readings invite revision rather than fixed truth.",
            },
          ],
        },
      ],
    },
    {
      id: "system",
      number: "02",
      label: "System",
      title: "A workflow that moves between image, dialogue, and canvas",
      headline: "A workflow that moves between image, dialogue, and canvas",
      lead:
        "The system begins with an uploaded character drawing. AI forms a provisional reading, opens dialogue, gathers notes, and reorganizes material onto an infinite canvas where sketches and ideas can develop together.",
      modules: [
        {
          id: "loop",
          title: "Core loop",
          copy:
            "Each stage feeds the next, and the artist can return whenever a reading feels wrong or incomplete.",
          steps: [
            "Upload a finished, partial, or rough character drawing",
            "AI interprets visual cues into a provisional setup",
            "Dialogue tests, corrects, and expands the character",
            "Notes and extracts become draggable canvas material",
            "Sketches re-enter the loop for iterative feedback",
            "Selection mode chooses a direction to carry forward",
          ],
        },
        {
          id: "capabilities",
          title: "What AI does here",
          copy:
            "Technically, the project engages AI through image interpretation, conversation, organizational restructuring, and iterative feedback between sketches and concepts.",
          layout: "cards",
          points: [
            {
              term: "Image reading",
              detail: "Clothing, posture, expression, objects, and atmosphere.",
            },
            {
              term: "Provisional setup",
              detail: "Personality, tone, background hints, and narrative context as starting assumptions.",
            },
            {
              term: "Dialogue partner",
              detail: "A character voice grounded in the drawing and user corrections.",
            },
            {
              term: "Reorganization",
              detail: "Traits, themes, questions, and fragments turned into movable tabs.",
            },
          ],
        },
      ],
    },
    {
      id: "interface",
      number: "03",
      label: "Interface",
      title: "Six stages in one studio surface",
      headline: "Six stages in one studio surface",
      lead:
        "The interface keeps the full workflow visible: upload, interpretation, dialogue, narrative shaping, canvas thinking, and selection. Artists move between text and image without leaving the same dark studio environment.",
      modules: [
        {
          id: "upload-dialogue",
          title: "Upload, interpretation, and dialogue",
          copy:
            "An uploaded drawing opens AI interpretation and a character sheet. Dialogue begins immediately, so the user can question assumptions while the figure is still provisional.",
          layout: "gallery",
          pair: true,
          media: [
            image(
              "workflow/upload.png",
              "Character Studio upload stage with workflow steps in the sidebar",
              1440,
              900,
            ),
            image(
              "workflow/dialogue.png",
              "Dialogue stage with character sheet categories for personality, world, and conflict",
              1440,
              900,
            ),
          ],
        },
        {
          id: "narrative-canvas",
          title: "Narrative curve and infinite canvas",
          copy:
            "A narrative curve lets the user shape intensity across story beats. Organized ideas become draggable tabs on an infinite canvas, where sketches, questions, and connections can sit side by side.",
          layout: "gallery",
          pair: true,
          media: [
            image(
              "ui/panel-04.png",
              "Narrative curve editor with intensity points across beginning, climax, and ending",
              1440,
              900,
            ),
            image(
              "workflow/canvas.png",
              "Infinite canvas with tools for marking, connecting, and developing cards",
              1440,
              900,
            ),
          ],
        },
        {
          id: "selection",
          title: "Selection mode",
          copy:
            "When several directions exist, selection mode asks the artist to compare which version best fits the character, holds the strongest visual potential, and supports the worldbuilding. The chosen path becomes the basis for further illustration.",
          media: [
            image(
              "workflow/selection.png",
              "Selection mode on the infinite canvas with finalize controls",
              1440,
              900,
            ),
          ],
        },
      ],
    },
    {
      id: "outcome",
      number: "04",
      label: "Outcome",
      title: "A tool and a statement about authorship",
      headline: "A tool and a statement about authorship",
      lead:
        "The finished work includes the system itself and the drawings, notes, and world-building structures that emerge through it. AI expands imagination; the illustrator remains the author.",
      modules: [
        {
          id: "deliverable",
          title: "What ships",
          copy:
            "A browser-based Character Studio prototype, paired with a written project statement that records the critical shift from generating images to supporting thought.",
          layout: "cards",
          points: [
            {
              term: "Interactive prototype",
              detail: "Upload, dialogue, narrative curve, canvas, and selection in one flow.",
            },
            {
              term: "Artist statement",
              detail: "A public record of the collaborative position on AI and illustration.",
            },
            {
              term: "Practice outcome",
              detail: "Evolving notes and visual directions produced through use of the tool.",
            },
          ],
          statement:
            "The goal is not to produce illustrations for the user, but to create a structure in which the artist can ask better questions.",
        },
      ],
    },
  ],
};
