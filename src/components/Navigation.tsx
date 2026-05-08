"use client";

import { EnvironmentToggle } from "@/components/EnvironmentToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Navigation() {
  const { t } = useLanguage();

  const activeSection = useActiveSection();

  const navItems = [
    {
      label: t.nav.projects,
      href: "#projects-preview",
      id: "projects-preview",
    },
    {
      label: t.nav.archive,
      href: "#visual-archive",
      id: "visual-archive",
    },
    {
      label: t.nav.systems,
      href: "#signals",
      id: "signals",
    },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-6 py-6">
      <nav
        className="
          mx-auto flex max-w-6xl items-center justify-between
          rounded-full border px-5 py-3
          backdrop-blur-md
        "
        style={{
          borderColor: "var(--border)",
          background:
            "color-mix(in srgb, var(--background) 80%, transparent)",
        }}
      >
        <a
          href="#"
          className="
            text-sm font-bold
            tracking-[0.35em]
            transition hover:text-violet-300
          "
        >
          RAWLAB_
        </a>

        <div className="hidden gap-2 text-xs uppercase tracking-[0.25em] md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`
                rounded-full px-4 py-2 transition
                ${
                  activeSection === item.id
                    ? "bg-white/10 text-violet-300"
                    : "text-slate-400 hover:text-white"
                }
              `}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <EnvironmentToggle />
        </div>
      </nav>
    </header>
  );
}