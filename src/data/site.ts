import { aboutPortrait, heroSlideImages, socialIcons } from "@/data/assets";
import type { MediaAsset } from "@/data/assets";

export const siteIdentity = {
  logo: "JIAYING LI",
  displayName: "Jiaying Li",
  role: "Experience Designer and Illustrator",
  biography:
    "Jiaying Li is an Experience Designer and Illustrator. Her practice explores the intersection of emerging technologies, storytelling, and human-centered design.",
  email: "jiayingli0128@gmail.com",
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
    label: "LinkedIn (link pending verification)",
    icon: socialIcons.linkedin,
    href: null,
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
    href: null,
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
    "Through installations and illustrations, I create playful worlds where objects, images, and stories invite new ways of seeing.",
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
};

export type AboutAwardEntry = {
  index: string;
  title: string;
  date: string;
};

export const aboutContent = {
  title: "About",
  portrait: aboutPortrait,
  biography: siteIdentity.biography,
  education: [
    {
      index: "01",
      institution: "Harvard University",
      date: "Expected 2028",
      qualification: "MDes Mediums",
    },
    {
      index: "02",
      institution: "Rhode Island School of Design",
      date: "June 2026",
      qualification: "Illustration (Honor Distinction)",
    },
  ] satisfies AboutEducationEntry[],
  experience: [
    {
      index: "01",
      organization: "Shanghai Concord Bilingual School",
      role: "Teaching Assistant",
      date: "July 2026",
      bullets: [
        "Assisted Prof. Polly Becker in teaching experimental workshop, a course focused on collage and image-making;",
        "Collaborated on syllabus development and course planning.",
      ],
    },
    {
      index: "02",
      organization: "Rhode Island School of Design",
      role: "Teaching Assistant",
      date: "Sept 2025 - Dec 2025",
      bullets: [
        "Assisted Prof. Tess Oldfield in teaching DM2000–Ambient Interfaces, a course on physical computing and interactive art;",
        "Prepared technical materials, coordinated class logistics, and supported tutorials on C++ coding.",
      ],
    },
    {
      index: "03",
      organization: "Lenovo (Beijing) Co., Ltd",
      role: "Visual Design Intern",
      date: "June 2025 - Aug 2025",
      bullets: [
        "Designed key visuals and campaign materials for three large-scale events at Lenovo Customer Briefing Center, including KVs, brochures, presentation decks, and social media graphics, ensuring consistent brand identity.",
        "Led the end-to-end design process and produced 30+ promotional assets aligned with business objectives.",
        "Supported event planning, on-site coordination, and community engagement to advance marketing and operational goals.",
      ],
    },
  ] satisfies AboutRoleEntry[],
  extracurricular: [
    {
      index: "01",
      organization: "HarvardXR Club",
      role: "Design & Operations Lead",
      date: "May 2023 - Present",
      bullets: [
        "Led visual design for the event, including posters, brochures, social media graphics, etc., ensuring cohesive visual identity;",
        "Collaborated closely with technical, operations, and marketing teams to align visuals and maximize audience engagement;",
        "Produced 30+ materials for online & offline promotion, boosting the event’s professionalism, recognition and social media reach",
      ],
    },
    {
      index: "02",
      organization: "Creative.Tech Community",
      role: "Design Lead",
      date: "May 2025 - Present",
      bullets: [
        "Assisted in event planning and designed promotional materials, from initial concept discussions to final execution;",
        "Co-organized a roundtable session featuring the Horizon of Khufu core team from Excurio and Professor Huang from Shanghai Jiao Tong University, contributing to the event’s professional profile and reach.",
      ],
    },
    {
      index: "03",
      organization: "The Brown Daily Herald, Brown University",
      role: "Illustrator",
      date: "Sept 2024 - Sept 2025",
      bullets: [
        "Collaborated with article authors to capture the tone and themes of each piece in visual form;",
        "Created sketches and refined them into final illustrations according to editors’ feedback and requirements;",
        "Created monthly editorial illustrations published in Post-Magazine, consistently supporting the publication’s visual direction.",
      ],
    },
    {
      index: "04",
      organization: "After Studio Podcast",
      role: "Content Team Member",
      date: "Nov 2022 - Oct 2023",
      bullets: [
        "Sourced and coordinated interviewees, assisted with podcast planning and hosting, and drafted interview questions;",
        "Contributed to content ideation, theme selection, and headline creation for each episode;",
        "Designed posters, edited audio, and produced articles for WeChat, ensuring engaging and cohesive multimedia content.",
      ],
    },
    {
      index: "05",
      organization: "XR Club, Brown University and RISD",
      role: "Designer",
      date: "Sept 2022 - June 2023",
      bullets: [
        "Supported exhibition arrangement and promotional activities, including artwork arrangement, poster design and installation;",
        "Designed and finished part of the print materials to enhance the audience’s engagement.",
      ],
    },
  ] satisfies AboutRoleEntry[],
  awards: [
    {
      index: "01",
      title: "Shortlist Winner for the Hiii Illustration International Award 2025",
      date: "July 2026",
    },
    {
      index: "02",
      title:
        "Best Structural Design Award — Bambu Lab 3D Printing Track, Migratory Birds 300 Hackathon",
      date: "June 2026",
    },
    {
      index: "03",
      title:
        "Emerging Artist of the Year for the Guangdong International Art Week 2025",
      date: "June 2025",
    },
    {
      index: "04",
      title: "Shortlist Winner for the Hiii Illustration International Award 2024",
      date: "July 2025",
    },
    {
      index: "05",
      title:
        "Most Popular Award for the Hiii Illustration International Award 2024",
      date: "July 2025",
    },
  ] satisfies AboutAwardEntry[],
  /**
   * Spelling mirrors docs/content.md exactly ("Finalcut", "Java Script"); it
   * must not be normalised without designer approval.
   */
  skills: {
    languages: ["Chinese", "English"],
    items: [
      "Microsoft Office Suite",
      "Adobe Creative Suite",
      "Figma",
      "Finalcut",
      "Procreate",
      "Blender",
      "Rhino",
      "Arduino physical computing",
      "C++ coding language",
      "HTML",
      "CSS",
      "Java Script",
      "Digital Fabrication (Laser-cutting, 3D printing)",
      "various hand-drawing media",
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
    ],
  },
  {
    title: "About",
    href: "/about",
    links: [{ href: "/about", label: "CV" }],
  },
] as const;
