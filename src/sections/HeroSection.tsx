"use client";

import { motion } from "framer-motion";
import { InteractiveCollage } from "@/components/InteractiveCollage";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";

export function HeroSection() {
  const { t } = useLanguage();

const [theme, setTheme] = useState<"void" | "light" | "focus">(() => {
  if (typeof document === "undefined") {
    return "void";
  }

  const current = document.documentElement.dataset.theme;

  if (current === "focus") {
    return "focus";
  }

  if (current === "light") {
    return "light";
  }

  return "void";
});

useEffect(() => {
  function handleThemeChange(event: Event) {
    const customEvent = event as CustomEvent<
      "void" | "light" | "focus"
    >;

    setTheme(customEvent.detail);
  }

  window.addEventListener(
    "rawlab-theme-change",
    handleThemeChange,
  );

  return () => {
    window.removeEventListener(
      "rawlab-theme-change",
      handleThemeChange,
    );
  };
}, []);

const isFocus = theme === "focus";

  if (isFocus) {
    return (
      <section
        id="hero"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32"
      >
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_top,_rgba(0,255,157,0.12),_transparent_45%)]
          "
        />

        <div
          className="
            absolute inset-0 opacity-10
            bg-[linear-gradient(to_right,#00ff9d15_1px,transparent_1px),
            linear-gradient(to_bottom,#00ff9d15_1px,transparent_1px)]
            bg-[size:48px_48px]
          "
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#00ff9d]" />

              <span className="font-mono text-xs uppercase tracking-[0.35em] text-white/70">
                RAWLAB_SYSTEM
              </span>
            </div>

            <h1
              className="
                font-mono text-6xl font-black uppercase
                tracking-[0.1em]
                text-[#00ff9d]
                md:text-8xl xl:text-9xl
              "
            >
              RAWLAB_
            </h1>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div
                className="
                  rounded-3xl border border-[#00ff9d]/20
                  bg-black/30 p-8
                  backdrop-blur-md
                "
              >
                <div
                  className="
                    mb-4 font-mono text-xs uppercase
                    tracking-[0.3em]
                    text-[#00ff9d]
                  "
                >
                  Status
                </div>

                <div className="space-y-3 font-mono text-sm text-white">
                  <div>SYSTEM: ONLINE</div>
                  <div>MODE: FOCUS</div>
                  <div>STACK: ACTIVE</div>
                  <div>NETWORK: STABLE</div>
                  <div>LOCATION: SANTIAGO_CL</div>
                </div>
              </div>

              <div
                className="
                  rounded-3xl border border-white/10
                  bg-black/30 p-8
                  backdrop-blur-md
                "
              >
                <div
                  className="
                    mb-4 font-mono text-xs uppercase
                    tracking-[0.3em]
                    text-[#00ff9d]
                  "
                >
                  Signal
                </div>

                <p
                  className="
                    max-w-xl font-mono text-sm
                    leading-8 text-white
                  "
                >
                  Frontend systems, motion architecture and digital
                  experiences engineered between creativity and precision.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#projects-preview"
                    className="
                      rounded-full border border-[#00ff9d]/30
                      px-6 py-3
                      font-mono text-xs uppercase
                      tracking-[0.25em]
                      text-[#00ff9d]
                      transition
                      hover:border-[#00ff9d]
                      hover:bg-[#00ff9d]/10
                    "
                  >
                    Explore
                  </a>

                  <a
                    href="https://github.com/RAWLAB-SPACE"
                    target="_blank"
                    className="
                      rounded-full border border-white/10
                      bg-[#00ff9d]
                      px-6 py-3
                      font-mono text-xs uppercase
                      tracking-[0.25em]
                      text-black
                      transition
                      hover:bg-white
                    "
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>

            <div
              className="
                mt-12 flex items-center gap-3
                font-mono text-sm text-[#00ff9d]
              "
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#00ff9d]" />

              <span>
                awaiting_input
                <span className="animate-pulse">_</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32"
    >
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.15),_transparent_45%)]
        "
      />

      <div
        className="
          absolute inset-0 opacity-20
          bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),
          linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
          bg-[size:64px_64px]
        "
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-20 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center"
        >
          <p className="mb-6 text-sm tracking-[0.5em] text-violet-300">
            {t.hero.eyebrow}
          </p>

          <h1 className="text-6xl font-black tracking-tight md:text-8xl xl:text-9xl">
            {t.hero.title}
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300 md:text-xl">
            {t.hero.description}
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#projects-preview"
              className="
                rounded-full border border-slate-500
                px-6 py-3 text-sm uppercase tracking-widest
                text-slate-100 transition
                hover:border-violet-300
                hover:text-violet-300
              "
            >
              {t.hero.explore}
            </a>

            <a
              href="https://github.com/RAWLAB-SPACE"
              target="_blank"
              className="
                rounded-full bg-slate-100
                px-6 py-3 text-sm uppercase tracking-widest
                text-slate-950 transition
                hover:bg-violet-300
              "
            >
              {t.hero.github}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <InteractiveCollage />
        </motion.div>
      </div>  q
    </section>
  );
}