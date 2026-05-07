"use client";

import { motion } from "framer-motion";
import { collageItems } from "@/data/collageItems";

const sizeClasses = {
  large: "h-64 md:row-span-2 md:h-full",
  medium: "h-48",
  small: "h-36",
};

const toneClasses = {
  violet: "from-violet-500/20 via-white/[0.05] to-white/[0.02]",
  blue: "from-sky-500/20 via-white/[0.05] to-white/[0.02]",
  slate: "from-slate-400/15 via-white/[0.05] to-white/[0.02]",
};

export function InteractiveCollage() {
  return (
    <div className="relative grid auto-rows-[10rem] grid-cols-2 gap-4 md:grid-cols-3">
      {collageItems.map((item, index) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 24, rotate: index % 2 ? 1.5 : -1.5 }}
          animate={{ opacity: 1, y: 0, rotate: index % 2 ? 1 : -1 }}
          transition={{ duration: 0.7, delay: index * 0.08 }}
          whileHover={{ y: -8, scale: 1.03, rotate: 0 }}
          className={`
            group relative overflow-hidden rounded-[2rem]
            border border-white/10
            bg-gradient-to-br ${toneClasses[item.tone]}
            p-5
            shadow-2xl shadow-black/20
            transition
            hover:border-violet-300/50
            ${sizeClasses[item.size]}
          `}
        >
          <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.7))]" />
          <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-white/10 blur-2xl transition group-hover:bg-violet-400/20" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <span className="text-[10px] uppercase tracking-[0.35em] text-violet-200">
              {item.type}
            </span>

            <div>
              <h3 className="max-w-[10rem] text-xl font-semibold leading-tight text-slate-100">
                {item.title}
              </h3>

              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-400 opacity-0 transition group-hover:opacity-100">
                Open fragment
              </p>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}