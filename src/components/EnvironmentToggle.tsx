"use client";

import { useEffect, useState } from "react";

export function EnvironmentToggle() {
  const [theme, setTheme] = useState<"void" | "light">("void");

  useEffect(() => {
    document.documentElement.dataset.theme = theme === "light" ? "light" : "";
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "void" ? "light" : "void")}
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