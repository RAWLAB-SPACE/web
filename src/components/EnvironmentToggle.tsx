"use client";

import { useEffect, useState } from "react";

type Theme = "void" | "light" | "focus";

const themes: Theme[] = ["void", "light", "focus"];

export function EnvironmentToggle() {
  const [theme, setTheme] = useState<Theme>("void");

function handleToggleTheme() {
  const currentIndex = themes.indexOf(theme);
  const nextTheme = themes[(currentIndex + 1) % themes.length];

  setTheme(nextTheme);

  document.documentElement.dataset.theme = nextTheme;

window.history.replaceState(null, "", window.location.pathname);

window.dispatchEvent(
  new CustomEvent("rawlab-theme-change", {
    detail: nextTheme,
  }),
);

window.requestAnimationFrame(() => {
  document.getElementById("hero")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
}

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <button
      onClick={handleToggleTheme}
      className="
        rounded-full
        border
        px-4
        py-2
        text-xs
        uppercase
        tracking-[0.25em]
        transition-all
        duration-500
        hover:scale-105
      "
      style={{
        borderColor: "var(--border)",
        color: "var(--foreground)",
        background: "var(--card)",
      }}
    >
      {theme.toUpperCase()}
    </button>
  );
}