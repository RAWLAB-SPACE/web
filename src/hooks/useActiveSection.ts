"use client";

import { useEffect, useState } from "react";

const sectionIds = [
  "projects-preview",
  "visual-archive",
  "signals",
];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY + 180;

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (!section) continue;

        const offsetTop = section.offsetTop;
        const height = section.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActiveSection(id);
        }
      }
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
}