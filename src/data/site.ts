import { aboutPortrait, heroSlideImages, socialIcons } from "@/data/assets";
import type { MediaAsset } from "@/data/assets";

export const siteIdentity = {
  logo: "JIAYING LI",
  displayName: "Jiaying Li",
  role: "Experience Designer and Illustrator",
  biography:
    "Jiaying Li is an Experience Designer and Illustrator. Her practice explores the intersection of emerging technologies, storytelling, and human-centered design.",
  email: "jiaying_li@gsd.harvard.edu",
} as const;

export const navigation = [
  { href: "/experience-design", label: "Experience Design" },
  { href: "/artwork", label: "Artwork" },
  { href: "/about", label: "About" },
] as const;

export type SocialControl = {
  id: string;
  label: string;
  icon: MediaAsset;
  /** Null until docs/content.md records a verified personal destination. */
  href: string | null;
};

export const socialControls: SocialControl[] = [
  {
    id: "email",
    label: "Email Jiaying Li",
    icon: socialIcons.email,
    href: `mailto:${siteIdentity.email}`,
  },
  {
    id: "instagram",
    label: "Instagram (link pending verification)",
    icon: socialIcons.instagram,
    href: null,
  },
  {
    id: "linkedin",
    label: "Jiaying Li on LinkedIn",
    icon: socialIcons.linkedin,
    href: "https://www.linkedin.com/in/jiaying-li-a71b5324a/",
  },
];

export type HeroSlide = {
  id: string;
  /** Small line above the display line: greeting on slide 1, category after. */
  eyebrow: string;
  /** Italic display line. */
  display: string;
  summary: string;
  image: MediaAsset;
  href: string | null;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "intro",
    eyebrow: "Hi, this is",
    display: "JIAYING LI",
    summary: "I believe every interaction tells a story.",
    image: heroSlideImages.intro,
    href: "/artwork",
  },
  {
    id: "digital-no-more-mad",
    eyebrow: "UIUX",
    display: "Digital No More Mad",
    summary:
      "A platform that helps digital nomads expand cooperation and grow sustainably.",
    image: heroSlideImages.digitalNoMoreMad,
    href: "/projects/digital-nomad",
  },
  {
    id: "dreamwhorl",
    eyebrow: "Product Design",
    display: "DreamWhorl",
    summary: "DreamWhorl lets children speak their dreams into a magical shell.",
    image: heroSlideImages.dreamWhorl,
    href: "/projects/dreamwhorl",
  },
  {
    id: "little-red-riding-hood",
    eyebrow: "Interactive Installation",
    display: "Little Red Riding Hood",
    summary:
      "A generative website and interactive installation that challenge fixed ideas of morality, gender, and nature.",
    image: heroSlideImages.littleRedRidingHood,
    href: "/projects/little-red-riding-hood",
  },
  {
    id: "nushu",
    eyebrow: "VR Experience",
    display: "Nushu",
    summary:
      "VR experience builds an immersive, ink-wash world where “women’s language” is reimagined as fluid and generative.",
    image: heroSlideImages.nushu,
    href: "/projects/nushu",
  },
];

export const homepageCopy = {
  experienceLabel: "Experience Design",
  artworkLabel: "Artwork",
  moreLabel: "More",
} as const;

export const experiencePageCopy = {
  title: "Experience Design",
  intro:
    "I design interactive experiences that connect people, space, and stories.",
  back: "< Back to Home",
  moreInProgress: "More In Progress...",
  tabs: [
    { id: "projects", label: "Projects" },
    { id: "practice", label: "Practice" },
  ],
} as const;

export const artworkPageCopy = {
  title: "Artwork",
  intro:
    "Through installations, illustrations, and visual design, I create playful worlds where objects, images, and stories invite new ways of seeing.",
  back: "< Back to Home",
  moreInProgress: "More In Progress...",
} as const;

export type AboutEducationEntry = {
  index: string;
  institution: string;
  date: string;
  qualification: string;
};

export type AboutRoleEntry = {
  index: string;
  organization: string;
  role: string;
  date: string;
  bullets: string[];
  href?: string;
};

export type AboutAwardEntry = {
  index: string;
  title: string;
  date: string;
  href?: string;
};

export const aboutContent = {
  title: "About",
  portrait: aboutPortrait,
  biography:
    "Hi! My name is Jiaying. I am an experience designer and illustrator working across interaction design, physical computing, and visual storytelling.",
  education: [
    {
      index: "01",
      institution: "Harvard University",
      date: "Sept 2026 - Expected June 2028",
      qualification: "Master of Design Studies · MDes Mediums",
    },
    {
      index: "02",
      institution: "Rhode Island School of Design",
      date: "Sept 2022 - June 2026",
      qualification: "BFA in Illustration · Graduated with Honors · GPA 3.95/4.00",
    },
  ] satisfies AboutEducationEntry[],
  experience: [
    {
      index: "01",
      organization: "HarvardXR Club",
      role: "President",
      date: "May 2023 - Present",
      href: "https://www.harvardxr.com/",
      bullets: [
        "Led planning and execution of the annual HarvardXR conference and related programs, attracting 2,000+ in-person attendees.",
        "Coordinated a cross-functional team of 30+ across design, publicity, and outreach, managing timelines and delivery.",
      ],
    },
    {
      index: "02",
      organization: "Rhode Island School of Design",
      role: "Teaching Assistant · Ambient Interfaces",
      date: "Sept 2025 - Dec 2025",
      bullets: [
        "Assisted Prof. Tess Oldfield with DM2000—Ambient Interfaces, focusing on physical interaction prototyping with Arduino, sensors, and C++.",
        "Guided students through concept development, prototyping, testing, and iteration for interactive installations.",
      ],
    },
    {
      index: "03",
      organization: "Lenovo (Beijing) Co., Ltd.",
      role: "Visual Design Intern",
      date: "June 2025 - Aug 2025",
      bullets: [
        "Designed visual materials for three major client events, including key visuals, brochures, presentation decks, and social media graphics.",
        "Delivered 30+ design outcomes from concept through execution.",
        "Supported material production, spatial layout, and audience interaction for events serving 1,000+ participants.",
      ],
    },
    {
      index: "04",
      organization: "Future Reality AI Film Festival",
      role: "Design & Publicity Lead",
      date: "May 2026 - Present",
      href: "https://future-reality.ai.studio/",
      bullets: [
        "Owned the festival’s visual identity and social media presence across Instagram, LinkedIn, and related channels.",
        "Managed content release cycles covering calls for entry, awards, and related publicity milestones.",
      ],
    },
    {
      index: "05",
      organization: "Creative.Tech Community",
      role: "Design Lead",
      date: "Sept 2024 - Sept 2025",
      href: "https://www.creative.tech/",
      bullets: [
        "Managed promotional materials and social media operations.",
        "Co-organized a roundtable with the Excurio Eternal Notre-Dame core team and professors from Shanghai Jiao Tong University.",
      ],
    },
    {
      index: "06",
      organization: "XR Club, Brown University and RISD",
      role: "Design Team Member",
      date: "Sept 2022 - June 2023",
      bullets: [
        "Supported exhibition planning and on-site installation, and designed key visuals for club events.",
      ],
    },
    {
      index: "07",
      organization: "Rhode Island School of Design",
      role: "Teaching Assistant · Collage & Narrative Illustration",
      date: "Dec 2025 - Feb 2026",
      bullets: [
        "Assisted Prof. Polly Becker with collage and narrative illustration courses, and supported classroom guidance, assignment feedback, and discussion.",
      ],
    },
    {
      index: "08",
      organization: "Shanghai Concord Bilingual School",
      role: "Teaching Assistant",
      date: "July 2026",
      bullets: [
        "Assisted Prof. Polly Becker with an experimental workshop focused on collage and image-making, and supported syllabus development and course planning.",
      ],
    },
  ] satisfies AboutRoleEntry[],
  awards: [
    {
      index: "01",
      title: "Shortlisted — Hiii Illustration 2025 International Illustration Competition",
      date: "July 2025",
      href: "https://hiiibrand.com/winners/0ff52906a1ca445393d705ed5fc969ac",
    },
    {
      index: "02",
      title: "Best Structure Award, Bambu Lab Track — Migratory Birds 300 Hackathon",
      date: "June 2025",
    },
    {
      index: "03",
      title: "2025 Emerging Artist of the Year — Guangdong International Art Week",
      date: "June 2025",
    },
    {
      index: "04",
      title: "Shortlisted — Hiii Illustration 2024 International Illustration Competition",
      date: "March 2025",
      href: "https://hiiibrand.com/winners/d0b18983add248b7b2a9b2c18873a0bc",
    },
    {
      index: "05",
      title: "Most Popular Award — Hiii Illustration 2024 International Illustration Competition",
      date: "March 2025",
      href: "https://hiiibrand.com/winners/d0b18983add248b7b2a9b2c18873a0bc",
    },
  ] satisfies AboutAwardEntry[],
  /**
   * Skills follow the Chinese CV. Tool names stay in English.
   */
  skills: {
    languages: ["Chinese (Native)", "English (Fluent)"],
    items: [
      "Figma",
      "Information Architecture",
      "User Flows",
      "Wireframing",
      "Prototyping",
      "Arduino",
      "C++",
      "Physical Computing",
      "3D Printing",
      "Laser Cutting",
      "Adobe Creative Suite",
      "Blender",
      "Rhino",
      "Procreate",
    ],
  },
} as const;

export const footerColumns = [
  {
    title: "Home",
    href: "/",
    links: [
      { href: "/experience-design", label: "Experience Design" },
      { href: "/artwork", label: "Artwork" },
      { href: "/about", label: "About" },
    ],
  },
  {
    title: "Experience Design",
    href: "/experience-design",
    links: [
      { href: "/experience-design", label: "Project" },
      { href: "/experience-design?tab=practice", label: "Practice" },
    ],
  },
  {
    title: "Artwork",
    href: "/artwork",
    links: [
      { href: "/artwork", label: "Installation" },
      { href: "/artwork?tab=illustration", label: "Illustration" },
      { href: "/artwork?tab=visual-design", label: "Visual Design" },
    ],
  },
  {
    title: "About",
    href: "/about",
    links: [{ href: "/about", label: "CV" }],
  },
] as const;
