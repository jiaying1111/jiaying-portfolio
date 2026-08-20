import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jiaying Li — Portfolio",
  description: "Portfolio of Jiaying Li.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
