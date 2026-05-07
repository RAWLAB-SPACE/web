"use client";

import { useLanguage } from "@/context/LanguageContext";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="rounded-full border px-4 py-2 text-xs uppercase tracking-[0.25em] transition"
      style={{
        borderColor: "var(--border)",
        color: "var(--foreground)",
        background: "var(--card)",
      }}
    >
      {language === "en" ? "ES" : "EN"}
    </button>
  );
}