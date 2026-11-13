"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import "./forma-listing.css";

type PosterState = { title: string; date: string; color: string; bend: number; wide?: boolean };
const initialPoster: PosterState = { title: "秋日上新", date: "11.01", color: "#3d2cea", bend: 60 };

function Poster({ state = initialPoster, points = false }: { state?: PosterState; points?: boolean }) {
  return <div className={`demo-poster ${state.wide ? "demo-poster--wide" : ""}`} style={{ color: state.color }}>
    <div className="demo-poster__top"><span>FORMA EDITIONS</span><span>A / 01</span></div>
    <p className="demo-poster__title">{state.title || "秋日上新"}</p><p className="demo-poster__sub">AUTUMN COLLECTION</p>
    <svg viewBox="0 0 300 160" className="demo-poster__waves" aria-label="Editable wave graphic" role="img">
      {Array.from({ length: 7 }, (_, i) => <path key={i} d={`M 10 ${35 + i * 13} C 100 ${35 + i * 13 - state.bend}, 185 ${35 + i * 13 + state.bend}, 290 ${35 + i * 13}`} fill="none" stroke="currentColor" strokeWidth="1" />)}
      {points ? <><path d={`M 10 74 L 100 ${74 - state.bend} M 290 74 L 185 ${74 + state.bend}`} stroke="currentColor" strokeDasharray="3 4" fill="none" /><circle cx="100" cy={74 - state.bend} r="4" fill="currentColor" /><circle cx="185" cy={74 + state.bend} r="4" fill="currentColor" /></> : null}
    </svg>
    <div className="demo-poster__date"><span>OPENING DATE</span><strong>{state.date}</strong></div>
    <div className="demo-poster__bottom"><span>SEASONAL SERIES</span><span>AUTUMN 26</span></div>
  </div>;
}

export function FormaListingCover() {
  const { locale } = useLocale();
  const c = (en: string, zh: string) => locale === "zh" ? zh : en;
  return <div className="native-project-cover native-project-cover--forma">
    <div className="native-project-cover__heading"><strong>forma</strong><span>{c("CREATIVE WORK, CONNECTED.", "连接创作的每一步。")}</span></div>
    <div className="native-cover-workbench"><div className="native-cover-brief"><span>BRIEF</span><strong>{c("Autumn launch", "秋日上新")}</strong><p>{c("Main visual + banner", "主视觉与横版延展")}</p><span className="native-cover-date">03 <small>NOV</small></span></div><div className="native-cover-posters"><Poster /><Poster state={{ title: "秋日上新", date: "11.03", bend: 30, color: "#3d2cea" }} /></div><div className="native-cover-status">{c("Direction 01", "方向 01")}<span>● {c("Ready for review", "等待审阅")}</span></div></div>
  </div>;
}
