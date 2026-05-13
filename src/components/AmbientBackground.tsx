"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{
  duration: 26,
  repeat: Infinity,
  ease: "linear",
}}
        className="absolute left-[10%] top-[15%] h-[28rem] w-[28rem] rounded-full blur-[50px] md:blur-[120px]"
        style={{ background: "var(--glow-primary)" }}
      />

      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{
  duration: 24,
  repeat: Infinity,
  ease: "linear",
}}
        className="absolute bottom-[10%] right-[5%] h-[24rem] w-[24rem] rounded-full blur-[50px] md:blur-[120px]"
        style={{ background: "var(--glow-secondary)" }}
      />

      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}