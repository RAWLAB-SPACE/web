"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { RawlabLogo } from "@/components/RawlabLogo";

const environments = [
  {
    name: "VOID",
    label: "archive universe",
    dot: "bg-violet-300",
    text: "text-violet-300",
    glow: "shadow-[0_0_18px_rgba(196,181,253,0.9)]",
  },
  {
    name: "LIGHT",
    label: "solar observatory",
    dot: "bg-orange-400",
    text: "text-orange-300",
    glow: "shadow-[0_0_18px_rgba(255,122,0,0.9)]",
  },
  {
    name: "FOCUS",
    label: "system core",
    dot: "bg-emerald-300",
    text: "text-emerald-300",
    glow: "shadow-[0_0_18px_rgba(0,255,156,0.9)]",
  },
];

export function BootLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 3400);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: "blur(12px)",
            transition: {
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="
            fixed inset-0 z-[9999]
            flex items-center justify-center
            overflow-hidden
            bg-black
          "
        >
          {/* =========================================================
              ATMOSPHERIC BACKGROUND
          ========================================================= */}

          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_30%_40%,rgba(139,92,246,0.24),transparent_38%),
              radial-gradient(circle_at_70%_35%,rgba(255,122,0,0.16),transparent_34%),
              radial-gradient(circle_at_50%_75%,rgba(0,255,156,0.14),transparent_38%)]
            "
          />

          {/* grid */}
          <div
            className="
              absolute inset-0 opacity-[0.08]
              bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),
              linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
              bg-[size:80px_80px]
            "
          />

          {/* scanline */}
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute inset-x-0 top-0
              h-[30%]
              bg-gradient-to-b
              from-transparent
              via-white/[0.04]
              to-transparent
            "
          />

          {/* ambient orbit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              delay: 0.35,
              duration: 1.1,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="
              absolute h-[22rem] w-[22rem]
              rounded-full border border-white/10
            "
          />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute h-[28rem] w-[28rem]
              rounded-full border border-white/[0.04]
            "
          />

          {/* =========================================================
              CONTENT
          ========================================================= */}

          <div className="relative z-10 text-center">
            {/* LOGO */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.92,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1.1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="
                flex justify-center
              "
            >
              <div className="scale-[0.65] md:scale-[0.9]">
                <RawlabLogo />
              </div>
            </motion.div>

            {/* boot text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.75,
                duration: 1,
              }}
              className="
                mt-2
                text-xs uppercase tracking-[0.45em]
                text-violet-300/70
              "
            >
              initializing environments...
            </motion.p>

            {/* =========================================================
                ENVIRONMENT CARDS
            ========================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.05,
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="
                mx-auto mt-8 grid max-w-2xl
                gap-3 px-6
                md:grid-cols-3
              "
            >
              {environments.map((environment, index) => (
                <motion.div
                  key={environment.name}
                  initial={{
                    opacity: 0,
                    y: 14,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    delay: 1.2 + index * 0.15,
                    duration: 0.6,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  className="
                    relative overflow-hidden
                    rounded-2xl border border-white/10
                    bg-white/[0.035]
                    px-5 py-4
                    backdrop-blur-xl
                  "
                >
                  {/* glow */}
                  <div
                    className={`
                      absolute inset-0 opacity-0 transition
                      group-hover:opacity-100
                    `}
                  />

                  <div className="relative z-10">
                    <div className="mb-3 flex items-center justify-center gap-2">
                      <motion.span
                        animate={{
                          scale: [1, 1.35, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          delay: index * 0.25,
                          ease: "easeInOut",
                        }}
                        className={`
                          h-2 w-2 rounded-full
                          ${environment.dot}
                          ${environment.glow}
                        `}
                      />

                      <span
                        className={`
                          font-mono text-[10px]
                          uppercase tracking-[0.3em]
                          ${environment.text}
                        `}
                      >
                        {environment.name}
                      </span>
                    </div>

                    <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/35">
                      {environment.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* =========================================================
                PROGRESS LINE
            ========================================================= */}

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 1.65,
                duration: 1.1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="
                mx-auto mt-8 h-[1px] w-56
                origin-left
                bg-gradient-to-r
                from-violet-400
                via-orange-300
                to-emerald-300
              "
            />

            {/* =========================================================
                FOOTER LABEL
            ========================================================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 2.05,
                duration: 0.8,
              }}
              className="
                mt-6 text-[10px]
                uppercase tracking-[0.35em]
                text-white/40
              "
            >
              movement • code • design
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}