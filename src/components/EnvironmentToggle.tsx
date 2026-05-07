"use client";

import { useState } from "react";

type Theme = "void" | "light";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "void";

  const savedTheme = window.localStorage.getItem("rawlab-theme");

  return savedTheme === "light" ? "light" : "void";
}

export function EnvironmentToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  function handleToggleTheme() {
    const nextTheme = theme === "void" ? "light" : "void";

    setTheme(nextTheme);

    document.documentElement.dataset.theme =
      nextTheme === "light" ? "light" : "";

    window.localStorage.setItem("rawlab-theme", nextTheme);
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