"use client";

import { useEffect } from "react";

export function ScrollBloom() {
  useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY > 80;

      document.documentElement.dataset.scrolled = scrolled ? "true" : "false";
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}