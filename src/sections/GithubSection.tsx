"use client";

import { GithubCarousel } from "@/components/GithubCarousel";
import type { GithubRepo } from "@/lib/github";
import { useLanguage } from "@/context/LanguageContext";

export function GithubSection({ repos }: { repos: GithubRepo[] }) {
  const { t } = useLanguage();

  return (
    <section id="github" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-violet-300">
            {t.github.eyebrow}
          </p>

          <h2 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
            {t.github.title}
          </h2>

          <p className="mt-6 text-sm leading-7 text-slate-400">
            {t.github.description}
          </p>
        </div>

        <GithubCarousel repos={repos} />
      </div>
    </section>
  );
}