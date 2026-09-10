import { artworkListingMedia, type HoverLoopSet } from "@/data/assets";

export type ArtworkSectionId = "installation" | "illustration" | "visual-design";

export type Artwork = {
  id: string;
  section: ArtworkSectionId;
  /** Public title exactly as written in docs/content.md. */
  title: string;
  category: string;
  year: string;
  summary: string;
  type: string;
  tools: string;
  listingMedia: HoverLoopSet;
  /**
   * The 2026-08-26 reference repeats Animal City's summary here. docs/content.md
   * requires keeping it until the author supplies replacement copy.
   */
  summaryNeedsAuthorReview?: boolean;
};

export type ArtworkSection = {
  id: ArtworkSectionId;
  label: string;
  items: Artwork[];
};

const installation: Artwork[] = [
  {
    id: "resounding-nature",
    section: "installation",
    title: "Re:Sounding Nature",
    category: "Responsive Installation",
    year: "2025",
    summary:
      "This responsive installation translates human movement into the lost sounds of leaves, imagining people as nature’s vocal cords. It asks whether technology can help us reconnect with an environment it has helped silence.",
    type: "Independent Project",
    tools: "Rhino, 3D Printing, Laser Cut, Arduino",
    listingMedia: artworkListingMedia["resounding-nature"],
  },
  {
    id: "present-and-absent",
    section: "installation",
    title: "Present & Absent",
    category: "Motion Capture",
    year: "2025",
    summary:
      "Using motion capture and performance, this project explores how gender shapes whose lives are valued, remembered, and allowed to exist.",
    type: "Independent Project",
    tools: "Blender, Motion Capture, Performance",
    listingMedia: artworkListingMedia["present-and-absent"],
  },
];

const illustration: Artwork[] = [
  {
    id: "circular-ruins",
    section: "illustration",
    title: "The Circular Ruins",
    category: "Interactive Game",
    year: "2025",
    summary:
      "Inspired by Jorge Luis Borges’s The Circular Ruins, this project transforms the story’s recursive dream-world into a modular visual narrative system.",
    type: "Independent Project",
    tools: "Collage",
    listingMedia: artworkListingMedia["circular-ruins"],
  },
  {
    id: "invisible-man",
    section: "illustration",
    title: "The Invisible Man",
    category: "UI Design",
    year: "2024",
    summary:
      "A conceptual game adaptation of The Invisible Man (H. G. Wells), exploring narrative through UI and level design.",
    type: "Independent Project",
    tools: "Adobe Illustrator",
    listingMedia: artworkListingMedia["invisible-man"],
  },
  {
    id: "dreamgaze",
    section: "illustration",
    title: "DreamGaze",
    category: "Branding Design",
    year: "2024",
    summary:
      "DreamGaze is a creative studio that explores the space between dream and reality. It designs visual experiences that feel poetic, immersive, and thoughtful, aiming to awaken imagination and create moments of quiet wonder.",
    type: "Independent Project",
    tools: "Adobe Illustrator",
    listingMedia: artworkListingMedia.dreamgaze,
  },
  {
    id: "your-destination",
    section: "illustration",
    title: "Your Destination",
    category: "Animation",
    year: "2023",
    summary:
      "I reimagined the concept of Google Maps in a novel way to explore the overwhelming impact of digital technology on our lives.",
    type: "Independent Project",
    tools: "Blender, Nomad",
    listingMedia: artworkListingMedia["your-destination"],
  },
  {
    id: "animal-city",
    section: "illustration",
    title: "Animal City",
    category: "Installation",
    year: "2024",
    summary:
      "This work explores the complex and fluid relationship between humans and animals through a series of interactive box installations that can be disassembled, reassembled, folded, and unfolded.",
    type: "Independent Project",
    tools: "Collage",
    listingMedia: artworkListingMedia["animal-city"],
  },
  {
    id: "imaginary-beings",
    section: "illustration",
    title: "Imaginary Beings",
    category: "Animation",
    year: "2025",
    summary:
      "Imaginary beings born from memory, intuition, and incomplete forms.",
    type: "Independent Project",
    tools: "Collage",
    listingMedia: artworkListingMedia["imaginary-beings"],
  },
  {
    id: "hypnagogia",
    section: "illustration",
    title: "Hypnagogia",
    category: "Interactive Installation",
    year: "2024",
    summary:
      "Hypnagogia explores the space where waking and dreaming meet. In this blurry state, time feels unstable, memories mix, and reality shifts.",
    type: "Independent Project",
    tools: "Collage",
    listingMedia: artworkListingMedia.hypnagogia,
  },
  {
    id: "bodigram",
    section: "illustration",
    title: "Bodigram",
    category: "Interactive",
    year: "2025",
    summary:
      "An interactive card set that lets viewers choose words and body fragments to form a composite, evolving body.",
    type: "Independent Project",
    tools: "Collage",
    listingMedia: artworkListingMedia.bodigram,
  },
];

const visualDesign: Artwork[] = [
  {
    id: "explore-the-future",
    section: "visual-design",
    title: "探索未来",
    category: "Campaign Design",
    year: "2025",
    summary:
      "ESG亲子活动主视觉设计。为「碳索未来」人工智能科普体验系列活动设计主视觉及物料延展。",
    type: "Internship · Lenovo",
    tools: "Adobe Illustrator, Photoshop",
    listingMedia: artworkListingMedia["explore-the-future"],
  },
  {
    id: "ai-imagination-journey",
    section: "visual-design",
    title: "AI创想之旅",
    category: "Campaign Design",
    year: "2025",
    summary:
      "展览参观活动主视觉设计。通过参观展区、护照打卡与互动体验，激发公众对未来科技生活的想象与思考。",
    type: "Internship · Lenovo",
    tools: "Adobe Illustrator, Photoshop",
    listingMedia: artworkListingMedia["ai-imagination-journey"],
  },
  {
    id: "gift-shop-launch",
    section: "visual-design",
    title: "礼品店上新",
    category: "Campaign Design",
    year: "2025",
    summary:
      "礼品店上新活动主视觉设计。通过统一的视觉系统传达新品概念，并引导观众参与互动体验。",
    type: "Internship · Lenovo",
    tools: "Adobe Illustrator, Photoshop",
    listingMedia: artworkListingMedia["gift-shop-launch"],
  },
];

export const artworkSections: ArtworkSection[] = [
  { id: "installation", label: "Installation", items: installation },
  { id: "illustration", label: "Illustration", items: illustration },
  { id: "visual-design", label: "Visual Design", items: visualDesign },
];

/** Listing page tabs for Visual Design & Artwork (excludes Visual Design). */
export const artworkListingSections: ArtworkSection[] = artworkSections.filter(
  (section) => section.id !== "visual-design",
);

export const artworks: Artwork[] = artworkSections.flatMap(
  (section) => section.items,
);

export const visualDesignArtworks: Artwork[] = visualDesign;

export function getArtworkSection(id: ArtworkSectionId) {
  return artworkSections.find((section) => section.id === id);
}

export function getArtworkById(id: string) {
  return artworks.find((artwork) => artwork.id === id);
}

export function isVisualDesignArtwork(id: string) {
  return visualDesign.some((artwork) => artwork.id === id);
}
