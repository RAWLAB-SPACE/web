"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[90] h-px origin-left"
      style={{
        scaleX: scrollYProgress,
        width: "100%",
        background:
          "linear-gradient(90deg, transparent, var(--accent), transparent)",
      }}
    />
  );
}