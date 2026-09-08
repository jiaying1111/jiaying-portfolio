export type VisualDesignStill = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type VisualDesignStudy = {
  slug: string;
  title: string;
  year: string;
  medium: string;
  summary: string[];
  gallery: VisualDesignStill[];
};

function img(
  slug: string,
  file: string,
  width: number,
  height: number,
  alt: string,
): VisualDesignStill {
  return {
    src: `/images/artwork/${slug}/detail/${file}`,
    alt,
    width,
    height,
  };
}

export const visualDesignStudies: VisualDesignStudy[] = [
  {
    slug: "ai-imagination-journey",
    title: "AI创想之旅",
    year: "2025",
    medium: "Key visual, print, social, interactive print",
    summary: [
      "A Lenovo Customer Center campaign that turns an AI-themed visit into a collectible journey. I designed the key visual, outdoor banners, on-site signage, stamps, and a passport-style keepake so guests could move through the space while gathering campaign moments.",
      "The system stays playful and readable for families and visitors: one brand world across print boards, wayfinding, and photo-friendly stamp pages.",
    ],
    gallery: [
      img("ai-imagination-journey", "01.jpg", 1400, 787, "AI创想之旅 key visual"),
      img("ai-imagination-journey", "02.jpg", 1400, 3500, "Outdoor roll-up banner for AI创想之旅"),
      img("ai-imagination-journey", "03.jpg", 1400, 1018, "Interactive flip-book science panel"),
      img("ai-imagination-journey", "04.jpg", 1400, 3499, "On-site roll-up banner"),
      img("ai-imagination-journey", "05.jpg", 1400, 2100, "KT board graphic"),
      img("ai-imagination-journey", "06.jpg", 1400, 1979, "Stamp graphic for the campaign passport"),
      img("ai-imagination-journey", "07.jpg", 1400, 2100, "Passport stamp collection page"),
      img("ai-imagination-journey", "08.jpg", 1400, 2100, "Passport interior page"),
      img("ai-imagination-journey", "09.jpg", 1400, 2100, "Passport cover and stamp spread"),
    ],
  },
  {
    slug: "explore-the-future",
    title: "探索未来",
    year: "2025",
    medium: "Key visual, handbook, signage, mini-program covers",
    summary: [
      "探索未来 (碳索未来) is a Lenovo sustainability learning event. I designed the campaign cover system, roll-up banners, classroom aids, KT wayfinding, and mini-program covers used across Beijing, Shenzhen, and Tianjin.",
      "The visual language keeps carbon and future themes clear for students and visiting groups, from the handbook cover to on-site directional boards.",
    ],
    gallery: [
      img("explore-the-future", "01.jpg", 1400, 1999, "探索未来 handbook cover"),
      img("explore-the-future", "02.jpg", 1400, 3500, "Explore the Future roll-up banner 01"),
      img("explore-the-future", "03.jpg", 1400, 3500, "Explore the Future roll-up banner 02"),
      img("explore-the-future", "04.jpg", 1400, 3500, "Explore the Future roll-up banner 03"),
      img("explore-the-future", "05.jpg", 1400, 1868, "Beijing mini-program cover"),
      img("explore-the-future", "06.jpg", 1400, 1868, "Shenzhen mini-program cover"),
      img("explore-the-future", "07.jpg", 1400, 989, "Classroom teaching aid graphic"),
      img("explore-the-future", "08.jpg", 1400, 2099, "KT board for on-site wayfinding"),
      img("explore-the-future", "09.jpg", 1400, 906, "Campaign visual study"),
    ],
  },
  {
    slug: "gift-shop-launch",
    title: "礼品店上新",
    year: "2025",
    medium: "Key visual, detail pages, roll-up, raffle materials",
    summary: [
      "A gift-shop launch campaign for Lenovo Customer Center. I designed the key visuals, long-form product detail graphics, city roll-up banners, raffle rules boards, and prize tickets for Beijing, Tianjin, and Shenzhen.",
      "The set supports both online promotion and on-site conversion: one KV system for social posts, and print pieces that guide guests through browsing, drawing, and redeeming gifts.",
    ],
    gallery: [
      img("gift-shop-launch", "01.jpg", 1400, 623, "礼品店上新 forum key visual"),
      img("gift-shop-launch", "02.jpg", 1400, 623, "礼品店上新 dual-location key visual"),
      img("gift-shop-launch", "03.jpg", 1600, 8005, "Gift shop long-form detail graphic 01"),
      img("gift-shop-launch", "04.jpg", 1600, 8661, "Gift shop long-form detail graphic 02"),
      img("gift-shop-launch", "05.jpg", 1400, 3500, "Beijing roll-up banner"),
      img("gift-shop-launch", "06.jpg", 1400, 3500, "Shenzhen roll-up banner"),
      img("gift-shop-launch", "07.jpg", 1400, 2099, "Raffle rules board"),
      img("gift-shop-launch", "08.jpg", 1400, 2099, "Updated raffle rules KT board"),
      img("gift-shop-launch", "09.jpg", 1400, 544, "First-prize raffle ticket"),
    ],
  },
];
