"use client";

import { useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { formaWalkthroughs } from "@/data/forma-source/walkthroughs";
import { FormaFeatureReader } from "./FormaFeatureReader";
import { FormaInterface } from "./FormaInterface";
import { useWords } from "./FormaSourceGraphic";
import { useFormaMotion, useFormaVisible } from "./useFormaPlayback";

type Kind = keyof typeof formaWalkthroughs;

function Clip({ kind, index, moving, toggleMotion }: {
  kind: Kind; index: number; moving: boolean; toggleMotion: () => void;
}) {
  const t = useWords();
  const { locale } = useLocale();
  const [full, setFull] = useState(false);
  const { target, visible } = useFormaVisible();
  const story = formaWalkthroughs[kind];
  const label = full ? t(story.title[0], story.title[1]) : story.steps[index].title[locale === "zh" ? 0 : 1];
  const directory = "/images/projects/forma/walkthrough";
  const name = `pear-${kind}-${locale}${full ? "" : `-${index + 1}`}`;
  return <div ref={target} className="forma-clip">
    <FormaInterface label={label} src={`${directory}/original/${name}${moving ? ".gif" : "-still.webp"}`}
      preview={{ active: moving && visible, desktop: `${directory}/page/${name}.gif`, phone: `${directory}/phone/${name}.gif`, still: `${directory}/page/${name}-still.webp` }}
      toggleMotion={toggleMotion} />
    <div className="forma-clip-controls">
      <button type="button" onClick={toggleMotion}>{moving ? t("查看静帧", "View still") : t("播放循环 GIF", "Play looping GIF")}</button>
      <button type="button" aria-pressed={full} onClick={() => { setFull(!full); if (!full && !moving) toggleMotion(); }}>
        {full ? t("返回当前步骤", "Back to this step") : t("观看完整流程", "Watch full walkthrough")}
      </button>
    </div>
  </div>;
}

export function FormaWalkthrough({ kind }: { kind: Kind }) {
  const { locale } = useLocale();
  const { moving, toggleMotion } = useFormaMotion();
  const story = formaWalkthroughs[kind];
  const language = locale === "zh" ? 0 : 1;
  return <div data-walkthrough={kind} id={`forma-loop-${kind}`}>
    <FormaFeatureReader steps={story.steps.map((step, index) => ({
      key: String(index + 1), title: step.title[language], copy: step.copy[language],
      media: <Clip kind={kind} index={index} moving={moving} toggleMotion={toggleMotion} />,
    }))} />
  </div>;
}
