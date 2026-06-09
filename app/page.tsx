import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { AmbientBackground } from "@/components/AmbientBackground";
import { StarfieldBackground } from "@/components/StarfieldBackground";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SignalNoise } from "@/components/SignalNoise";
import { SectionIndicator } from "@/components/SectionIndicator";
import { BootLoader } from "@/components/system/BootLoader";
import { MatrixRain } from "@/components/MatrixRain";
import { SunCursorGlow } from "@/components/SunCursorGlow";
import { ScrollBloom } from "@/components/ScrollBloom";

import { LanguageProvider } from "@/context/LanguageContext";

import { HeroSection } from "@/sections/HeroSection";
import { ProjectsPreviewSection } from "@/sections/ProjectsPreviewSection";
import { BuilderProfileSection } from "@/sections/BuilderProfileSection";
import { GithubSectionServer } from "@/sections/GithubSectionServer";
import { VisualArchiveSection } from "@/sections/VisualArchiveSection";
import { InstagramSignalSectionServer } from "@/sections/InstagramSignalSectionServer";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main
      className="rawlab-app min-h-screen overflow-x-hidden raw-scanlines transition-colors duration-500"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
        backgroundAttachment: "fixed",
      }}
    >
      <BootLoader />

      <AmbientBackground />
      <SignalNoise />
      <StarfieldBackground />
      <div className="sun-fire" />
      <div className="sun-cursor-glow" id="sun-cursor-glow" />
      <MatrixRain />
      <CursorGlow />
      <SunCursorGlow />
      <ScrollBloom />
      <SectionIndicator />

      <LanguageProvider>
        <div className="relative z-10 overflow-x-hidden">
          <ScrollProgress />
          <Navigation />

          <HeroSection />
          <ProjectsPreviewSection />
          <BuilderProfileSection />
          <GithubSectionServer />

          <div className="focus-hidden">
            <VisualArchiveSection />
          </div>

          <div className="focus-hidden">
            <InstagramSignalSectionServer />
          </div>

          <Footer />
        </div>
      </LanguageProvider>
    </main>
  );
}