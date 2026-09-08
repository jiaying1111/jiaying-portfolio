import type { Locale } from "@/i18n/locale";

const chrome = {
  en: {
    menu: "Menu",
    closeMenu: "Close menu",
    viewProject: "View Project",
    type: "Type",
    tools: "Tools",
    scrollToExplore: "Scroll to explore",
    previousProject: "Previous project",
    nextProject: "Next project",
    previousProjectLink: "\u2190 Previous project",
    nextProjectLink: "Next project \u2192",
    backShort: "<  Back",
    loadingWork: "Loading selected work",
    loadingPortfolio: "Loading portfolio",
    primaryNav: "Primary",
    wireframe: "Wireframe",
    mechanism: "Mechanism",
    education: "Education",
    selectedExperience: "Selected Experience",
    awards: "Awards",
    personalSkills: "Personal Skills",
    featuredWork: "Featured work",
    caseChapters: "Case study chapters",
    projectNav: "Project navigation",
    langGroup: "Language",
    moreExperience: " Experience Design projects",
    moreArtwork: " Artwork",
    experienceCategories: "Experience Design categories",
    artworkCategories: "Artwork categories",
  },
  zh: {
    menu: "菜单",
    closeMenu: "关闭菜单",
    viewProject: "查看项目",
    type: "类型",
    tools: "工具",
    scrollToExplore: "下滑探索",
    previousProject: "上一个项目",
    nextProject: "下一个项目",
    previousProjectLink: "\u2190 上一个项目",
    nextProjectLink: "下一个项目 \u2192",
    backShort: "<  返回",
    loadingWork: "正在载入作品",
    loadingPortfolio: "正在载入作品集",
    primaryNav: "主导航",
    wireframe: "线框",
    mechanism: "机制",
    education: "教育背景",
    selectedExperience: "经历",
    awards: "荣誉与奖项",
    personalSkills: "个人技能",
    featuredWork: "精选作品",
    caseChapters: "章节导航",
    projectNav: "项目导航",
    langGroup: "语言",
    moreExperience: "体验设计项目",
    moreArtwork: "艺术作品",
    experienceCategories: "体验设计分类",
    artworkCategories: "艺术作品分类",
  },
} as const;

export function ui(locale: Locale) {
  return chrome[locale];
}

export function backToLabel(locale: Locale, section: string) {
  return locale === "zh" ? `\u2039 返回${section}` : `\u2039 Back to ${section}`;
}

export function viewNamed(locale: Locale, name: string) {
  return locale === "zh" ? `查看 ${name}` : `View ${name}`;
}

export function slideStatus(
  locale: Locale,
  index: number,
  total: number,
  title: string,
) {
  return locale === "zh"
    ? `第 ${index} / ${total} 张：${title}`
    : `Slide ${index} of ${total}: ${title}`;
}

export function showSlideLabel(locale: Locale, index: number, total: number) {
  return locale === "zh"
    ? `显示第 ${index} / ${total} 张`
    : `Show slide ${index} of ${total}`;
}
