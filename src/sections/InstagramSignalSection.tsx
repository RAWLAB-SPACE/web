"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import type { InstagramFragment } from "@/lib/instagram";
import { useLanguage } from "@/context/LanguageContext";

type InstagramSignalSectionProps = {
  fragments: InstagramFragment[];
};

export function InstagramSignalSection({
  fragments,
}: InstagramSignalSectionProps) {
  const [activeFragment, setActiveFragment] =
    useState<InstagramFragment | null>(null);

  const { t } = useLanguage();

  return (
    <section id="instagram" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-violet-300">
            {t.instagram.eyebrow}
          </p>

          <h2 className="mt-6 text-4xl font-black tracking-tight md:text-7xl">
            {t.instagram.title}
          </h2>

          <p className="mt-6 text-sm leading-7 text-slate-400">
            {t.instagram.description}
          </p>
        </div>

        <div className="relative mx-auto h-[42rem] max-w-6xl">
          {fragments.map((item, index) => {
            const positions = [
              "left-[4%] top-[8%] z-30",
              "left-[28%] top-[0%] z-20",
              "left-[52%] top-[12%] z-40",
              "left-[72%] top-[4%] z-10",
            ];

            const heights = [
              "h-[34rem]",
              "h-[28rem]",
              "h-[32rem]",
              "h-[26rem]",
            ];

            return (
              <motion.button
                key={item.image}
                type="button"
                onClick={() => setActiveFragment(item)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{
                  y: [0, -14, 0],
                  rotate: [-2, 1, -2],
                }}
                transition={{
                  opacity: {
                    duration: 0.7,
                    delay: index * 0.1,
                  },
                  y: {
                    duration: 5 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4,
                  },
                  rotate: {
                    duration: 8 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  },
                }}
                viewport={{ once: true }}
                className={`
                  group absolute w-[18rem]
                  overflow-hidden rounded-[2rem]
                  border-0 bg-transparent
                  text-left
                  shadow-2xl shadow-black/30
                  transform-gpu will-change-transform
                  hover:z-50
                  ${positions[index % positions.length]}
                  ${heights[index % heights.length]}
                `}
              >
                <div className="absolute -inset-[6px] overflow-hidden rounded-[2.25rem]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="18rem"
                    className="object-cover scale-[1.12]"
                  />
                </div>

                <div className="absolute -inset-[6px] rounded-[2.25rem] bg-gradient-to-b from-black/5 via-black/10 to-black/75" />

                <div className="absolute left-0 top-0 p-4">
                  <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-violet-300 backdrop-blur-md">
                    @{item.type}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-violet-300">
                    {item.source === "instagram"
                      ? t.instagram.live
                      : t.instagram.signal}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-slate-300 opacity-0 transition group-hover:opacity-100">
                    {t.instagram.open}
                  </p>
                </div>

                <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,0.8)]" />
              </motion.button>
            );
          })}
        </div>
      </div>

      {activeFragment && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-6 backdrop-blur-xl">
          <button
            onClick={() => setActiveFragment(null)}
            className="absolute right-6 top-6 rounded-full border border-white/10 bg-white/10 p-3 text-white transition hover:bg-white/20"
            aria-label="Close fragment viewer"
          >
            <X className="h-5 w-5" />
          </button>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="grid w-full max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/50 md:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="relative min-h-[70vh]">
              <Image
                src={activeFragment.image}
                alt={activeFragment.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div className="flex flex-col justify-between p-8 md:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-violet-300">
                  {activeFragment.source === "instagram"
                    ? t.instagram.liveInstagram
                    : t.instagram.curatedSignal}
                </p>

                <h3 className="mt-8 text-4xl font-black tracking-tight text-white md:text-6xl">
                  {activeFragment.title}
                </h3>

                <p className="mt-8 text-sm leading-7 text-slate-300">
                  {t.instagram.fragmentDescription}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-300">
                  @{activeFragment.type}
                </span>

                <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-300">
                  {activeFragment.source || "mock"}
                </span>

                {activeFragment.permalink && (
                  <a
                    href={activeFragment.permalink}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-300 transition hover:border-violet-300/50 hover:text-violet-300"
                  >
                    Instagram
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}