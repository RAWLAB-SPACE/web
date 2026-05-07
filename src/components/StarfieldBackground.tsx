"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Star = {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
  opacity: number;
};

function generateStars(): Star[] {
  return Array.from({ length: 110 }, (_, index) => ({
    id: index,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() > 0.85 ? 2 : 1,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 5,
    driftX: Math.random() * 16 - 8,
    driftY: Math.random() * 16 - 8,
    opacity: Math.random() * 0.5 + 0.25,
  }));
}

export function StarfieldBackground() {
  const [stars] = useState(generateStars);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            background: "var(--star-color)",
            boxShadow: "0 0 14px var(--star-glow)",
          }}
          initial={{
            opacity: star.opacity,
            x: 0,
            y: 0,
            scale: 1,
          }}
          animate={{
            opacity: [star.opacity, star.opacity + 0.35, star.opacity],
            x: [0, star.driftX, 0],
            y: [0, star.driftY, 0],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="absolute left-[-20%] top-[20%] h-px w-[35rem] rotate-[-18deg]"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--star-glow), transparent)",
        }}
        animate={{
          x: ["0vw", "140vw"],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatDelay: 12,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}