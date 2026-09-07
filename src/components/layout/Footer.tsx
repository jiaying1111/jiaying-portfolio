"use client";

import Link from "next/link";
import { footerColumns } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { localize } from "@/i18n/localize";

export function Footer() {
  const { locale } = useLocale();
  const columns = localize(footerColumns, locale);

  return (
    <footer className="site-footer">
      <div className="site-footer__inner measure">
        {columns.map((column) => (
          <div key={column.title}>
            <Link href={column.href} className="site-footer__heading">
              {column.title}
            </Link>
            <ul>
              {column.links.map((link) => (
                <li key={`${column.title}-${link.label}`}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
