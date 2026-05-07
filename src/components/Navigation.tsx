"use client";

import { EnvironmentToggle } from "@/components/EnvironmentToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

export function Navigation() {
  const { t } = useLanguage();

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-6 py-6">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 py-3 backdrop-blur-md"
        style={{
          borderColor: "var(--border)",
          background: "color-mix(in srgb, var(--background) 80%, transparent)",
        }}
      >
        <a href="#" className="text-sm font-bold tracking-[0.35em]">
          RAWLAB_
        </a>

        <div className="hidden gap-6 text-xs uppercase tracking-[0.25em] md:flex">
          <a href="#projects-preview" className="transition hover:opacity-70">
            {t.nav.projects}
          </a>
          <a href="#visual-archive" className="transition hover:opacity-70">
            {t.nav.archive}
          </a>
          <a href="#signals" className="transition hover:opacity-70">
            {t.nav.systems}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <EnvironmentToggle />
        </div>
      </nav>
    </header>
  );
}