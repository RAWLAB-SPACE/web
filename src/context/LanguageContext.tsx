"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { copy, Language } from "@/content/copy";

type Copy = (typeof copy)[Language];

type LanguageContextValue = {
  language: Language;
  t: Copy;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  t: copy.en,
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((current) => (current === "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        t: copy[language],
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}