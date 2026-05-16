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
        fixed right-5 top-1/2 z-[70]
        hidden -translate-y-1/2 lg:block
      "
      aria-label="Section navigation"
    >
      <div
        className="
          relative flex flex-col items-center gap-5
          rounded-[40px]
          border border-white/10
          bg-black/35 px-3 py-6
          backdrop-blur-xl
          shadow-[0_0_30px_rgba(0,0,0,0.45)]
        "
      >
        <div
          className="
            absolute top-6 bottom-6 left-1/2 w-px
            -translate-x-1/2
            bg-gradient-to-b
            from-transparent
            via-[#00ff9d]/30
            to-transparent
          "
        />

        {sections.map((section) => {
          const active = activeSection === section.id;

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="group relative z-10 flex h-4 w-4 items-center justify-center"
              aria-label={section.label}
              title={section.label}
              aria-current={active ? "true" : undefined}
            >
              <span
                className={`
                  relative block rounded-full
                  transition-all duration-300
                  ${
                    active
                      ? `
                        h-3.5 w-3.5
                        bg-[#00ff9d]
                        shadow-[0_0_18px_rgba(0,255,157,0.95)]
                      `
                      : `
                        h-2 w-2
                        border border-[#00ff9d]/40
                        bg-black/80
                        group-hover:bg-[#00ff9d]/25
                        group-hover:border-[#00ff9d]
                      `
                  }
                `}
              >
                {active && (
                  <span
                    className="
                      absolute inset-0 animate-ping
                      rounded-full bg-[#00ff9d]/40
                    "
                  />
                )}
              </span>

              <span
                className="
                  pointer-events-none absolute right-8
                  whitespace-nowrap
                  rounded-full border border-[#00ff9d]/20
                  bg-black/75 px-3 py-1.5
                  font-mono text-[9px]
                  uppercase tracking-[0.3em]
                  text-[#00ff9d]
                  opacity-0
                  backdrop-blur-md
                  transition-all duration-300
                  group-hover:translate-x-[-4px]
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