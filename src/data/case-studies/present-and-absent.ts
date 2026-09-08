import type { CaseStudy, CaseStudyEntry, CaseStudyMedia } from "@/data/case-studies/types";

const root = "/images/artwork/present-and-absent";

function image(
  path: string,
  alt: string,
  width: number,
  height: number,
  extras: Partial<CaseStudyMedia> = {},
): CaseStudyMedia {
  return { src: `${root}/${path}`, alt, width, height, ...extras };
}

function video(alt: string): CaseStudyMedia {
  return {
    src: "https://youtu.be/qMYnkuJSPCs",
    youtube: "https://youtu.be/qMYnkuJSPCs",
    alt,
    width: 3840,
    height: 2160,
    kind: "video",
    poster: `${root}/outcome/glow.png`,
  };
}

function entry(
  id: string,
  title: string,
  kicker: string,
  role: string,
  media?: CaseStudyMedia,
): CaseStudyEntry {
  return { id, title, copy: kicker, role, media };
}

export const presentAndAbsentCaseStudy: CaseStudy = {
  slug: "present-and-absent",
  title: "Present & Absent",
  category: "Motion Capture Performance",
  year: "2025",
  kicker: "Motion Capture Performance 2025",
  heroIntro:
    "Before I was born, my mother underwent eight abortions because of the traditional preference for sons, and I became the “ninth daughter” who was allowed to live.",
  editorialTitle: "The daughters who never arrived",
  summary:
    "This accidental permission to exist has always made me question: why was I the one who survived? Why did I have to lose so many sisters? The deep-rooted cultural bias of valuing men over women is embedded in our social structure—it caused their absence and made me realize that whether a life is allowed to appear or not is often determined not by fate, but by gender. It made me question the value of my own existence and forced me to build a fragile, imaginary bond with my sisters through endless remembrance. In this project, I created a virtual sister character. Through motion-capture technology and performance, I explore the fractured connections between bloodline, fate, and gender, as well as my longing for those who never came into being. I hope this work allows the voices of the absent to be heard, brings light to those who should have shone, and invites reflection on the injustices that have too long been overlooked.",
  hero: image(
    "outcome/glow.png",
    "Warm light dissolving into darkness",
    1920,
    1080,
  ),
  metadata: [
    { label: "Role", value: "Artist & Performer" },
    { label: "Methods", value: "Motion capture, 3D character design" },
    { label: "Media", value: "Live and digital performance" },
    { label: "Year", value: "2025" },
  ],
  links: [{ label: "Video link", href: "https://youtu.be/qMYnkuJSPCs" }],
  chapters: [
    {
      id: "idea",
      number: "01",
      label: "Idea",
      title: "The daughters who never arrived",
      headline: "The daughters who never arrived",
      lead:
        "The heart of this project beats within a silent chapter of my family’s past.",
      modules: [
        {
          id: "inspiration",
          title: "Inspiration",
          copy:
            "I was the ninth daughter. Eight unborn sisters linger in memory, their absence shaping who I am. I often imagine the lives we might have shared, the laughter we never knew. Their silence has taught me to see the weight of gender, the quiet sorrow of inequality.",
        },
        {
          id: "influence-factor",
          title: "Influence factor",
          copy: "Patriarchal roots in China’s clan system and economic structure.",
          layout: "gallery",
          entries: [
            entry(
              "clan",
              "Patriarchal clan system",
              "01",
              "In traditional China, patriarchal families valued sons for lineage, inheritance, elder support, and ancestral duties.",
              image(
                "idea/clan-ceremony.png",
                "A clan ceremony with offerings, a roasted pig, and men gathered in a courtyard",
                700,
                316,
              ),
            ),
            entry(
              "filial",
              "Filial support",
              "02",
              "Without welfare systems, parents depended on sons for support, as married daughters joined husbands’ families and lost that role.",
              image(
                "idea/family-care.png",
                "A younger man carrying an older relative in a domestic interior",
                989,
                447,
              ),
            ),
            entry(
              "policy",
              "Political factor",
              "03",
              "China’s one-child policy heightened son preference, as families sought lineage continuity and security for parents’ old age.",
              image(
                "idea/family-planning-slogan.png",
                "Children standing in front of a family-planning slogan",
                994,
                447,
              ),
            ),
          ],
        },
        {
          id: "personal-experience",
          title: "Personal experience",
          copy:
            "Growing up amid son preference and lost sisters, I question my existence, carrying their absence with grief and empathy, seeking love, identity, and reconciliation through remembrance.",
        },
        {
          id: "design-concept",
          title: "Design concept",
          copy:
            "Inspired by Ana Mendieta’s female existence studies and Tobias Gremmler’s motion capture, I create a digital sister, exploring memory, loss, and remembrance, reaching for the tenderness of blood ties amid an unjust world, alongside my unseen siblings. # Cross-dimensional  # Digital and Reality  # Performance Art",
        },
      ],
    },
    {
      id: "research",
      number: "02",
      label: "Research",
      title: "Sex selection in China",
      headline: "Sex selection in China",
      lead: "The data below shows sex-selection in every stage of pregnancy.",
      modules: [
        {
          id: "sex-selection",
          title: "Across stages of life",
          layout: "cards",
          points: [
            {
              term: "Early pregnancy",
              detail:
                "IVF with preimplantation genetic testing can enable illegal embryo sex selection and distort birth ratios.",
            },
            {
              term: "Pregnancy",
              detail:
                "Son preference and policy pressure drive sex-selective abortion during pregnancy.",
            },
            {
              term: "Later stages",
              detail:
                "In poorer regions, postnatal abandonment of female infants continues to burden families and the welfare system.",
            },
          ],
        },
        {
          id: "impact",
          title: "Impact",
          copy: "Sex selection in China leads to impacts that extend beyond a single family.",
          layout: "cards",
          points: [
            {
              term: "Severe gender imbalance",
              detail:
                "China’s latest census shows a sex ratio of 105.07, leaving about 35 million more men than women nationwide.",
            },
            {
              term: "Marriage squeeze",
              detail:
                "Severe gender imbalance has created a large surplus of marriageable men, particularly in rural China, deepening social and demographic challenges.",
            },
            {
              term: "Increase in sexual crimes",
              detail:
                "In a male-dominated society, women become objectified as scarce resources, fueling distorted attitudes and rising sexual violence.",
            },
            {
              term: "Physical harm to women",
              detail:
                "Repeated abortions severely damage women’s reproductive health, increasing the risk of intrauterine adhesions and long-term fertility complications.",
            },
            {
              term: "Psychological trauma",
              detail:
                "Forced abortions inflict severe psychological trauma on women, leading to guilt, grief, depression, and long-term post-traumatic stress disorder.",
            },
          ],
        },
        {
          id: "questionnaire",
          title: "Questionnaire",
          copy: "A total of 130 people filled out the questionnaire.",
          layout: "gallery",
          entries: [
            entry(
              "common-today",
              "Still common today?",
              "01",
              "Do you think the preference for sons over daughters is still common today? Male 43 · Female 87",
              image(
                "research/gender-comparison.png",
                "Grouped bars comparing male and female answers on whether son preference is still common",
                1000,
                560,
              ),
            ),
            entry(
              "treatment",
              "Different treatment",
              "02",
              "Do families with multiple children around you show different attitudes or treatment toward sons and daughters?",
              image(
                "research/preference-pie.png",
                "Pie chart of yes, uncertain, and no responses on different treatment of sons and daughters",
                1000,
                560,
              ),
            ),
            entry(
              "family",
              "Family relationships",
              "03",
              "Do you think son preference affects family relationships?",
              image(
                "research/questionnaire-yes-no.png",
                "Bar chart showing 75.38 percent yes and 24.62 percent no",
                1000,
                560,
              ),
            ),
            entry(
              "impacts",
              "Impacts on women",
              "04",
              "What do you think are the main impacts of son preference on women?",
              image(
                "research/social-impacts.png",
                "Bar chart of reported impacts of son preference on women",
                1000,
                560,
              ),
            ),
          ],
        },
        {
          id: "interview",
          title: "Interview",
          copy: "I conducted interviews with my friends. I summarize the insights as below.",
          layout: "cards",
          points: [
            {
              term: "01",
              detail: "Son preference brought life, loss, and irreversible maternal suffering.",
            },
            {
              term: "02",
              detail: "Parental son preference rendered me invisible within my own family.",
            },
            {
              term: "03",
              detail: "Son preference breeds doubt about the value of existence.",
            },
          ],
        },
      ],
    },
    {
      id: "process",
      number: "03",
      label: "Process",
      title: "Character design development",
      headline: "Character design development",
      lead:
        "The virtual sister is built from symbols of grief, concealment, lineage, and care. Motion capture lets one live body lend her movement without collapsing the distance between them.",
      modules: [
        {
          id: "character-sketch",
          title: "Character design sketch",
          media: [
            image(
              "process/character-sheet.png",
              "Front and back line drawings of the virtual sister in a sleeveless dress and veiled hat",
              2031,
              1912,
            ),
          ],
        },
        {
          id: "scene-design",
          title: "Scene design",
          copy:
            "Six framed panels form a broken circle. The performer moves inside a family arrangement that never closes.",
          media: [
            image(
              "process/installation-model.png",
              "3D model of six framed panels arranged in a circle around a small figure",
              2284,
              1136,
            ),
          ],
        },
        {
          id: "character-sheet",
          title: "The virtual sister",
          media: [
            image(
              "process/character-symbols.png",
              "Annotated character sheet of the virtual sister, with callouts for the daylily, eight hair knots, gauze hat, and visible dress stitching",
              1754,
              920,
            ),
          ],
        },
        {
          id: "motion-tracking",
          title: "Motion tracking",
          layout: "gallery",
          entries: [
            entry(
              "studio",
              "Studio",
              "01",
              "Black frames and pooled fabric mark the path the body will take.",
              image(
                "process/studio-setup.png",
                "Green-screen studio with black metal frames and fabric arranged in a circle",
                1196,
                897,
              ),
            ),
            entry(
              "volume",
              "Capture volume",
              "02",
              "A T-pose calibrates the space between live body and digital sister.",
              image(
                "process/capture-volume.png",
                "Artist in a motion-capture suit standing in a T-pose among black fabric frames",
                1202,
                903,
              ),
            ),
            entry(
              "suit",
              "Capture suit",
              "03",
              "Markers on the body become the sister’s joints.",
              image(
                "process/mocap-suit.png",
                "Artist adjusting a black motion-capture suit in front of a green screen",
                1196,
                880,
              ),
            ),
            entry(
              "markers",
              "Tracking points",
              "04",
              "Light on the legs is the only part of the body the camera needs.",
              image(
                "process/tracking-markers.png",
                "Motion-capture markers glowing on a performer’s legs in red stage light",
                1196,
                880,
              ),
            ),
          ],
        },
        {
          id: "data-processing",
          title: "Data processing",
          media: [
            image(
              "process/data-tracking.jpg",
              "Two studio monitors showing a blocky white rig and a T-pose skeleton of the virtual sister",
              1164,
              870,
            ),
          ],
        },
      ],
    },
    {
      id: "outcome",
      number: "04",
      label: "Outcome",
      title: "Final outcome",
      headline: "Final outcome",
      lead:
        "Live body and digital sister share the same dark field. Presence is temporary; absence continually returns.",
      modules: [
        {
          id: "final-performance",
          title: "Final outcome",
          media: [
            image(
              "outcome/live-and-digital.png",
              "Live performer in red light beside the white digital sister in the same pose",
              4579,
              1119,
            ),
            image(
              "outcome/gesture-and-markers.png",
              "Digital sister reaching upward beside motion-capture markers on a live performer’s legs",
              4580,
              1119,
            ),
            image(
              "outcome/lantern-diptych.png",
              "A woven lantern held in darkness beside a hand reaching toward a red light",
              4584,
              1121,
            ),
          ],
        },
        {
          id: "final-video",
          title: "Final video",
          media: [video("Film of the Present & Absent motion-capture performance")],
        },
      ],
    },
  ],
};
