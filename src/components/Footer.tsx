"use client";

import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p>{t.footer.rights}</p>
          <p className="mt-2 text-xs text-slate-500">{t.footer.note}</p>
        </div>

        <div className="flex gap-5">
          <a
            href="https://github.com/RAWLAB-SPACE"
            target="_blank"
            className="transition hover:text-violet-300"
          >
            {t.footer.github}
          </a>

          <a
            href="https://www.linkedin.com/in/adhesiboss/"
            target="_blank"
            className="transition hover:text-violet-300"
          >
            {t.footer.linkedin}
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="transition hover:text-violet-300"
          >
            {t.footer.instagram}
          </a>
        </div>
      </div>
    </footer>
  );
}