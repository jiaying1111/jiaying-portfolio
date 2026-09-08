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
    company: "联想客户接待中心",
    style: "科技感 绿色 亲子",
    overview:
      "从身边的电子产品出发，带领同学们探索绿色科技的奥秘，认识ESG的核心理念。",
    role: "视觉设计实习生",
    medium: "Key visual, print, social, classroom aids",
    summary: [
      "ESG亲子活动主视觉设计。为「碳索未来」人工智能科普体验系列活动设计主视觉及物料延展，项目已正式上线并应用于实际用户场景。",
    ],
    sections: [
      {
        id: "kv",
        eyebrow: "KV design",
        title: "KV设计",
        copy:
          "本项目为实习期间在联想客户接待中心，为“碳索未来”人工智能科普体验系列活动设计的主视觉及物料延展，项目最终随产品版本正式上线，目前已应用于实际用户场景中。",
        layout: "vd-kv",
        features: ["绿色科技叙事", "亲子可读图形", "活动主视觉延展", "线上线下统一"],
        gallery: [img("explore-the-future", "kv.jpg", 4000, 2250, "碳索未来 key visual")],
      },
      {
        id: "assets",
        eyebrow: "Asset design",
        title: "图案设计",
        copy: "图案设计包括机械臂，回收盒，ESG电脑等。",
        layout: "vd-assets",
        gallery: [
          img("explore-the-future", "asset-arm.jpg", 537, 581, "机械臂图形"),
          img("explore-the-future", "asset-recycle.jpg", 484, 477, "回收盒图形"),
          img("explore-the-future", "asset-laptop.jpg", 644, 459, "ESG电脑图形"),
          img("explore-the-future", "asset-cart.jpg", 272, 269, "推车角色图形"),
          img("explore-the-future", "asset-earth.jpg", 198, 243, "地球图形"),
        ],
      },
      {
        id: "online",
        eyebrow: "Online materials",
        title: "线上物料",
        copy: "物料包括小程序详情图，各大社交媒体封面图，投屏海报，课件模板等。",
        layout: "vd-online",
        gallery: [
          img("explore-the-future", "online-beijing.jpg", 283, 2400, "北京长条详情图"),
          img("explore-the-future", "online-tianjin.jpg", 283, 2400, "天津长条详情图"),
          img("explore-the-future", "online-screen.jpg", 2400, 648, "投屏海报"),
          img("explore-the-future", "online-qr.jpg", 1488, 1488, "二维码图"),
          img("explore-the-future", "online-mini-tj.jpg", 2400, 1350, "天津小程序头图"),
          img("explore-the-future", "online-redeem.jpg", 1696, 2400, "兑换底图"),
          img("explore-the-future", "online-video.jpg", 1800, 2400, "视频模板"),
        ],
      },
      {
        id: "print",
        eyebrow: "Print materials",
        title: "打印物料",
        copy: "物料包括条幅，门票，臂贴，打卡相框，易拉宝，KT板等。",
        layout: "vd-print",
        gallery: [
          img("explore-the-future", "print-banner.jpg", 2400, 291, "条幅"),
          img("explore-the-future", "print-rollup.jpg", 799, 1999, "易拉宝"),
          img("explore-the-future", "print-arm.jpg", 1599, 1599, "臂贴"),
          img("explore-the-future", "print-ticket-01.jpg", 1600, 534, "门票正面"),
          img("explore-the-future", "print-ticket-02.jpg", 1600, 534, "门票副券"),
          img("explore-the-future", "print-frame.jpg", 1067, 1600, "打卡相框"),
        ],
      },
      {
        id: "real-life",
        eyebrow: "Real life scenario",
        title: "实际应用场景",
        layout: "vd-photos",
        gallery: [
          img("explore-the-future", "real-01.jpg", 2076, 1384, "现场应用场景主图"),
          img("explore-the-future", "real-02.jpg", 980, 654, "现场应用场景细节 01"),
          img("explore-the-future", "real-03.jpg", 980, 652, "现场应用场景细节 02"),
        ],
      },
    ],
  },
  {
    slug: "ai-imagination-journey",
    title: "AI创想之旅",
    year: "2025",
    company: "联想客户接待中心",
    style: "科技感 互动 亲子 打卡",
    overview:
      "通过参观展区、护照打卡与互动体验，激发公众对未来科技生活的想象与思考。",
    role: "视觉设计实习生",
    medium: "Key visual, print, social, interactive print",
    summary: [
      "展览参观活动主视觉设计。通过参观展区、护照打卡与互动体验，激发公众对未来科技生活的想象与思考。",
    ],
    sections: [
      {
        id: "kv",
        eyebrow: "KV design",
        title: "KV设计",
        copy:
          "本项目为实习期间在联想客户接待中心，为“AI创想之旅”活动设计的主视觉及物料延展，项目最终随产品版本正式上线，目前已应用于实际用户场景中。",
        layout: "vd-kv",
        features: ["参观动线叙事", "护照互动打卡", "亲子友好图形", "物料系统延展"],
        gallery: [img("ai-imagination-journey", "kv.jpg", 4000, 2250, "AI创想之旅 key visual")],
      },
      {
        id: "stamps",
        eyebrow: "Stamp design",
        title: "打卡印章设计",
        copy: "根据展览内容与动线设计打卡印章。",
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
        eyebrow: "Interactive Passport Design",
        title: "探索护照设计",
        layout: "vd-passport",
        gallery: [
          img("ai-imagination-journey", "passport/01.jpg", 666, 1000, "探索护照封面"),
          ...Array.from({ length: 29 }, (_, index) => {
            const n = String(index + 2).padStart(2, "0");
            return img(
              "ai-imagination-journey",
              `passport/${n}.jpg`,
              666,
              1000,
              `探索护照内页 ${index + 2}`,
            );
          }),
          img("ai-imagination-journey", "passport/stamp-page.jpg", 666, 1000, "集章页"),
        ],
      },
      {
        id: "extensions",
        eyebrow: "Visual system extensions",
        title: "物料延展",
        copy: "物料包括小程序详情图，易拉宝，KT板等。",
        layout: "vd-extensions",
        gallery: [
          img("ai-imagination-journey", "arrow.jpg", 1066, 1599, "指引箭头 KT"),
          img("ai-imagination-journey", "kt.jpg", 1066, 1599, "KT板"),
          img("ai-imagination-journey", "rollup.jpg", 800, 2000, "易拉宝"),
          img("ai-imagination-journey", "long-bj.jpg", 258, 2000, "北京长图"),
          img("ai-imagination-journey", "long-sz.jpg", 283, 2000, "深圳长图"),
          img("ai-imagination-journey", "long-tj.jpg", 258, 2000, "天津长图"),
        ],
      },
      {
        id: "real-life",
        eyebrow: "Real life scenario",
        title: "应用场景",
        layout: "vd-photos",
        gallery: [
          img("ai-imagination-journey", "real-01.jpg", 880, 982, "护照实物场景"),
          img("ai-imagination-journey", "real-02.jpg", 1076, 1006, "线上应用场景"),
          img("ai-imagination-journey", "real-03.jpg", 672, 1308, "活动宣传场景"),
        ],
      },
    ],
  },
  {
    slug: "gift-shop-launch",
    title: "礼品店上新",
    year: "2025",
    company: "联想客户接待中心",
    style: "清新 夏天 几何",
    overview: "通过统一的视觉系统传达新品概念，并引导观众参与互动体验。",
    role: "视觉设计实习生",
    medium: "Key visual, detail pages, roll-up, raffle materials",
    summary: [
      "礼品店上新活动主视觉设计。通过统一的视觉系统传达新品概念，并引导观众参与互动体验。",
    ],
    sections: [
      {
        id: "kv",
        eyebrow: "KV design",
        title: "KV设计",
        copy:
          "本项目为实习期间在联想客户接待中心，为“盛夏来袭 好物焕新”活动设计的主视觉及物料延展，项目最终随产品版本正式上线，目前已应用于实际用户场景中。",
        layout: "vd-kv",
        features: ["夏日几何视觉", "新品传达", "抽奖互动物料", "多城延展"],
        gallery: [
          img("gift-shop-launch", "kv.jpg", 1920, 1080, "礼品店上新主 KV"),
          img("gift-shop-launch", "kv-forum.jpg", 2784, 1240, "论坛 KV"),
        ],
      },
      {
        id: "extensions",
        eyebrow: "Visual system extensions",
        title: "物料延展",
        copy: "物料包括小程序详情图，KT板，易拉宝，抽奖箱，奖券等。",
        layout: "vd-gift-ext",
        gallery: [
          img("gift-shop-launch", "detail.jpg", 319, 1600, "礼品店详情图"),
          img("gift-shop-launch", "arrow.jpg", 1200, 1800, "指引箭头"),
          img("gift-shop-launch", "rollup.jpg", 800, 2000, "易拉宝"),
          img("gift-shop-launch", "box.jpg", 1600, 1199, "抽奖箱"),
          img("gift-shop-launch", "ticket.jpg", 1400, 544, "奖券正面"),
          img("gift-shop-launch", "ticket-back.jpg", 1400, 544, "奖券背面"),
        ],
      },
      {
        id: "real-life",
        eyebrow: "Real life scenario",
        title: "应用场景",
        copy: "物料包括小程序详情图，KT板，易拉宝，抽奖箱，奖券等。",
        layout: "vd-photos",
        gallery: [
          img("gift-shop-launch", "real-01.jpg", 1538, 1153, "礼品店现场场景 01"),
          img("gift-shop-launch", "real-02.jpg", 1560, 1152, "礼品店现场场景 02"),
        ],
      },
    ],
  },
];
