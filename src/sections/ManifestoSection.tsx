"use client";

import { useLanguage } from "@/context/LanguageContext";

export function ManifestoSection() {
  const { t } = useLanguage();

  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-14">
          <p className="text-sm uppercase tracking-[0.4em] text-violet-300">
            {t.manifesto.eyebrow}
          </p>

          <h2 className="mt-8 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            {t.manifesto.title}
          </h2>

          <div className="mt-10 grid gap-8 text-sm leading-7 text-slate-400 md:grid-cols-2">
            <p>{t.manifesto.paragraphOne}</p>
            <p>{t.manifesto.paragraphTwo}</p>
          </div>
        </div>
      </div>
    </section>
  );
}