export type MediaAsset = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type HomepageCardAssets = {
  default: MediaAsset;
  hoverFrames: MediaAsset[];
  overlay: MediaAsset;
};

export type HoverLoopSet = {
  id: string;
  width: number;
  height: number;
  frames: MediaAsset[];
};

/** Listing media box from docs/design-system.md section 6. */
export const LISTING_MEDIA_WIDTH = 623;
export const LISTING_MEDIA_HEIGHT = 420;

/** Homepage artwork rail tile from docs/design-system.md section 5. */
export const RAIL_TILE_SIZE = 350;
export const RAIL_TILE_GAP = 14;

type FrameSpec = { index: 1 | 2 | 3; ext: "svg" | "png" | "jpg" };

function hoverLoopSet(
  id: string,
  basePath: string,
  frames: FrameSpec[],
  alt: string,
): HoverLoopSet {
  return {
    id,
    width: LISTING_MEDIA_WIDTH,
    height: LISTING_MEDIA_HEIGHT,
    frames: frames.map(({ index, ext }) => {
      const suffix = String(index).padStart(2, "0");
      return {
        id: `${id}-frame-${suffix}`,
        src: `${basePath}/frame-${suffix}.${ext}`,
        width: LISTING_MEDIA_WIDTH,
        height: LISTING_MEDIA_HEIGHT,
        alt: index === 1 ? alt : "",
      };
    }),
  };
}

/**
 * Hero slide artwork. All five files are 1440x887 Figma exports.
 *
 * The exported filenames for slides 03-05 do not match their contents: the
 * artwork inside `slide-03-dreamwhorl.svg` is the Little Red Riding Hood photo,
 * `slide-04-little-red-riding-hood.svg` is the Nushu landscape, and
 * `slide-05-nushu.svg` is the DreamWhorl shell. The mapping below follows
 * home-dreamwhorl.png / home-little-red-riding-hood.png / home-nushu.png, which
 * are the authoritative visual references.
 */
export const heroSlideImages = {
  intro: {
    id: "hero-slide-intro",
    src: "/images/home/hero/slide-01-intro.svg",
    width: 1440,
    height: 887,
    alt: "",
  },
  digitalNoMoreMad: {
    id: "hero-slide-digital-no-more-mad",
    src: "/images/home/hero/slide-02-digital-no-more-mad.svg",
    width: 1440,
    height: 887,
    alt: "",
  },
  dreamWhorl: {
    id: "hero-slide-dreamwhorl",
    src: "/images/home/hero/slide-05-nushu.svg",
    width: 1440,
    height: 887,
    alt: "",
  },
  littleRedRidingHood: {
    id: "hero-slide-little-red-riding-hood",
    src: "/images/home/hero/slide-03-dreamwhorl.svg",
    width: 1440,
    height: 887,
    alt: "",
  },
  nushu: {
    id: "hero-slide-nushu",
    src: "/images/home/hero/slide-04-little-red-riding-hood.svg",
    width: 1440,
    height: 887,
    alt: "",
  },
} as const satisfies Record<string, MediaAsset>;

const homepageCardOverlay: MediaAsset = {
  id: "home-card-overlay",
  src: "/images/home/experience-cards/shared-hover-overlay.png",
  width: 521,
  height: 438,
  alt: "",
};

type HomepageHoverFrameSpec = {
  ext: "svg" | "png" | "jpg";
  width: number;
  height: number;
};

function homepageCardMedia(
  fileSlug: string,
  title: string,
  defaultSize: { width: number; height: number },
  frames: [HomepageHoverFrameSpec, HomepageHoverFrameSpec, HomepageHoverFrameSpec],
): HomepageCardAssets {
  const base = "/images/home/experience-cards";
  return {
    default: {
      id: `home-card-${fileSlug}-default`,
      src: `${base}/${fileSlug}-default.svg`,
      width: defaultSize.width,
      height: defaultSize.height,
      alt: title,
    },
    hoverFrames: frames.map((frame, index) => {
      const suffix = String(index + 1).padStart(2, "0");
      return {
        id: `home-card-${fileSlug}-hover-${suffix}`,
        src: `${base}/${fileSlug}-hover-frame-${suffix}.${frame.ext}`,
        width: frame.width,
        height: frame.height,
        alt: "",
      };
    }),
    overlay: homepageCardOverlay,
  };
}

/** Homepage Experience Design cards: default image + three hover frames. */
export const homepageCardAssets = {
  "digital-nomad": homepageCardMedia(
    "digital-no-more-mad",
    "Digital No More Mad",
    { width: 521, height: 438 },
    [
      { ext: "svg", width: 623, height: 420 },
      { ext: "png", width: 524, height: 528 },
      { ext: "png", width: 522, height: 544 },
    ],
  ),
  dreamwhorl: homepageCardMedia(
    "dreamwhorl",
    "DreamWhorl",
    { width: 529, height: 438 },
    [
      { ext: "png", width: 1600, height: 1264 },
      { ext: "png", width: 1600, height: 1082 },
      { ext: "png", width: 1600, height: 1120 },
    ],
  ),
  "little-red-riding-hood": homepageCardMedia(
    "little-red-riding-hood",
    "Little Red Riding Hood",
    { width: 522, height: 438 },
    [
      { ext: "svg", width: 623, height: 420 },
      { ext: "jpg", width: 1600, height: 1067 },
      { ext: "jpg", width: 1600, height: 1067 },
    ],
  ),
  nushu: homepageCardMedia(
    "nushu",
    "Nushu",
    { width: 530, height: 438 },
    [
      { ext: "png", width: 1600, height: 1079 },
      { ext: "png", width: 1600, height: 752 },
      { ext: "png", width: 1600, height: 751 },
    ],
  ),
  "character-studio": {
    default: {
      id: "home-card-character-studio-default",
      src: "/images/home/experience-cards/character-studio-default.png",
      width: 521,
      height: 438,
      alt: "Character Studio",
    },
    hoverFrames: [
      {
        id: "home-card-character-studio-hover-01",
        src: "/images/home/experience-cards/character-studio-hover-frame-01.png",
        width: 623,
        height: 420,
        alt: "",
      },
      {
        id: "home-card-character-studio-hover-02",
        src: "/images/home/experience-cards/character-studio-hover-frame-02.png",
        width: 623,
        height: 420,
        alt: "",
      },
      {
        id: "home-card-character-studio-hover-03",
        src: "/images/home/experience-cards/character-studio-hover-frame-03.png",
        width: 623,
        height: 420,
        alt: "",
      },
    ],
    overlay: homepageCardOverlay,
  },
  "hxr-digital-map": {
    default: {
      id: "home-card-hxr-digital-map-default",
      src: "/images/home/experience-cards/hxr-digital-map-default.png",
      width: 521,
      height: 438,
      alt: "HarvardXR Digital Map",
    },
    hoverFrames: [
      {
        id: "home-card-hxr-digital-map-hover-01",
        src: "/images/home/experience-cards/hxr-digital-map-hover-frame-01.png",
        width: 623,
        height: 420,
        alt: "",
      },
      {
        id: "home-card-hxr-digital-map-hover-02",
        src: "/images/home/experience-cards/hxr-digital-map-hover-frame-02.png",
        width: 623,
        height: 420,
        alt: "",
      },
      {
        id: "home-card-hxr-digital-map-hover-03",
        src: "/images/home/experience-cards/hxr-digital-map-hover-frame-03.png",
        width: 623,
        height: 420,
        alt: "",
      },
    ],
    overlay: homepageCardOverlay,
  },
} as const satisfies Record<string, HomepageCardAssets>;

/** Homepage rail order, mapped to artwork detail routes. */
const homepageArtworkRailIds = [
  "resounding-nature",
  "circular-ruins",
  "imaginary-beings",
  "dreamgaze",
  "hypnagogia",
  "present-and-absent",
  "your-destination",
  "animal-city",
] as const;

/** Eight rail tiles in the exact order given by docs/media-library.md. */
export const homepageArtworkRailItems: (MediaAsset & {
  href: string;
  artworkId: (typeof homepageArtworkRailIds)[number];
})[] = homepageArtworkRailIds.map((artworkId, index) => {
  const suffix = String(index + 1).padStart(2, "0");
  return {
    id: `rail-item-${suffix}`,
    artworkId,
    href: `/artwork/${artworkId}`,
    src: `/images/home/artwork-rail/rail-item-${suffix}.svg`,
    width: RAIL_TILE_SIZE,
    height: RAIL_TILE_SIZE,
    alt: "",
  };
});

export const socialIcons = {
  email: {
    id: "icon-email",
    src: "/icons/social/email.svg",
    width: 41,
    height: 41,
    alt: "",
  },
  instagram: {
    id: "icon-instagram",
    src: "/icons/social/instagram.svg",
    width: 41,
    height: 41,
    alt: "",
  },
  linkedin: {
    id: "icon-linkedin",
    src: "/icons/social/linkedin.svg",
    width: 41,
    height: 41,
    alt: "",
  },
  nextArrow: {
    id: "icon-next-arrow",
    src: "/icons/social/next-arrow.svg",
    width: 41,
    height: 41,
    alt: "",
  },
} as const satisfies Record<string, MediaAsset>;

export const aboutPortrait: MediaAsset = {
  id: "about-portrait",
  src: "/images/about/portrait.jpg",
  width: 453,
  height: 604,
  alt: "Jiaying Li",
};

export const experienceListingMedia = {
  "digital-nomad": hoverLoopSet(
    "experience-digital-no-more-mad",
    "/images/experience/digital-no-more-mad",
    [
      { index: 1, ext: "svg" },
      { index: 2, ext: "png" },
      { index: 3, ext: "png" },
    ],
    "Digital No More Mad — mobile interface screens",
  ),
  dreamwhorl: hoverLoopSet(
    "experience-dreamwhorl",
    "/images/experience/dreamwhorl",
    [
      { index: 1, ext: "svg" },
      { index: 2, ext: "png" },
      { index: 3, ext: "png" },
    ],
    "DreamWhorl — a shell-shaped dream recorder in a child's room",
  ),
  "little-red-riding-hood": hoverLoopSet(
    "experience-little-red-riding-hood",
    "/images/experience/little-red-riding-hood",
    [
      { index: 1, ext: "svg" },
      { index: 2, ext: "jpg" },
      { index: 3, ext: "jpg" },
    ],
    "Little Red Riding Hood — a hand releasing translucent printed fragments",
  ),
  nushu: hoverLoopSet(
    "experience-nushu",
    "/images/experience/nushu",
    [
      { index: 1, ext: "png" },
      { index: 2, ext: "png" },
      { index: 3, ext: "png" },
    ],
    "Nushu — an ink-wash mountain landscape in virtual reality",
  ),
  "character-studio": hoverLoopSet(
    "experience-character-studio",
    "/images/experience/character-studio",
    [
      { index: 1, ext: "png" },
      { index: 2, ext: "png" },
      { index: 3, ext: "png" },
    ],
    "Character Studio — AI-assisted character and worldbuilding interface",
  ),
  "hxr-digital-map": hoverLoopSet(
    "experience-hxr-digital-map",
    "/images/experience/hxr-digital-map",
    [
      { index: 1, ext: "png" },
      { index: 2, ext: "png" },
      { index: 3, ext: "png" },
    ],
    "HarvardXR Digital Map — conference map, stamps, and passport on mobile",
  ),
} as const satisfies Record<string, HoverLoopSet>;

export const artworkListingMedia = {
  "resounding-nature": hoverLoopSet(
    "artwork-resounding-nature",
    "/images/artwork/resounding-nature",
    [
      { index: 1, ext: "png" },
      { index: 2, ext: "jpg" },
      { index: 3, ext: "jpg" },
    ],
    "Re:Sounding Nature — a transparent laser-cut installation",
  ),
  "present-and-absent": hoverLoopSet(
    "artwork-present-and-absent",
    "/images/artwork/present-and-absent",
    [
      { index: 1, ext: "png" },
      { index: 2, ext: "png" },
      { index: 3, ext: "png" },
    ],
    "Present & Absent — a motion-captured figure raising one arm",
  ),
  "circular-ruins": hoverLoopSet(
    "artwork-circular-ruins",
    "/images/artwork/circular-ruins",
    [
      { index: 1, ext: "png" },
      { index: 2, ext: "jpg" },
      { index: 3, ext: "jpg" },
    ],
    "The Circular Ruins — a modular collage narrative",
  ),
  "invisible-man": hoverLoopSet(
    "artwork-invisible-man",
    "/images/artwork/invisible-man",
    [
      { index: 1, ext: "png" },
      { index: 2, ext: "jpg" },
      { index: 3, ext: "jpg" },
    ],
    "The Invisible Man — game interface and level design",
  ),
  dreamgaze: hoverLoopSet(
    "artwork-dreamgaze",
    "/images/artwork/dreamgaze",
    [
      { index: 1, ext: "png" },
      { index: 2, ext: "jpg" },
      { index: 3, ext: "jpg" },
    ],
    "DreamGaze — branding system for a creative studio",
  ),
  bodigram: hoverLoopSet(
    "artwork-bodigram",
    "/images/artwork/bodigram",
    [
      { index: 1, ext: "jpg" },
      { index: 2, ext: "jpg" },
      { index: 3, ext: "jpg" },
    ],
    "Bodigram — interactive cards of body fragments and words",
  ),
  "your-destination": hoverLoopSet(
    "artwork-your-destination",
    "/images/artwork/your-destination",
    [
      { index: 1, ext: "png" },
      { index: 2, ext: "png" },
      { index: 3, ext: "png" },
    ],
    "Your Destination — an animation reimagining digital maps",
  ),
  "animal-city": hoverLoopSet(
    "artwork-animal-city",
    "/images/artwork/animal-city",
    [
      { index: 1, ext: "png" },
      { index: 2, ext: "jpg" },
      { index: 3, ext: "jpg" },
    ],
    "Animal City — a foldable interactive box installation",
  ),
  "imaginary-beings": hoverLoopSet(
    "artwork-imaginary-beings",
    "/images/artwork/imaginary-beings",
    [
      { index: 1, ext: "png" },
      { index: 2, ext: "png" },
      { index: 3, ext: "png" },
    ],
    "Imaginary Beings — illustrated creature studies",
  ),
  hypnagogia: hoverLoopSet(
    "artwork-hypnagogia",
    "/images/artwork/hypnagogia",
    [
      { index: 1, ext: "png" },
      { index: 2, ext: "jpg" },
      { index: 3, ext: "jpg" },
    ],
    "Hypnagogia — collaged images of the threshold between waking and dreaming",
  ),
  "ai-imagination-journey": hoverLoopSet(
    "artwork-ai-imagination-journey",
    "/images/artwork/ai-imagination-journey",
    [
      { index: 1, ext: "jpg" },
      { index: 2, ext: "jpg" },
      { index: 3, ext: "jpg" },
    ],
    "AI创想之旅 — Lenovo campaign key visual and event materials",
  ),
  "explore-the-future": hoverLoopSet(
    "artwork-explore-the-future",
    "/images/artwork/explore-the-future",
    [
      { index: 1, ext: "jpg" },
      { index: 2, ext: "jpg" },
      { index: 3, ext: "jpg" },
    ],
    "探索未来 — Lenovo sustainability event visual system",
  ),
  "gift-shop-launch": hoverLoopSet(
    "artwork-gift-shop-launch",
    "/images/artwork/gift-shop-launch",
    [
      { index: 1, ext: "jpg" },
      { index: 2, ext: "jpg" },
      { index: 3, ext: "jpg" },
    ],
    "礼品店上新 — Lenovo gift-shop launch campaign visuals",
  ),
} as const satisfies Record<string, HoverLoopSet>;
