export const LOCALES = ["en", "zh"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_COOKIE = "jiaying-locale";

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "en" || value === "zh";
}

export function localeLang(locale: Locale) {
  return locale === "zh" ? "zh-Hans" : "en";
}
