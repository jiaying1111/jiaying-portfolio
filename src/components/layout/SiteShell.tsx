import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-root">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
