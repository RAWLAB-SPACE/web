"use client";

import { documents } from "@/content/documents";
import { useLanguage } from "@/context/LanguageContext";
import { SectionAtmosphere } from "@/components/SectionAtmosphere";

export function DocumentsSection() {
  const { t } = useLanguage();

  return (
    <section id="documents" className="px-6 py-32">
      <SectionAtmosphere variant="emerald"  position="right"/>
      <div className="mx-auto z-10 max-w-6xl">
        <div className="mb-14 grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
          <p className="text-sm uppercase tracking-[0.4em] text-violet-300">
            {t.documents.eyebrow}
          </p>

          <div>
            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              {t.documents.title}
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400">
              {t.documents.description}
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
          <div className="border-b border-white/10 px-6 py-4 text-xs uppercase tracking-[0.3em] text-slate-500">
            {t.documents.root}
          </div>

          {documents.map((doc) => (
            <div
              key={doc.title}
              className="grid gap-4 border-b border-white/10 px-6 py-6 last:border-b-0 md:grid-cols-[0.4fr_1fr_0.3fr]"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
                /{doc.label.toLowerCase()}
              </p>

              <div>
                <h3 className="text-xl font-semibold">{doc.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {doc.description}
                </p>
              </div>

              <button className="self-start rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300 transition hover:border-violet-300/50 hover:text-violet-300 md:justify-self-end">
                {doc.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}