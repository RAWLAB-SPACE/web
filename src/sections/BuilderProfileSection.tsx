"use client";

import { motion } from "framer-motion";
import {
  experienceSignals,
  type ExperienceSignal,
} from "@/data/experienceSignals";

const capabilities = [
  {
    title: "React Native",
    detail: "Mobile apps, navigation, APIs and production UI flows.",
    score: "92",
  },
  {
    title: "Next.js",
    detail: "SSR, routing, performance and modern web architecture.",
    score: "88",
  },
  {
    title: "TypeScript",
    detail: "Typed components, safer contracts and scalable frontend logic.",
    score: "90",
  },
  {
    title: "Design Systems",
    detail: "Tokens, reusable components and visual consistency.",
    score: "86",
  },
  {
    title: "Motion UI",
    detail: "Framer Motion, transitions and cinematic interactions.",
    score: "84",
  },
  {
    title: "Frontend Architecture",
    detail: "Modular structure and scalable interface systems.",
    score: "89",
  },
];

const accentStyles: Record<
  ExperienceSignal["accent"],
  {
    dot: string;
    text: string;
    border: string;
    bg: string;
  }
> = {
  violet: {
    dot: "bg-violet-300 shadow-[0_0_18px_rgba(196,181,253,0.55)]",
    text: "text-violet-300",
    border: "border-violet-300/20",
    bg: "bg-violet-300/10",
  },
  cyan: {
    dot: "bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.45)]",
    text: "text-cyan-300",
    border: "border-cyan-300/20",
    bg: "bg-cyan-300/10",
  },
  fuchsia: {
    dot: "bg-fuchsia-300 shadow-[0_0_18px_rgba(217,70,239,0.45)]",
    text: "text-fuchsia-300",
    border: "border-fuchsia-300/20",
    bg: "bg-fuchsia-300/10",
  },
};

export function BuilderProfileSection() {
  return (
    <section
      id="builder-profile"
      className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-10 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[80px]" />
        <div className="absolute right-0 bottom-0 h-[20rem] w-[20rem] translate-x-1/3 rounded-full bg-cyan-500/10 blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-violet-300">
              BUILDER PROFILE
            </p>

            <h2 className="mt-5 max-w-2xl text-3xl font-black tracking-tight md:text-5xl">
              Developer, designer and climber building interface systems.
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-sm leading-7 text-slate-400 md:text-base md:leading-8">
              I build frontend and mobile experiences where interface, motion
              and product thinking work as one system. My background connects
              banking-scale React Native products, design systems, UX decisions
              and a visual practice shaped by movement, climbing and discipline.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "React Native",
                "Next.js",
                "TypeScript",
                "Design Systems",
                "Motion",
                "UX",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl md:p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="text-[10px] uppercase tracking-[0.32em] text-violet-300">
                Experience
              </p>

              <p className="hidden text-[10px] uppercase tracking-[0.24em] text-slate-500 sm:block">
                product systems / mobile / creative engineering
              </p>
            </div>

            <div className="grid gap-3">
              {experienceSignals.map((signal, index) => {
                const accent = accentStyles[signal.accent];

                return (
                  <motion.article
                    key={signal.id}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className={`rounded-[1.4rem] border ${accent.border} ${accent.bg} p-4`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className={`h-2 w-2 rounded-full ${accent.dot}`} />

                          <p
                            className={`text-[10px] uppercase tracking-[0.25em] ${accent.text}`}
                          >
                            {signal.company}
                          </p>
                        </div>

                        <h3 className="mt-2 text-lg font-semibold md:text-xl">
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

                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-400">
                      {signal.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {signal.stack.slice(0, 4).map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-black/20 p-5 backdrop-blur-xl md:p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="text-[10px] uppercase tracking-[0.32em] text-violet-300">
                Capabilities
              </p>

              <p className="hidden text-[10px] uppercase tracking-[0.24em] text-slate-500 sm:block">
                RAWLAB_SCAN_01
              </p>
            </div>

            <div className="grid gap-3">
              {capabilities.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="rounded-[1.25rem] border border-white/10 bg-white/[0.025] p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-100">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {item.detail}
                      </p>
                    </div>

                    <span className="shrink-0 text-xs font-black text-violet-300">
                      {item.score}
                    </span>
                  </div>

                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.score}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.75,
                        delay: index * 0.04,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-violet-400 via-cyan-300 to-violet-300 shadow-[0_0_14px_rgba(196,181,253,0.45)]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 grid gap-3 text-[10px] uppercase tracking-[0.22em] text-slate-500 sm:grid-cols-3">
              <p>Frontend systems</p>
              <p>Mobile experience</p>
              <p>Visual engineering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}