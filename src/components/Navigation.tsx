"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { EnvironmentToggle } from "@/components/EnvironmentToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useActiveSection } from "@/hooks/useActiveSection";

const navItems = [
  {
    label: "Projects",
    href: "#projects-preview",
    id: "projects-preview",
    activeIds: ["projects-preview"],
  },
  {
    label: "Systems",
    href: "#builder-profile",
    id: "builder-profile",
    activeIds: ["builder-profile", "github"],
  },
  {
    label: "Archive",
    href: "#visual-archive",
    id: "visual-archive",
    activeIds: ["visual-archive", "instagram"],
  },
];

export function Navigation() {
  const activeSection = useActiveSection();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed left-0 top-0 z-[80] w-full px-2 py-2 sm:px-3 md:px-6 md:py-5">
        <motion.nav
          animate={{
            y: 0,
            opacity: 1,
            scale: isScrolled ? 0.985 : 1,
          }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          className="
            mx-auto flex w-full max-w-6xl items-center justify-between
            overflow-hidden rounded-[1.2rem] border px-3 py-2.5
            backdrop-blur-md md:rounded-full md:px-6 md:py-3 md:backdrop-blur-2xl
          "
          style={{
            borderColor:
              "color-mix(in srgb, var(--border) 75%, transparent)",
            background:
              "color-mix(in srgb, var(--background) 72%, transparent)",
            boxShadow: isScrolled
              ? "0 10px 40px rgba(0,0,0,0.28)"
              : "0 4px 24px rgba(0,0,0,0.16)",
          }}
        >
          <motion.a
            href="#hero"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="
              group relative flex shrink-0 items-center
              font-black uppercase tracking-[0.32em]
              text-white transition
            "
          >
            <div
              className="
                pointer-events-none absolute left-1/2 top-1/2
                h-10 w-24 -translate-x-1/2 -translate-y-1/2
                rounded-full bg-violet-400/10 blur-2xl
              "
            />

            <span className="relative text-[10px] drop-shadow-[0_0_10px_rgba(196,181,253,0.45)] transition group-hover:text-violet-300 md:hidden">
              RAW_
            </span>

            <span className="relative hidden text-xs drop-shadow-[0_0_10px_rgba(196,181,253,0.45)] transition group-hover:text-violet-300 md:inline">
              RAWLAB_
            </span>

            <span
              className="
                pointer-events-none absolute -bottom-1 left-0
                h-px w-full origin-left scale-x-50
                bg-gradient-to-r from-violet-300 via-cyan-300 to-transparent
                opacity-60 transition duration-300
                group-hover:scale-x-100 group-hover:opacity-100
              "
            />
          </motion.a>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const active = item.activeIds.includes(activeSection);

              return (
                <motion.a
                  key={item.id}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`
                    rounded-full px-4 py-2
                    text-[11px] uppercase tracking-[0.25em]
                    transition
                    ${
                      active
                        ? "border border-violet-300/30 bg-white/[0.07] text-violet-300 shadow-[0_0_24px_rgba(196,181,253,0.14)]"
                        : "border border-transparent text-slate-400 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
                    }
                  `}
                >
                  {item.label}
                </motion.a>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <LanguageToggle />
            <EnvironmentToggle />
          </div>

          <button
            onClick={() => setIsOpen((current) => !current)}
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full border border-white/[0.08]
              bg-white/[0.03] backdrop-blur-md transition
              hover:border-violet-300/30 hover:bg-white/[0.06]
              md:hidden
            "
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                transition={{ duration: 0.18 }}
              >
                {isOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </motion.div>
            </AnimatePresence>
          </button>
        </motion.nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-md md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.96 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="
                fixed left-2 right-2 top-[4.8rem] z-[90]
                overflow-hidden rounded-[1.8rem] border border-white/[0.08]
                bg-[color-mix(in_srgb,var(--background)_88%,transparent)]
                p-4 shadow-2xl shadow-black/40 backdrop-blur-md
                sm:left-3 sm:right-3 md:backdrop-blur-2xl
              "
            >
              <div className="mb-5 flex justify-center border-b border-white/[0.05] pb-5">
                <div className="text-[11px] font-black uppercase tracking-[0.35em] text-white drop-shadow-[0_0_10px_rgba(196,181,253,0.45)]">
                  RAWLAB_
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => {
                  const active = item.activeIds.includes(activeSection);

                  return (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsOpen(false)}
                      className={`
                        rounded-2xl border px-4 py-4
                        text-[11px] uppercase tracking-[0.24em]
                        transition
                        ${
                          active
                            ? "border-violet-300/25 bg-white/[0.06] text-violet-300"
                            : "border-white/[0.05] bg-white/[0.02] text-slate-300 hover:border-violet-300/20 hover:bg-white/[0.04] hover:text-white"
                        }
                      `}
                    >
                      {item.label}
                    </motion.a>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center gap-2 border-t border-white/[0.05] pt-5">
                <LanguageToggle />
                <EnvironmentToggle />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}