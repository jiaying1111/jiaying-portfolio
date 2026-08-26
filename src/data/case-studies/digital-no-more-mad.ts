/**
 * Digital No More Mad case study.
 *
 * Copy, section order, and image-to-copy relationships come from
 * outputs/digital-no-more-mad-website-structure/full-page-layout.html.
 * Media comes from the approved export in
 * public/images/projects/digital-no-more-mad/ (README-media-map.md order).
 * Layout and type belong to Frame 13-2, not to the source HTML.
 */

export type CaseStudyMedia = {
  src: string;
  alt: string;
  caption?: string;
  /** Intrinsic pixel size of the export; also caps the rendered width. */
  width: number;
  height: number;
  /** Rendered width when Frame 13-2 places the image below its intrinsic size. */
  displayWidth?: number;
};

/** A titled text + image pair inside a module, e.g. one research finding. */
export type CaseStudyEntry = {
  id: string;
  title: string;
  copy: string;
  media?: CaseStudyMedia;
};

export type CaseStudyModule = {
  id: string;
  title: string;
  copy?: string;
  /** Set apart from `copy` at display size — the HTML "how might we" question. */
  statement?: string;
  points?: { term: string; detail: string }[];
  steps?: string[];
  entries?: CaseStudyEntry[];
  media?: CaseStudyMedia[];
};

export type CaseStudyChapter = {
  id: string;
  number: string;
  label: string;
  title: string;
  lead: string;
  modules: CaseStudyModule[];
};

export type CaseStudy = {
  slug: string;
  category: string;
  year: string;
  summary: string;
  hero: CaseStudyMedia;
  metadata: { label: string; value: string }[];
  chapters: CaseStudyChapter[];
};

const media = "/images/projects/digital-no-more-mad";

export const digitalNoMoreMadCaseStudy: CaseStudy = {
  slug: "digital-nomad",
  category: "UIUX",
  year: "2025",
  summary:
    "This project focuses on digital nomadism, building a platform that helps digital nomads expand cooperation channels, grow sustainably, and work and live efficiently. The app integrates various services to enable smoother collaboration between digital nomads and their clients.",
  hero: {
    src: `${media}/hero/digital-no-more-mad-hero.png`,
    alt: "Digital No More Mad mobile screens shown across three angled phone mockups",
    width: 1439,
    height: 642,
  },
  metadata: [
    { label: "Role", value: "UIUX" },
    { label: "Tools", value: "Figma" },
    { label: "Duration", value: "2 months" },
    { label: "Type", value: "Independent Project" },
  ],
  chapters: [
    {
      id: "idea",
      number: "01",
      label: "Idea",
      title: "Designing a connected work ecosystem for digital nomads",
      lead: "Remote workers can move freely between places, but the systems supporting their work remain fragmented. Payments, project communication, professional growth, and community resources often live in separate tools.",
      modules: [
        {
          id: "inspiration",
          title: "Inspiration",
          copy: "During a summer internship, I worked with colleagues who travelled while working remotely. Their experience raised a larger question: what infrastructure is needed to support work that is no longer tied to a single location?",
          media: [
            {
              src: `${media}/idea/remote-work-inspiration.png`,
              alt: "Two remote workers on either side of a globe, connected by a line, with office colleagues faded into the background",
              caption: "Remote work observation",
              width: 1212,
              height: 600,
              displayWidth: 606,
            },
          ],
        },
        {
          id: "opportunity",
          title: "Opportunity",
          copy: "The platform should become more than a productivity tool. It should connect the financial, social, and professional infrastructure needed for a mobile working life.",
          statement:
            "How might we help digital nomads manage cross-border work, collaborate more transparently, and continue growing professionally?",
          points: [
            {
              term: "Efficient cross-border work",
              detail:
                "Reduce friction across payments, project management, and daily services.",
            },
            {
              term: "Multi-channel collaboration",
              detail:
                "Connect clients, creators, and shared resources through one system.",
            },
            {
              term: "Personal development",
              detail:
                "Make skills, peer knowledge, and professional opportunities easier to exchange.",
            },
          ],
        },
      ],
    },
    {
      id: "research",
      number: "02",
      label: "Research",
      title: "Understanding a mobile and distributed workforce",
      lead: "Desk research, interviews, persona development, and comparative cases revealed what breaks across borders and where a connected platform could create value.",
      modules: [
        {
          id: "desk-research",
          title: "Desk research",
          copy: "Digital nomadism is rapidly growing, globally distributed, and shaped by both work autonomy and geographic mobility.",
          media: [
            {
              src: `${media}/research/digital-nomad-enabling-factors.png`,
              alt: "Diagram placing the digital nomad at the centre of five enabling factors: increasing international mobility, wireless communication, transportation system enhancement, global relative wealth, and flexibility of working lives",
              caption: "Factors enabling digital nomadism",
              width: 814,
              height: 466,
            },
            {
              src: `${media}/research/digital-nomad-growth-chart.png`,
              alt: "Combined bar and line chart showing digital nomad numbers rising from under 5 in 2018 to over 18 in 2024",
              caption: "Growth of location-independent work",
              width: 1716,
              height: 894,
            },
          ],
        },
        {
          id: "interviews",
          title: "Interviews",
          copy: "I interviewed Colin, a graphic designer with three years of digital-nomad experience, and Ivy, a manager with five years of experience. Both valued the freedom of the working model, and both described problems that had nothing to do with location.",
          media: [
            {
              src: `${media}/research/interviews-colin-ivy.png`,
              alt: "Interview profiles for Colin, a graphic designer of three years, and Ivy, a manager of five years, listing their comments on freedom, personal development, exchange rates, collaboration resources, salary distribution, and accommodation",
              caption: "Interview participants",
              width: 1042,
              height: 546,
            },
          ],
        },
        {
          id: "persona",
          title: "Persona",
          copy: "Alexander is a programmer who has worked as a digital nomad for one year and moves between roughly five countries each year. He wants to focus on meaningful work while spending less time managing fragmented daily operations.",
          media: [
            {
              src: `${media}/research/persona-alexander.png`,
              alt: "Persona board for Alexander, a programmer working across five countries a year, listing his needs, pain points, and expectations",
              caption: "Primary persona",
              width: 1028,
              height: 520,
            },
          ],
        },
        {
          id: "findings",
          title: "Research findings",
          copy: "Four themes recurred across the interviews and the persona.",
          entries: [
            {
              id: "professional-growth",
              title: "Professional growth",
              copy: "Distributed workers often lack a visible development path.",
              media: {
                src: `${media}/research/pain-point-personal-development.png`,
                alt: "Personal development pain point: without a promotion system inside a company, a digital nomad has no clear individual development plan",
                width: 938,
                height: 310,
              },
            },
            {
              id: "unequal-distribution",
              title: "Unequal distribution",
              copy: "Responsibilities and compensation can feel unclear.",
              media: {
                src: `${media}/research/pain-point-unequal-distribution.png`,
                alt: "Unequal distribution pain point: work and reward are not shared evenly across a distributed team",
                width: 988,
                height: 298,
              },
            },
            {
              id: "currency-friction",
              title: "Currency friction",
              copy: "Exchange rates and cross-border payments add cost.",
              media: {
                src: `${media}/research/pain-point-currency-exchange.png`,
                alt: "Currency exchange pain point: converting payments between currencies loses value for the digital nomad",
                width: 964,
                height: 346,
              },
            },
            {
              id: "limited-resources",
              title: "Limited resources",
              copy: "Trusted collaborators and local support take time to find.",
            },
          ],
        },
        {
          id: "ecosystem",
          title: "Stakeholder ecosystem",
          copy: "Financial services, life services, social media, and collaboration communities form the resource network around each digital nomad, who exchanges currency, information, and project opportunities with every group.",
          media: [
            {
              src: `${media}/research/stakeholder-cooperation-map.png`,
              alt: "Cooperation map with the digital nomad at the centre exchanging currency with financial and life services and contacting social media and cooperation resources",
              caption: "Cooperation map",
              width: 1622,
              height: 874,
            },
          ],
        },
        {
          id: "comparative-cases",
          title: "Comparative cases",
          copy: "DAO participation and skill-exchange communities suggest a system combining transparent value distribution with active knowledge sharing.",
          media: [
            {
              src: `${media}/research/dao-distribution-case-study.png`,
              alt: "Case study of DAO distribution, explaining token-based membership and how it could balance cooperation between digital nomads",
              caption: "Transparent value distribution",
              width: 854,
              height: 516,
            },
            {
              src: `${media}/research/skill-exchange-case-study.png`,
              alt: "Case study of a skill exchange community, showing how distributed workers trade expertise and build professional networks",
              caption: "Professional development",
              width: 844,
              height: 454,
            },
          ],
        },
      ],
    },
    {
      id: "process",
      number: "03",
      label: "Process",
      title: "Translating insights into a service ecosystem",
      lead: "Research insights were converted into platform principles, an end-to-end service flow, a system map, and a reusable interface language.",
      modules: [
        {
          id: "feature-mapping",
          title: "Insight-to-feature mapping",
          copy: "Each core research problem leads to a focused design response rather than an isolated feature.",
          points: [
            {
              term: "Unequal collaboration and compensation",
              detail: "DAO-inspired voting and token distribution.",
            },
            {
              term: "Limited collaboration resources",
              detail: "Community publishing and AI-supported management.",
            },
            {
              term: "Unclear professional growth",
              detail: "Skill exchange and experience sharing.",
            },
            {
              term: "Cross-border payment friction",
              detail: "Token wallet and local redemption.",
            },
          ],
          media: [
            {
              src: `${media}/process/insight-to-feature-mapping.png`,
              alt: "Diagram linking three research problems to three platform responses: managing social media with AI tools, using a DAO cooperation model, and establishing a community and skill-exchange platform",
              caption: "Mapping findings to features",
              width: 1044,
              height: 520,
            },
          ],
        },
        {
          id: "concept-direction",
          title: "Concept direction",
          copy: "The concept combines transparent cooperation, efficient work, multi-channel communication, and personal development.",
          media: [
            {
              src: `${media}/process/design-concept-principles.png`,
              alt: "Collage illustrating the three design principles: efficient working conditions, multi-channel communication, and personal development",
              caption: "Three design principles",
              width: 1062,
              height: 438,
            },
          ],
        },
        {
          id: "service-flow",
          title: "Service flow",
          copy: "The platform connects project posting, acceptance, contracting, progress checks, feedback, and social publishing.",
          steps: [
            "Client posts a project requirement.",
            "Digital nomad reviews and accepts the work.",
            "Both parties confirm an agreement.",
            "A mid-project check aligns progress.",
            "The client reviews and gives feedback.",
            "Approved work moves into community channels.",
          ],
          media: [
            {
              src: `${media}/process/service-flow.png`,
              alt: "Six-step service flow diagram covering order posting, job acceptance, mid-term check, final check, customer feedback, and synchronising to social media",
              caption: "End-to-end service flow",
              width: 1502,
              height: 994,
            },
          ],
        },
        {
          id: "system-map",
          title: "System map",
          copy: "The platform acts as a currency medium, an information center, and a professional-development hub.",
          media: [
            {
              src: `${media}/process/system-map.png`,
              alt: "System map showing requirements and budget flowing from the client to the platform, tokens and local currency flowing to the digital nomad, and currency arriving from the bank",
              caption: "Platform system map",
              width: 1080,
              height: 566,
            },
          ],
        },
        {
          id: "visual-system",
          title: "Visual system",
          copy: "A focused purple identity, neutral typography, and rounded outline icons create a consistent mobile product language.",
          media: [
            {
              src: `${media}/process/product-icon-system.png`,
              alt: "Product icon set drawn as rounded outlines, with primary actions in purple and secondary navigation icons in grey",
              caption: "Product icon system",
              width: 1494,
              height: 470,
            },
          ],
        },
      ],
    },
    {
      id: "outcome",
      number: "04",
      label: "Outcome",
      title: "A connected platform for work, value, and community",
      lead: "The final prototype brings project collaboration, token-based payment, community exchange, and AI-assisted publishing into one mobile experience.",
      modules: [
        {
          id: "journey",
          title: "End-to-end journey",
          copy: "The storyboard follows the complete journey from posting a brief to receiving token-based payment redeemable in local currency.",
          media: [
            {
              src: `${media}/outcome/storyboard-user-journey.png`,
              alt: "Six-panel storyboard: a customer posts a project requirement, a digital nomad accepts it from a beach, both sides sign a short-term contract online, the nomad produces the work, client and nomad review it together, and the nomad receives token payment redeemable as local currency",
              caption: "Six-step user journey",
              width: 1778,
              height: 1008,
            },
          ],
        },
        {
          id: "final-interface",
          title: "Final interface",
          copy: "Four connected feature groups support the full experience, from finding work to building long-term professional value.",
          media: [
            {
              src: `${media}/outcome/home-page-interface.png`,
              alt: "Home page screens showing project progress, a function shortcut row, and a flexible notification bar with a notification list",
              caption: "Home and project workspace",
              width: 1664,
              height: 916,
            },
            {
              src: `${media}/outcome/forum-interface.png`,
              alt: "Community forum screens with Community, Skill Exchange, and Experience channels",
              caption: "Community forum",
              width: 1864,
              height: 1002,
            },
            {
              src: `${media}/outcome/token-transfer-interface.png`,
              alt: "Token transfer screens showing accumulated token income and a currency selection list for converting tokens into local currency",
              caption: "Token wallet and transfer",
              width: 1828,
              height: 954,
            },
            {
              src: `${media}/outcome/ai-feedback-interface.png`,
              alt: "AI-assisted feedback screens that summarise client comments and prepare approved work for publishing",
              caption: "AI-assisted feedback and publishing",
              width: 1810,
              height: 1040,
            },
          ],
        },
        {
          id: "final-value",
          title: "Final value",
          copy: "One service ecosystem connects short-term project delivery with long-term mobility and professional development.",
          points: [
            {
              term: "Work",
              detail: "A clearer path from project discovery to delivery.",
            },
            {
              term: "Value",
              detail: "More transparent compensation across locations.",
            },
            {
              term: "Growth",
              detail: "Shared resources for long-term development.",
            },
          ],
        },
        {
          id: "reflection",
          title: "Reflection",
          copy: "The prototype establishes a complete service concept and interaction direction. The next phase should validate the token model, trust in DAO-inspired collaboration, and the clarity of the combined feature set through real project scenarios.",
        },
      ],
    },
  ],
};

export const caseStudiesBySlug: Record<string, CaseStudy> = {
  [digitalNoMoreMadCaseStudy.slug]: digitalNoMoreMadCaseStudy,
};

export function getCaseStudyBySlug(slug: string) {
  return caseStudiesBySlug[slug];
}
