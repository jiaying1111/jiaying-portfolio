"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { ui } from "@/i18n/ui";
import { joinClassNames } from "@/lib/utils";

export function LanguageSwitch() {
  const { locale, setLocale } = useLocale();
  const copy = ui(locale);

  return (
    <div className="site-lang" role="group" aria-label={copy.langGroup}>
      <button
        type="button"
        className={joinClassNames(
          "site-lang__button",
          locale === "en" && "is-active",
        )}
        aria-pressed={locale === "en"}
        onClick={() => setLocale("en")}
      >
        EN
      </button>
      <span className="site-lang__rule" aria-hidden="true">
        /
      </span>
      <button
        type="button"
        className={joinClassNames(
          "site-lang__button",
          locale === "zh" && "is-active",
        )}
        aria-pressed={locale === "zh"}
        onClick={() => setLocale("zh")}
      >
        中
      </button>
    </div>
  );
}
