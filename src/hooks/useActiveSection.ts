"use client";

import { useEffect, useState } from "react";

const sectionIds = [
  "hero",
  "projects-preview",
  "visual-archive",
  "github",
  "instagram",
  "documents",
  "manifesto",
];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    function handleScroll() {
      let current = "hero";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= window.innerHeight * 0.4) {
          current = id;
        }
      });

      setActiveSection(current);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
}