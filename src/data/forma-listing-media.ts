import {
  homepageCardOverlay,
  LISTING_MEDIA_HEIGHT,
  LISTING_MEDIA_WIDTH,
  type MediaAsset,
} from "@/data/assets";
import type { Locale } from "@/i18n/locale";

function buildMedia(locale: Locale) {
  const base = "/images/projects/forma/thumbnail";
  const frames: MediaAsset[] = [
    {
      id: "forma-monitor", src: `${base}/monitor-${locale}.webp`,
      width: 1360, height: 1000,
      alt: locale === "zh" ? "Forma 显示器样机中的设计画布与项目排期" : "Forma’s design canvas and project schedule on a monitor",
    },
    { id: "forma-directions", src: `${base}/directions-${locale}.webp`, width: 1128, height: 752, alt: "" },
    { id: "forma-review", src: `${base}/review-${locale}.webp`, width: 1128, height: 752, alt: "" },
  ];
  return {
    listingMedia: { id: "experience-forma", width: LISTING_MEDIA_WIDTH, height: LISTING_MEDIA_HEIGHT, frames },
    card: { default: frames[0], hoverFrames: frames, overlay: homepageCardOverlay },
  };
}

export const formaMedia = { en: buildMedia("en"), zh: buildMedia("zh") };
