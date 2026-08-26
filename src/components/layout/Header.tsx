"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { caseStudiesBySlug } from "@/data/case-studies/digital-no-more-mad";
import { navigation, siteIdentity } from "@/data/site";
import { joinClassNames } from "@/lib/utils";

/** Pages that open on a full-bleed image carry the header on top of it. */
function hasFullBleedHero(pathname: string) {
  if (pathname === "/") {
    return true;
  }
  const slug = pathname.match(/^\/projects\/([^/]+)\/?$/)?.[1];
  return slug !== undefined && slug in caseStudiesBySlug;
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
  const [open, setOpen] = useState(false);
  const overlay = hasFullBleedHero(pathname);

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
        <button
          type="button"
          className="site-header__menu"
          aria-expanded={open}
          aria-controls="site-primary-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close menu" : "Menu"}
        </button>
        <nav
          id="site-primary-nav"
          aria-label="Primary"
          className={joinClassNames("site-nav", open && "is-open")}
        >
          {navigation.map((item) => {
            const current = isCurrent(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
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
        </nav>
      </div>
    </header>
  );
}
