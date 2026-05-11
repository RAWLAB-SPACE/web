"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import type { InstagramFragment, InstagramProfile } from "@/lib/instagram";
import { useLanguage } from "@/context/LanguageContext";

type InstagramSignalSectionProps = {
  profile: InstagramProfile | null;
  fragments: InstagramFragment[];
  stories: InstagramFragment[];
};

type ModalStar = {
  id: number;
  width: string;
  height: string;
  top: string;
  left: string;
  animationDuration: string;
  animationDelay: string;
  driftX: string;
  driftY: string;
};

function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const modalStars: ModalStar[] = Array.from({ length: 70 }, (_, index) => {
  const seed = index + 1;

  return {
    id: index,
    width: `${pseudoRandom(seed * 1.2) * 2 + 1}px`,
    height: `${pseudoRandom(seed * 1.7) * 2 + 1}px`,
    top: `${pseudoRandom(seed * 2.3) * 100}%`,
    left: `${pseudoRandom(seed * 3.1) * 100}%`,
    animationDuration: `${pseudoRandom(seed * 4.4) * 6 + 4}s`,
    animationDelay: `${pseudoRandom(seed * 5.5) * 5}s`,
    driftX: `${pseudoRandom(seed * 6.6) * 20 - 10}px`,
    driftY: `${pseudoRandom(seed * 7.7) * 20 - 10}px`,
  };
});

function formatNumber(value?: number) {
  if (typeof value !== "number") return "—";

  return new Intl.NumberFormat("en", {
    notation: value >= 1000 ? "compact" : "standard",
    maximumFractionDigits: 1,
  }).format(value);
}

function formatDate(date?: string) {
  if (!date) return "—";

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(date));
}

export function InstagramSignalSection({
  profile,
  fragments,
  stories,
}: InstagramSignalSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeFragment, setActiveFragment] =
    useState<InstagramFragment | null>(null);

  const [activeChildImage, setActiveChildImage] = useState<string | null>(null);

  const { t } = useLanguage();

  const activeItem = fragments[activeIndex] ?? fragments[0];

  const visibleStack = useMemo(() => {
    if (!fragments.length) return [];

    return Array.from(
      { length: Math.min(5, fragments.length) },
      (_, offset) => {
        const index = (activeIndex + offset) % fragments.length;

        return {
          item: fragments[index],
          index,
        };
      },
    );
  }, [activeIndex, fragments]);

  useEffect(() => {
    if (!fragments.length || activeFragment) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) =>
        current === fragments.length - 1 ? 0 : current + 1,
      );
    }, 4200);

    return () => window.clearInterval(interval);
  }, [fragments.length, activeFragment]);

  if (!activeItem) return null;

  return (
    <section id="instagram" className="relative overflow-hidden px-6 py-32">
      <div className="absolute right-[-12rem] top-32 h-[34rem] w-[34rem] rounded-full bg-fuchsia-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-violet-300">
              {t.instagram.eyebrow}
            </p>

            <h2 className="mt-6 text-4xl font-black tracking-tight md:text-7xl">
              {t.instagram.title}
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-400">
            {t.instagram.description}
          </p>
        </div>

        {stories.length > 0 && (
          <div className="mb-10 overflow-x-auto pt-6 pl-5 pb-0">
            <div className="flex min-w-max items-center gap-4">
              {stories.map((story, index) => (
                <motion.button
                  key={story.id}
                  type="button"
                  onClick={() => setActiveFragment(story)}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="group flex flex-col items-center gap-3"
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 blur-md opacity-70 transition group-hover:opacity-100" />

                    <div className="relative h-20 w-20 overflow-hidden rounded-full border border-white/10 p-[3px] backdrop-blur-xl">
                      <div className="relative h-full w-full overflow-hidden rounded-full">
                        <Image
                          src={story.image}
                          alt={story.title}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-violet-300">
                      Story
                    </p>

                    <p className="max-w-[5rem] truncate text-xs text-slate-400">
                      @{profile?.username}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-violet-300">
                Live profile
              </p>

              <h3 className="mt-5 text-4xl font-black tracking-tight">
                @{profile?.username ?? "chilean.innerfire"}
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Personal Instagram signal: movement, mountain, memory,
                discipline and atmosphere.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                  Followers
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  {formatNumber(profile?.followers_count)}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                  Following
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  {formatNumber(profile?.follows_count)}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                  Media
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  {formatNumber(profile?.media_count)}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                  Account
                </p>
                <p className="mt-2 text-sm font-semibold">
                  {profile?.account_type ?? "Creator"}
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.14),transparent_55%)]" />
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:56px_56px]" />

            <div className="relative z-10 grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
              <div className="relative flex min-h-[34rem] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-black/10">
                {visibleStack.map(({ item, index }, stackIndex) => {
                  const isActive = stackIndex === 0;

                  return (
                    <motion.button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        if (isActive) {
                          setActiveFragment(item);
                          setActiveChildImage(null);
                        } else {
                          setActiveIndex(index);
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
              group absolute aspect-[9/13] w-[min(72%,18rem)]
              overflow-hidden rounded-[2rem]
              border-0 bg-transparent text-left
              shadow-2xl shadow-black/40
              transform-gpu
              ${isActive ? "z-40" : "z-20"}
            `}
                    >
                      <div className="absolute -inset-[6px] overflow-hidden rounded-[2.25rem]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="320px"
                          className={`
  object-cover transition duration-[1800ms]
  ${
    item.type === "reel"
      ? "scale-[1.12] group-hover:scale-[1.18]"
      : "scale-[1.08] group-hover:scale-[1.12]"
  }
`}
                        />
                      </div>

                      <div className="absolute -inset-[6px] rounded-[2.25rem] bg-gradient-to-b from-black/5 via-black/10 to-black/80" />

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
                          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
                            <div className="ml-[2px] h-0 w-0 border-b-[7px] border-l-[11px] border-t-[7px] border-b-transparent border-l-white border-t-transparent" />
                          </div>
                        )}
                      </div>

                      <div className="absolute bottom-0 left-0 p-6">
                        <p className="text-[10px] uppercase tracking-[0.35em] text-violet-300">
                          {item.source === "instagram"
                            ? t.instagram.live
                            : t.instagram.signal}
                        </p>

                        <h3 className="mt-3 line-clamp-3 text-2xl font-semibold text-white">
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
                          <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-slate-300">
                            {t.instagram.open}
                          </p>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <div className="flex min-w-0 flex-col justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-violet-300">
                    Signal deck
                  </p>

                  <h3 className="mt-5 line-clamp-3 text-3xl font-black tracking-tight md:text-4xl">
                    {activeItem.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                    A personal social layer connected to RAWLAB_: climbing,
                    process, body, image and memory.
                  </p>
                </div>

                <div className="mt-8 max-h-[22rem] overflow-y-auto pr-2">
                  <div className="flex flex-col gap-3">
                    {fragments.map((item, index) => {
                      const active = activeIndex === index;

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setActiveIndex(index)}
                          className={`flex items-center gap-3 rounded-2xl border p-2 text-left transition ${
                            active
                              ? "border-violet-300/50 bg-white/[0.08]"
                              : "border-white/10 bg-white/[0.02] opacity-70 hover:opacity-100"
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
        </div>
      </div>

      {activeFragment && (
        <motion.div
          onClick={() => setActiveFragment(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden px-6 py-10 backdrop-blur-xl"
          style={{
            background: "color-mix(in srgb, var(--background) 84%, black)",
          }}
        >
          <div className="absolute inset-0">
            {modalStars.map((star) => (
              <span
                key={star.id}
                className="raw-star absolute rounded-full"
                style={
                  {
                    width: star.width,
                    height: star.height,
                    top: star.top,
                    left: star.left,
                    animationDuration: star.animationDuration,
                    animationDelay: star.animationDelay,
                    "--drift-x": star.driftX,
                    "--drift-y": star.driftY,
                  } as CSSProperties
                }
              />
            ))}
          </div>

          <button
            onClick={() => setActiveFragment(null)}
            className="absolute right-6 top-6 z-20 rounded-full border border-white/10 bg-white/10 p-3 transition hover:bg-white/20"
            style={{ color: "var(--foreground)" }}
            aria-label="Close fragment viewer"
          >
            <X className="h-5 w-5" />
          </button>

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
            className="relative z-10 grid w-full max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/50 backdrop-blur-2xl md:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="relative min-h-[70vh]">
              <Image
                src={activeChildImage || activeFragment.image}
                alt={activeFragment.title}
                fill
                sizes="60vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {activeFragment.children &&
                activeFragment.children.length > 0 && (
                  <div className="absolute bottom-5 left-5 right-5 z-10 flex gap-3 overflow-x-auto pb-1">
                    {activeFragment.children.map((child, index) => {
                      const childImage =
                        child.media_type === "VIDEO"
                          ? child.thumbnail_url || child.media_url
                          : child.media_url || child.thumbnail_url;

                      if (!childImage) return null;

                      return (
                        <button
                          key={`${childImage}-${index}`}
                          type="button"
                          onClick={() => setActiveChildImage(childImage)}
                          className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-white/20 bg-white/10"
                        >
                          <Image
                            src={childImage}
                            alt={`${activeFragment.title} ${index + 1}`}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </button>
                      );
                    })}
                  </div>
                )}
            </div>

            <div
              className="flex flex-col justify-between p-8 md:p-10"
              style={{ color: "var(--foreground)" }}
            >
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-violet-300">
                  {activeFragment.source === "instagram"
                    ? t.instagram.liveInstagram
                    : t.instagram.curatedSignal}
                </p>

                <h3 className="mt-8 text-4xl font-black tracking-tight md:text-6xl">
                  {activeFragment.title}
                </h3>

                <p
                  className="mt-8 text-sm leading-7"
                  style={{ color: "var(--muted)" }}
                >
                  {t.instagram.fragmentDescription}
                </p>
                <p
                  className="mt-8 text-sm leading-7"
                  style={{ color: "var(--muted)" }}
                >
                  {t.instagram.fragmentDescription}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                      Likes
                    </p>
                    <p className="mt-2 text-2xl font-semibold">
                      {formatNumber(activeFragment.likeCount)}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                      Comments
                    </p>
                    <p className="mt-2 text-2xl font-semibold">
                      {formatNumber(activeFragment.commentsCount)}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                      Type
                    </p>
                    <p className="mt-2 text-sm font-semibold uppercase">
                      {activeFragment.type}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                      Date
                    </p>
                    <p className="mt-2 text-sm font-semibold">
                      {formatDate(activeFragment.timestamp)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em]">
                  @{activeFragment.type}
                </span>

                <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em]">
                  {activeFragment.source || "mock"}
                </span>

                <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em]">
                  {activeFragment.likeCount ?? "—"} likes
                </span>

                <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em]">
                  {activeFragment.commentsCount ?? "—"} comments
                </span>

                {activeFragment.permalink && (
                  <a
                    href={activeFragment.permalink}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] transition hover:border-violet-300/50 hover:text-violet-300"
                  >
                    Instagram
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>

              {activeFragment.comments &&
                activeFragment.comments.length > 0 && (
                  <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-violet-300">
                      Recent comments
                    </p>

                    <div className="mt-5 flex max-h-40 flex-col gap-4 overflow-y-auto pr-2">
                      {activeFragment.comments
                        .slice(0, 5)
                        .map((comment, index) => (
                          <div key={`${comment.timestamp}-${index}`}>
                            <p className="text-xs font-semibold">
                              @{comment.username || "instagram_user"}
                            </p>

                            <p
                              className="mt-1 text-sm leading-6"
                              style={{ color: "var(--muted)" }}
                            >
                              {comment.text}
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
