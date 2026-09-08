import type { CaseStudy, CaseStudyEntry, CaseStudyMedia } from "@/data/case-studies/types";

const root = "/images/artwork/resounding-nature";
const videoRoot = "/videos/resounding";

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
    src: youtube ?? `${videoRoot}/${file}`,
    youtube,
    alt,
    width: 1280,
    height: 720,
    kind: "video",
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

export const resoundingNatureCaseStudy: CaseStudy = {
  slug: "resounding-nature",
  title: "Re:Sounding Nature",
  category: "Physical Computing · Installation Art",
  year: "2025",
  kicker: "Physical Computing · Installation Art",
  heroIntro: "The breath of plants. The rhythm of waves. The whisper of wind.",
  editorialTitle: "Becoming nature’s voice",
  summary:
    "A future museum where natural sound is gone. Three machines reconstruct the movement of plants, water, and air.",
  hero: image(
    "hero/final-installation.jpg",
    "Three transparent mechanical installations presented together in a white studio",
    2200,
    1467,
  ),
  metadata: [
    { label: "Role", value: "Artist & Interaction Designer" },
    { label: "Tools", value: "Arduino, sensors, motors, laser cutting" },
    { label: "Media", value: "Physical computing installation" },
    { label: "Type", value: "Independent Project" },
  ],
  links: [{ label: "Watch the installation ↗", href: "https://youtu.be/0j38oYFXYA8" }],
  chapters: [
    {
      id: "idea",
      number: "01",
      label: "Idea",
      title: "What happens when nature falls silent?",
      headline: "What happens when nature falls silent?",
      lead:
        "Wind, waves, and plants can no longer be heard. Machinery becomes their remaining voice.",
      modules: [
        {
          id: "silent-landscape",
          title: "A landscape that no longer speaks",
          layout: "gallery",
          entries: [
            entry(
              "dead-forest",
              "Plants",
              "PLANTS",
              "A forest reduced to stillness.",
              image("idea/dead-forest.jpg", "A cleared forest with remaining dead trunks", 720, 453),
            ),
            entry(
              "smokestacks",
              "Air",
              "AIR",
              "Industry replaces the movement of wind.",
              image("idea/smokestacks.jpg", "Industrial smokestacks releasing air pollution", 605, 419),
            ),
            entry(
              "drainage-pipe",
              "Water",
              "WATER",
              "An outfall replaces the rhythm of a tide.",
              image("idea/drainage-pipe.jpg", "A drainage pipe releasing water into a landscape", 720, 426),
            ),
          ],
        },
        {
          id: "three-rhythms",
          title: "One question, three movements",
          layout: "cards",
          points: [
            { term: "01 / Plants", detail: "Leaves rotate like breath." },
            { term: "02 / Waves", detail: "Rods rise and fall like a tide." },
            { term: "03 / Wind", detail: "A flip travels across the frame." },
          ],
          statement: "Can a machine preserve the memory of natural movement?",
        },
      ],
    },
    {
      id: "process",
      number: "02",
      label: "Process",
      title: "Three rhythms, three mechanisms",
      headline: "Three rhythms, three mechanisms",
      lead: "Each installation translates one natural rhythm into a visible mechanical action.",
      modules: [
        {
          id: "plants-wireframe",
          title: "01 / The breath of plants",
          media: [
            image(
              "plants/exploded-diagram.jpg",
              "Exploded CAD diagram of the plant installation",
              1567,
              2200,
            ),
          ],
          supportingCarousel: {
            title: "Process",
            items: [
              image("plants/process.png", "Early paper and electronics tests for the plant mechanism", 2067, 618),
            ],
          },
          studio: {
            title: "Studio",
            items: [
              image("plants/view-01.jpg", "Studio view of the finished plant installation", 1800, 1200),
              image("plants/view-02.jpg", "Full view of the finished plant installation", 1800, 1200),
            ],
          },
        },
        {
          id: "waves-wireframe",
          title: "02 / The rhythm of waves",
          media: [
            image(
              "waves/wireframe.jpg",
              "Labeled CAD drawing of the wave installation",
              2200,
              1420,
            ),
          ],
          steps: ["Turn the shaft.", "Lift each rod at an offset.", "Form a traveling surface."],
          supportingCarousel: {
            title: "Process",
            items: [
              image("waves/process-studies.png", "Workbench and acrylic cam tests for the wave installation", 1288, 1448),
            ],
          },
          mechanism: {
            title: "Mechanism",
            copy: "Offset cams lift twenty-one rods at different moments, turning separate movements into one wave.",
            items: [
              image(
                "waves/mechanism-cams.png",
                "Cam-and-follower study for the wave mechanism",
                672,
                588,
                {
                  caption:
                    "Offset cams lift each rod at a different moment, turning rotation into one traveling wave.",
                },
              ),
              image(
                "waves/mechanism-spacers.png",
                "Spacer study for the wave rods",
                672,
                588,
                {
                  caption:
                    "Paired spacers keep the twenty-one rods aligned as they rise and fall.",
                },
              ),
            ],
          },
          studio: {
            title: "Studio",
            items: [
              image("waves/view-01.jpg", "Finished wave installation in the studio", 1800, 1200),
              image("waves/view-02.jpg", "Second studio view of the wave installation", 1800, 1200),
              image("waves/view-03.jpg", "Close studio view of the wave installation", 1800, 1200),
            ],
          },
        },
        {
          id: "wind-wireframe",
          title: "03 / The whisper of wind",
          media: [
            image(
              "wind/wireframe-hd.jpg",
              "Labeled CAD wireframe of the three-tier wind installation",
              3600,
              2640,
            ),
          ],
          steps: ["Start one flip.", "Transfer rotation through gears.", "Move the paper in sequence."],
          supportingCarousel: {
            title: "Process",
            items: [
              image("wind/process-assembly.jpg", "Assembly sequence for the wind installation", 2200, 2010),
            ],
          },
          mechanism: {
            title: "Mechanism",
            copy: "A gear train carries one rotation across three tiers, creating a sequential flutter through paper and fabric.",
            items: [
              image(
                "wind/mechanism-gears.jpg",
                "Gear train study for the wind installation",
                800,
                687,
                {
                  caption:
                    "Interlocking gears carry one rotation across the frame so each flip follows the last.",
                },
              ),
              image(
                "wind/mechanism-joints.jpg",
                "Joint alignment study for the wind installation",
                800,
                687,
                {
                  caption:
                    "Printed joints clamp each tier to the acrylic sheet and keep the axles true.",
                },
              ),
              image(
                "wind/motion-study.jpg",
                "Motion-path study for the wind installation",
                413,
                698,
                {
                  caption:
                    "One disc flips; the motion transfers through the gears and travels across the paper.",
                },
              ),
            ],
          },
          studio: {
            title: "Studio",
            items: [
              image("wind/view-02.jpg", "The completed wind installation in the studio", 1800, 1200),
              image("wind/view-03.jpg", "Second studio view of the wind installation", 1800, 1200),
              image("wind/view-04.jpg", "Detail studio view of the wind installation", 1800, 1200),
              image("wind/view-05.jpg", "Final studio view of the wind installation", 1800, 1200),
            ],
          },
        },
      ],
    },
    {
      id: "outcome",
      number: "03",
      label: "Outcome",
      title: "A mechanical memory of nature",
      headline: "A mechanical memory of nature",
      lead: "Three transparent bodies. Each remembered movement stays visible.",
      modules: [
        {
          id: "final-outcome",
          title: "Final outcome",
          layout: "carousel",
          media: [
            image(
              "hero/final-installation.jpg",
              "Three completed installations together in the white studio",
              2200,
              1467,
            ),
            image(
              "outcome/installation-wide.jpg",
              "Wide view of the three completed installations",
              2200,
              1330,
            ),
            image(
              "outcome/installation-angle.jpg",
              "Angled studio view of the wave and plant installations",
              2200,
              1467,
            ),
          ],
        },
        {
          id: "final-video",
          title: "Final video",
          media: [
            video(
              "final.mp4",
              "Film of the completed Re:Sounding Nature installation in motion",
              "https://youtu.be/0j38oYFXYA8",
            ),
          ],
        },
      ],
    },
  ],
};
