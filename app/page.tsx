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

import { LanguageProvider } from "@/context/LanguageContext";

import { HeroSection } from "@/sections/HeroSection";
import { AreasSection } from "@/sections/AreasSection";
import { CurrentStateSection } from "@/sections/CurrentStateSection";
import { ProjectsPreviewSection } from "@/sections/ProjectsPreviewSection";
import { GithubSectionServer } from "@/sections/GithubSectionServer";
import { RawlogSection } from "@/sections/RawlogSection";
import { LivingArchiveSection } from "@/sections/LivingArchiveSection";
import { VisualArchiveSection } from "@/sections/VisualArchiveSection";
import { ConnectedSignalsSection } from "@/sections/ConnectedSignalsSection";
import { InstagramSignalSectionServer } from "@/sections/InstagramSignalSectionServer";
import { DocumentsSection } from "@/sections/DocumentsSection";
import { ManifestoSection } from "@/sections/ManifestoSection";
import { ExperienceSignalSection } from "@/sections/ExperienceSignalSection";
import { AboutSignalSection } from "@/sections/AboutSignalSection";
import { SystemCapabilitiesSection } from "@/sections/SystemCapabilitiesSection";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main
      className="rawlab-app min-h-screen overflow-x-hidden raw-scanlines transition-colors duration-500"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <BootLoader />

      <AmbientBackground />
      <SignalNoise />
      <StarfieldBackground />
      <MatrixRain />
      <CursorGlow />
      <SectionIndicator />

      <LanguageProvider>
        <div className="relative z-10 overflow-x-hidden">
          <ScrollProgress />
          <Navigation />

          <HeroSection />
          <AreasSection />
          <CurrentStateSection />
          <ProjectsPreviewSection />
          <ExperienceSignalSection />
          <AboutSignalSection />
          <SystemCapabilitiesSection />
          <GithubSectionServer />

          <div className="focus-hidden">
            <RawlogSection />
          </div>

          <div className="focus-hidden">
            <LivingArchiveSection />
          </div>

          <div className="focus-hidden">
            <VisualArchiveSection />
          </div>

          <div className="focus-hidden">
            <ConnectedSignalsSection />
          </div>

          <div className="focus-hidden">
            <InstagramSignalSectionServer />
          </div>

          <DocumentsSection />
          <ManifestoSection />

          <Footer />
        </div>
      </LanguageProvider>
    </main>
  );
}
