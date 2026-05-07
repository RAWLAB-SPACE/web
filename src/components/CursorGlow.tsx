"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    damping: 40,
    stiffness: 120,
  });

  const smoothY = useSpring(mouseY, {
    damping: 40,
    stiffness: 120,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="
        pointer-events-none
        fixed
        z-[1]
        h-[400px]
        w-[400px]
        rounded-full
        blur-[100px]
      "
      style={{
        x: smoothX,
        y: smoothY,
        background: "var(--glow-primary)",
      }}
    />
  );
}