import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LanguageGate } from "@/components/layout/LanguageGate";
import { CaseStudyReveal } from "@/components/case-study/CaseStudyReveal";
import { ReadingProgress } from "@/components/case-study/ReadingProgress";
import { SiteLoader } from "@/components/layout/SiteLoader";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-root">
      <LanguageGate />
      <SiteLoader />
      <ReadingProgress />
      <CaseStudyReveal />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
