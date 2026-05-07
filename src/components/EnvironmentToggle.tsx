"use client";

import { useState } from "react";

type Theme = "void" | "light";

export function EnvironmentToggle() {
  const [theme, setTheme] = useState<Theme>("void");

  function handleToggleTheme() {
    const nextTheme = theme === "void" ? "light" : "void";

    setTheme(nextTheme);

    document.documentElement.dataset.theme =
      nextTheme === "light" ? "light" : "";
  }

  return (
    <button
      onClick={handleToggleTheme}
      className="rounded-full border px-4 py-2 text-xs uppercase tracking-[0.25em] transition"
      style={{
        borderColor: "var(--border)",
        color: "var(--foreground)",
        background: "var(--card)",
      }}
    >
      {theme === "void" ? "Light" : "Void"}
    </button>
  );
}