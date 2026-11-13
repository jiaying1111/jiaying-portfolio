"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { closingChapters, featureGroups, featureNames, formaWireframes, openingChapters, readingTitles, type FormaWords } from "@/data/forma-source/reading";
import { FormaFeatureReader } from "./FormaFeatureReader";
import { FormaInterface } from "./FormaInterface";
import { useLocale } from "@/i18n/LocaleProvider";
import { DemoEvidence, Fragment, useWords } from "./FormaSourceGraphic";

function mousePreview(event: PointerEvent<HTMLButtonElement>, select: () => void) {
  if (event.pointerType === "mouse" && (event.movementX || event.movementY)) select();
}

type NavItem = { id: string; label: FormaWords };
type NavGroup = NavItem & { items: NavItem[] };
const boardLinks = (chapters: readonly (typeof openingChapters[number] | typeof closingChapters[number])[]) =>
  chapters.map(chapter => ({ id: `forma-${chapter.boards[0].anchor}`, label: chapter.label }));

const navGroups: NavGroup[] = [
  { id: "forma-2", label: ["设计过程", "Design process"], items: boardLinks(openingChapters) },
  { id: "forma-workflow", label: readingTitles.workflow, items: [] },
  { id: "forma-features", label: readingTitles.features, items: featureGroups.map(g => ({ id: `forma-feature-${g.id}`, label: g.label })) },
  { id: "forma-9", label: ["界面与实现", "Interface & build"], items: boardLinks(closingChapters) },
];
const navIds = [...new Set(navGroups.flatMap(group => [group.id, ...group.items.map(item => item.id)]))];

export function FormaChapterNav() {
  const t = useWords();
  const [active, setActive] = useState(navIds[0]);
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    const starts = navIds.map(id => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el));
    let frame = 0;
    const measure = () => {
      frame = 0;
      let selected = navIds[0];
      const threshold = Math.min(200, window.innerHeight * .28);
      for (const section of starts) {
        if (section.getBoundingClientRect().top > threshold) break;
        selected = section.id;
      }
      setActive(selected);
    };
    const update = () => { if (!frame) frame = requestAnimationFrame(measure); };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  const current = navGroups.find(group => group.id === active || group.items.some(item => item.id === active)) ?? navGroups[0];
  useEffect(() => {
    const bar = nav.current;
    const item = bar?.querySelector<HTMLElement>('.forma-chapters-desktop [aria-current="location"]');
    if (!bar || !item || !item.offsetWidth) return;
    const delta = item.getBoundingClientRect().bottom - bar.getBoundingClientRect().bottom;
    if (delta > 0) bar.scrollTop += delta;
    else if (item.getBoundingClientRect().top < bar.getBoundingClientRect().top) bar.scrollTop += item.getBoundingClientRect().top - bar.getBoundingClientRect().top;
  }, [active]);
  const link = (item: NavItem) => <a href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined}>{t(...item.label)}</a>;
  return <nav ref={nav} className="forma-chapters" aria-label={t("Forma 阅读章节", "Forma reading sections")}>
    <div className="forma-chapters-desktop">{navGroups.map(group => <div key={group.id} className="forma-nav-group" data-current={current === group}>
      {group.items.some(item => item.id === group.id)
        ? <span className="forma-nav-title">{t(...group.label)}</span>
        : <div className="forma-nav-title">{link(group)}</div>}
      {group.items.length > 0 && <ul>{group.items.map(item => <li key={item.id}>{link(item)}</li>)}</ul>}
    </div>)}</div>
    <div className="forma-chapters-mobile">{navGroups.map(group => <a key={group.id} href={`#${group.id}`}
      aria-current={current === group ? "location" : undefined}>{t(...group.label)}</a>)}</div>
  </nav>;
}

export function FeatureIndex() {
  const t = useWords();
  return <header id="forma-features" className="forma-feature-index">
    <h2 id="forma-features-title">{t(...readingTitles.features)}</h2>
    <nav aria-labelledby="forma-features-title"><ul className="forma-index-groups">
      {featureGroups.map(group => <li key={group.id}>
        <a className="forma-index-group" href={`#forma-feature-${group.id}`}>{t(...group.label)}<span aria-hidden="true">↓</span></a>
        <ul className="forma-index-children">{group.boards.map(board =>
          <li key={board.id}><a href={`#forma-${board.anchor}`}>{t(...featureNames[board.anchor]!)}</a></li>
        )}</ul>
      </li>)}
    </ul></nav>
  </header>;
}

export function Wireframes() {
  const t = useWords();
  return <FormaFeatureReader heading="h3" steps={formaWireframes.map(step => ({
    key: step.id, title: t(step.title[0], step.title[1]), copy: t(step.copy[0], step.copy[1]),
    media: <Fragment id={step.id} width={step.w} height={step.h} label={t(step.title[0], step.title[1])} inspect />,
  }))} />;
}

export function Dates() {
  const t = useWords();
  return <>
    <blockquote className="forma-schedule-quote">
      <p>{t("“希望有所有项目的 DDL 页面。”", "“I’d like a page with the deadlines for all my projects.”")}</p>
      <cite>{t("平面设计师，低保真测试", "Graphic designer, low-fidelity test")}</cite>
    </blockquote>
    <FormaFeatureReader steps={[
      { key: "calendar", title: t("跨项目月历", "Project calendar"),
        copy: t("按交付日查看不同项目的需求。同一天的任务列在一起，便于安排先后。", "Read requests by delivery date across projects. Tasks due on the same day appear together."),
        media: <DemoEvidence name="calendar" label={t("跨项目月历，2026 年 11 月，两个项目共四条需求", "November 2026 project calendar with four requests across two projects")} /> },
      { key: "requests", title: t("任务列表", "Task list"),
        copy: t("按截止时间查看每条需求所属的项目、当前状态和最新反馈。", "Read each request’s project, status and latest feedback in deadline order."),
        media: <DemoEvidence name="requests" label={t("按截止时间排列的跨项目任务列表", "Cross-project task list ordered by deadline")} /> },
    ]} />
  </>;
}

const gallery = [
  {name:"projects",label:["项目首页","Projects"],copy:["从项目卡直接接回已有画板和待处理需求。","Pick up existing artboards and open requests from the project card."]},
  {name:"canvas",label:["创作画布","Canvas"],copy:["需求、方向分组和正在编辑的画板共用一个工作区。","Keep the brief, direction groups, and active artboard in one workspace."]},
  {name:"requests",label:["设计师工作台","Designer workspace"],copy:["从所有项目里找到需要提交或修改的需求。","Find requests across projects that need a submission or revision."]},
  {name:"client",label:["需求方工作台","Client workspace"],copy:["打开需求，核对关联作品，反馈或确认。","Open a request to inspect linked work, leave feedback, or approve."]},
  {name:"settings",label:["工作偏好","Preferences"],copy:["设置默认模型与自动保存间隔。","Set the default model and automatic save interval."]},
  {name:"calendar",label:["跨项目月历","Calendar"],copy:["按日期查看项目交付的分布。","See how project deliveries fall across the month."]},
] as const;

export function ScreenGallery() {
  const t=useWords();
  const [index,setIndex]=useState(0);
  const screen=gallery[index];
  return <details className="forma-gallery"><summary>{t("查看六个完整工作区界面","Inspect the six workspace screens")}</summary><div className="forma-gallery__body">
    <div className="forma-toggle" role="group" aria-label={t("工作区界面","Workspace screens")}>{gallery.map((item,i)=><button key={item.name} type="button" aria-pressed={i===index} onClick={()=>setIndex(i)} onPointerMove={e=>mousePreview(e,()=>setIndex(i))}>{t(item.label[0], item.label[1])}</button>)}</div>
    <p aria-live="polite">{t(screen.copy[0], screen.copy[1])}</p><DemoEvidence name={screen.name} label={t(screen.label[0], screen.label[1])} />
  </div></details>;
}

export function ArtworkSchedule() {
  const t = useWords();
  const { locale } = useLocale();
  const designerViews = [
    { screen: "designer-inbox", title: t("打开已有需求", "Open the request"),
      copy: t("设计师在「需求与反馈」打开项目开始时收到的横版需求，核对尺寸为 1920 × 1080。", "In Requests & Feedback, the designer opens the original request and checks the 1920 × 1080 dimensions.") },
    { screen: "designer-schedule", title: t("核对排期", "Check schedule"),
      copy: t("画布上的「排期」显示同一条需求，应在 10 月 30 日 18:00 前交付。", "The canvas schedule shows the same request, due October 30 at 6 pm.") },
    { screen: "designer-links", title: t("关联画板", "Link artboards"),
      copy: t("在「关联作品」中只勾选刚延展的横版画板，保存后即可从这条需求提交第一版。", "In Linked work, select the new landscape artboard. Saving the link makes it available for the first submission under this request.") },
  ];
  return <div id="forma-designer-schedule"><FormaFeatureReader steps={designerViews.map(item => ({
    key: item.screen, title: item.title, copy: item.copy,
    media: <FormaInterface src={`/images/projects/forma/handoff/pear-${item.screen}-${locale}.webp`}
      label={t(`设计师 · ${item.title}`, `Designer · ${item.title}`)} />,
  }))} /></div>;
}
