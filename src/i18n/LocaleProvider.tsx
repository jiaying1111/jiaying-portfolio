"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  localeLang,
  type Locale,
} from "@/i18n/locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** False until the visitor has chosen (or restored) a language preference. */
  languageReady: boolean;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function persistLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
  window.localStorage.setItem(LOCALE_COOKIE, locale);
  document.documentElement.lang = localeLang(locale);
  document.documentElement.classList.toggle("is-zh", locale === "zh");
}

export function LocaleProvider({
  initialLocale = DEFAULT_LOCALE,
  initialHasPreference = false,
  children,
}: {
  initialLocale?: Locale;
  /** True when a locale cookie already exists from a prior visit. */
  initialHasPreference?: boolean;
  children: ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [languageReady, setLanguageReady] = useState(initialHasPreference);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    persistLocale(next);
    setLanguageReady(true);
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale, languageReady }),
    [locale, setLocale, languageReady],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
