"use client";

import { motion } from "framer-motion";
import { rawlogEntries } from "@/data/rawlogEntries";

export function RawlogSection() {
  return (
    <section id="rawlog" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
          <p className="text-sm uppercase tracking-[0.4em] text-violet-300">
            RAWLOG_
          </p>

          <div>
            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              Notes, fragments and internal systems.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400">
              A log of process: movement, code, design, identity and what
              happens between building and becoming.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10">
          {rawlogEntries.map((entry, index) => (
            <motion.article
              key={entry.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              viewport={{ once: true }}
              className="group grid gap-6 border-b border-white/10 py-8 transition hover:bg-white/[0.02] md:grid-cols-[0.4fr_1.6fr]"
            >
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-violet-300">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{entry.type}</span>
                <span className="text-slate-500">{entry.date}</span>
              </div>

              <div>
                <h3 className="text-2xl font-semibold md:text-3xl">
                  {entry.title}
                </h3>

                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-400">
                  {entry.fragment}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}