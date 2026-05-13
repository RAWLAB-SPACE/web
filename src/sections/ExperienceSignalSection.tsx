"use client";

import { motion } from "framer-motion";

import {
  experienceSignals,
  type ExperienceSignal,
} from "@/data/experienceSignals";

const accentStyles: Record<
  ExperienceSignal["accent"],
  {
    dot: string;
    text: string;
    line: string;
  }
> = {
  violet: {
    dot: "bg-violet-300 shadow-[0_0_24px_rgba(196,181,253,0.45)]",
    text: "text-violet-300",
    line: "border-violet-300/20",
  },
  cyan: {
    dot: "bg-cyan-300 shadow-[0_0_24px_rgba(103,232,249,0.35)]",
    text: "text-cyan-300",
    line: "border-cyan-300/20",
  },
  fuchsia: {
    dot: "bg-fuchsia-300 shadow-[0_0_24px_rgba(217,70,239,0.4)]",
    text: "text-fuchsia-300",
    line: "border-fuchsia-300/20",
  },
};

export function ExperienceSignalSection() {
  return (
    <section
      id="experience-signal"
      className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-12 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[50px] md:blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-violet-300">
            EXPERIENCE SIGNAL
          </p>

          <h2 className="mt-5 max-w-xl text-3xl font-black tracking-tight md:text-5xl">
            Built across banking, mobile systems and creative interfaces.
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400">
            A compact signal of the products, systems and interface decisions
            behind my frontend work.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-3 top-4 h-[calc(100%-2rem)] border-l border-white/10" />

          <div className="flex flex-col gap-5">
            {experienceSignals.map((signal, index) => {
              const accent = accentStyles[signal.accent];

              return (
                <motion.article
                  key={signal.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="relative pl-10"
                >
                  <span
                    className={`absolute left-0 top-2 h-6 w-6 rounded-full border-4 border-[var(--background)] ${accent.dot}`}
                  />

                  <div
                    className={`rounded-[1.5rem] border bg-white/[0.025] p-5 backdrop-blur-sm transition hover:bg-white/[0.04] ${accent.line}`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p
                          className={`text-[10px] uppercase tracking-[0.28em] ${accent.text}`}
                        >
                          {signal.company}
                        </p>

                        <h3 className="mt-2 break-words text-xl font-semibold md:text-2xl">
                          {signal.role}
                        </h3>
                      </div>

                      <div className="shrink-0 text-left sm:text-right">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                          {signal.period}
                        </p>

                        {signal.location && (
                          <p className="mt-1 text-xs text-slate-500">
                            {signal.location}
                          </p>
                        )}
                      </div>
                    </div>

                    <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                      {signal.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {signal.stack.slice(0, 5).map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}