"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { InstagramFragment } from "@/lib/instagram";

type InstagramSignalSectionProps = {
  fragments: InstagramFragment[];
};

export function InstagramSignalSection({
  fragments,
}: InstagramSignalSectionProps) {
  return (
    <section id="instagram" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-violet-300">
            Instagram signal
          </p>

          <h2 className="mt-6 text-4xl font-black tracking-tight md:text-7xl">
            Social fragments reinterpreted as atmosphere.
          </h2>

          <p className="mt-6 text-sm leading-7 text-slate-400">
            Not a traditional feed. More like a living visual wall connected to
            movement, photography, climbing and process.
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
              <motion.article
                key={item.image}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{
                  y: [0, -14, 0],
                  rotate: [-2, 1, -2],
                }}
                transition={{
                  opacity: { duration: 0.7, delay: index * 0.1 },
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
                    {item.source === "instagram" ? "LIVE" : "SIGNAL"}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,0.8)]" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}