"use client";

import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";
import { t } from "@/i18n/localize";

export function LocalizedBackLink({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  const { locale } = useLocale();
  return (
    <Link href={href} className="listing__back">
      {t(text, locale)}
    </Link>
  );
}
