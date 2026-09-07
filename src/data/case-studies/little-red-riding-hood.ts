import type { CaseStudy, CaseStudyMedia } from "@/data/case-studies/types";

const media = "/images/projects/little-red-riding-hood";

function image(
  path: string,
  alt: string,
  width: number,
  height: number,
  extras: Partial<CaseStudyMedia> = {},
): CaseStudyMedia {
  return { src: `${media}/${path}`, alt, width, height, ...extras };
}

function video(file: string, alt: string): CaseStudyMedia {
  return {
    src: `/videos/${file}`,
    alt,
    width: 1920,
    height: 1148,
    kind: "video",
    poster: `${media}/outcome/installation-assembly.jpg`,
  };
}

export const littleRedRidingHoodCaseStudy: CaseStudy = {
  slug: "little-red-riding-hood",
  title: "Little Red Riding Hood",
  category: "Generative Design · Interactive Installation",
  year: "2025",
  kicker: "Generative Design · Installation",
  heroIntro: "A familiar fairy tale, rebuilt as an open system.",
  editorialTitle: "Reimagination of Little Red Riding Hood",
  summary:
    "This project reinterprets Little Red Riding Hood through non-linear storytelling and generative design. Modular acrylic forms become an open narrative system that audiences can generate, rearrange, and use to construct their own version of the story.",
  hero: {
    src: `${media}/hero/installation-detail.jpg`,
    alt: "Close-up of a red generated form resting among transparent colored acrylic modules",
    width: 5893,
    height: 3929,
  },
  metadata: [
    { label: "Role", value: "Designer & Creative Coder" },
    { label: "Tools", value: "Blender, Geometry Nodes, JavaScript" },
    { label: "Media", value: "Web interaction, acrylic sculpture" },
    { label: "Type", value: "Independent Project" },
  ],
  chapters: [
    {
      id: "idea",
      number: "01",
      label: "Idea",
      title: "Opening a familiar fairy tale to multiple interpretations",
      headline: "Opening a familiar fairy tale to multiple interpretations",
      lead: "Little Red Riding Hood is often told as a fixed moral lesson. This project asks what happens when the story becomes a system that audiences can question, rebuild, and inhabit from different perspectives.",
      modules: [
        {
          id: "inspiration",
          title: "Inspiration",
          copy: "Fairy tales teach social expectations through repeated characters and conflicts. Across different editions, Little Red Riding Hood continues to divide its world into clear roles: innocent and dangerous, obedient and disobedient, human and animal.",
          media: [
            {
              src: `${media}/idea/fairy-tale-visual-references.png`,
              alt: "Three historical black-and-white illustrations of Little Red Riding Hood, the wolf, and the forest",
              caption: "Historical visual interpretations of the fairy tale",
              width: 1179,
              height: 507,
            },
          ],
        },
        {
          id: "design-question",
          title: "Design question",
          copy: "Rather than replacing one version with another, the project creates conditions for many versions to coexist.",
          statement:
            "How might a familiar linear fairy tale become an open system for play, negotiation, and multiple perspectives?",
          layout: "cards",
          points: [
            {
              term: "Break fixed roles",
              detail:
                "Characters are represented by modular forms rather than permanent identities.",
            },
            {
              term: "Invite participation",
              detail:
                "Audiences draw, select, and arrange the elements of their own story.",
            },
            {
              term: "Keep the story open",
              detail:
                "No final configuration is treated as the correct interpretation.",
            },
          ],
        },
      ],
    },
    {
      id: "research",
      number: "02",
      label: "Research",
      title: "Identifying the fixed relationships inside the original narrative",
      headline: "Reading the fixed roles inside the original narrative",
      lead: "The research is a visual and conceptual reading of the fairy tale rather than a quantitative user study. It focuses on the recurring binaries that shape how the story is usually understood.",
      modules: [
        {
          id: "narrative-analysis",
          title: "Narrative analysis",
          copy: "Three recurring relationships became the starting point for the redesign.",
          layout: "cards",
          points: [
            {
              term: "Good / bad",
              detail:
                "A moral framework assigns virtue and danger before the audience can interpret the characters.",
            },
            {
              term: "Gendered roles",
              detail:
                "The story often links obedience, vulnerability, protection, and punishment to fixed gender expectations.",
            },
            {
              term: "Human / nature",
              detail:
                "The forest and wolf are positioned as threats to be controlled or separated from the human world.",
            },
          ],
        },
      ],
    },
    {
      id: "process",
      number: "03",
      label: "Process",
      title: "Building a generative grammar across code, interface, and material",
      headline: "From generative rules to modular acrylic forms",
      lead: "The process moves between parametric modeling, generative coding, web interaction, and physical prototyping so that the same open-system logic exists in both digital and material form.",
      modules: [
        {
          id: "red-hat-variable",
          title: "The red hat as a variable",
          copy: "The red hat is the story's most recognizable symbol. Instead of preserving it as one stable image, I treated it as a generative family of forms whose parameters can change.",
          pair: true,
          media: [
            {
              src: `${media}/process/blender-geometry-nodes.png`,
              alt: "Blender Geometry Nodes graph used to generate modular forms",
              caption: "Geometry Nodes system",
              width: 1002,
              height: 600,
            },
            {
              src: `${media}/process/generative-code.png`,
              alt: "JavaScript code used to generate and organize visual elements",
              caption: "Generative coding",
              width: 1002,
              height: 627,
            },
            {
              src: `${media}/research/red-hat-generation-grid.png`,
              alt: "A grid of red hat forms generated from a shared set of parameters",
              caption: "Generative variations created from a shared formal principle",
              width: 519,
              height: 675,
            },
          ],
        },
        {
          id: "physical-prototype",
          title: "Physical translation",
          copy: "Paper studies tested how multiple shapes could connect, overlap, and remain physically rearrangeable before fabrication in acrylic.",
          media: [
            image(
              "process/paper-prototype.png",
              "A hand testing connected paper character shapes during physical prototyping",
              1002,
              774,
              { displayWidth: 480 },
            ),
          ],
        },
      ],
    },
    {
      id: "outcome",
      number: "04",
      label: "Outcome",
      title: "A story that remains open after the designer steps away",
      headline: "From drawing to a new story",
      lead: "The audience does not receive one rewritten fairy tale. They move through three connected actions: drawing an environment, collecting generated forms, and arranging those forms into a new story.",
      modules: [
        {
          id: "final-outcome",
          title: "Final outcome",
          copy: "Each visit follows the same sequence, then leaves the system open for another reading.",
          layout: "flow",
          entries: [
            {
              id: "redesign-environment",
              title: "Redesign the environment",
              copy: "Audiences customise environmental elements through the website.",
              href: "https://notred.netlify.app/",
              linkLabel: "notred.netlify.app",
              gallery: [
                image(
                  "process/environment-drawing-interface.png",
                  "Interactive drawing interface showing a green pixel tree on a red grid",
                  1830,
                  1054,
                ),
              ],
            },
            {
              id: "regenerate-elements",
              title: "Regenerate the elements",
              copy: "The website regenerates forms from the audience's drawing. The algorithm fills gaps in the illustrated shape.",
              gallery: [
                image(
                  "process/generated-elements-library.png",
                  "Website gallery displaying generated abstract character forms in multiple colors",
                  1930,
                  1110,
                ),
                image(
                  "process/generated-shapes/shape-yellow.png",
                  "A generated yellow organic character shape",
                  398,
                  359,
                ),
                image(
                  "process/generated-shapes/shape-green.png",
                  "A generated green organic character shape",
                  427,
                  334,
                ),
                image(
                  "process/generated-shapes/shape-blue.png",
                  "A generated blue organic character shape",
                  346,
                  307,
                ),
              ],
            },
            {
              id: "arrange-elements",
              title: "Arrange the elements",
              copy: "Audiences pick 3D forms as character metaphors, collect the generated 2D shapes, and arrange them into a new story.",
              gallery: [
                image(
                  "outcome/installation-layers.jpg",
                  "Close view of translucent acrylic layers and a red generated form on top",
                  2200,
                  1467,
                ),
                image(
                  "outcome/installation-assembly.jpg",
                  "Hand placing a red generated form onto the stacked acrylic installation",
                  2200,
                  1467,
                ),
              ],
            },
          ],
        },
        {
          id: "final-video",
          title: "Final video",
          copy: "Generating, selecting, and assembling the story.",
          media: [
            video(
              "5-Reimagination of Little Red Riding Hood.mp4",
              "Film of the Little Red Riding Hood installation and interactive system",
            ),
          ],
        },
      ],
    },
  ],
};
