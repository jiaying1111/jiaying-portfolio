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
    "Hi! My name is Jiaying, and I am an Experience Designer and Illustrator. My practice explores the intersection of emerging technologies, storytelling, and human-centered design.",
  education: [
    {
      index: "01",
      institution: "Harvard University",
      date: "Sept 2026 - Expected June 2028",
      qualification: "Master in Design Studies · Track: Mediums",
    },
    {
      index: "02",
      institution: "Rhode Island School of Design",
      date: "Sept 2022 - June 2026",
      qualification: "Illustration · Computation, Technology, Culture · GPA 3.95/4.00",
    },
  ] satisfies AboutEducationEntry[],
  experience: [
    {
      index: "01",
      organization: "HarvardXR Club",
      role: "Design & Operations Lead",
      date: "May 2023 - Present",
      href: "https://www.harvardxr.com/",
      bullets: [
        "Led visual design for the event, including posters, brochures, and social media graphics, ensuring a cohesive visual identity.",
        "Collaborated closely with technical, operations, and marketing teams to align visuals and maximize audience engagement.",
        "Produced 30+ materials for online and offline promotion, boosting the event’s professionalism, recognition, and social media reach.",
      ],
    },
    {
      index: "02",
      organization: "Rhode Island School of Design",
      role: "Teaching Assistant · Ambient Interfaces",
      date: "Sept 2025 - Dec 2025",
      bullets: [
        "Assisted Prof. Tess Oldfield in teaching DM2000—Ambient Interfaces, a course on physical computing and interactive art.",
        "Prepared technical materials, coordinated class logistics, and supported tutorials on C++ coding.",
        "Guided students in developing, prototyping, and testing responsive systems, providing feedback during critiques.",
      ],
    },
    {
      index: "03",
      organization: "Future Reality AI Film Hackathon",
      role: "Design & Marketing Lead",
      date: "May 2025 - Present",
      href: "https://future-reality.ai.studio/",
      bullets: [
        "Led the event’s visual identity and cross-platform marketing strategy, creating campaign graphics, social media content, and promotional materials.",
        "Developed and managed the marketing calendar from open call through the submission deadline.",
      ],
    },
    {
      index: "04",
      organization: "Lenovo (Beijing) Co., Ltd",
      role: "Visual Design Intern",
      date: "June 2025 - Aug 2025",
      bullets: [
        "Designed key visuals and campaign materials for three large-scale events at Lenovo Customer Beijing Center, including KVs, brochures, presentation decks, and social media graphics; produced 30+ promotional assets aligned with business objectives.",
        "Supported event planning, on-site coordination, and community engagement to advance marketing and operational goals.",
      ],
    },
    {
      index: "05",
      organization: "Creative.Tech Community",
      role: "Design Lead",
      date: "Sept 2024 - Sept 2025",
      href: "https://www.creative.tech/",
      bullets: [
        "Assisted in event planning and designed promotional materials, from initial concept discussions to final execution.",
        "Co-organized a roundtable session featuring the Horizon of Khufu core team from Excurio and Professor Huang from Shanghai Jiao Tong University.",
      ],
    },
    {
      index: "06",
      organization: "XR Club, Brown University and RISD",
      role: "Designer",
      date: "Sept 2022 - June 2023",
      bullets: [
        "Supported exhibition arrangement and promotional activities, including artwork arrangement, poster design, and installation.",
        "Designed and finished part of the print materials to enhance audience engagement.",
      ],
    },
    {
      index: "07",
      organization: "Rhode Island School of Design",
      role: "Teaching Assistant · The Collaged Image",
      date: "Dec 2025 - Jan 2026",
      bullets: [
        "Assisted Prof. Polly Becker in teaching ILLUS 3760-101: The Collaged Image, a course focused on collage and image-making.",
        "Collaborated on syllabus development and course planning.",
        "Supported student experimentation and provided feedback during in-class critiques and individual consultations.",
      ],
    },
    {
      index: "08",
      organization: "Shanghai Concord Bilingual School",
      role: "Teaching Assistant · Experimental Workshop",
      date: "July 2026",
      bullets: [
        "Assisted Prof. Polly Becker in teaching an experimental workshop focused on collage and image-making.",
        "Collaborated on syllabus development and course planning.",
      ],
    },
    {
      index: "09",
      organization: "After Studio Podcast",
      role: "Content Team Member",
      date: "Nov 2022 - Oct 2023",
      bullets: [
        "Sourced and coordinated interviewees, assisted with podcast planning and hosting, and drafted interview questions.",
        "Contributed to content ideation, theme selection, and headline creation for each episode.",
        "Designed posters, edited audio, and produced articles for WeChat, ensuring engaging and cohesive multimedia content.",
      ],
    },
  ] satisfies AboutRoleEntry[],
  awards: [
    {
      index: "01",
      title: "Shortlist Winner for the Hiii Illustration International Award 2025",
      date: "July 2026",
      href: "https://hiiibrand.com/winners/0ff52906a1ca445393d705ed5fc969ac",
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
      href: "https://hiiibrand.com/winners/d0b18983add248b7b2a9b2c18873a0bc",
    },
    {
      index: "05",
      title:
        "Most Popular Award for the Hiii Illustration International Award 2024",
      date: "July 2025",
      href: "https://hiiibrand.com/winners/d0b18983add248b7b2a9b2c18873a0bc",
    },
  ] satisfies AboutAwardEntry[],
  /**
   * Skills follow the English CV. Tool names stay in English.
   */
  skills: {
    languages: ["Chinese", "English"],
    items: [
      "Microsoft Office Suite",
      "Adobe Creative Suite",
      "Figma",
      "Final Cut",
      "Procreate",
      "Blender",
      "Rhino",
      "Arduino physical computing",
      "C++",
      "HTML",
      "CSS",
      "JavaScript",
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
      { href: "/artwork?tab=visual-design", label: "Visual Design" },
    ],
  },
  {
    title: "About",
    href: "/about",
    links: [{ href: "/about", label: "CV" }],
  },
] as const;
