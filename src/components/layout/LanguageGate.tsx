"use client";

import { useState } from "react";
import { siteIdentity } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/locale";
import { joinClassNames } from "@/lib/utils";

const OPTIONS: { id: Locale; label: string; native: string }[] = [
  { id: "en", label: "English", native: "EN" },
  { id: "zh", label: "中文", native: "中" },
];

/**
 * Language gate on every full page load / refresh.
 * Soft client navigations keep the chosen language until the next reload.
 */
export function LanguageGate() {
  const { setLocale } = useLocale();
  const [phase, setPhase] = useState<"gate" | "leaving" | "done">("gate");

  if (phase === "done") {
    return null;
  }

  const choose = (locale: Locale) => {
    setLocale(locale);
    setPhase("leaving");
    window.setTimeout(() => setPhase("done"), 420);
  };

  return (
    <div
      className={joinClassNames(
        "language-gate",
        phase === "leaving" && "is-leaving",
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="language-gate-title"
    >
      <div className="language-gate__content">
        <p className="language-gate__wordmark">{siteIdentity.logo}</p>
        <h1 id="language-gate-title" className="language-gate__title">
          Choose language
          <span className="language-gate__title-zh" lang="zh-Hans">
            选择语言
          </span>
        </h1>
        <div className="language-gate__options" role="group" aria-label="Language">
          {OPTIONS.map((option) => (
            <button
              key={option.id}
              type="button"
              className="language-gate__option"
              onClick={() => choose(option.id)}
            >
              <span className="language-gate__option-code">{option.native}</span>
              <span className="language-gate__option-label">{option.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
