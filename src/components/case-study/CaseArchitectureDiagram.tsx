"use client";

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

  return (
    <div className="case-architecture" aria-label="Technical architecture">
      <div className="case-architecture__header">
        <span>HXR Digital Map</span>
        <span>{locale === "zh" ? "技术架构" : "Technical architecture"}</span>
      </div>
      <div className="case-architecture__flow">
        {layers.map((layer, index) => (
          <div className="case-architecture__step" key={layer.number}>
            <section
              className={`case-architecture__layer${
                layer.tone === "accent" ? " case-architecture__layer--accent" : ""
              }`}
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
            </section>
            {index < layers.length - 1 ? (
              <div className="case-architecture__connector" aria-hidden="true">
                <span />
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <p className="case-architecture__note">
        {locale === "zh"
          ? "身份验证、印章状态与一人一票规则均由服务端执行。"
          : "Authentication, stamp state, and vote uniqueness are enforced server-side."}
      </p>
    </div>
  );
}
