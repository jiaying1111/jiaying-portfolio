"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, siteIdentity } from "@/data/site";
import { joinClassNames } from "@/lib/utils";

function isCurrent(pathname: string, href: string) {
  if (href === "/experience-design") {
    return pathname.startsWith("/experience-design") || pathname.startsWith("/projects/");
  }
  if (href === "/artwork") {
    return pathname.startsWith("/artwork");
  }
  if (href === "/about") {
    return pathname.startsWith("/about");
  }
  return pathname === href;
}

export function Header() {
  const pathname = usePathname();
  const overlay = pathname === "/";
  const [open, setOpen] = useState(false);

  return (
    <header
      className={joinClassNames(
        "site-header",
        overlay && "site-header--overlay",
      )}
    >
      <div className="site-header__inner">
        <Link href="/" className="site-logo">
          {siteIdentity.displayName}
        </Link>
        <button
          type="button"
          className="site-header__menu"
          aria-expanded={open}
          aria-controls="site-primary-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav
          id="site-primary-nav"
          aria-label="Primary navigation"
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
