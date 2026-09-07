"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageSwitch } from "@/components/layout/LanguageSwitch";
import { getArtworkById } from "@/data/artworks";
import { caseStudiesBySlug } from "@/data/case-studies";
import { navigation, siteIdentity } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { localize } from "@/i18n/localize";
import { ui } from "@/i18n/ui";
import { useSlidingIndicator } from "@/lib/useSlidingIndicator";
import { joinClassNames } from "@/lib/utils";

/** Pages that open on a full-bleed image carry the header on top of it. */
function hasFullBleedHero(pathname: string) {
  if (pathname === "/") {
    return true;
  }

  const projectSlug = pathname.match(/^\/projects\/([^/]+)\/?$/)?.[1];
  if (projectSlug !== undefined && projectSlug in caseStudiesBySlug) {
    return true;
  }

  const artworkSlug = pathname.match(/^\/artwork\/([^/]+)\/?$/)?.[1];
  if (artworkSlug === undefined || !(artworkSlug in caseStudiesBySlug)) {
    return false;
  }

  return getArtworkById(artworkSlug)?.section !== "illustration";
}

function isCurrent(pathname: string, href: string) {
  if (href === "/experience-design") {
    return (
      pathname.startsWith("/experience-design") ||
      pathname.startsWith("/projects/")
    );
  }
  return pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const copy = ui(locale);
  const items = localize(navigation, locale);
  const [open, setOpen] = useState(false);
  const overlay = hasFullBleedHero(pathname);
  const activeIndex = navigation.findIndex((item) =>
    isCurrent(pathname, item.href),
  );
  const { containerRef, itemRefs, indicator } =
    useSlidingIndicator(activeIndex);

  return (
    <header
      className={joinClassNames(
        "site-header",
        overlay && "site-header--overlay",
      )}
    >
      <div className="site-header__inner measure">
        <Link href="/" className="site-logo">
          {siteIdentity.logo}
        </Link>
        <div className="site-header__end">
          <nav
            id="site-primary-nav"
            aria-label={copy.primaryNav}
            className={joinClassNames("site-nav", open && "is-open")}
            ref={(node) => {
              containerRef.current = node;
            }}
          >
            {items.map((item, index) => {
              const current = isCurrent(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  ref={(node) => {
                    itemRefs.current[index] = node;
                  }}
                  className={joinClassNames(
                    "site-nav__link",
                    current && "is-current",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <span
              className={joinClassNames(
                "site-nav__indicator",
                indicator.ready && "is-ready",
              )}
              style={{
                transform: `translateX(${indicator.left}px)`,
                width: indicator.width,
              }}
              aria-hidden="true"
            />
          </nav>
          <LanguageSwitch />
          <button
            type="button"
            className="site-header__menu"
            aria-expanded={open}
            aria-controls="site-primary-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? copy.closeMenu : copy.menu}
          </button>
        </div>
      </div>
    </header>
  );
}
