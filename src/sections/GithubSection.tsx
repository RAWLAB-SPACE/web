"use client";

import { GithubCarousel } from "@/components/GithubCarousel";
import type { GithubRepo } from "@/lib/github";
import { useLanguage } from "@/context/LanguageContext";
import { SectionAtmosphere } from "@/components/SectionAtmosphere";

export function GithubSection({ repos }: { repos: GithubRepo[] }) {
  const { t } = useLanguage();

  return (
    <section id="github" className="relative overflow-hidden px-6 py-20">
      <SectionAtmosphere variant="cyan" position="right" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-8 grid gap-5 md:grid-cols-[0.7fr_1.3fr] md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-violet-300">
              {t.github.eyebrow}
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              {t.github.title}
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-400 md:justify-self-end">
            {t.github.description}
          </p>
        </div>

        <GithubCarousel repos={repos} />
      </div>
    </section>
  );
}