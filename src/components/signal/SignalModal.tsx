"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import type { InstagramFragment } from "@/lib/instagram";

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

type SignalModalProps = {
  activeFragment: InstagramFragment;
  activeChildImage: string | null;
  modalStars: ModalStar[];
  fragmentDescription: string;
  liveInstagramLabel: string;
  curatedSignalLabel: string;
  onClose: () => void;
  onSelectChildImage: (image: string) => void;
};

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

export function SignalModal({
  activeFragment,
  activeChildImage,
  modalStars,
  fragmentDescription,
  liveInstagramLabel,
  curatedSignalLabel,
  onClose,
  onSelectChildImage,
}: SignalModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
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
        onClick={onClose}
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
          {activeFragment.type === "reel" &&
          activeFragment.videoUrl &&
          !activeChildImage ? (
            <video
              src={activeFragment.videoUrl}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <Image
              src={activeChildImage || activeFragment.image}
              alt={activeFragment.title}
              fill
              sizes="60vw"
              className="object-cover"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          {activeFragment.children && activeFragment.children.length > 0 && (
            <div className="absolute bottom-5 left-5 right-5 z-10 flex gap-3 overflow-x-auto pb-1">
              {activeFragment.children
                .map((child) =>
                  child.media_type === "VIDEO"
                    ? child.thumbnail_url || child.media_url
                    : child.media_url || child.thumbnail_url,
                )
                .filter(Boolean)
                .map((childImage, index) => {
                  if (!childImage) return null;

                  const active =
                    childImage === (activeChildImage || activeFragment.image);

                  return (
                    <button
                      key={`${childImage}-${index}`}
                      type="button"
                      onClick={() => onSelectChildImage(childImage)}
                      className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border bg-white/10 transition ${
                        active
                          ? "border-violet-300"
                          : "border-white/20 opacity-70 hover:opacity-100"
                      }`}
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
                ? liveInstagramLabel
                : curatedSignalLabel}
            </p>

            <h3 className="mt-8 text-4xl font-black tracking-tight md:text-6xl">
              {activeFragment.title}
            </h3>

            <p
              className="mt-8 text-sm leading-7"
              style={{ color: "var(--muted)" }}
            >
              {fragmentDescription}
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

            {activeFragment.comments && activeFragment.comments.length > 0 && (
              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-violet-300">
                  Recent comments
                </p>

                <div className="mt-5 flex max-h-40 flex-col gap-4 overflow-y-auto pr-2">
                  {activeFragment.comments.slice(0, 5).map((comment, index) => (
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

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em]">
              @{activeFragment.type}
            </span>

            <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em]">
              {activeFragment.source || "mock"}
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
        </div>
      </motion.div>
    </motion.div>
  );
}
