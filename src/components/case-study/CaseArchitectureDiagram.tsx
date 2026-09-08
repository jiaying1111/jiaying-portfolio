"use client";

import { useState } from "react";

import { useLocale } from "@/i18n/LocaleProvider";

type ArchitectureLayer = {
  number: string;
  title: string;
  description: string;
  items: string[];
  tone?: "default" | "accent";
};

export function CaseArchitectureDiagram({
  layers,
}: {
  layers: ArchitectureLayer[];
}) {
  const { locale } = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeLayer = layers[activeIndex];

  return (
    <div className="case-architecture" aria-label="Technical architecture">
      <div className="case-architecture__header">
        <span>HarvardXR Digital Map</span>
        <span>{locale === "zh" ? "技术架构" : "Technical architecture"}</span>
      </div>
      <div className="case-architecture__flow">
        {layers.map((layer, index) => (
          <div className="case-architecture__step" key={layer.number}>
            <button
              type="button"
              aria-pressed={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              className={`case-architecture__layer${
                layer.tone === "accent" ? " case-architecture__layer--accent" : ""
              }${activeIndex === index ? " case-architecture__layer--active" : ""}`}
            >
              <div className="case-architecture__intro">
                <span>{layer.number}</span>
                <div>
                  <h4>{layer.title}</h4>
                  <p>{layer.description}</p>
                </div>
              </div>
              <ul>
                {layer.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <span className="case-architecture__hint">
                {locale === "zh" ? "点击查看数据流" : "Click to inspect"}
              </span>
            </button>
            {index < layers.length - 1 ? (
              <div className="case-architecture__connector" aria-hidden="true">
                <span />
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div className="case-architecture__detail" aria-live="polite">
        <div>
          <span>{activeLayer.number}</span>
          <strong>{activeLayer.title}</strong>
        </div>
        <p>{activeLayer.description}</p>
        <p>
          {locale === "zh"
            ? activeIndex === 0
              ? "参会者的操作从这里进入，并通过安全 API 获取实时内容。"
              : activeIndex === 1
                ? "服务端验证身份、执行产品规则，并在客户端与 Notion 之间同步状态。"
                : "Notion 为会议团队提供可实时维护的内容与记录来源。"
            : activeIndex === 0
              ? "Attendee actions begin here and request live content through secure APIs."
              : activeIndex === 1
                ? "Server routes validate identity, enforce product rules, and synchronize state with Notion."
                : "Notion gives the conference team one live source for editable content and records."}
        </p>
      </div>
      <p className="case-architecture__note">
        {locale === "zh"
          ? "身份验证、印章状态与一人一票规则均由服务端执行。"
          : "Authentication, stamp state, and vote uniqueness are enforced server-side."}
      </p>
    </div>
  );
}
