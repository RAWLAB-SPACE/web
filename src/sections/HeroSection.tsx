"use client";

import { motion } from "framer-motion";
import { InteractiveCollage } from "@/components/InteractiveCollage";
import { useLanguage } from "@/context/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32">
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
      </div>
    </section>
  );
}