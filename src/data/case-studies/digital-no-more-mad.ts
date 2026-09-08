/**
 * Digital No More Mad
 *
 * Page order follows the approved website structure:
 * Hero → Overview → Idea → Research → Process → Outcome → Project navigation.
 * Media is the high-resolution, semantically named export library.
 */

import type { CaseStudy } from "@/data/case-studies/types";

const media = "/images/projects/digital-no-more-mad";

export const digitalNoMoreMadCaseStudy: CaseStudy = {
  slug: "digital-nomad",
  category: "UI/UX",
  year: "2025",
  kicker: "Service Design · UI/UX · 2025",
  heroIntro:
    "A connected platform that helps independent professionals work, get paid, and grow across locations.",
  editorialTitle: "Designing a connected work ecosystem for digital nomads",
  summary:
    "Digital No More Mad is a service and interface design project for digital nomads. It brings project collaboration, cross-border payments, professional development, and community exchange into one connected platform, helping independent professionals work and live across locations with less friction.",
  hero: {
    src: `${media}/hero/digital-no-more-mad-hero.png`,
    alt: "Digital No More Mad mobile application shown across three angled phone mockups",
    width: 1439,
    height: 642,
  },
  metadata: [
    { label: "Role", value: "UI/UX Designer" },
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
      headline: "Designing a connected work ecosystem for digital nomads",
      lead:
        "The project began with a simple observation: remote workers can move freely between places, but the systems supporting their work remain fragmented. Payments, project communication, professional growth, and community resources often live in separate tools.",
      modules: [
        {
          id: "inspiration",
          title: "Inspiration",
          copy:
            "During a summer internship, I worked with colleagues who travelled while working remotely. Their experience introduced me to digital nomadism and raised a larger question: what infrastructure is needed to support work that is no longer tied to a single location?",
          pair: true,
          media: [
            {
              src: `${media}/idea/remote-work-inspiration.png`,
              alt: "Remote professionals working while travelling",
              caption: "Remote work observation",
              width: 1212,
              height: 600,
            },
            {
              src: `${media}/research/digital-nomad-enabling-factors-v2.png`,
              alt: "Diagram showing factors contributing to digital nomadism",
              caption: "Factors enabling digital nomadism",
              width: 1711,
              height: 1284,
            },
          ],
        },
        {
          id: "opportunity",
          title: "Design challenge",
          statement:
            "How might we help digital nomads manage cross-border work, collaborate more transparently, and continue growing professionally while moving between places?",
          layout: "cards",
          points: [
            {
              term: "Efficient cross-border work",
              detail: "Reduce friction across payments, project management, and daily services.",
            },
            {
              term: "Multi-channel collaboration",
              detail: "Connect clients, creators, and shared resources through one system.",
            },
            {
              term: "Personal development",
              detail: "Make skills, peer knowledge, and professional opportunities easier to exchange.",
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
      headline: "Understanding a mobile and distributed workforce",
      lead:
        "Desk research, interviews, persona development, and comparative case studies were used to understand how digital nomads work, what breaks across borders, and where a shared platform could create value.",
      modules: [
        {
          id: "desk-research",
          title: "Desk research",
          copy:
            "Digital nomadism is rapidly growing, globally distributed, and shaped by both work autonomy and geographic mobility.",
          layout: "explain",
          entries: [
            {
              id: "growth",
              title: "A rapidly growing workforce",
              role: "2018–2024",
              copy: "Location-independent work rose from about 4.5 million to 18 million. The steepest climb is in the United States, where remote jobs made mobility a default rather than a privilege.",
              media: {
                src: `${media}/research/digital-nomad-growth-chart-v2.png`,
                alt: "Bar and line chart showing the growth of digital nomadism from 2018 to 2024",
                width: 1891,
                height: 931,
              },
            },
            {
              id: "enablers",
              title: "A global pattern",
              role: "Universality",
              copy: "Digital nomads are active across countries and industries. The United States accounts for 47%, followed by the UK, Russia, Canada, and Germany — a spread, not a single-city scene.",
              media: {
                src: `${media}/research/global-distribution-map.jpg`,
                alt: "Global distribution map of digital nomads",
                width: 1620,
                height: 920,
              },
            },
            {
              id: "definition",
              title: "A working definition",
              role: "Work × mobility",
              copy: "Digital nomads sit where work focus meets high mobility. That separates them from business travellers, expats, and tourists, and sets the problems a platform has to solve.",
              media: {
                src: `${media}/research/digital-nomad-definition-matrix.png`,
                alt: "Matrix differentiating digital nomads from other mobile groups",
                width: 1365,
                height: 1143,
              },
            },
          ],
        },
        {
          id: "interviews-persona",
          title: "Interviews & persona",
          copy:
            "Conversations with a graphic designer and a manager surfaced recurring challenges beyond location independence. The findings were synthesized into the Alexander persona.",
          pair: true,
          media: [
            {
              src: `${media}/research/interviews-colin-ivy.png`,
              alt: "Interview profiles for Colin and Ivy",
              caption: "Interview participants",
              width: 1042,
              height: 546,
            },
            {
              src: `${media}/research/persona-alexander.png`,
              alt: "Persona profile for Alexander, a programmer and digital nomad",
              caption: "Primary persona",
              width: 1028,
              height: 520,
            },
          ],
        },
        {
          id: "insights",
          title: "Key insights",
          copy: "Four recurring problems shaped the product direction.",
          layout: "cards",
          points: [
            { term: "Professional growth", detail: "Distributed workers often lack a visible development path." },
            { term: "Reward distribution", detail: "Responsibilities and compensation can feel unclear or unfair." },
            { term: "Currency friction", detail: "Exchange rates and cross-border payments add cost and complexity." },
            { term: "Collaboration resources", detail: "Finding trusted people, skills, and local support takes time." },
          ],
        },
        {
          id: "ecosystem",
          title: "Stakeholder ecosystem",
          copy:
            "The cooperation map identified four connected resource groups: financial services, life services, social media channels, and collaboration communities. The digital nomad exchanges currency, information, and project opportunities with each group.",
          layout: "explain",
          media: [
            {
              src: `${media}/research/digital-nomad-resource-ecosystem.png`,
              alt: "Resource ecosystem connecting digital nomads with financial, life, social, and collaboration services",
              width: 2133,
              height: 1222,
            },
          ],
          entries: [
            {
              id: "finance",
              title: "Financial services",
              role: "Exchange currency",
              copy: "Banks, wallets, and payment rails move value across borders. Fees and conversion delays sit between finished work and usable money.",
            },
            {
              id: "life",
              title: "Life services",
              role: "Exchange currency",
              copy: "Housing, transport, and daily services are paid in local currency, so income has to convert again each time the nomad changes city.",
            },
            {
              id: "social",
              title: "Social media",
              role: "Post · Contact",
              copy: "Public channels are where work is shown and clients are reached. Visibility is high, but project terms stay informal and scattered.",
            },
            {
              id: "coop",
              title: "Collaboration communities",
              role: "Get in touch",
              copy: "Peer groups, DAOs, and skill-exchange circles are the expanded resource: they supply people, advice, and the next project.",
            },
          ],
        },
        {
          id: "comparative-cases",
          title: "Comparative cases",
          copy:
            "DAO-based distribution offers a model for transparent participation and reward allocation. Skill-exchange communities show how distributed workers can build expertise, networks, and long-term professional growth.",
          pair: true,
          media: [
            {
              src: `${media}/research/dao-distribution-case-study-v2.png`,
              alt: "Purple network visual representing DAO-based distribution and voting",
              caption: "DAO-based distribution",
              width: 777,
              height: 462,
            },
            {
              src: `${media}/research/skill-exchange-community-case-study.png`,
              alt: "Group of people representing skill exchange and peer learning",
              caption: "Skill-exchange communities",
              width: 777,
              height: 465,
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
      headline: "Translating insights into a service ecosystem",
      lead:
        "Research insights were converted into platform principles, an end-to-end service flow, a system map, and a reusable interface language.",
      modules: [
        {
          id: "feature-mapping",
          title: "Insight-to-feature mapping",
          copy:
            "Each core research problem leads to a focused design response: DAO-inspired voting and token distribution, community publishing and AI-supported management, skill exchange, and a token wallet with local redemption.",
          points: [
            { term: "Unequal collaboration and compensation", detail: "DAO-inspired voting and token distribution" },
            { term: "Limited collaboration resources", detail: "Community publishing and AI-supported management" },
            { term: "Unclear professional growth", detail: "Skill exchange and experience sharing" },
            { term: "Cross-border payment friction", detail: "Token wallet and local redemption" },
          ],
        },
        {
          id: "design-principles",
          title: "Concept direction",
          copy: "The concept combines transparent cooperation, efficient work, multi-channel communication, and personal development.",
          layout: "explain",
          media: [
            {
              src: `${media}/process/conceptualization-mapping.png`,
              alt: "Conceptualization map connecting problems with design responses",
              width: 1950,
              height: 1212,
            },
            {
              src: `${media}/process/design-concept-principles.png`,
              alt: "Three visual principles for the design concept",
              width: 1062,
              height: 438,
            },
          ],
          entries: [
            {
              id: "cooperation",
              title: "Transparent cooperation",
              role: "DAO model",
              copy: "Unequal collaboration is answered with voting and token distribution, so contribution and reward stay visible to everyone involved.",
            },
            {
              id: "channels",
              title: "Multi-channel communication",
              role: "AI-supported publishing",
              copy: "Limited collaboration resources are answered by community posting plus AI tools that help manage accounts across channels.",
            },
            {
              id: "growth-path",
              title: "Personal development",
              role: "Skill exchange",
              copy: "Unclear growth is answered by a community where nomads trade skills, experience, and longer-term development advice.",
            },
            {
              id: "efficiency",
              title: "Efficient working conditions",
              role: "Connected workspace",
              copy: "Projects, payment, and feedback sit in one place, so moving city does not mean rebuilding a new set of tools.",
            },
          ],
        },
        {
          id: "service-flow",
          title: "Service flow",
          copy:
            "A client posts a project; a digital nomad accepts it; both parties confirm an agreement; a mid-project check aligns progress; the client reviews the final work; and approved work can be shared to community and social channels.",
          steps: [
            "Client posts a project requirement.",
            "Digital nomad reviews and accepts the work.",
            "Both parties confirm a short-term agreement.",
            "A mid-project check aligns progress and direction.",
            "The client reviews the final work and submits feedback.",
            "Approved work is shared to community and social channels.",
          ],
          media: [
            {
              src: `${media}/process/service-flow.png`,
              alt: "Six-step service flow for the Digital No More Mad platform",
              caption: "End-to-end service flow",
              width: 1502,
              height: 994,
            },
          ],
        },
        {
          id: "system-map",
          title: "System map",
          copy:
            "The platform acts as a currency medium, an information center for matching clients and collaborators, and a development hub where digital nomads exchange skills and experience.",
          layout: "map",
          media: [
            {
              src: `${media}/process/system-map.png`,
              alt: "System map showing flows among digital nomads, clients, the platform, and banks",
              width: 1080,
              height: 566,
            },
          ],
          entries: [
            {
              id: "client",
              title: "Client",
              role: "Requirements · budget",
              copy: "Posts a brief and budget, receives an appropriate collaborator, and reviews the finished work.",
            },
            {
              id: "nomad",
              title: "Digital nomad",
              role: "Work · tokens · growth",
              copy: "Receives matched work and development advice, delivers the project outcome, and can convert tokens into local currency.",
            },
            {
              id: "platform",
              title: "Platform",
              role: "Match · mediate · develop",
              copy: "Sits in the middle as a currency medium, an information center for matching, and a hub for skill exchange.",
            },
            {
              id: "bank",
              title: "Bank",
              role: "Currency",
              copy: "Supplies local currency so tokens earned on the platform can be redeemed where the nomad is living.",
            },
          ],
        },
        {
          id: "visual-system",
          title: "Visual system",
          copy:
            "A focused purple identity, SF Pro, and rounded outline icons create a consistent mobile product language.",
          layout: "visual",
          typeSpec: {
            family: "SF Pro",
            usage: "Regular and Medium · product UI type",
            scale: [
              { role: "Title", family: "SF Pro Bold", size: "16", hex: "#6132FD" },
              { role: "Sub-title", family: "SF Pro Bold", size: "14", hex: "#656565" },
              { role: "Body", family: "SF Pro Regular", size: "12", hex: "#656565" },
              { role: "Hint", family: "SF Pro Regular", size: "10", hex: "#767676" },
            ],
          },
          swatches: [
            { hex: "#6132FD", label: "#6132FD", name: "Brand", usage: "Primary actions, identity, and key icons." },
            { hex: "#767676", label: "#767676", name: "Neutral", usage: "Secondary text, inactive icons, and supporting UI." },
            { hex: "#FF6868", label: "#FF6868", name: "Alert", usage: "Warnings, errors, and urgent states." },
            { hex: "#FFFFFF", label: "#FFFFFF", name: "Surface", usage: "Backgrounds, cards, and open space." },
          ],
          media: [
            {
              src: `${media}/process/product-icon-system.png`,
              alt: "Rounded outline icons used across the Digital No More Mad mobile interface",
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
      headline: "A connected platform for work, value, and community",
      lead:
        "The final prototype brings project collaboration, token-based payment, community exchange, and AI-assisted publishing into one mobile experience.",
      modules: [
        {
          id: "core-experience",
          title: "Core product experience",
          copy: "Four connected feature groups support the day-to-day experience.",
          layout: "gallery",
          entries: [
            {
              id: "home",
              title: "Home and project workspace",
              copy: "Shortcuts connect the wallet, project list, feedback, and forum.",
              media: { src: `${media}/outcome/home-page-interface-v2.png`, alt: "Digital No More Mad home and project interface", width: 846, height: 865 },
            },
            {
              id: "forum",
              title: "Community forum",
              copy: "Community, Skill Exchange, and Experience channels for sharing knowledge.",
              media: { src: `${media}/outcome/community-forum-interface-v2.png`, alt: "Digital No More Mad community forum", width: 1006, height: 1020 },
            },
            {
              id: "wallet",
              title: "Token wallet",
              copy: "Project participation creates value that can be transferred or converted into local currency.",
              media: { src: `${media}/outcome/token-wallet-interface-v2.png`, alt: "Digital No More Mad token wallet", width: 696, height: 849 },
            },
            {
              id: "feedback",
              title: "AI-assisted feedback and publishing",
              copy: "The platform structures client feedback and helps users adapt approved work for social channels.",
              media: { src: `${media}/outcome/ai-feedback-interface-v2.png`, alt: "Digital No More Mad AI feedback flow", width: 900, height: 1053 },
            },
          ],
        },
        {
          id: "storyboard",
          title: "End-to-end storyboard",
          copy:
            "The storyboard follows the complete experience from a client posting a brief to a digital nomad receiving token-based payment that can be redeemed locally.",
          layout: "gallery",
          entries: [
            ["01", "Post a project"], ["02", "Accept the work"], ["03", "Confirm agreement"],
            ["04", "Produce the work"], ["05", "Review together"], ["06", "Receive payment"],
          ].map(([number, title]) => ({
            id: `storyboard-${number}`,
            title,
            media: {
              src: `${media}/outcome/storyboard-${number}.jpg`,
              alt: `Storyboard step ${number}: ${title.toLowerCase()}`,
              width: 1200,
              height: 800,
            },
          })),
        },
        {
          id: "final-value",
          title: "Final value",
          copy:
            "One service ecosystem connects short-term project delivery with long-term mobility and professional development.",
          layout: "cards",
          points: [
            { term: "Work", detail: "A clearer path from project discovery to delivery." },
            { term: "Value", detail: "More transparent compensation across currencies and locations." },
            { term: "Growth", detail: "Shared resources that help independent professionals develop over time." },
          ],
        },
      ],
    },
  ],
};
