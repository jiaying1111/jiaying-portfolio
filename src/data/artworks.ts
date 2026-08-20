import {
  artworkIllustrationAssets,
  artworkInstallationAssets,
  type MediaAsset,
} from "@/data/assets";

export type ArtworkSectionId = "installation" | "illustration";
export type CopyStatus = "source" | "placeholder";

export type Artwork = {
  id: string;
  section: ArtworkSectionId;
  title: string;
  category: string;
  year: string;
  summary: string;
  summaryStatus: CopyStatus;
  type: string;
  tools: string;
  alt: string;
  media: MediaAsset;
};

export type ArtworkSection = {
  id: ArtworkSectionId;
  title: string;
  frameId: string;
  items: Artwork[];
};

const PLACEHOLDER_SUMMARY =
  "This project etc is a uiux design. This project etc is a uiux. This project etc is a uiux design. This project etc is a uiux design. This project etc is a uiux. This project etc is a uiux design";

function listingItem(
  section: ArtworkSectionId,
  media: MediaAsset,
  title: string,
): Artwork {
  return {
    id: media.id,
    section,
    title,
    category: "UIUX",
    year: "2025",
    summary: PLACEHOLDER_SUMMARY,
    summaryStatus: "placeholder",
    type: "Independent Project",
    tools: "Figma",
    alt: "Artwork image not yet provided",
    media,
  };
}

const [installationMediaA, installationMediaB] = artworkInstallationAssets;
const [
  illustrationMediaA,
  illustrationMediaB,
  illustrationMediaC,
  illustrationMediaD,
  illustrationMediaE,
  illustrationMediaF,
  illustrationMediaG,
] = artworkIllustrationAssets;

export const artworkPageCopy = {
  intro: {
    text: "I design interactive experiences that connect people, space, and stories.",
    status: "source" as CopyStatus,
  },
  moreInProgress: "More In Progress...",
};

export const artworkSections: ArtworkSection[] = [
  {
    id: "installation",
    title: "Installation",
    frameId: "134:87",
    items: [
      listingItem("installation", installationMediaA, "Re:Sounding Nature"),
      listingItem("installation", installationMediaB, "Present & Absent"),
    ],
  },
  {
    id: "illustration",
    title: "Illustration",
    frameId: "157:679",
    items: [
      listingItem("illustration", illustrationMediaA, "The Circular Ruins"),
      listingItem("illustration", illustrationMediaB, "Present & Absent"),
      listingItem(
        "illustration",
        illustrationMediaC,
        "DreamGaze Branding Design",
      ),
      listingItem("illustration", illustrationMediaD, "Present & Absent"),
      listingItem("illustration", illustrationMediaE, "Present & Absent"),
      listingItem("illustration", illustrationMediaF, "Present & Absent"),
      listingItem("illustration", illustrationMediaG, "Present & Absent"),
    ],
  },
];

export const artworks: Artwork[] = artworkSections.flatMap(
  (section) => section.items,
);

export function getArtworkSection(id: ArtworkSectionId) {
  return artworkSections.find((section) => section.id === id);
}
