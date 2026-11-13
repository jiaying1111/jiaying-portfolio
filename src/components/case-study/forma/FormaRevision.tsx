"use client";

import Image from "next/image";
import { useLocale } from "@/i18n/LocaleProvider";
import mapTranscript from "@/data/forma-source/map-transcript.json";
import { competitors, designNeeds } from "@/data/forma-source/discovery";
import { FormaFeatureReader } from "./FormaFeatureReader";
import { FormaInterface } from "./FormaInterface";
import { RevisionFigure, useWords } from "./FormaSourceGraphic";

export function Competitors() {
  const t = useWords();
  return <>
    <div className="forma-comparison-list">{competitors.map(tool => <article key={tool.name[1]}>
      <h3>{t(tool.name[0],tool.name[1])}</h3>
      <div><h4>{t("优势","Strength")}</h4><p>{t(tool.strength[0],tool.strength[1])}</p></div>
      <div><h4>{t(tool.limit[0],tool.limit[1])}</h4><p>{t(tool.finding[0],tool.finding[1])}</p></div>
      <a href={tool.url} target="_blank" rel="noreferrer">{t("查看来源","Source")} ↗</a>
    </article>)}</div>
    <p className="forma-web-caption">{t("比较依据为 2026 年 10 月 6 日的即梦改字实测，以及 Figma 和 Lovart 当时公开的产品说明。","Based on a Jimeng text-edit test on October 6, 2026 and the public Figma and Lovart documentation reviewed for the project.")}</p>
  </>;
}

export function Needs() {
  const t=useWords();
  return <ol className="forma-needs">{designNeeds.map(need => <li key={need.art}>
    <Image src={`/images/projects/forma/revision/${need.art}.png`} width={need.art==="local-control"?1536:1792} height={need.art==="local-control"?864:768} alt="" sizes="(max-width:650px) 80vw, 320px" />
    <h3>{t(need.pain[0],need.pain[1])}</h3><p>{t(need.finding[0],need.finding[1])}</p>
    <div><span>{t("设计需求","Design need")}</span><h4>{t(need.need[0],need.need[1])}</h4><p>{t(need.response[0],need.response[1])}</p></div>
  </li>)}</ol>;
}

export function Positioning() {
  const t=useWords();
  return <div className="forma-position"><Image src="/images/projects/forma/revision/positioning.png" width={1536} height={864} alt={t("Forma 原稿中互相连接的项目模块","Linked project modules from the Forma design")} sizes="(max-width:650px) 85vw, 420px" /><dl>
    <div><dt>{t("核心用户","Primary users")}</dt><dd><strong>{t("独立平面设计师与小型设计团队","Independent graphic designers and small teams")}</strong>{t("持续探索、修改并交付多个版本，需要掌控创作过程，也要找得回项目里的每一稿。","They explore, revise, and deliver several versions, keeping control of the creative process and the project’s drafts.")}</dd></div>
    <div><dt>{t("协作角色","Collaborators")}</dt><dd><strong>{t("需求方与审核方","Clients and reviewers")}</strong>{t("在项目内提出需求和反馈，确认当前稿件与交付状态。","They set the brief, review the current artwork, and confirm what is ready for delivery.")}</dd></div>
  </dl></div>;
}

export function Journey() {
  const t=useWords();
  const {locale}=useLocale();
  const language=locale === "zh" ? 0 : 1;
  return <div className="forma-original-map">
    <div className="forma-map-legend"><span>{t("协作流程","Collaboration flow")}</span><span>{t("功能分支","Feature branch")}</span></div>
    <RevisionFigure asset={`architecture-${locale}.svg`} label={t("从进入项目、提出需求、画布设计到审阅和返回修改的完整信息架构","Original architecture showing project entry, briefing, canvas design, review, and revision")} readable />
    <p className="forma-map-note">{t("实线沿着一条需求走完设计与审阅，虚线连到每一环节使用的功能。需要修改时，反馈回到同一张画布。","Follow the main route from brief to review. Dashed branches show the tools at each stage. A revision request returns to the same canvas.")}</p>
    <details className="forma-map-transcript"><summary>{t("阅读图中的功能分支", "Read the feature branches as text")}</summary><div>{mapTranscript.map(branch => <section key={branch.label[1]}>
      <h4>{branch.label[language]}</h4><dl>{branch.nodes.map(node => <div key={node.label[1]}><dt>{node.label[language]}</dt><dd>{node.copy[language]}</dd></div>)}</dl>
    </section>)}</div></details>
  </div>;
}

export function ProjectBrief() {
  const t = useWords();
  const { locale } = useLocale();
  const items = [
    {id: "brief", title: t("Brief · 目标与约束", "Brief · goals and constraints"), copy: t("记录交付内容，以及改稿时必须保留的元素。", "Record the deliverables and what must be preserved during revisions.")},
    {id: "fonts", title: t("字体 · 五级层级", "Type · five text styles"), copy: t("从主标题到辅助文字，分别设定字体、字号与字重。", "Set the family, size, and weight for each role, from headline to caption.")},
    {id: "logo", title: t("Logo · 尺寸与安全区", "Logo · size and clear space"), copy: t("锁定宽高比，并为标志预留安全区。", "Lock the aspect ratio and set the clear space around the mark.")},
    {id: "palette", title: t("色板 · 定义颜色用途", "Palette · color roles"), copy: t("区分文字色、品牌主色和背景色。", "Assign colors to text, brand accents, and backgrounds.")},
  ];
  const scope = t("选择规范的应用范围", "Choose where the rules apply");
  return <FormaFeatureReader steps={[
    ...items.map(item => ({
      key: item.id, title: item.title, copy: item.copy,
      media: <RevisionFigure asset={`branding/${item.id}-${locale}.png`} label={item.title} />,
    })),
    { key: "scope", title: scope,
      copy: t("字体和色板可以分别应用。这次只勾选四张稿件中的候选稿，让它沿用选定的规范。之后延展尺寸时也会继承这些设置。", "Type and palette can be applied separately. Of the four drafts, only the candidate is selected here. Its format adaptations inherit those settings."),
      media: <RevisionFigure asset={`branding/scope-${locale}.png`} label={scope} /> },
  ]} />;
}

export function Invitation() {
  const t=useWords();
  const {locale}=useLocale();
  const pages = [
    { file: "client", title: t("我的需求", "My requests"),
      copy: t("选中「横版设计稿件」，查看交付说明和截止时间。", "Select Landscape design draft to read the brief and its deadline.") },
    { file: "client-new", title: t("新建需求", "New request"),
      copy: t("填写交付内容和截止时间，再发给设计方。", "Describe the deliverable, set the deadline, and send the request to the designer.") },
    { file: "client-history", title: t("历史提交", "Submission history"),
      copy: t("在同一条需求下回看设计方每次提交的稿件。", "Revisit each version the designer submitted for this request.") },
    { file: "client-settings", title: t("账号设置", "Account settings"),
      copy: t("在个人资料中修改显示名称和界面语言。", "Change the display name and interface language in the client profile.") },
  ];
  const steps = [
    { name: "share", title: t("设计方分享邀请", "The designer sends an invite"), copy: t("从项目里复制邀请码或链接。", "Copy the invite code or link from the project.") },
    { name: "code", title: t("需求方打开邀请", "The client opens the invite"), copy: t("打开链接，或在项目总览输入六位邀请码。", "Follow the link or enter the six-character code in the project overview.") },
    { name: "join", title: t("确认加入", "Confirm and join"), copy: t("核对项目名称与邀请人，再加入项目。", "Check the project name and who sent the invite before joining.") },
  ];
  return <div className="forma-onboard">
    <FormaFeatureReader steps={steps.map(step => ({
      key: step.name, title: step.title, copy: step.copy,
      media: <RevisionFigure asset={`${step.name}-${locale}.png`} label={step.title} />,
    }))} />
    <section className="forma-client-area" id="forma-client-workspace">
      <h5>{t("需求方的「我的需求」工作台", "My requests, the client workspace")}</h5>
      <p>{t("加入项目后，需求方在这里提出 1920 × 1080 的横版需求，约定在 10 月 30 日 18:00 前交付。", "After joining, the client requests a 1920 × 1080 landscape design, due October 30 at 6 pm.")}</p>
      <div id="forma-client-screen"><FormaFeatureReader heading="h6" steps={pages.map(page => ({
        key: page.file, title: page.title, copy: page.copy,
        media: page.file === "client"
          ? <FormaInterface src={`/images/projects/forma/handoff/landscape-client-inbox-${locale}.webp`}
              label={t("需求方工作台中选中的横版交付需求", "The landscape request selected in the client workspace")} />
          : <RevisionFigure asset={`${page.file}-${locale}.png`} label={page.title} />,
      }))} /></div>
    </section>
  </div>;
}
