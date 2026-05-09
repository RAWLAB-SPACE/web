"use client";

import { motion } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";

const sections = [
  { id: "hero", label: "Entry" },
  { id: "projects-preview", label: "Projects" },
  { id: "visual-archive", label: "Archive" },
  { id: "github", label: "GitHub" },
  { id: "instagram", label: "Instagram" },
  { id: "documents", label: "Docs" },
  { id: "manifesto", label: "Manifesto" },
];

export function SectionIndicator() {
  const activeSection = useActiveSection();

  return (
    <motion.nav
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="
        fixed right-4 top-1/2 z-[70]
        hidden -translate-y-1/2 lg:block
      "
      aria-label="Section navigation"
    >
      <div
        className="
          flex flex-col items-center gap-4
          rounded-full border border-white/10
          bg-black/25 px-2.5 py-4
          backdrop-blur-xl
        "
      >
        {sections.map((section) => {
          const active = activeSection === section.id;

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="group relative flex h-3 w-3 items-center justify-center"
              aria-label={section.label}
              title={section.label}
            >
              <span
                className={`
                  h-1.5 w-1.5 rounded-full transition-all duration-300
                  ${
                    active
                      ? "scale-150 bg-violet-300 shadow-[0_0_14px_rgba(196,181,253,1)]"
                      : "bg-white/25 group-hover:bg-white/60"
                  }
                `}
              />

              <span
                className="
                  pointer-events-none absolute right-5
                  rounded-full border border-white/10
                  bg-black/50 px-3 py-1
                  text-[9px] uppercase tracking-[0.25em]
                  text-slate-300 opacity-0
                  backdrop-blur-md transition
                  group-hover:opacity-100
                "
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