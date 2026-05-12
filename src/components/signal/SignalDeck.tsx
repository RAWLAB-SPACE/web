"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { InstagramFragment } from "@/lib/instagram";

type SignalDeckProps = {
  fragments: InstagramFragment[];
  activeIndex: number;
  activeItem: InstagramFragment;
  visibleStack: {
    item: InstagramFragment;
    index: number;
  }[];
  liveLabel: string;
  signalLabel: string;
  openLabel: string;
  onSelectIndex: (index: number) => void;
  onOpenFragment: (fragment: InstagramFragment) => void;
  onPauseChange?: (paused: boolean) => void;
};

export function SignalDeck({
  fragments,
  activeIndex,
  activeItem,
  visibleStack,
  liveLabel,
  signalLabel,
  openLabel,
  onSelectIndex,
  onOpenFragment,
  onPauseChange,
}: SignalDeckProps) {
  return (
    <div
      onMouseEnter={() => onPauseChange?.(true)}
      onMouseLeave={() => onPauseChange?.(false)}
      className="relative w-full max-w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl sm:rounded-[2.5rem] sm:p-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.14),transparent_55%)]" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="relative z-10 flex flex-col gap-6 xl:grid xl:grid-cols-[0.9fr_1.1fr]">
        <div className="relative flex min-h-[26rem] sm:min-h-[30rem] lg:min-h-[34rem] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-black/10">
          {visibleStack.map(({ item, index }, stackIndex) => {
            const isActive = stackIndex === 0;

            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => {
                  if (isActive) {
                    onOpenFragment(item);
                  } else {
                    onSelectIndex(index);
                  }
                }}
                animate={{
                  x: stackIndex * 14,
                  y: stackIndex * 12,
                  rotate: stackIndex * 2.5 - 4,
                  scale: isActive ? 1 : 0.9 - stackIndex * 0.04,
                  opacity: isActive ? 1 : 0.55 - stackIndex * 0.07,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                }}
                className={`
                  group absolute aspect-[9/13]
                  w-[min(82%,15rem)]
                  sm:w-[min(74%,17rem)]
                  lg:w-[min(72%,18rem)]
                  overflow-hidden rounded-[2rem]
                  border-0 bg-transparent text-left
                  shadow-2xl shadow-black/40
                  transform-gpu
                  ${isActive ? "z-40" : "z-20"}
                `}
              >
                <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-black">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="320px"
                    className="object-cover scale-[1.1]"
                  />
                </div>

                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-black/5 via-black/10 to-black/80" />

                <div className="absolute left-0 top-0 z-20 flex w-full items-start justify-between p-4">
                  <span
                    className={`
                      rounded-full border px-3 py-1 text-[10px]
                      uppercase tracking-[0.3em] backdrop-blur-md
                      ${
                        item.type === "reel"
                          ? "border-fuchsia-400/40 bg-fuchsia-500/20 text-fuchsia-200 shadow-lg shadow-fuchsia-500/20"
                          : "border-white/10 bg-black/30 text-violet-300"
                      }
                    `}
                  >
                    {item.type === "reel"
                      ? "REEL"
                      : item.children && item.children.length > 0
                        ? `CAROUSEL · ${item.children.length + 1}`
                        : `@${item.type}`}
                  </span>

                  {item.type === "reel" && (
                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-md"
                    >
                      <div className="ml-[2px] h-0 w-0 border-b-[7px] border-l-[11px] border-t-[7px] border-b-transparent border-l-white border-t-transparent" />
                    </motion.div>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-violet-300">
                    {item.source === "instagram" ? liveLabel : signalLabel}
                  </p>

                  <h3 className="mt-3 line-clamp-3 text-xl sm:text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  {item.children && item.children.length > 0 && (
                    <div className="mt-4 flex gap-1">
                      {[
                        item.image,
                        ...item.children.map((child) => child.media_url),
                      ]
                        .filter(Boolean)
                        .slice(0, 6)
                        .map((_, dotIndex) => (
                          <span
                            key={dotIndex}
                            className="h-1.5 w-1.5 rounded-full bg-white/50"
                          />
                        ))}
                    </div>
                  )}

                  {isActive && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-slate-300">
                        {openLabel}
                      </span>

                      <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
                        · {item.likeCount ?? "—"} likes
                      </span>

                      <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
                        · {item.commentsCount ?? "—"} comments
                      </span>
                    </div>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        <div className="flex min-w-0 flex-col justify-between overflow-hidden">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-violet-300">
              Signal deck
            </p>

            <h3 className="mt-4 break-words text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
              {activeItem.title}
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
              A personal social layer connected to RAWLAB_: climbing, process,
              body, image and memory.
            </p>
          </div>

          <div className="mt-6 max-h-[18rem] sm:max-h-[22rem] overflow-y-auto pr-1 sm:pr-2">
            <div className="flex flex-col gap-3">
              {fragments.map((item, index) => {
                const active = activeIndex === index;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onSelectIndex(index)}
                    className={`flex w-full min-w-0 items-center gap-3 rounded-2xl border p-2 text-left backdrop-blur-md transition ${
                      active
                        ? "border-violet-300/30 bg-white/[0.06]"
                        : "border-white/[0.1] bg-white/[0.015] opacity-70 hover:opacity-100 hover:border-violet-300/20"
                    }`}
                  >
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-violet-300">
                        {String(index + 1).padStart(2, "0")} · {item.type}
                      </p>

                      <p className="truncate text-xs text-slate-400">
                        {item.title}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}