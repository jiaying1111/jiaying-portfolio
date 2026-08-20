export type MediaStatus = "completed" | "pending";
export type AssignmentStatus = "unverified";

export type MediaAsset = {
  id: string;
  purpose: string;
  nodeId: string;
  width?: number;
  height?: number;
  status: MediaStatus;
  src?: string;
  intendedDestination?: string;
  note?: string;
  assignmentStatus?: AssignmentStatus;
};

export type ProjectCardAssets = {
  componentSetId: string;
  regular: MediaAsset;
  hover: MediaAsset;
};

function pendingAsset(
  asset: Omit<MediaAsset, "status" | "src">,
): MediaAsset {
  return { ...asset, status: "pending" };
}

function unverifiedPendingAsset(
  asset: Omit<MediaAsset, "status" | "src" | "assignmentStatus">,
): MediaAsset {
  return {
    ...asset,
    status: "pending",
    assignmentStatus: "unverified",
  };
}

export const projectCardAssets = {
  digitalNomad: {
    componentSetId: "203:290",
    regular: {
      id: "project-card-01-regular",
      purpose: "Digital Nomad — regular",
      nodeId: "203:277",
      width: 1042,
      height: 876,
      status: "completed",
      src: "/images/projects/cards/project-card-01-regular@2x.png",
    },
    hover: {
      id: "project-card-01-hover",
      purpose: "Digital Nomad — hover",
      nodeId: "203:293",
      width: 521,
      height: 438,
      status: "completed",
      src: "/images/projects/cards/project-card-01-hover.png",
    },
  },
  dreamWhorl: {
    componentSetId: "215:319",
    regular: {
      id: "project-card-02-regular",
      purpose: "DreamWhorl — regular",
      nodeId: "215:318",
      width: 1058,
      height: 876,
      status: "completed",
      src: "/images/projects/cards/project-card-02-regular@2x.png",
    },
    hover: {
      id: "project-card-02-hover",
      purpose: "DreamWhorl — hover",
      nodeId: "215:320",
      width: 529,
      height: 438,
      status: "completed",
      src: "/images/projects/cards/project-card-02-hover.png",
    },
  },
  littleRedRidingHood: {
    componentSetId: "215:330",
    regular: {
      id: "project-card-03-regular",
      purpose: "Little Red Riding Hood — regular",
      nodeId: "215:329",
      width: 1044,
      height: 876,
      status: "completed",
      src: "/images/projects/cards/project-card-03-regular@2x.png",
    },
    hover: {
      id: "project-card-03-hover",
      purpose: "Little Red Riding Hood — hover",
      nodeId: "215:331",
      width: 522,
      height: 438,
      status: "completed",
      src: "/images/projects/cards/project-card-03-hover.png",
    },
  },
  nushu: {
    componentSetId: "215:344",
    regular: {
      id: "project-card-04-regular",
      purpose: "Nushu — regular",
      nodeId: "215:343",
      width: 1060,
      height: 876,
      status: "completed",
      src: "/images/projects/cards/project-card-04-regular@2x.png",
    },
    hover: {
      id: "project-card-04-hover",
      purpose: "Nushu — hover",
      nodeId: "215:345",
      width: 530,
      height: 438,
      status: "completed",
      src: "/images/projects/cards/project-card-04-hover.png",
    },
  },
} as const satisfies Record<string, ProjectCardAssets>;

export const homepageHeroAsset = pendingAsset({
  id: "homepage-hero",
  purpose: "Homepage Hero",
  nodeId: "160:72",
  width: 1590,
  height: 887,
  intendedDestination: "public/images/home/",
});

export const homepageArtworkRailAssets: MediaAsset[] = [
  pendingAsset({
    id: "homepage-artwork-rail-1",
    purpose: "Homepage Artwork Rail",
    nodeId: "83:21",
    width: 350,
    height: 350,
    intendedDestination: "public/images/artwork/",
  }),
  pendingAsset({
    id: "homepage-artwork-rail-2",
    purpose: "Homepage Artwork Rail",
    nodeId: "83:22",
    width: 350,
    height: 350,
    intendedDestination: "public/images/artwork/",
  }),
  pendingAsset({
    id: "homepage-artwork-rail-3",
    purpose: "Homepage Artwork Rail",
    nodeId: "83:23",
    width: 350,
    height: 350,
    intendedDestination: "public/images/artwork/",
  }),
  pendingAsset({
    id: "homepage-artwork-rail-4",
    purpose: "Homepage Artwork Rail",
    nodeId: "83:24",
    width: 350,
    height: 350,
    intendedDestination: "public/images/artwork/",
  }),
  pendingAsset({
    id: "homepage-artwork-rail-5",
    purpose: "Homepage Artwork Rail",
    nodeId: "83:25",
    width: 350,
    height: 350,
    intendedDestination: "public/images/artwork/",
    note: "Source node contains three image fills. Timing and crop are unverified.",
  }),
];

export const homepageSocialIconAssets: MediaAsset[] = [
  pendingAsset({
    id: "homepage-social-icon-1",
    purpose: "Homepage Social Icon",
    nodeId: "261:57",
    intendedDestination: "public/icons/social/",
    note: "Semantic name and pixel size are pending visual confirmation.",
  }),
  pendingAsset({
    id: "homepage-social-icon-2",
    purpose: "Homepage Social Icon",
    nodeId: "261:81",
    intendedDestination: "public/icons/social/",
    note: "Semantic name and pixel size are pending visual confirmation.",
  }),
  pendingAsset({
    id: "homepage-social-icon-3",
    purpose: "Homepage Social Icon",
    nodeId: "261:78",
    intendedDestination: "public/icons/social/",
    note: "Semantic name and pixel size are pending visual confirmation.",
  }),
];

export const experienceCardSequenceAssets: MediaAsset[] = [
  unverifiedPendingAsset({
    id: "experience-card-sequence-1",
    purpose: "Experience Project Card Sequence",
    nodeId: "215:374",
    width: 623,
    height: 420,
    intendedDestination: "public/images/projects/",
    note: "Component set 215:375; prototype timing is unread, so these frames stay static.",
  }),
  unverifiedPendingAsset({
    id: "experience-card-sequence-2",
    purpose: "Experience Project Card Sequence",
    nodeId: "215:376",
    width: 623,
    height: 420,
    intendedDestination: "public/images/projects/",
    note: "Component set 215:375; prototype timing is unread, so these frames stay static.",
  }),
  unverifiedPendingAsset({
    id: "experience-card-sequence-3",
    purpose: "Experience Project Card Sequence",
    nodeId: "215:383",
    width: 623,
    height: 420,
    intendedDestination: "public/images/projects/",
    note: "Component set 215:375; prototype timing is unread, so these frames stay static.",
  }),
];

export const experienceProjectDetailAssets: MediaAsset[] = [
  unverifiedPendingAsset({
    id: "experience-project-detail-1",
    purpose: "Experience Project Detail",
    nodeId: "115:898",
    width: 623,
    height: 420,
    intendedDestination: "public/images/projects/",
  }),
];

export const experiencePracticeDetailAssets: MediaAsset[] = [
  unverifiedPendingAsset({
    id: "experience-practice-detail-1",
    purpose: "Experience Practice Detail",
    nodeId: "152:463",
    width: 623,
    height: 420,
    intendedDestination: "public/images/projects/",
  }),
  unverifiedPendingAsset({
    id: "experience-practice-detail-2",
    purpose: "Experience Practice Detail",
    nodeId: "152:478",
    width: 623,
    height: 420,
    intendedDestination: "public/images/projects/",
  }),
];

export const artworkInstallationAssets: MediaAsset[] = [
  pendingAsset({
    id: "artwork-installation-1",
    purpose: "Artwork Installation Detail",
    nodeId: "134:139",
    width: 623,
    height: 420,
    intendedDestination: "public/images/artwork/",
  }),
  pendingAsset({
    id: "artwork-installation-2",
    purpose: "Artwork Installation Detail",
    nodeId: "134:185",
    width: 623,
    height: 420,
    intendedDestination: "public/images/artwork/",
  }),
];

export const artworkIllustrationAssets: MediaAsset[] = [
  pendingAsset({
    id: "artwork-illustration-1",
    purpose: "Artwork Illustration Detail",
    nodeId: "157:716",
    width: 623,
    height: 420,
    intendedDestination: "public/images/artwork/",
  }),
  pendingAsset({
    id: "artwork-illustration-2",
    purpose: "Artwork Illustration Detail",
    nodeId: "157:731",
    width: 623,
    height: 420,
    intendedDestination: "public/images/artwork/",
  }),
  pendingAsset({
    id: "artwork-illustration-3",
    purpose: "Artwork Illustration Detail",
    nodeId: "157:755",
    width: 623,
    height: 420,
    intendedDestination: "public/images/artwork/",
  }),
  pendingAsset({
    id: "artwork-illustration-4",
    purpose: "Artwork Illustration Detail",
    nodeId: "157:799",
    width: 623,
    height: 420,
    intendedDestination: "public/images/artwork/",
  }),
  pendingAsset({
    id: "artwork-illustration-5",
    purpose: "Artwork Illustration Detail",
    nodeId: "158:21",
    width: 623,
    height: 420,
    intendedDestination: "public/images/artwork/",
  }),
  pendingAsset({
    id: "artwork-illustration-6",
    purpose: "Artwork Illustration Detail",
    nodeId: "158:38",
    width: 623,
    height: 420,
    intendedDestination: "public/images/artwork/",
  }),
  pendingAsset({
    id: "artwork-illustration-7",
    purpose: "Artwork Illustration Detail",
    nodeId: "158:55",
    width: 623,
    height: 420,
    intendedDestination: "public/images/artwork/",
  }),
];

export const pendingMediaAssets: MediaAsset[] = [
  homepageHeroAsset,
  ...homepageArtworkRailAssets,
  ...homepageSocialIconAssets,
  ...experienceCardSequenceAssets,
  ...experienceProjectDetailAssets,
  ...experiencePracticeDetailAssets,
  ...artworkInstallationAssets,
  ...artworkIllustrationAssets,
];
