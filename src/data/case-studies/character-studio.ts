import type { CaseStudy, CaseStudyMedia } from "@/data/case-studies/types";

const root = "/images/projects/character-studio";
const shot = (path: string, alt: string, extras: Partial<CaseStudyMedia> = {}): CaseStudyMedia => ({
  src: `${root}/${path}`, alt, width: 1440, height: 900, ...extras,
});

export const characterStudioCaseStudy: CaseStudy = {
  slug: "character-studio",
  title: "Character Studio",
  category: "AI Tool · Interaction Design",
  year: "2026",
  kicker: "Collaborative Project · AI Tool · 2026",
  heroIntro: "An AI thinking partner that helps illustrators turn a character sketch into a richer world—without drawing for them.",
  editorialTitle: "Designing AI to expand authorship, not replace it",
  summary: "Character Studio is a browser-based workspace for illustrators and world-builders. Starting with an uploaded drawing, it combines visual interpretation, character dialogue, narrative shaping, and an infinite canvas while keeping every creative decision with the artist.",
  hero: shot("hero/character-studio-ui.png", "Character Studio interface showing an infinite canvas and workflow sidebar"),
  metadata: [
    { label: "Role", value: "Experience Designer & Creative Technologist" },
    { label: "Focus", value: "AI interaction, workflow, prototyping" },
    { label: "Tools", value: "HTML, CSS, JavaScript, Anthropic API" },
    { label: "Output", value: "Working browser prototype" },
  ],
  links: [
    { label: "Try the tool", href: "/tools/character-studio/" },
    { label: "Project statement", href: "https://jiaying1111.github.io/illustratortool/" },
  ],
  chapters: [
    {
      id: "challenge", number: "01", label: "Challenge",
      title: "The difficult part begins after the first sketch",
      headline: "The difficult part begins after the first sketch",
      lead: "A character drawing may suggest a mood, silhouette, or personality, but turning that fragment into relationships, motivations, setting, and narrative structure takes sustained reflection. Most generative tools jump directly to polished output instead of supporting that work.",
      modules: [
        { id: "problem", title: "Design question", copy: "Character Studio treats the uploaded image as evidence, not a command. AI offers a provisional reading that the illustrator can question, correct, and expand before anything becomes fixed.", statement: "How might AI help illustrators ask better questions and deepen a visual idea without automating the final image?" },
        { id: "goals", title: "Success criteria", layout: "cards", points: [
          { term: "Protect authorship", detail: "The artist approves, edits, and carries forward every interpretation." },
          { term: "Keep drawing central", detail: "Sketches remain active material throughout the workflow." },
          { term: "Make uncertainty useful", detail: "AI readings stay provisional and invite correction." },
          { term: "Support continuity", detail: "Dialogue, notes, and images remain connected in one workspace." },
        ] },
      ],
    },
    {
      id: "strategy", number: "02", label: "Strategy",
      title: "AI as a speculative partner, not a shortcut",
      headline: "AI as a speculative partner, not a shortcut",
      lead: "The product deliberately adds productive distance between input and outcome. Instead of generating a finished character, it surfaces clues, asks questions, organizes fragments, and gives the artist multiple places to intervene.",
      modules: [
        { id: "principles", title: "Product principles", layout: "cards", points: [
          { term: "Interpret before generating", detail: "Visual cues become hypotheses, not final answers." },
          { term: "Dialogue before direction", detail: "Conversation tests the character voice and world assumptions." },
          { term: "Organize without flattening", detail: "Ideas become movable cards while ambiguity remains visible." },
          { term: "Select with intention", detail: "The illustrator chooses which threads deserve further development." },
        ] },
        { id: "core-loop", title: "Core experience loop", copy: "The workflow moves repeatedly between image, language, organization, and drawing.", steps: [
          "Upload a finished, partial, or rough character drawing",
          "Review and correct the AI’s provisional interpretation",
          "Use dialogue to test voice, motivation, and conflict",
          "Extract useful ideas into notes and canvas cards",
          "Add sketches and connect emerging relationships",
          "Select a direction and carry it into further illustration",
        ] },
      ],
    },
    {
      id: "experience", number: "03", label: "Experience",
      title: "Six stages stay visible in one studio",
      headline: "Six stages stay visible in one studio",
      lead: "A persistent workflow rail makes progress legible without forcing a rigid sequence. Users can revisit assumptions, revise notes, and return to the canvas whenever the character changes.",
      modules: [
        { id: "six-stage-workflow", title: "Complete interface walkthrough", copy: "The six screenshots document every major system state, from source image to selected direction.", layout: "carousel", media: [
          shot("ui/panel-01.png", "01 Upload: character drawing and workflow rail"),
          shot("ui/panel-02.png", "02 AI interpretation: editable setup and character reading"),
          shot("ui/panel-03.png", "03 Dialogue: conversation and character sheet"),
          shot("ui/panel-04.png", "04 Narrative shaping: story curve and controls"),
          shot("ui/panel-05.png", "05 Canvas: connected notes, questions, and sketches"),
          shot("ui/panel-06.png", "06 Selection: chosen cards and finalization controls"),
        ] },
        { id: "system-decisions", title: "Why one surface", layout: "cards", points: [
          { term: "Persistent context", detail: "The original drawing remains a reference while the world expands." },
          { term: "Visible progress", detail: "Six numbered stages show where the user is and what comes next." },
          { term: "Reversible thinking", detail: "Earlier interpretations can be revisited instead of silently replaced." },
        ] },
      ],
    },
    {
      id: "interactions", number: "04", label: "Interactions",
      title: "Four interactions carry the creative work",
      headline: "Four interactions carry the creative work",
      lead: "The experience centers the moments where the artist’s judgment matters most: setting the source, correcting interpretation, developing material, and deciding what continues.",
      modules: [
        { id: "upload-interpret", title: "01 · Upload and interpret", copy: "The user begins with their own drawing. AI identifies visual cues and proposes an editable setup for identity, role, world, and essential facts before dialogue.", layout: "gallery", pair: true, media: [
          shot("workflow/upload.png", "Upload stage with the artist’s drawing and workflow steps"),
          shot("ui/panel-02.png", "Editable AI interpretation and provisional character setup"),
        ] },
        { id: "dialogue", title: "02 · Dialogue as correction", copy: "Conversation gives the provisional character a voice, but the artist can challenge every assumption. Useful exchanges become traits, memories, conflicts, questions, or notes.", media: [shot("workflow/dialogue.png", "Character dialogue with structured traits, world, and conflict notes")] },
        { id: "canvas-thinking", title: "03 · Think spatially", copy: "The infinite canvas turns dialogue fragments into movable material. Users group ideas, draw connections, add notes, and place new sketches beside unresolved questions.", media: [shot("workflow/canvas.png", "Infinite canvas with connected notes, questions, keywords, and sketches")] },
        { id: "selection", title: "04 · Select a direction", copy: "Selection mode asks the artist to choose the cards that best fit the character and hold the strongest visual potential. Finalization records a direction without pretending the character is complete.", media: [shot("workflow/selection.png", "Selection mode with chosen canvas cards and finalization controls")] },
      ],
    },
    {
      id: "implementation", number: "05", label: "Implementation",
      title: "A working prototype with visible AI boundaries",
      headline: "A working prototype with visible AI boundaries",
      lead: "The browser prototype connects a structured interface to multimodal AI while keeping generated interpretation visibly editable. Product constraints are expressed through the interaction design, not hidden in a prompt.",
      modules: [
        { id: "responsibilities", title: "System responsibilities", layout: "cards", points: [
          { term: "Interface", detail: "HTML, CSS, and JavaScript manage the staged workflow and canvas interactions." },
          { term: "AI layer", detail: "The API interprets images, sustains dialogue, and restructures selected material." },
          { term: "Artist control", detail: "Editable fields, notes, sketches, links, and selection remain user-controlled." },
          { term: "Local continuity", detail: "Gallery and canvas states keep working material available across the session." },
        ] },
        { id: "guardrails", title: "Interaction guardrails", copy: "AI suggestions remain separate from artist-authored decisions. Interpretation is labeled provisional, questions require active answers, and the final board is assembled through explicit selection.", statement: "AI can propose, connect, and question. The illustrator decides what the character becomes." },
      ],
    },
    {
      id: "outcome", number: "06", label: "Outcome",
      title: "A complete tool and a clear position on authorship",
      headline: "A complete tool and a clear position on authorship",
      lead: "The result is both a usable browser prototype and a design argument: AI can strengthen an illustrator’s process when it helps sustain inquiry instead of collapsing it into instant output.",
      modules: [
        { id: "deliverables", title: "What shipped", layout: "cards", points: [
          { term: "End-to-end prototype", detail: "Upload, interpretation, dialogue, narrative shaping, canvas, and selection." },
          { term: "Documented workflow", detail: "Ten interface screenshots record the complete product experience." },
          { term: "Public statement", detail: "The companion text explains the project’s position on AI and creative authorship." },
        ] },
        { id: "reflection", title: "Design takeaway", copy: "The strongest AI interaction is not always the shortest path to an answer. For creative practice, value can come from preserving uncertainty, making reasoning visible, and giving the user better material to think with.", statement: "The goal is not to draw for the illustrator, but to create a structure in which they can ask better questions." },
      ],
    },
  ],
};
