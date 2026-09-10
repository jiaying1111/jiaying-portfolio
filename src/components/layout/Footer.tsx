"use client";

import Link from "next/link";
import { footerColumns } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { localize } from "@/i18n/localize";

const icpNumber = process.env.NEXT_PUBLIC_ICP_NUMBER?.trim() ?? "";
const icpUrl =
  process.env.NEXT_PUBLIC_ICP_URL?.trim() || "https://beian.miit.gov.cn/";

export function Footer() {
  const { locale } = useLocale();
  const columns = localize(footerColumns, locale);

  return (
    <footer className="site-footer">
      <div className="site-footer__inner measure">
        {columns.map((column) => (
          <nav
            key={column.title}
            className="site-footer__column"
            aria-label={column.title}
          >
            <Link href={column.href} className="site-footer__heading">
              {column.title}
            </Link>
            {column.links.map((link) => (
              <Link
                key={`${column.title}-${link.label}`}
                href={link.href}
                className="site-footer__link"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ))}
      </div>
      {icpNumber ? (
        <p className="site-footer__icp measure">
          <a
            className="site-footer__icp-link"
            href={icpUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icpNumber}
          </a>
        </p>
      ) : null}
    </footer>
  );
}
