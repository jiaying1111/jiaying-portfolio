import { formaSourceChapters } from "./content";

export type FormaWords = readonly [zh: string, en: string];

type BoardAnchor = typeof formaSourceChapters[number]["anchor"];

function boards(...anchors: BoardAnchor[]) {
  return anchors.map(anchor => formaSourceChapters.find(board => board.anchor === anchor)!);
}

export const readingTitles = {
  workflow: ["协作工作流", "Workflow"],
  features: ["产品功能", "Product features"],
} as const;

export const openingChapters = [
  { label: ["研究与竞品", "Research & comparison"], boards: boards(2, 19) },
  { label: ["需求与定位", "Needs & positioning"], boards: boards(20, 21) },
  { label: ["信息架构", "Information architecture"], boards: boards(3) },
  { label: ["低保真流程", "Low-fidelity flow"], boards: boards(4) },
  { label: ["界面规范", "UI guidelines"], boards: boards(5) },
] as const;

export const closingChapters = [
  { label: ["界面全景", "Interface gallery"], boards: boards(9) },
  { label: ["原型实现", "Implementation"], boards: boards(17, 18) },
] as const;

type WorkflowStep = {
  id: string;
  title: FormaWords;
  actor: FormaWords;
  action: FormaWords;
  screen: FormaWords;
  image: (locale: string) => string;
};

export const workflowSteps: readonly WorkflowStep[] = [
  {
    id: "brief",
    title: ["接收横版需求", "Pick up the landscape brief"],
    actor: ["需求方 → 设计师", "Client → Designer"],
    action: ["设计师设好项目的品牌规范，邀请需求方加入。需求方提出要一张 1920 × 1080 的横版稿。设计师在「需求与反馈」里接到这项任务。", "The designer sets the brand rules and invites the client. The client requests a 1920 × 1080 landscape design. It appears in the designer’s Requests & Feedback inbox."],
    screen: ["设计师工作台 · 收到的横版需求", "Designer workspace · Incoming landscape request"],
    image: locale => `handoff/pear-designer-inbox-${locale}.webp`,
  },
  {
    id: "direction",
    title: ["从初稿里选出主视觉", "Choose a visual direction"],
    actor: ["设计师 · 创作画布", "Designer · Canvas"],
    action: ["带着横版要求回到画布。设计师对照情绪板，把两版初稿归入同一方向，再生成候选稿，选出适合横向构图的一版。", "Working from the brief, the designer checks two drafts against the moodboard, groups them on the canvas and generates a variation. One composition is chosen for the landscape layout."],
    screen: ["创作画布 · 同一方向下的候选稿", "Design canvas · Drafts grouped by direction"],
    image: locale => `walkthrough/original/pear-directions-${locale}-3-still.webp`,
  },
  {
    id: "submit",
    title: ["把横版画板提交为 V1", "Submit the landscape artboard as V1"],
    actor: ["设计师 → 需求方", "Designer → Client"],
    action: ["设计师把选中的稿件延展成横版，关联到原需求并提交。V1 保留了当时的构图和活动日期 11.01—11.11，需求方可以在自己的工作台审阅。", "The designer adapts the chosen draft to landscape, links the artboard to the request and submits it. The client receives V1 with the layout and event dates as submitted, November 1–11."],
    screen: ["设计师画布 · 原需求下的 V1 提交", "Designer canvas · V1 submission for the original request"],
    image: locale => `walkthrough/original/pear-review-${locale}-1-still.webp`,
  },
  {
    id: "feedback",
    title: ["在 V1 上提出日期修改", "Request a date change on V1"],
    actor: ["需求方 → 设计师", "Client → Designer"],
    action: ["需求方打开「我的需求」，在 V1 上写下「请将结束日期改为 11.15，保留现有构图。」设计师收到这条意见时，可以看到它指的是哪一版。", "In My requests, the client reviews V1 and asks to keep the layout and extend the end date to November 15. The feedback goes back to the designer attached to that version."],
    screen: ["需求方工作台 · V1 的修改意见", "Client workspace · Feedback on V1"],
    image: locale => `walkthrough/original/pear-review-${locale}-2-still.webp`,
  },
  {
    id: "revise",
    title: ["回到原画板，改日期并提交 V2", "Revise the date and submit V2"],
    actor: ["设计师 → 需求方", "Designer → Client"],
    action: ["设计师从反馈回到已关联的横版画板，选中日期文字，把 11.11 改成 11.15，再从同一条需求提交 V2。V1 仍保留原日期，方便核对。", "The designer returns to the linked artboard and changes the end date from November 11 to November 15. Submitting from the same request creates V2 and keeps V1 available for comparison."],
    screen: ["设计师画布 · 日期文字已改为 11.01—11.15", "Designer canvas · Updated date layer, November 1–15"],
    image: locale => `workflow/edit-end-date-${locale}.webp`,
  },
  {
    id: "approve",
    title: ["核对 V2，确认交付", "Check V2 and approve delivery"],
    actor: ["需求方 · 我的需求", "Client · My requests"],
    action: ["需求方打开 V2，核对结束日期和构图后确认通过。这条横版需求变为「已完成」，两次提交和修改意见都保存在需求记录中。", "The client opens V2, checks the new end date and the layout, and approves it. The landscape request is marked complete with both submissions and the feedback in its history."],
    screen: ["需求方工作台 · 已完成的横版需求", "Client workspace · Approved landscape request"],
    image: locale => `walkthrough/original/pear-review-${locale}-4-still.webp`,
  },
];

// Short index labels point to the original board ids and their full headings.
export const featureNames: Partial<Record<BoardAnchor, FormaWords>> = {
  22: ["项目概述与品牌规范", "Brief and brand rules"],
  23: ["邀请与需求方工作台", "Invitations and client workspace"],
  6: ["工作区导航与设置", "Workspace navigation and settings"],
  7: ["画布功能分区", "Canvas anatomy"],
  13: ["参考与情绪板", "References and moodboards"],
  12: ["创作方向分组", "Creative direction groups"],
  10: ["字形精修与文件历史", "Lettering and file history"],
  11: ["比稿与保留版本", "Draft comparison and versions"],
  14: ["画板尺寸延展", "Artboard adaptation"],
  16: ["排期与关联画板", "Scheduling and linked artboards"],
  15: ["版本反馈与确认", "Version feedback and approval"],
  8: ["跨项目月历", "Cross-project calendar"],
};

export const featureGroups = [
  { id: "project", label: ["项目与品牌", "Projects & branding"], boards: boards(22, 23, 6) },
  { id: "directions", label: ["画布与创意方向", "Canvas & directions"], boards: boards(7, 13, 12) },
  { id: "editing", label: ["稿件编辑与版本", "Editing & versions"], boards: boards(10, 11, 14) },
  { id: "delivery", label: ["排期与审阅", "Scheduling & review"], boards: boards(16, 15, 8) },
] satisfies { id: string; label: FormaWords; boards: ReturnType<typeof boards> }[];

export const formaWireframes = [
  { id:"781:8437", w:345,h:241.5, title:["选择协作身份","Choose a role"], copy:["设计师进入创作工作区，需求方进入审稿端。","The designer enters the creative workspace and the client enters review."] },
  { id:"781:8467", w:490,h:343, title:["打开已有项目","Open an existing project"], copy:["项目卡把已有画板和待处理需求放在同一个入口。","The project card brings existing artboards and open requests together."] },
  { id:"781:8521", w:760,h:532, title:["在画布旁核对需求","Read the brief beside the art"], copy:["在当前方向编辑稿件，提交时再勾选要交给需求方的画板。","Edit drafts in their direction, then select the artboards the client should review."] },
  { id:"781:8718", w:415,h:290.5, title:["审阅这次提交","Review this submission"], copy:["在同一条需求下看稿件与版本，留下修改意见或确认通过。","Open the request to see its submitted work and version, request changes, or approve."] },
] as const;
