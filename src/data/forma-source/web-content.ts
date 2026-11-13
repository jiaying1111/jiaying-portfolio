export const formaReadingGroups = [
  { start: 2, zh: "调研与流程", en: "Research & flow" },
  { start: 5, zh: "规范与导航", en: "System & navigation" },
  { start: 7, zh: "画布体验", en: "Canvas experience" },
  { start: 10, zh: "改稿与延展", en: "Revision & adaptation" },
  { start: 15, zh: "协作与排期", en: "Review & schedule" },
  { start: 17, zh: "设计实现", en: "Implementation" },
] as const;

export const formaResearchFindings = [
  { zh: "局部精修", en: "Local refinement", copy: "改完日期，还要核对其他尺寸。", copyEn: "A date change also means checking the other required sizes." },
  { zh: "稿件管理", en: "Finding drafts", copy: "稿件累积，查找与定位困难。", copyEn: "As drafts accumulate, it gets harder to find a specific one." },
  { zh: "反馈核对", en: "Feedback checks", copy: "回到聊天记录确认修改要求。", copyEn: "Designers return to chat records to confirm requested changes." },
] as const;

export const formaColors = [
  { hex: "#3D2CEA", zh: "主操作", en: "Primary action" },
  { hex: "#FBE7A2", zh: "项目", en: "Project" },
  { hex: "#F6C1AF", zh: "需求", en: "Requirement" },
  { hex: "#E3DBF4", zh: "排期", en: "Schedule" },
  { hex: "#DEEBE3", zh: "身份", en: "Identity" },
] as const;

export const formaImplementationLayers = [
  { zh: "页面与路由", en: "Pages & routes", copy: "登录、项目、画布与需求方入口", copyEn: "Sign-in, project, canvas, and client entry points", file: "final-workbench.js / final-pages.js" },
  { zh: "交互与项目状态", en: "Interaction & project state", copy: "改稿、版本选择、提交与反馈", copyEn: "Revision, version selection, submission, and feedback", file: "canvas-interactions.js / core.js" },
  { zh: "浏览器存储", en: "Browser storage", copy: "保存并恢复项目数据", copyEn: "Persist and restore project data", file: "localStorage / sessionStorage" },
] as const;

export const formaSubmissionSteps = [
  { code: "deliveryCreateRecord(…)", zh: "复制选中的画板，生成带版本号的独立快照。", en: "Copy the selected artboards into an independent versioned snapshot." },
  { code: "project.clientSubmissions.push(record)", zh: "把快照加入项目的提交记录，绑定对应需求。", en: "Add the snapshot to the project submission record and link it to the requirement." },
  { code: "persist()", zh: "写入本地存储，并读回检查这次提交是否保存。", en: "Write to browser storage, then read back to verify the submission was saved." },
] as const;
