"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function BootLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 2600);

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
          {/* glow */}
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.22),transparent_60%)]
            "
          />

          {/* grid */}
          <div
            className="
              absolute inset-0 opacity-[0.08]
              bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
              bg-[size:80px_80px]
            "
          />

          {/* scanline */}
          <motion.div
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute inset-0
              bg-gradient-to-b
              from-transparent
              via-white/[0.04]
              to-transparent
              h-[30%]
            "
          />

          <div className="relative z-10 text-center">
            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="
                text-5xl md:text-7xl
                font-black tracking-[0.3em]
                text-white
              "
            >
              RAWLAB_
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
                duration: 1,
              }}
              className="
                mt-6
                text-xs uppercase tracking-[0.45em]
                text-violet-300/70
              "
            >
              signal booting...
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 1,
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="
                mx-auto mt-8 h-[1px] w-40
                origin-left
                bg-gradient-to-r
                from-violet-400
                to-cyan-400
              "
            />

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
                delay: 1.4,
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