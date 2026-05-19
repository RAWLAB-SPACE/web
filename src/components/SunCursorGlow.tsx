"use client";

import { useEffect } from "react";

export function SunCursorGlow() {
  useEffect(() => {
    const glow = document.getElementById("sun-cursor-glow");

    if (!glow) return;

    const glowElement = glow as HTMLElement;

    function move(event: MouseEvent) {
      glowElement.style.left = `${event.clientX}px`;
      glowElement.style.top = `${event.clientY}px`;
    }

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return null;
}