import type { CaseStudyModuleLayout } from "@/data/case-studies/types";

export type VisualDesignStill = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type VisualDesignSection = {
  id: string;
  eyebrow: string;
  title: string;
  copy?: string;
  layout: CaseStudyModuleLayout;
  features?: string[];
  gallery: VisualDesignStill[];
};

export type VisualDesignStudy = {
  slug: string;
  title: string;
  year: string;
  company: string;
  style: string;
  overview: string;
  role: string;
  medium: string;
  summary: string[];
  sections: VisualDesignSection[];
};

function img(
  slug: string,
  file: string,
  width: number,
  height: number,
  alt: string,
): VisualDesignStill {
  return {
    src: `/images/artwork/${slug}/layout/${file}`,
    alt,
    width,
    height,
  };
}

const aiStampOrder = [
  "徽章.png",
  "徽章1.png",
  "徽章2-copy.png",
  "徽章4.png",
  "徽章7.png",
  "徽章6.png",
  "徽章5.png",
  "徽章9.png",
  "徽章15.png",
  "徽章12.png",
  "徽章13.png",
  "徽章14.png",
  "city-beijing.png",
  "city-shenzhen.png",
  "city-tianjin.png",
];

export const visualDesignStudies: VisualDesignStudy[] = [
  {
    slug: "explore-the-future",
    title: "探索未来",
    year: "2025",
    company: "Lenovo Customer Experience Center",
    style: "Tech · Green · Family",
    overview:
      "Starting from everyday electronics, the series guides families through green technology and ESG ideas.",
    role: "AIGC Artist",
    medium: "AIGC art, key visual, print & digital",
    summary: [
      "AIGC art for Lenovo's ESG family program. Generative key visuals and material extensions for the Carbon Quest AI literacy series — shipped and used in live visitor scenarios.",
    ],
    sections: [
      {
        id: "kv",
        eyebrow: "01 · Key visual",
        title: "Generative key visual",
        copy:
          "An AIGC art series made during the Lenovo Customer Experience Center internship: generative key visuals and material systems for Carbon Quest, shipped with the product and used in live visitor scenarios.",
        layout: "vd-kv",
        features: ["Green-tech narrative", "Family-readable forms", "Campaign KV", "Online + offline unity"],
        gallery: [img("explore-the-future", "kv.jpg", 4000, 2250, "Carbon Quest key visual")],
      },
      {
        id: "assets",
        eyebrow: "02 · Motifs",
        title: "Motif system",
        copy: "Generated and refined motifs — robotic arm, recycling box, ESG laptop, cart character, and earth — that carry the series across touchpoints.",
        layout: "vd-assets",
        gallery: [
          img("explore-the-future", "asset-arm.jpg", 537, 581, "Robotic arm motif"),
          img("explore-the-future", "asset-recycle.jpg", 484, 477, "Recycling box motif"),
          img("explore-the-future", "asset-laptop.jpg", 644, 459, "ESG laptop motif"),
          img("explore-the-future", "asset-cart.jpg", 272, 269, "Cart character motif"),
          img("explore-the-future", "asset-earth.jpg", 198, 243, "Earth motif"),
        ],
      },
      {
        id: "online",
        eyebrow: "03 · Digital",
        title: "Digital materials",
        copy: "Mini-program detail pages, social covers, screen posters, QR art, and classroom templates adapted from the same generative system.",
        layout: "vd-online",
        gallery: [
          img("explore-the-future", "online-beijing.jpg", 283, 2400, "Beijing tall detail"),
          img("explore-the-future", "online-tianjin.jpg", 283, 2400, "Tianjin tall detail"),
          img("explore-the-future", "online-screen.jpg", 2400, 648, "Screen poster"),
          img("explore-the-future", "online-qr.jpg", 1488, 1488, "QR artwork"),
          img("explore-the-future", "online-mini-tj.jpg", 2400, 1350, "Tianjin mini-program header"),
          img("explore-the-future", "online-redeem.jpg", 1696, 2400, "Redeem backdrop"),
          img("explore-the-future", "online-video.jpg", 1800, 2400, "Video template"),
        ],
      },
      {
        id: "print",
        eyebrow: "04 · Print",
        title: "Print materials",
        copy: "Banners, tickets, arm stickers, photo frames, roll-ups, and KT boards for on-site family workshops.",
        layout: "vd-print",
        gallery: [
          img("explore-the-future", "print-banner.jpg", 2400, 291, "Banner"),
          img("explore-the-future", "print-rollup.jpg", 799, 1999, "Roll-up"),
          img("explore-the-future", "print-arm.jpg", 1599, 1599, "Arm sticker"),
          img("explore-the-future", "print-ticket-01.jpg", 1600, 534, "Ticket front"),
          img("explore-the-future", "print-ticket-02.jpg", 1600, 534, "Ticket stub"),
          img("explore-the-future", "print-frame.jpg", 1067, 1600, "Photo frame"),
        ],
      },
      {
        id: "real-life",
        eyebrow: "05 · In use",
        title: "Live scenarios",
        layout: "vd-photos",
        gallery: [
          img("explore-the-future", "real-01.jpg", 2076, 1384, "On-site main view"),
          img("explore-the-future", "real-02.jpg", 980, 654, "On-site detail 01"),
          img("explore-the-future", "real-03.jpg", 980, 652, "On-site detail 02"),
        ],
      },
    ],
  },
  {
    slug: "ai-imagination-journey",
    title: "AI创想之旅",
    year: "2025",
    company: "Lenovo Customer Experience Center",
    style: "Tech · Interactive · Family",
    overview:
      "Through exhibition paths, passport stamps, and interactive moments, visitors imagine future tech life.",
    role: "AIGC Artist",
    medium: "AIGC art, stamps, passport, print & digital",
    summary: [
      "AIGC art for an exhibition journey. Generative key visuals, stamps, and passport materials that invite the public to imagine future tech life — shipped for live visitor use.",
    ],
    sections: [
      {
        id: "kv",
        eyebrow: "01 · Key visual",
        title: "Generative key visual",
        copy:
          "An AIGC art series made during the Lenovo Customer Experience Center internship: generative key visuals and material systems for AI Imagination Journey, shipped with the product and used in live visitor scenarios.",
        layout: "vd-kv",
        features: ["Exhibition narrative", "Passport stamping", "Family-friendly forms", "System extensions"],
        gallery: [img("ai-imagination-journey", "kv.jpg", 4000, 2250, "AI Imagination Journey key visual")],
      },
      {
        id: "stamps",
        eyebrow: "02 · Stamps",
        title: "Stamp set",
        copy: "AIGC-generated stamp motifs mapped to exhibition content and visitor routes across cities.",
        layout: "vd-stamps",
        gallery: aiStampOrder.map((file) =>
          img(
            "ai-imagination-journey",
            `stamps/${file}`,
            file.startsWith("city-") ? 410 : 473,
            file.startsWith("city-") ? 410 : 473,
            file.replace(/\.(png|jpg)$/i, ""),
          ),
        ),
      },
      {
        id: "passport",
        eyebrow: "03 · Passport",
        title: "Exploration passport",
        copy: "A collectible passport that turns the visit into a stamped journey through generative page art.",
        layout: "vd-passport",
        gallery: [
          img("ai-imagination-journey", "passport/01.jpg", 666, 1000, "Passport cover"),
          ...Array.from({ length: 29 }, (_, index) => {
            const n = String(index + 2).padStart(2, "0");
            return img(
              "ai-imagination-journey",
              `passport/${n}.jpg`,
              666,
              1000,
              `Passport page ${index + 2}`,
            );
          }),
          img("ai-imagination-journey", "passport/stamp-page.jpg", 666, 1000, "Stamp collection page"),
        ],
      },
      {
        id: "extensions",
        eyebrow: "04 · Extensions",
        title: "Material extensions",
        copy: "Mini-program detail pages, roll-ups, KT boards, and wayfinding arrows extended from the same generative system.",
        layout: "vd-extensions",
        gallery: [
          img("ai-imagination-journey", "arrow.jpg", 1066, 1599, "Wayfinding arrow KT"),
          img("ai-imagination-journey", "kt.jpg", 1066, 1599, "KT board"),
          img("ai-imagination-journey", "rollup.jpg", 800, 2000, "Roll-up"),
          img("ai-imagination-journey", "long-bj.jpg", 258, 2000, "Beijing tall page"),
          img("ai-imagination-journey", "long-sz.jpg", 283, 2000, "Shenzhen tall page"),
          img("ai-imagination-journey", "long-tj.jpg", 258, 2000, "Tianjin tall page"),
        ],
      },
      {
        id: "real-life",
        eyebrow: "05 · In use",
        title: "Live scenarios",
        layout: "vd-photos",
        gallery: [
          img("ai-imagination-journey", "real-01.jpg", 880, 982, "Passport in hand"),
          img("ai-imagination-journey", "real-02.jpg", 1076, 1006, "Digital application"),
          img("ai-imagination-journey", "real-03.jpg", 672, 1308, "Campaign promotion"),
        ],
      },
    ],
  },
  {
    slug: "gift-shop-launch",
    title: "礼品店上新",
    year: "2025",
    company: "Lenovo Customer Experience Center",
    style: "Fresh · Summer · Geometry",
    overview:
      "A unified generative visual system that introduces new products and invites playful participation.",
    role: "AIGC Artist",
    medium: "AIGC art, key visual, raffle & retail",
    summary: [
      "AIGC art for a gift-shop launch. A generative visual system that introduces new products and invites playful participation — shipped for live visitor use.",
    ],
    sections: [
      {
        id: "kv",
        eyebrow: "01 · Key visual",
        title: "Generative key visuals",
        copy:
          "An AIGC art series made during the Lenovo Customer Experience Center internship: generative key visuals and material systems for the summer gift-shop refresh, shipped with the product and used in live visitor scenarios.",
        layout: "vd-kv",
        features: ["Summer geometry", "New-product story", "Raffle touchpoints", "Multi-city rollout"],
        gallery: [
          img("gift-shop-launch", "kv.jpg", 1920, 1080, "Gift-shop launch main KV"),
          img("gift-shop-launch", "kv-forum.jpg", 2784, 1240, "Forum KV"),
        ],
      },
      {
        id: "extensions",
        eyebrow: "02 · Extensions",
        title: "Material extensions",
        copy: "Detail pages, wayfinding, roll-ups, raffle boxes, and tickets extended from the generative system.",
        layout: "vd-gift-ext",
        gallery: [
          img("gift-shop-launch", "detail.jpg", 319, 1600, "Gift-shop detail page"),
          img("gift-shop-launch", "arrow.jpg", 1200, 1800, "Wayfinding arrow"),
          img("gift-shop-launch", "rollup.jpg", 800, 2000, "Roll-up"),
          img("gift-shop-launch", "box.jpg", 1600, 1199, "Raffle box"),
          img("gift-shop-launch", "ticket.jpg", 1400, 544, "Ticket front"),
          img("gift-shop-launch", "ticket-back.jpg", 1400, 544, "Ticket back"),
        ],
      },
      {
        id: "real-life",
        eyebrow: "03 · In use",
        title: "Live scenarios",
        copy: "Installed across the gift shop floor — from digital detail pages to physical raffle moments.",
        layout: "vd-photos",
        gallery: [
          img("gift-shop-launch", "real-01.jpg", 1538, 1153, "Gift-shop scene 01"),
          img("gift-shop-launch", "real-02.jpg", 1560, 1152, "Gift-shop scene 02"),
        ],
      },
    ],
  },
];
