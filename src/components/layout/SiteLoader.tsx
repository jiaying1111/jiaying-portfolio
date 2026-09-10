"use client";

import { useEffect, useState } from "react";
import { siteIdentity } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { ui } from "@/i18n/ui";

function SiteLoaderSequence() {
  const { locale } = useLocale();
  const copy = ui(locale);
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let exitTimer: number | undefined;
    let removeTimer: number | undefined;

    const dismiss = () => {
      exitTimer = window.setTimeout(() => {
        setLeaving(true);
        removeTimer = window.setTimeout(() => setVisible(false), 240);
      }, 520);
    };

    if (document.readyState === "complete") {
      dismiss();
      return () => {
        window.clearTimeout(exitTimer);
        window.clearTimeout(removeTimer);
      };
    }

    window.addEventListener("load", dismiss, { once: true });
    return () => {
      window.removeEventListener("load", dismiss);
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`site-loader${leaving ? " is-leaving" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={copy.loadingPortfolio}
    >
      <div className="site-loader__content">
        <p className="site-loader__wordmark">{siteIdentity.logo}</p>
        <div className="site-loader__track" aria-hidden="true">
          <span className="site-loader__progress" />
        </div>
        <p className="site-loader__label">{copy.loadingWork}</p>
      </div>
    </div>
  );
}

/** A one-time entry transition after language is ready. */
export function SiteLoader() {
  const { languageReady } = useLocale();

  if (!languageReady) {
    return null;
  }

  return <SiteLoaderSequence key="site-loader" />;
}
