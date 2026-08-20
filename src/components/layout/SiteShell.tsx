"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { usePathname } from "next/navigation";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className={isHome ? "site-root site-root--home" : "site-root"}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
