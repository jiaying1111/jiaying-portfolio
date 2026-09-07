import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter, Noto_Sans, Noto_Sans_SC } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { isLocale, localeLang, type Locale } from "@/i18n/locale";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-inter",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-noto-sans",
});

const notoSansSc = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-sc",
});

export const metadata: Metadata = {
  title: "Jiaying Li — Portfolio",
  description:
    "Jiaying Li is an Experience Designer and Illustrator. Her practice explores the intersection of emerging technologies, storytelling, and human-centered design.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const stored = cookieStore.get("jiaying-locale")?.value;
  const locale: Locale = isLocale(stored) ? stored : "en";

  return (
    <html
      lang={localeLang(locale)}
      className={`${inter.variable} ${notoSans.variable} ${notoSansSc.variable}${locale === "zh" ? " is-zh" : ""}`}
    >
      <body>
        <LocaleProvider initialLocale={locale}>
          <SiteShell>{children}</SiteShell>
        </LocaleProvider>
      </body>
    </html>
  );
}
