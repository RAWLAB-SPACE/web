import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { AreasSection } from "@/sections/AreasSection";
import { CurrentStateSection } from "@/sections/CurrentStateSection";
import { HeroSection } from "@/sections/HeroSection";
import { LivingArchiveSection } from "@/sections/LivingArchiveSection";
import { ManifestoSection } from "@/sections/ManifestoSection";
import { ProjectsPreviewSection } from "@/sections/ProjectsPreviewSection";
import { AmbientBackground } from "@/components/AmbientBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-slate-100">
      <AmbientBackground />
      <Navigation />
      <HeroSection />
      <AreasSection />
      <CurrentStateSection />
      <ProjectsPreviewSection />
      <LivingArchiveSection />
      <ManifestoSection />
      <Footer />
    </main>
  );
}