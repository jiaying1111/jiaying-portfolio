import { HeroSection } from "@/components/sections/HeroSection";
import { ArtworkRailSection } from "@/components/sections/ArtworkRailSection";
import { ProjectGridSection } from "@/components/sections/ProjectGridSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectGridSection />
      <ArtworkRailSection />
    </main>
  );
}
