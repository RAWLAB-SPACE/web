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
import { CursorGlow } from "@/components/CursorGlow";
import { DocumentsSection } from "@/sections/DocumentsSection";
import { VisualArchiveSection } from "@/sections/VisualArchiveSection";
import { LanguageProvider } from "@/context/LanguageContext";
import { ScrollProgress } from "@/components/ScrollProgress";
import { GithubSection } from "@/sections/GithubSection";

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
      <CursorGlow />
      <LanguageProvider>
        <div className="relative z-10">
          <ScrollProgress />
          <Navigation />
          <HeroSection />
          <AreasSection />
          <CurrentStateSection />
          <ProjectsPreviewSection />
          <GithubSection />
          <LivingArchiveSection />
          <VisualArchiveSection />
          <ConnectedSignalsSection />
          <DocumentsSection />
          <ManifestoSection />
          <Footer />
        </div>
      </LanguageProvider>
    </main>
  );
}
