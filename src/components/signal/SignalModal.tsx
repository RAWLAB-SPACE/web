"use client";

import { useEffect } from "react";
import type { CSSProperties } from "react";
import { createPortal } from "react-dom";
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
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto px-3 py-4 backdrop-blur-xl sm:px-4 md:items-center md:px-6 md:py-10"
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
        className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-white/10 p-3 transition hover:bg-white/20 md:right-6 md:top-6"
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
        className="relative z-10 flex w-full max-w-[100vw] flex-col overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/50 backdrop-blur-2xl max-h-[95vh] md:grid md:max-h-[92vh] md:max-w-6xl md:grid-cols-[1.1fr_0.9fr] md:rounded-[2.5rem]"
      >
        <div className="relative h-[42vh] min-h-[18rem] w-full md:min-h-[70vh]">
          {activeFragment.type === "reel" &&
          activeFragment.videoUrl &&
          !activeChildImage ? (
            <video
              key={activeFragment.id}
              src={activeFragment.videoUrl}
              autoPlay
              muted
              loop
              playsInline
              controls
              draggable={false}
              className="absolute inset-0 h-full w-full select-none object-cover"
            />
          ) : (
            <motion.div
              key={activeChildImage || activeFragment.image}
              initial={{ opacity: 0.4, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0"
            >
              <Image
                src={activeChildImage || activeFragment.image}
                alt={activeFragment.title}
                fill
                priority
                draggable={false}
                sizes="60vw"
                className="select-none object-cover"
              />
            </motion.div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          {activeFragment.children && activeFragment.children.length > 0 && (
            <div className="absolute bottom-4 left-4 right-4 z-10 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2">
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
                      className={`relative h-16 w-16 shrink-0 snap-start overflow-hidden rounded-2xl bg-black/20 ring-1 transition md:h-20 md:w-20 ${
                        active
                          ? "opacity-100 ring-violet-300/80"
                          : "opacity-70 ring-white/10 hover:opacity-100 hover:ring-violet-300/40"
                      }`}
                    >
                      <Image
                        src={childImage}
                        alt={`${activeFragment.title} ${index + 1}`}
                        fill
                        draggable={false}
                        sizes="80px"
                        className="select-none object-cover"
                      />
                    </button>
                  );
                })}
            </div>
          )}
        </div>

        <div
          className="flex min-w-0 flex-col justify-between overflow-y-auto p-4 sm:p-5 md:p-10"
          style={{ color: "var(--foreground)" }}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-violet-300">
              {activeFragment.source === "instagram"
                ? liveInstagramLabel
                : curatedSignalLabel}
            </p>

            <h3 className="mt-5 break-words text-[1.7rem] font-black tracking-tight sm:text-3xl md:mt-8 md:text-6xl">
              {activeFragment.title}
            </h3>

            <p
              className="mt-6 text-sm leading-7 md:mt-8"
              style={{ color: "var(--muted)" }}
            >
              {fragmentDescription}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:gap-3">
              {[
                ["Likes", formatNumber(activeFragment.likeCount)],
                ["Comments", formatNumber(activeFragment.commentsCount)],
                ["Type", activeFragment.type],
                ["Date", formatDate(activeFragment.timestamp)],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                    {label}
                  </p>

                  <p className="mt-2 text-sm font-semibold uppercase md:text-2xl md:normal-case">
                    {value}
                  </p>
                </div>
              ))}
            </div>
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
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] transition hover:border-violet-300/50 hover:text-violet-300"
              >
                Instagram
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  );
}