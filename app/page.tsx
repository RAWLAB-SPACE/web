import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { AreasSection } from "@/sections/AreasSection";
import { CurrentStateSection } from "@/sections/CurrentStateSection";
import { HeroSection } from "@/sections/HeroSection";
import { LivingArchiveSection } from "@/sections/LivingArchiveSection";
import { ManifestoSection } from "@/sections/ManifestoSection";
import { ProjectsPreviewSection } from "@/sections/ProjectsPreviewSection";
import { AmbientBackground } from "@/components/AmbientBackground";
import { StarfieldBackground } from "@/components/StarfieldBackground";
import { ConnectedSignalsSection } from "@/sections/ConnectedSignalsSection";

export default function Home() {
  return (
    <main
      className="min-h-screen transition-colors duration-500"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <AmbientBackground />
      <StarfieldBackground />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AreasSection />
        <CurrentStateSection />
        <ProjectsPreviewSection />
        <LivingArchiveSection />
        <ConnectedSignalsSection />
        <ManifestoSection />
        <Footer />
      </div>
    </main>
  );
}
