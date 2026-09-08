import type { Locale } from "@/i18n/locale";
import { zhDictionary } from "@/i18n/zh-dictionary";

const SKIP_KEYS = new Set([
  "src",
  "href",
  "slug",
  "id",
  "poster",
  "kind",
  "loop",
  "download",
  "width",
  "height",
  "displayWidth",
  "section",
  "listingGroup",
]);

export function t(text: string, locale: Locale): string {
  if (locale !== "zh") {
    return text;
  }
  const direct = zhDictionary[text];
  if (direct) {
    return direct;
  }
  // Composed labels like "Interactive Game · 2025"
  if (text.includes(" · ")) {
    return text
      .split(" · ")
      .map((part) => zhDictionary[part] ?? part)
      .join(" · ");
  }
  return text;
}

export function localize<T>(value: T, locale: Locale): T {
  if (locale !== "zh") {
    return value;
  }
  return walk(value) as T;
}

function walk(value: unknown): unknown {
  if (typeof value === "string") {
    return t(value, "zh");
  }
  if (Array.isArray(value)) {
    return value.map(walk);
  }
  if (value && typeof value === "object") {
    const next: Record<string, unknown> = {};
    for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
      next[key] = SKIP_KEYS.has(key) ? child : walk(child);
    }
    return next;
  }
  return value;
}
