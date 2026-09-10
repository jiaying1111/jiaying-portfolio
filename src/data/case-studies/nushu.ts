import type { CaseStudy, CaseStudyEntry, CaseStudyMedia } from "@/data/case-studies/types";

const root = "/images/projects/nushu";

function image(
  path: string,
  alt: string,
  width: number,
  height: number,
  extras: Partial<CaseStudyMedia> = {},
): CaseStudyMedia {
  return { src: `${root}/${path}`, alt, width, height, ...extras };
}

function video(file: string, alt: string, youtube?: string): CaseStudyMedia {
  return {
    src: `/videos/${file}`,
    youtube,
    alt,
    width: 1920,
    height: 960,
    kind: "video",
    poster: `${root}/hero/nushu-landscape.jpg`,
  };
}

function entry(
  id: string,
  title: string,
  kicker: string,
  role: string,
  media: CaseStudyMedia,
): CaseStudyEntry {
  return { id, title, copy: kicker, role, media };
}

export const nushuCaseStudy: CaseStudy = {
  slug: "nushu",
  title: "NÜSHU",
  category: "VR Experience",
  year: "2024",
  kicker: "VR Experience · Unreal Engine",
  heroIntro: "A river of women’s language and shared memory.",
  editorialTitle: "A secret women’s script, made into a world",
  summary:
    "Nüshu is the only known script created and used only by women. This VR work turns it into an ink-wash landscape you can walk through.",
  hero: image(
    "hero/nushu-landscape.jpg",
    "A stylized virtual landscape of teal mountains, a waterfall, and a river under a yellow sky",
    2200,
    1107,
  ),
  metadata: [
    { label: "Role", value: "Experience Designer" },
    { label: "Tools", value: "Unreal Engine, Blender" },
    { label: "Media", value: "VR, spatial sound, text" },
    { label: "Type", value: "Independent Project" },
  ],
  links: [{ label: "Watch on Bilibili", href: "https://www.bilibili.com/video/BV1KrYh6HEXb" }],
  chapters: [
    {
      id: "idea",
      number: "01",
      label: "Idea",
      title: "How can a silent language be heard again?",
      headline: "How can a silent language be heard again?",
      lead: "Nüshu held letters, songs, and friendship between women. The work treats it as a living practice, not a museum object.",
      modules: [
        {
          id: "craft-script",
          title: "Origin",
          copy: "The script lived in women’s hands, then on the page.",
          layout: "gallery",
          entries: [
            entry(
              "craft",
              "Craft",
              "",
              "Stitched, written, and passed by hand.",
              image(
                "idea/embroidery.jpg",
                "Hands holding an embroidery hoop with a needle standing in the cloth",
                1388,
                942,
              ),
            ),
            entry(
              "script",
              "Script",
              "",
              "A slender syllabic script, written on a diagonal.",
              image(
                "idea/nushu-scroll.jpg",
                "Close-up of vertical Nüshu calligraphy written in black ink on cream paper",
                2048,
                1365,
              ),
            ),
          ],
        },
        {
          id: "experience-principles",
          title: "Principles",
          copy: "Three rules for the interaction.",
          layout: "cards",
          points: [
            { term: "Listen first", detail: "Begin with another woman’s voice, not an instruction." },
            { term: "Let language flow", detail: "Characters move like water instead of staying fixed." },
            { term: "Add without erasing", detail: "Each visit adds to the river rather than replacing it." },
          ],
          statement: "Writing becomes water.",
        },
      ],
    },
    {
      id: "research",
      number: "02",
      label: "Research",
      title: "From script to a world you can enter",
      headline: "From script to a world you can enter",
      lead: "How Nüshu moved between people, and how its strokes could become land and water.",
      modules: [
        {
          id: "carriers",
          title: "Transmission",
          copy: "From Jiangyong, Nüshu moved through fans, cloth, songs, and family teaching.",
          statement: "Passed between mothers, daughters, and friends.",
        },
        {
          id: "visual-grammar",
          title: "Visual grammar",
          copy: "The same marks suggested mountains, current, and wind.",
          layout: "cards",
          points: [
            { term: "45° inclination", detail: "A diagonal posture gives the script its flow." },
            { term: "Four stroke families", detail: "Dot, vertical, oblique, and curve." },
            { term: "Delicate rhythm", detail: "Long forms like weaving, leaves, and falling water." },
          ],
        },
        {
          id: "sketch",
          title: "Sketch",
          copy: "Early tests of glyphs as landscape.",
          media: [
            image(
              "research/glyph-landscape-sketch.jpg",
              "Black-and-white ink sketch where Nüshu-like strokes form waves and rising marks",
              1116,
              1444,
              { displayWidth: 720 },
            ),
          ],
        },
        {
          id: "concept",
          title: "Concept",
          copy: "Memory as light, then as a path through writing.",
          pair: true,
          media: [
            image(
              "research/memory-nodes.jpg",
              "Ink-wash mountains with glowing nodes connected across a raked ground",
              2200,
              1120,
              { caption: "Points of memory" },
            ),
            image(
              "research/women-on-the-path.jpg",
              "Ink-wash landscape with five women walking a curved path toward a glowing character",
              2200,
              1226,
              { caption: "A shared path" },
            ),
          ],
        },
      ],
    },
    {
      id: "process",
      number: "03",
      label: "Process",
      title: "Form, space, and behavior",
      headline: "Form, space, and behavior",
      lead: "Mountains set the scale. Unreal sets the path. Blueprint connects listening to the river.",
      modules: [
        {
          id: "production",
          title: "Production",
          copy: "From modeling to the level, then to interaction.",
          layout: "gallery",
          entries: [
            entry(
              "form",
              "Modelling",
              "01 / Form",
              "Mountain forms for an ink-wash terrain.",
              image(
                "process/blender-modeling.jpg",
                "Blender workspace with stylized mountain forms being arranged",
                1294,
                736,
              ),
            ),
            entry(
              "atmosphere",
              "Composition",
              "02 / Space",
              "Light, water, and paths.",
              image(
                "process/unreal-level.jpg",
                "Unreal Engine level L_VR_Nvshu_v2 with mountain forms and editor panels",
                1293,
                736,
              ),
            ),
            entry(
              "behavior",
              "Blueprint",
              "03 / Behavior",
              "Input, diary, and glyph movement.",
              image(
                "process/unreal-blueprint.jpg",
                "Unreal Engine Blueprint graph for BP_NuShuCharacter",
                1294,
                736,
              ),
            ),
          ],
        },
        {
          id: "interaction-pipeline",
          title: "Interaction",
          copy: "Listen, then explore.",
          steps: [
            "Enter the darkened world.",
            "Activate a recorded diary.",
            "Watch a character join the river.",
            "Explore freely.",
          ],
        },
      ],
    },
    {
      id: "outcome",
      number: "04",
      label: "Outcome",
      title: "A river of voices",
      headline: "A river of voices",
      lead: "From a quiet room into a landscape where characters drift with the water.",
      modules: [
        {
          id: "experience-sequence",
          title: "Final outcome",
          copy: "Arrival, river, pass, landscape.",
          layout: "gallery",
          entries: [
            entry(
              "arrival",
              "Arrival",
              "01",
              "A dark room, then a slit of landscape.",
              image(
                "outcome/arrival.jpg",
                "VR starting room with introductory text and a narrow view into the landscape",
                1531,
                764,
              ),
            ),
            entry(
              "river",
              "River",
              "02",
              "Characters drift downstream.",
              image(
                "outcome/glyph-river.jpg",
                "Overhead view of a blue river carrying dark Nüshu characters between tan cliffs",
                1531,
                764,
              ),
            ),
            entry(
              "pass",
              "Pass",
              "03",
              "The script at eye level.",
              image(
                "outcome/canyon-pass.jpg",
                "Low view through a mountain pass with Nüshu characters floating on the river",
                1531,
                764,
              ),
            ),
            entry(
              "landscape",
              "Landscape",
              "04",
              "Toward the waterfall.",
              image(
                "outcome/waterfall.jpg",
                "Wide view of a waterfall and river with Nüshu characters and sparse trees",
                1531,
                764,
              ),
            ),
          ],
        },
        {
          id: "final-video",
          title: "Final video",
          copy: "From the quiet room to the river.",
          media: [
            video(
              "3-Nushu.mp4",
              "Walkthrough of the Nüshu VR experience, from the opening room into the ink-wash landscape",
              "https://www.bilibili.com/video/BV1KrYh6HEXb",
            ),
          ],
        },
      ],
    },
  ],
};
