"use client";

import Image from "next/image";
import { useState, type ChangeEvent, type CSSProperties } from "react";
import { outlineSteps, refinementGroups } from "@/data/forma-source/refinement";
import { useLocale } from "@/i18n/LocaleProvider";
import { FormaFeatureReader } from "./FormaFeatureReader";
import { FormaInterface } from "./FormaInterface";
import { useWords } from "./FormaSourceGraphic";
import { useFormaPlayback } from "./useFormaPlayback";

function screenshot(screen: string, locale: string) {
  return `/images/projects/forma/refinement/${screen}-${locale}.webp`;
}

function DraftComparison({ label }: { label: string }) {
  const { locale } = useLocale();
  const t = useWords();
  const [position, setPosition] = useState(50);
  // Bounds of the poster within the original 1440 × 960 prototype viewport.
  const bounds: CSSProperties = {
    left: `${560 / 1440 * 100}%`, top: `${(locale === "zh" ? 268.5 : 258.5) / 960 * 100}%`,
    width: `${320 / 1440 * 100}%`, height: `${400 / 960 * 100}%`,
  };
  const overlay = <span aria-hidden="true" className="forma-compare-art" style={bounds}>
    <Image src={screenshot("candidate", locale)} alt="" width={640} height={800} unoptimized
      style={{ clipPath: `inset(0 0 0 ${position}%)` }} />
    {position > 0 && position < 100 && <i style={{ left: `${position}%` }}><b>↔</b></i>}
  </span>;

  const sliderLabel = t("移动两版稿件之间的分界线", "Move the divider between the design drafts");
  const sliderProps = {
    type: "range", min: 0, max: 100, value: position, "aria-label": sliderLabel,
    "aria-valuetext": t(`原稿显示 ${position}%`, `Original draft ${position}% visible`),
    onChange: (event: ChangeEvent<HTMLInputElement>) => setPosition(Number(event.target.value)),
  };
  const dialogControls = <label className="forma-compare-dialog-control">
    {sliderLabel}<input {...sliderProps} />
  </label>;

  return <div className="forma-refine-compare">
    <div className="forma-refine-compare__screen">
      <FormaInterface src={screenshot("original", locale)} label={label} overlay={overlay} dialogControls={dialogControls} />
      <input id="forma-version-position" style={bounds} {...sliderProps} />
    </div>
    <div className="forma-toggle" role="group" aria-label={t("比稿视图", "Comparison view")}>
      {([[100, t("看原稿", "Original")], [50, t("对照两稿", "Compare")], [0, t("看候选稿", "Candidate")]] as const).map(([value, text]) =>
        <button key={value} type="button" aria-pressed={position === value} onClick={() => setPosition(value)}>{text}</button>
      )}
    </div>
  </div>;
}

function OutlineWalkthrough() {
  const { locale } = useLocale();
  const t = useWords();
  const [index, setIndex] = useState(0);
  const { moving, visible, target, toggleMotion } = useFormaPlayback();
  const step = outlineSteps[moving ? 0 : index];
  const directory = "/images/projects/forma/refinement/outline";
  const still = screenshot(`outline/${step.key}`, locale);
  const label = t(...step.label);
  const caption = t(...step.note);
  const choices = <div className="forma-toggle forma-outline-choices" role="group"
    aria-label={t("查看字形调整步骤", "Inspect the outline edit")}>
    {outlineSteps.map((item, i) => <button key={item.key} type="button"
      aria-pressed={i === index} onClick={() => setIndex(i)}>{t(...item.label)}</button>)}
  </div>;

  const loopLabel = t("下移锚点，再拖动控制柄调平底部弧线", "Lower the anchor, then drag the handle to flatten the bottom curve");
  return <div ref={target} className="forma-outline-reader">
    <div className="forma-outline-guide">
      <div className="forma-outline-detail" data-step={step.key}>
        <Image src={moving && visible ? `${directory}/detail-loop.gif` : `${directory}/detail-${step.key}.webp`}
          width={520} height={472} unoptimized alt={moving ? loopLabel : t(`数字 0 的左下轮廓局部 · ${label}`, `Lower-left edge of the zero · ${label}`)} />
        {!(moving && visible) && step.key !== "result" && <span aria-hidden="true" className="forma-outline-focus" />}
      </div>
      <div className="forma-outline-explanation">
        <p aria-live="polite">{moving
          ? t("看圈中的黑色方块：它下移时，左下轮廓随之降低。圈移到圆形控制柄后，方块留在原处，只改变底部的弧度。",
              "Watch the circled square: lowering it brings down the left edge of the zero. When the ring shifts to the round handle, the square stays put and only the bottom curve changes.")
          : caption}</p>
        <div className="forma-toggle forma-outline-playback"><button type="button" onClick={toggleMotion}>
          {moving ? t("逐步看静帧", "Inspect still frames") : t("播放循环 GIF", "Play looping GIF")}
        </button></div>
        {!moving && choices}
      </div>
    </div>
    <FormaInterface src={moving ? `${directory}/loop-original-${locale}.gif` : still}
      preview={{ active: moving && visible, desktop: `${directory}/loop-desktop-${locale}.gif`, phone: `${directory}/loop-phone-${locale}.gif`, still }}
      label={t(`日期图层的完整画布 · ${moving ? loopLabel : label}`, `Full canvas showing the date layer · ${moving ? loopLabel : label}`)}
      toggleMotion={toggleMotion} dialogControls={!moving && choices} />
  </div>;
}

export function FormaRefinement({ section }: { section: keyof typeof refinementGroups }) {
  const { locale } = useLocale();
  const t = useWords();
  return <FormaFeatureReader steps={refinementGroups[section].map(feature => ({
    key: feature.screen,
    anchor: feature.screen === "vector" ? "forma-date-outline" : undefined,
    title: t(...feature.title),
    copy: t(...feature.copy),
    media: feature.screen === "vector" ? <OutlineWalkthrough /> :
      feature.screen === "original" ? <DraftComparison label={t(...feature.alt)} /> :
      <FormaInterface src={screenshot(feature.screen, locale)} label={t(...feature.alt)} />,
  }))} />;
}
