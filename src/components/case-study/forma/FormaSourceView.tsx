"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { formaCanvasLayers, formaSourceChapters } from "@/data/forma-source/content";
import { formaColors, formaImplementationLayers, formaResearchFindings, formaSubmissionSteps } from "@/data/forma-source/web-content";
import { openingChapters, closingChapters, featureGroups, type FormaWords } from "@/data/forma-source/reading";
import { useLocale } from "@/i18n/LocaleProvider";
import { backToLabel, ui } from "@/i18n/ui";
import { ProjectMetadata } from "../ProjectMetadata";
import { Diagram, Fragment, OriginalAsset, diagramTree, sourceNode, useWords } from "./FormaSourceGraphic";
import { Competitors, Needs, Positioning, Journey, ProjectBrief, Invitation } from "./FormaRevision";
import { Wireframes, ScreenGallery, ArtworkSchedule, Dates, FormaChapterNav, FeatureIndex } from "./FormaReading";
import { FormaInterface } from "./FormaInterface";
import { FormaRefinement } from "./FormaRefinement";
import { FormaFeatureReader } from "./FormaFeatureReader";
import { FormaWorkflow } from "./FormaWorkflow";
import { FormaWalkthrough } from "./FormaWalkthrough";
import "./forma-source-generated.css";
import "./forma-source.css";
import "./forma-reading.css";

function CopyBlock({ title, children, heading: Heading = "h3" }: { title: string; children: ReactNode; heading?: "h3" | "h5" }) {
  return <div className="forma-web-copy"><Heading>{title}</Heading>{children}</div>;
}

function Research() {
  const t = useWords();
  return <>
    <div className="forma-web-research">
      <div className="forma-web-signals">
        <div><p className="forma-source-eyebrow">{t("设计工作中的 AI", "AI in design work")}</p><strong>72%</strong><p>{t("Figma 2026 年受访设计师已在日常工作中使用生成式 AI。", "Of designers surveyed by Figma in 2026 use generative AI in their daily work.")}</p></div>
        <div><p className="forma-source-eyebrow">{t("改稿需求", "Revision needs")}</p><strong>57%</strong><p>{t("Adobe 受访创作者认为，AI 产出仍需中度或大量编辑。", "Adobe's surveyed creators said AI output still needed moderate or substantial editing.")}</p></div>
      </div>
      <figure className="forma-web-interviews"><OriginalAsset id="781:1559" alt={t("品牌设计师与资深设计师的访谈角色示意", "Illustration of the two designer interview roles")} /><figcaption>{t("10 位设计师访谈与流程观察", "Interviews and workflow observations with ten designers")}<span>{t("品牌设计师 / 资深设计师", "Brand designer / Senior designer")}</span></figcaption></figure>
      <ol className="forma-web-findings">{formaResearchFindings.map((finding, i) => <li key={finding.en}><span>{String(i + 1).padStart(2, "0")}</span><div><h3>{t(finding.zh, finding.en)}</h3><p>{t(finding.copy, finding.copyEn)}</p></div></li>)}</ol>
    </div>
    <p className="forma-market-forecast">{t("全球生成式 AI 设计市场预测：2026 年 15.2 亿美元，2030 年 45.4 亿美元。", "Global generative AI in design market forecast: $1.52 billion in 2026 and $4.54 billion in 2030.")} <a href="https://www.thebusinessresearchcompany.com/report/generative-ai-in-design-global-market-report" target="_blank" rel="noreferrer">TBRC ↗</a></p>
    <p className="forma-web-insight"><span>{t("设计重点", "Design focus")}</span>{t("让修改、稿件与反馈保持对应。", "Keep revisions, drafts, and feedback connected.")}</p>
  </>;
}

function DesignSystem() {
  const t = useWords();
  return <>
    <div className="forma-web-columns">
      <CopyBlock title={t("字体与语义", "Typography & meaning")}><div className="forma-web-type-example" aria-hidden="true">Aa <span>字</span></div><div className="forma-web-system-examples"><Diagram spec={{ tree: sourceNode("781:1867"), box: [480, 317, 180, 123], label: t("排期卡片", "Schedule card") }} inspect={false} /><Fragment id="781:1855" width={240} height={229} label={t("需求卡片", "Requirement card")} /></div><p>Noto Sans SC / DM Sans</p><p>{t("中文与英文建立层级；日期使用 Plus Jakarta Sans。", "Chinese and English follow a shared hierarchy; dates use Plus Jakarta Sans.")}</p><p className="forma-web-caption">{t("4 / 8px 间距节奏 · 圆角 8 / 12 / 16 / 24px", "4 / 8px spacing rhythm · 8 / 12 / 16 / 24px corners")}</p></CopyBlock>
      <CopyBlock title={t("控件与状态", "Controls & states")}><Fragment id="781:1789" width={660} height={276} label={t("按钮状态", "Button states")} /><p>{t("默认、悬停、按下与禁用，用一致反馈支撑连续操作。", "Default, hover, pressed, and disabled states keep feedback consistent.")}</p><Fragment id="781:1808" width={660} height={264} label={t("输入与键盘聚焦", "Input & keyboard focus")} /></CopyBlock>
    </div>
    <ul className="forma-web-swatches">{formaColors.map(color => <li key={color.hex}><span style={{ backgroundColor: color.hex }} /><p>{t(color.zh, color.en)}</p><code>{color.hex}</code></li>)}</ul>
    <Fragment id="781:1818" width={900} height={145} label={t("图标语义", "Icon language")} caption={t("图标 16 / 20 / 24px；选择、文字、画板、图层、导出、编辑、导入聊天与确认。", "16 / 20 / 24px icons for selection, type, artboards, layers, export, editing, chat import, and confirmation.")} />
  </>;
}

function Workspace() {
  const t = useWords();
  return <FormaFeatureReader steps={[
    { key: "role", title: t("登录与身份", "Sign-in and roles"),
      copy: t("设计师提交稿件，需求方反馈并确认。输入邮箱验证码后，进入对应的工作区。", "Designers submit work and clients review it. Email verification opens the workspace for the selected role."),
      media: <Fragment id="781:1917" width={408} height={293} label={t("登录与身份选择", "Sign-in and role selection")} inspect /> },
    { key: "navigation", title: t("侧栏导航", "Sidebar navigation"),
      copy: t("按状态查找项目，查看待处理需求与反馈，接着编辑最近的项目。", "Find projects by state, check pending requests and feedback, and return to a recent project."),
      media: <Fragment id="781:1976" width={487} height={721} label={t("侧栏与导航分层", "Sidebar navigation")} inspect /> },
    { key: "settings", title: t("工作偏好与设置", "Workspace preferences"),
      copy: t("选择默认模型，调整文件历史的保存间隔，查看资料与积分，或导出项目备份。", "Choose a default model and save interval, review account details and credits, or export a project backup."),
      media: <Fragment id="781:1958" width={842} height={589} label={t("工作偏好设置", "Workspace preferences")} inspect /> },
    { key: "theme", title: t("深色画布", "Dark canvas"),
      copy: t("切换主题后，工具栏与输入框保持在原位，紫色仍标识当前方向。", "The toolbar and prompt stay in place when the theme changes. Purple still identifies the current direction."),
      media: <OriginalAsset id="781:2067" alt={t("深色创作画布", "Dark canvas theme")} /> },
  ]} />;
}

function CanvasAnatomy() {
  const { locale } = useLocale();
  const zh = locale === "zh";
  const t = useWords();
  const [contracted, setContracted] = useState(false);
  const [focus, setFocus] = useState("");
  const active = formaCanvasLayers.find(item => item.id === focus);
  return <div className="forma-web-anatomy">
    <div className="forma-source-controls"><div className="forma-source-controls__group" aria-label={t("图层视图", "Layer view")}>
      <button type="button" aria-pressed={!contracted} onClick={() => setContracted(false)}>{t("分层展开", "Exploded view")}</button>
      <button type="button" aria-pressed={contracted} onClick={() => setContracted(true)}>{t("收拢图层", "Contract layers")}</button>
    </div></div>
    <Diagram spec={{ tree: diagramTree(7), box: [40, 150, 1850, 920], label: t("画布分层与功能关系", "Canvas layers and relationships"), state: { focus, contracted, onLayerFocus: setFocus, zh } }} />
    <div className="forma-layer-reader">
      <div className="forma-layer-reader__choices" role="group" aria-label={t("聚焦画布图层", "Focus a canvas layer")}>
        <button type="button" aria-pressed={!focus} onClick={() => setFocus("")}>{t("全部图层", "All layers")}</button>
        {formaCanvasLayers.map((layer, i) => <button key={layer.id} type="button" aria-pressed={focus === layer.id} onClick={() => setFocus(layer.id)} onPointerMove={event => { if (event.pointerType === "mouse" && (event.movementX || event.movementY)) setFocus(layer.id); }}><span>{String(i + 1).padStart(2, "0")}</span>{t(layer.zh, layer.en)}</button>)}
      </div>
      <div className="forma-layer-reader__copy" aria-live="polite">
        {active ? <><h5>{t(active.zh, active.en)}</h5><p>{t(active.copy, active.copyEn)}</p></>
          : <p>{t("选择图层，查看它在画布中的用途。", "Select a layer to see what it does on the canvas.")}</p>}
      </div>
    </div>
  </div>;
}

function Implementation() {
  const t = useWords();
  return <>
    <div className="forma-web-implementation">
      <div><h3>{t("前端三层结构", "Three front-end layers")}</h3><div className="forma-web-architecture"><OriginalAsset id="781:6599" alt={t("页面、项目状态和浏览器存储的分层示意", "Three-layer illustration: pages, project state, and browser storage")} /><ol>{formaImplementationLayers.map((layer, i) => <li key={layer.en}><span>{String(i + 1).padStart(2, "0")}</span><h4>{t(layer.zh, layer.en)}</h4><p>{t(layer.copy, layer.copyEn)}</p><code>{layer.file}</code></li>)}</ol></div></div>
      <div className="forma-web-submission"><p className="forma-source-eyebrow">core.js / deliverySubmit()</p><h3>{t("一次提交的实现", "What a submission does")}</h3><ol>{formaSubmissionSteps.map((step, i) => <li key={step.code}><span>{String(i + 1).padStart(2, "0")}</span><div><code>{step.code}</code><p>{t(step.zh, step.en)}</p></div></li>)}</ol><p className="forma-web-result">{t("原稿继续编辑，需求方仍看到已提交的版本。", "The original stays editable while the client reviews the submitted version.")}</p></div>
    </div>
    <p className="forma-web-caption">{t("演示范围：dist/ 静态发布；双端协作在同一浏览器内演示，AI 使用本地素材。", "Demo scope: static dist/ deployment; both roles are demonstrated within one browser, with local AI example material.")}</p>
  </>;
}

function AiAssistance() {
  const t = useWords();
  return <div className="forma-web-columns">
    <CopyBlock title={t("可运行原型", "A working prototype")}><p>{t("任务拆解 → AI 辅助实现 → 操作测试 → 反馈迭代", "Break down the task → AI-assisted implementation → interaction testing → iteration")}</p><Diagram spec={{ tree: diagramTree(18, ["781:6677", "781:6680", "781:6825", "781:6826", "781:6829", "781:6830", "781:6836", "781:6842", "781:6848", "781:6850", "781:6851", "781:6852", "781:6853"]), box: [60, 405, 1010, 600], label: t("低保真原型与关联提交细节", "Low-fidelity prototype and linked submission detail") }} /><p>{t("真实填写、修改与提交，便于异步体验；我定义验收条件，逐项检查交互。", "Real entry, revision, and submission make asynchronous testing possible. I define acceptance criteria and check each interaction.")}</p></CopyBlock>
    <CopyBlock title={t("字形与 Logo 候选", "Wordmark exploration")}><p>{t("生成草案 → 人工筛选 → 打磨应用", "Generate drafts → select manually → refine and apply")}</p><Diagram spec={{ tree: diagramTree(18, ["781:6677", "781:6680", "781:6681", "781:6810", "781:6825", "781:6826", "781:6829", "781:6850", "781:6851"]), box: [1100, 425, 760, 580], label: t("三种字形候选与最终字标", "Three wordmark candidates and the final mark") }} /><p>{t("核心交互、关键 UI 与规范由我完成；AI 辅助原型实现和字形候选探索。最终字标由人工判断字重、圆角与小尺寸辨识。", "I designed the core interactions, key UI, and guidelines; AI assisted implementation and wordmark exploration. Final selection considers weight, corners, and legibility at small sizes.")}</p></CopyBlock>
  </div>;
}

function SectionContent({ number }: { number: number }) {
  switch (number) {
    case 2: return <Research />;
    case 19: return <Competitors />;
    case 20: return <Needs />;
    case 21: return <Positioning />;
    case 22: return <ProjectBrief />;
    case 23: return <Invitation />;
    case 3: return <Journey />;
    case 4: return <Wireframes />;
    case 5: return <DesignSystem />;
    case 6: return <Workspace />;
    case 7: return <CanvasAnatomy />;
    case 8: return <Dates />;
    case 9: return <ScreenGallery />;
    case 10:
    case 11:
    case 14: return <FormaRefinement section={number} />;
    case 12: return <FormaWalkthrough kind="directions" />;
    case 13: return <FormaWalkthrough kind="inspiration" />;
    case 15: return <FormaWalkthrough kind="review" />;
    case 16: return <ArtworkSchedule />;
    case 17: return <Implementation />;
    case 18: return <AiAssistance />;
    default: return null;
  }
}

type Board = typeof formaSourceChapters[number];

function BoardSection({ meta, heading: Heading, eyebrow }: { meta: Board; heading: "h2" | "h3" | "h4"; eyebrow?: FormaWords }) {
  const { locale } = useLocale();
  const t = useWords();
  const number = meta.anchor;
  return <section id={`forma-${number}`} className={`forma-web-section ${Heading === "h2" ? "forma-web-section--chapter" : "forma-web-section--continuation"}`}
    aria-labelledby={`forma-heading-${number}`} data-figma-frame={meta.id}>
    <header className="forma-web-section__heading">{eyebrow && <p className="forma-source-eyebrow">{t(...eyebrow)}</p>}
      <Heading id={`forma-heading-${number}`}>{locale === "zh" ? meta.zh : meta.en}</Heading>
      {meta.lead && ![3, 4, 9].includes(number) && <p>{locale === "zh" ? meta.lead : meta.leadEn}</p>}
    </header><SectionContent number={number} />
  </section>;
}

function ReadingChapter({ chapter }: { chapter: { boards: readonly Board[]; label: FormaWords } }) {
  return <div className="forma-reading-chapter">{chapter.boards.map((meta, index) =>
    <BoardSection key={meta.id} meta={meta} heading={index ? "h3" : "h2"} eyebrow={index ? undefined : chapter.label} />
  )}</div>;
}

export function FormaSourceView({ previous, next }: { previous?: { slug: string }; next?: { slug: string } }) {
  const t = useWords();
  const { locale } = useLocale();
  const intro = formaSourceChapters[0];
  useEffect(() => {
    // The desktop readers adopt their pinned layout after hydration. Align an incoming
    // fragment once their inline fallback has collapsed, before the visitor starts reading.
    const initialHash = window.location.hash;
    if (!initialHash.startsWith("#forma-")) return;
    let pending = true;
    let frame = 0;
    function cancel() { pending = false; }
    function align() {
      if (!pending || window.location.hash !== initialHash) return;
      if (document.querySelector(".site-loader")?.getClientRects().length ||
          (window.matchMedia("(min-width: 901px) and (min-height: 600px)").matches &&
           document.querySelector('.forma-feature-reader[data-layout="inline"]'))) {
        frame = requestAnimationFrame(align);
        return;
      }
      document.getElementById(initialHash.slice(1))?.scrollIntoView({ block: "start", behavior: "instant" });
    }
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    if (navigation?.type === "back_forward") return;
    window.addEventListener("wheel", cancel, { passive: true, once: true });
    window.addEventListener("touchstart", cancel, { passive: true, once: true });
    window.addEventListener("keydown", cancel, { once: true });
    window.addEventListener("pointerdown", cancel, { once: true });
    void document.fonts.ready.then(() => { if (pending) frame = requestAnimationFrame(align); });
    return () => {
      cancel();
      cancelAnimationFrame(frame);
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
      window.removeEventListener("keydown", cancel);
      window.removeEventListener("pointerdown", cancel);
    };
  }, []);

  return <main className="case case--forma forma-web-page">
    <section id="forma-1" className="case-hero forma-cover" aria-labelledby="forma-cover-title" data-figma-frame={intro.id}>
      <div className="forma-cover__layout">
        <div className="case-hero__copy">
          <p className="case-hero__kicker">{t("产品设计 · AI 工作流 · 2026", "Product Design · AI Workflow · 2026")}</p>
          <h1 className="case-hero__title" id="forma-cover-title">Forma</h1>
          <p className="case-hero__intro">{t(intro.lead, intro.leadEn)}</p>
        </div>
        <div className="forma-cover__screen">
          <FormaInterface
            src={`/images/projects/forma/handoff/pear-designer-schedule-${locale}.webp`}
            label={t("设计师画布中的横版稿件与项目排期", "Landscape artwork and project schedule in the designer’s canvas")}
            loading="eager"
          />
        </div>
      </div>
      <a className="case-hero__scroll" href="#forma-overview">{ui(locale).scrollToExplore} <span aria-hidden="true">↓</span></a>
    </section>
    <section id="forma-overview" className="case-overview measure" aria-labelledby="forma-overview-title">
      <div className="case-overview__lead">
        <Link className="case-overview__back" href="/experience-design">{backToLabel(locale, t("体验设计", "Experience Design"))}</Link>
        <h2 className="case-overview__title" id="forma-overview-title">{t(intro.zh, intro.en)}</h2>
        <p className="case-overview__summary">{t("设计师在画布上试稿、比较方向和提交版本。需求方在自己的工作台看到对应稿件，直接给出反馈或确认交付。", "Designers explore directions and submit selected drafts from the canvas. Clients review those versions in their own workspace and can request changes or approve delivery.")}</p>
        <ul className="case-overview__links"><li><a className="case-overview__link" href="https://forma-final-workbench.jiayingli0128.chatgpt.site/" target="_blank" rel="noreferrer">{t("打开独立原型", "Open the prototype")} <span aria-hidden="true">↗</span></a></li></ul>
      </div>
      <ProjectMetadata items={[
        { label: t("方向", "Focus"), value: t("产品逻辑 / 交互 / 视觉规范", "Product logic / Interaction / Visual system") },
        { label: t("对象", "Audience"), value: t("专业平面设计师与需求方", "Graphic designers and clients") },
        { label: t("产出", "Output"), value: t("设计规范与浏览器原型", "Design system and browser prototype") },
      ]} />
    </section>
    <div className="forma-reading-body measure"><FormaChapterNav />
    <div className="forma-web-story">
      {openingChapters.map(chapter => <ReadingChapter key={chapter.boards[0].id} chapter={chapter} />)}
      <FormaWorkflow />
      <section className="forma-feature-library" aria-labelledby="forma-features-title">
        <FeatureIndex />
        {featureGroups.map(group => <section key={group.id} id={`forma-feature-${group.id}`} className="forma-feature-group" aria-labelledby={`forma-title-${group.id}`}>
          <h3 id={`forma-title-${group.id}`}>{t(...group.label)}</h3>
          {group.boards.map(meta => <BoardSection key={meta.id} meta={meta} heading="h4" />)}
        </section>)}
      </section>
      {closingChapters.map(chapter => <ReadingChapter key={chapter.boards[0].id} chapter={chapter} />)}
    </div></div>
    <nav className="forma-source-pager measure" aria-label={t("其他项目", "Other projects")}>
      {previous ? <Link href={`/projects/${previous.slug}`}>← {t("上一个项目", "Previous project")}</Link> : <span />}
      {next ? <Link href={`/projects/${next.slug}`}>{t("下一个项目", "Next project")} →</Link> : <span />}
    </nav>
  </main>;
}

