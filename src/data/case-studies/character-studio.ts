import type { CaseStudy, CaseStudyMedia } from "@/data/case-studies/types";

const root = "/images/projects/character-studio";

const shot = (
  path: string,
  alt: string,
  extras: Partial<CaseStudyMedia> = {},
): CaseStudyMedia => ({
  src: `${root}/${path}`,
  alt,
  width: 1440,
  height: 900,
  ...extras,
});

export const characterStudioCaseStudy: CaseStudy = {
  slug: "character-studio",
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
    "Character Studio interface showing an infinite canvas and workflow sidebar",
  ),
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
          id: "at-a-glance",
          title: "At a glance",
          copy: "A complete studio loop for character development—built so authorship stays with the illustrator.",
          metrics: [
            { value: "6", label: "visible workflow stages" },
            { value: "1", label: "infinite canvas for spatial thinking" },
            { value: "API", label: "multimodal Anthropic interpretation" },
            { value: "Live", label: "browser prototype you can try" },
          ],
        },
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
        {
          id: "studio-overview",
          title: "The studio surface",
          copy: "One persistent workspace keeps the source drawing, workflow rail, dialogue, and canvas in view together—so progress stays legible without forcing a rigid sequence.",
          media: [
            shot(
              "ui/panel-05.png",
              "Character Studio canvas with connected notes, questions, and sketches",
            ),
          ],
        },
      ],
    },
    {
      id: "workflow",
      number: "02",
      label: "Workflow",
      title: "Six stages from sketch to selected direction",
      headline: "Six stages from sketch to selected direction",
      lead: "The workflow moves repeatedly between image, language, organization, and drawing. Each stage is visible in the sidebar so users can revisit assumptions instead of silently replacing them.",
      modules: [
        {
          id: "six-stages",
          title: "End-to-end process",
          copy: "Upload → interpret → dialogue → narrative shaping → canvas → selection. The screens below follow the live tool.",
          layout: "flow",
          entries: [
            {
              id: "stage-upload",
              title: "Upload an existing character",
              role: "01",
              copy: "Start with a finished design, a partial figure, or a rough but readable sketch. The drawing is the evidence base—not a text prompt alone.",
              gallery: [
                shot("ui/panel-01.png", "Upload stage with character drawing and workflow rail"),
              ],
            },
            {
              id: "stage-interpret",
              title: "AI interprets, artist corrects",
              role: "02",
              copy: "The model reads clothing, posture, expression, objects, and atmosphere, then proposes an editable setup for identity, role, world, and must-know facts.",
              gallery: [
                shot(
                  "ui/panel-02.png",
                  "Editable AI interpretation and provisional character setup",
                ),
              ],
            },
            {
              id: "stage-dialogue",
              title: "Dialogue as correction",
              role: "03",
              copy: "Talk with the provisional character immediately. Useful exchanges become traits, memories, conflicts, questions, or notes the artist can keep or discard.",
              gallery: [
                shot(
                  "ui/panel-03.png",
                  "Character dialogue with structured traits, world, and conflict notes",
                ),
              ],
            },
            {
              id: "stage-narrative",
              title: "Shape the narrative arc",
              role: "04",
              copy: "Intensity and timing controls let the artist bend the emerging story without asking AI to invent a finished plot.",
              gallery: [
                shot("ui/panel-04.png", "Narrative shaping with story curve and controls"),
              ],
            },
            {
              id: "stage-canvas",
              title: "Think on an infinite canvas",
              role: "05",
              copy: "Dialogue fragments become draggable cards. Group ideas, draw links, add notes, and place new sketches beside unresolved questions.",
              gallery: [
                shot(
                  "ui/panel-05.png",
                  "Infinite canvas with connected notes, questions, keywords, and sketches",
                ),
              ],
            },
            {
              id: "stage-select",
              title: "Select a direction",
              role: "06",
              copy: "Compare which cards best fit the character and hold the strongest visual potential. Finalization records a direction without pretending the work is complete.",
              gallery: [
                shot(
                  "ui/panel-06.png",
                  "Selection mode with chosen canvas cards and finalization controls",
                ),
              ],
            },
          ],
        },
      ],
    },
    {
      id: "interactions",
      number: "03",
      label: "Interactions",
      title: "Four moments where judgment stays with the artist",
      headline: "Four moments where judgment stays with the artist",
      lead: "The product centers the decisions that matter: setting the source, correcting interpretation, developing material spatially, and choosing what continues into illustration.",
      modules: [
        {
          id: "upload-interpret",
          title: "01 · Upload and interpret",
          copy: "The user begins with their own drawing. AI identifies visual cues and proposes an editable setup before dialogue starts—always labeled as provisional.",
          layout: "gallery",
          pair: true,
          media: [
            shot("workflow/upload.png", "Upload stage with the artist’s drawing and workflow steps"),
            shot("ui/panel-02.png", "Editable AI interpretation and provisional character setup"),
          ],
        },
        {
          id: "dialogue",
          title: "02 · Dialogue as correction",
          copy: "Conversation gives the character a voice, but every assumption can be challenged. The sheet merges typed facts instead of treating them as conflicts.",
          media: [
            shot(
              "workflow/dialogue.png",
              "Character dialogue with structured traits, world, and conflict notes",
            ),
          ],
        },
        {
          id: "canvas-thinking",
          title: "03 · Think spatially",
          copy: "The infinite canvas turns language into movable material. Sketches and text live side by side so visual and narrative directions can be compared.",
          media: [
            shot(
              "workflow/canvas.png",
              "Infinite canvas with connected notes, questions, keywords, and sketches",
            ),
          ],
        },
        {
          id: "selection",
          title: "04 · Select a direction",
          copy: "Selection mode asks which version best fits the character, holds the strongest visual potential, and supports the worldbuilding. The chosen path becomes the basis for further illustration.",
          media: [
            shot(
              "workflow/selection.png",
              "Selection mode with chosen canvas cards and finalization controls",
            ),
          ],
        },
        {
          id: "walkthrough",
          title: "Interface walkthrough",
          copy: "All six primary system states, from source image to selected direction.",
          layout: "carousel",
          media: [
            shot("ui/panel-01.png", "01 Upload: character drawing and workflow rail"),
            shot("ui/panel-02.png", "02 AI interpretation: editable setup and character reading"),
            shot("ui/panel-03.png", "03 Dialogue: conversation and character sheet"),
            shot("ui/panel-04.png", "04 Narrative shaping: story curve and controls"),
            shot("ui/panel-05.png", "05 Canvas: connected notes, questions, and sketches"),
            shot("ui/panel-06.png", "06 Selection: chosen cards and finalization controls"),
          ],
        },
      ],
    },
    {
      id: "system",
      number: "04",
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
      number: "05",
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
              detail: "Interface screenshots record every major product state.",
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
