import type { CaseStudy, CaseStudyMedia } from "@/data/case-studies/types";

const root = "/images/projects/character-studio";

const shot = (
  path: string,
  alt: string,
  extras: Partial<CaseStudyMedia> = {},
): CaseStudyMedia => ({
  src: `${root}/${path}`,
  alt,
  width: 3200,
  height: 2000,
  ...extras,
});

export const characterStudioCaseStudy: CaseStudy = {
  slug: "character-studio",
  heroTone: "dark",
  title: "Character Studio",
  category: "AI Tool · Interaction Design",
  year: "2026",
  kicker: "Collaborative Project · AI Tool · 2026",
  heroIntro:
    "An AI thinking partner that helps illustrators turn a character sketch into a richer world—without drawing for them.",
  editorialTitle: "Designing AI to expand authorship, not replace it",
  summary:
    "Character Studio is a browser-based workspace for illustrators and world-builders. Starting with an uploaded drawing, it combines visual interpretation, character dialogue, narrative shaping, and an infinite canvas while keeping every creative decision with the artist.",
  hero: shot(
    "hero/character-studio-ui.png",
    "Character Studio dialogue workspace with character sheet and drawing",
  ),
  heroTone: "dark",
  metadata: [
    { label: "Role", value: "Experience Designer & Creative Technologist" },
    { label: "Focus", value: "AI interaction, workflow, prototyping" },
    { label: "Tools", value: "HTML, CSS, JavaScript, Anthropic API" },
    { label: "Output", value: "Working browser prototype" },
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
      id: "position",
      number: "01",
      label: "Position",
      title: "AI as a speculative partner, not a shortcut",
      headline: "AI as a speculative partner, not a shortcut",
      lead: "Most generative tools jump from a sketch to polished output. Character Studio deliberately keeps productive distance: it surfaces clues, asks questions, organizes fragments, and gives the artist multiple places to intervene before anything becomes fixed.",
      modules: [
        {
          id: "design-question",
          title: "Design question",
          copy: "Character Studio treats the uploaded image as evidence, not a command. AI offers a provisional reading that the illustrator can question, correct, and expand.",
          statement:
            "How might AI help illustrators ask better questions and deepen a visual idea without automating the final image?",
        },
        {
          id: "principles",
          title: "Product principles",
          layout: "cards",
          points: [
            {
              term: "Interpret before generating",
              detail: "Visual cues become hypotheses, not final answers.",
            },
            {
              term: "Dialogue before direction",
              detail: "Conversation tests voice, motivation, and world assumptions.",
            },
            {
              term: "Organize without flattening",
              detail: "Ideas become movable cards while ambiguity stays visible.",
            },
            {
              term: "Select with intention",
              detail: "The illustrator chooses which threads deserve further drawing.",
            },
          ],
        },
      ],
    },
    {
      id: "pages",
      number: "02",
      label: "Pages",
      title: "Six pages, one screen each",
      headline: "Six pages, one screen each",
      lead: "Upload → interpret → dialogue → narrative → canvas → selection. Each page appears once below, with a short action note and a high-resolution capture from the live prototype.",
      modules: [
        {
          id: "six-pages",
          title: "Interface pages",
          copy: "Scroll the sequence in order. Jump into the live tool anytime to try the same gestures.",
          layout: "flow",
          entries: [
            {
              id: "page-upload",
              title: "Upload",
              role: "01",
              copy: "Drop or upload a character drawing. It becomes the evidence base and unlocks the rest of the studio.",
              gallery: [
                shot("ui/panel-01.png", "Upload page with character drawing in the main viewport"),
              ],
            },
            {
              id: "page-interpret",
              title: "AI Interpretation",
              role: "02",
              copy: "Edit the provisional reading—identity, role, world, must-know facts—before anything is treated as settled.",
              gallery: [
                shot(
                  "ui/panel-02.png",
                  "AI Interpretation page with editable provisional character setup",
                ),
              ],
            },
            {
              id: "page-dialogue",
              title: "Dialogue",
              role: "03",
              copy: "Ask in chat, then rewrite the sheet. Useful replies become traits, world notes, conflict, or other facts you keep.",
              gallery: [
                shot(
                  "ui/panel-03.png",
                  "Dialogue page with chat, character sheet, and source drawing",
                ),
              ],
            },
            {
              id: "page-narrative",
              title: "Narrative",
              role: "04",
              copy: "Drag curve points for intensity and timing. The curve steers tone—it does not invent a finished plot.",
              gallery: [
                shot("ui/panel-04.png", "Narrative page with interactive intensity curve"),
              ],
            },
            {
              id: "page-canvas",
              title: "Canvas",
              role: "05",
              copy: "Turn fragments into cards. Mark, connect, sketch, and arrange ideas in space before choosing a direction.",
              gallery: [
                shot(
                  "ui/panel-05.png",
                  "Canvas page with connected notes, questions, and sketch cards",
                ),
              ],
            },
            {
              id: "page-selection",
              title: "Selection",
              role: "06",
              copy: "Click cards into the final set, meet the answer minimum, then Finalize Board to record a direction.",
              gallery: [
                shot(
                  "ui/panel-06.png",
                  "Selection page with chosen cards and Finalize Board control",
                ),
              ],
            },
          ],
        },
      ],
    },
    {
      id: "system",
      number: "03",
      label: "System",
      title: "A working prototype with visible AI boundaries",
      headline: "A working prototype with visible AI boundaries",
      lead: "The browser prototype connects a staged interface to multimodal AI while keeping generated interpretation visibly editable. Product constraints live in the interaction design—not only in a hidden prompt.",
      modules: [
        {
          id: "responsibilities",
          title: "Who does what",
          layout: "cards",
          points: [
            {
              term: "Interface",
              detail: "HTML, CSS, and JavaScript manage the staged workflow and canvas interactions.",
            },
            {
              term: "AI layer",
              detail: "The API interprets images, sustains dialogue, and restructures selected material.",
            },
            {
              term: "Artist control",
              detail: "Editable fields, notes, sketches, links, and selection remain user-authored.",
            },
            {
              term: "Local continuity",
              detail: "Gallery and canvas states keep working material available across the session.",
            },
          ],
        },
        {
          id: "guardrails",
          title: "Interaction guardrails",
          copy: "AI suggestions stay separate from artist-authored decisions. Interpretation is labeled provisional, questions require active answers, and the final board is assembled through explicit selection.",
          statement:
            "AI can propose, connect, and question. The illustrator decides what the character becomes.",
          layout: "cards",
          points: [
            {
              term: "Provisional readings",
              detail: "Approve, edit, or reject before they become facts.",
            },
            {
              term: "Suggested questions",
              detail: "Choose which threads to answer, ignore, or reframe.",
            },
            {
              term: "Organized fragments",
              detail: "Decide how cards are grouped, linked, and prioritized.",
            },
            {
              term: "Direction candidates",
              detail: "Select what continues into further illustration.",
            },
          ],
        },
      ],
    },
    {
      id: "outcome",
      number: "04",
      label: "Outcome",
      title: "A complete tool and a clear position on authorship",
      headline: "A complete tool and a clear position on authorship",
      lead: "The result is both a usable browser prototype and a design argument: AI strengthens creative practice when it sustains inquiry instead of collapsing it into instant output.",
      modules: [
        {
          id: "deliverables",
          title: "What shipped",
          layout: "cards",
          points: [
            {
              term: "End-to-end prototype",
              detail: "Upload, interpretation, dialogue, narrative shaping, canvas, and selection.",
            },
            {
              term: "Documented workflow",
              detail: "One high-resolution screen per product page.",
            },
            {
              term: "Public statement",
              detail: "A companion text records the critical shift from generating images to supporting thought.",
            },
            {
              term: "Live demo",
              detail: "Try the tool in-browser, or read the full project statement.",
            },
          ],
        },
        {
          id: "reflection",
          title: "Design takeaway",
          copy: "The strongest AI interaction is not always the shortest path to an answer. For creative practice, value can come from preserving uncertainty, making reasoning visible, and giving the user better material to think with.",
          statement:
            "The goal is not to draw for the illustrator, but to create a structure in which they can ask better questions.",
        },
      ],
    },
  ],
};
