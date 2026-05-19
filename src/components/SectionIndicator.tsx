"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type Theme = "void" | "light" | "focus";

type SectionItem = {
  id: string;
  label: string;
};

const defaultSections: SectionItem[] = [
  { id: "hero", label: "Entry" },
  { id: "projects-preview", label: "Projects" },
  { id: "github", label: "GitHub" },
  { id: "visual-archive", label: "Archive" },
  { id: "instagram", label: "Instagram" },
  { id: "documents", label: "Docs" },
  { id: "manifesto", label: "Manifesto" },
];

const focusSections: SectionItem[] = [
  { id: "hero", label: "System" },
  { id: "projects-preview", label: "Projects" },
  { id: "experience-signal", label: "Experience" },
  { id: "about-signal", label: "About" },
  { id: "system-capabilities", label: "Stack" },
  { id: "github", label: "GitHub" },
  { id: "documents", label: "Docs" },
  { id: "manifesto", label: "Manifesto" },
];

function getCurrentTheme(): Theme {
  if (typeof document === "undefined") return "void";

  const theme = document.documentElement.dataset.theme;

  if (theme === "focus") return "focus";
  if (theme === "light") return "light";

  return "void";
}

export function SectionIndicator() {
  const [theme, setTheme] = useState<Theme>(() => getCurrentTheme());
  const [activeSection, setActiveSection] = useState("hero");
  const [indicatorKey, setIndicatorKey] = useState(0);

  const isFocus = theme === "focus";

  const sections = useMemo(
    () => (isFocus ? focusSections : defaultSections),
    [isFocus],
  );

  useEffect(() => {
    function handleThemeChange(event: Event) {
      const customEvent = event as CustomEvent<Theme>;

      setTheme(customEvent.detail);
      setActiveSection("hero");
      setIndicatorKey((current) => current + 1);
    }

    window.addEventListener("rawlab-theme-change", handleThemeChange);

    return () => {
      window.removeEventListener("rawlab-theme-change", handleThemeChange);
    };
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setActiveSection("hero");
    });

    function updateActiveSection() {
      const current = sections
        .map((section) => {
          const element = document.getElementById(section.id);

          if (!element) return null;

          const rect = element.getBoundingClientRect();

          return {
            id: section.id,
            distance: Math.abs(rect.top - 140),
          };
        })
        .filter(Boolean)
        .sort((a, b) => a!.distance - b!.distance)[0];

      if (current?.id) {
        setActiveSection(current.id);
      }
    }

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sections, indicatorKey]);

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();

    const section = document.getElementById(id);

    if (!section) return;

    setActiveSection(id);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${id}`);
  }

  return (
    <motion.nav
      key={`${theme}-${indicatorKey}`}
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="
        fixed right-5 top-1/2 z-[70]
        hidden -translate-y-1/2 lg:block
      "
      aria-label="Section navigation"
    >
      <div
       className="
  section-indicator
  flex flex-col items-center gap-4
  rounded-full
  px-2.5 py-4
  backdrop-blur-xl
"
      >
        {sections.map((section) => {
          const active = activeSection === section.id;

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(event) => handleClick(event, section.id)}
              className="section-indicator-link group relative flex h-4 w-4 items-center justify-center"
              aria-label={section.label}
              title={section.label}
              data-active={active ? "true" : "false"}
            >
              <span
                className={
                  isFocus
                    ? `
                      section-indicator-dot
                      relative block rounded-full transition-all duration-300
                      ${
                        active
                          ? "h-3.5 w-3.5 bg-[var(--focus-nav-active)] shadow-[0_0_18px_rgba(0,255,157,0.95)]"
                          : "h-2 w-2 border border-[var(--focus-nav)]/45 bg-black/80 group-hover:bg-[var(--focus-nav)]/25"
                      }
                    `
                    : `
                      section-indicator-dot
                      h-1.5 w-1.5 rounded-full transition-all duration-300
                      ${
                        active
  ? "section-indicator-active scale-150"
  : "section-indicator-inactive"
                      }
                    `
                }
              />

              <span
                className={`
                  section-indicator-label
                  pointer-events-none absolute right-6
                  whitespace-nowrap rounded-full px-3 py-1
                  text-[9px] uppercase tracking-[0.25em]
                  opacity-0 transition group-hover:opacity-100
                  ${
                    isFocus
                      ? "border border-[var(--focus-nav)]/20 bg-black/75 font-mono text-[var(--focus-nav)]"
                      : "border border-white/10 bg-black/50 text-slate-300"
                  }
                `}
              >
                {section.label}
              </span>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}