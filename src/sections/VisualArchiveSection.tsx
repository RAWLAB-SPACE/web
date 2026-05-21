"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { collageItems } from "@/data/collageItems";
import { useLanguage } from "@/context/LanguageContext";

type CollageItem = (typeof collageItems)[number];

export function VisualArchiveSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState<CollageItem | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const activeItem = collageItems[activeIndex];
  const { t } = useLanguage();

  const isLight =
    typeof document !== "undefined" &&
    document.documentElement.dataset.theme === "light";

  const isFocus =
    typeof document !== "undefined" &&
    document.documentElement.dataset.theme === "focus";

  useEffect(() => {
    if (isPaused || selectedItem) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) =>
        current === collageItems.length - 1 ? 0 : current + 1,
      );
    }, 4500);

    return () => window.clearInterval(interval);
  }, [isPaused, selectedItem]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  function goToPrevious() {
    setActiveIndex((current) =>
      current === 0 ? collageItems.length - 1 : current - 1,
    );
  }

  function goToNext() {
    setActiveIndex((current) =>
      current === collageItems.length - 1 ? 0 : current + 1,
    );
  }

  return (
    <>
      <section id="visual-archive" className="px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.4em] text-violet-300">
              {t.visualArchive.eyebrow}
            </p>

            <h2 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
              {t.visualArchive.title}
            </h2>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              {t.visualArchive.description}
            </p>
          </div>

          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <button
              onClick={() => setSelectedItem(activeItem)}
              className="
                group relative h-[32rem]
                overflow-hidden rounded-[2rem]
                border border-white/10
                bg-white/[0.03]
                text-left
              "
            >
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                priority={activeIndex === 0}
                draggable={false}
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="
                  select-none object-cover
                  transition duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/80" />

              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-xs uppercase tracking-[0.35em] text-violet-300">
                  {activeItem.type}
                </p>

                <h3 className="mt-4 text-4xl font-semibold text-white">
                  {activeItem.title}
                </h3>

                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-slate-300">
                  {t.visualArchive.open}
                </p>
              </div>
            </button>

            <div
              className="
                flex flex-col justify-between
                rounded-[2rem] border border-white/10
                bg-white/[0.03] p-6
              "
            >
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-violet-300">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(collageItems.length).padStart(2, "0")}
                </p>

                <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-slate-500">
                  {isPaused
                    ? t.visualArchive.paused
                    : t.visualArchive.autoFlow}
                </p>

                <h3 className="mt-6 text-3xl font-semibold">
                  {activeItem.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {t.visualArchive.fragmentDescription}
                </p>
              </div>

              <div className="mt-10">
                <div className="mb-6 grid grid-cols-4 gap-3">
                  {collageItems.slice(0, 8).map((item, index) => (
                    <button
                      key={item.image}
                      onClick={() => setActiveIndex(index)}
                      className={`relative h-20 overflow-hidden rounded-2xl border transition ${
                        activeIndex === index
                          ? "border-violet-300"
                          : "border-white/10 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        draggable={false}
                        sizes="(max-width: 768px) 22vw, 80px"
                        className="select-none object-cover"
                      />
                    </button>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={goToPrevious}
                    className="
                      rounded-full border border-white/10
                      p-3 transition
                      hover:border-violet-300/50
                      hover:text-violet-300
                    "
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    onClick={goToNext}
                    className="
                      rounded-full border border-white/10
                      p-3 transition
                      hover:border-violet-300/50
                      hover:text-violet-300
                    "
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedItem &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            onClick={() => setSelectedItem(null)}
            className={`
              fixed inset-0 z-[9999]
              flex items-center justify-center
              px-4 py-6 md:px-8
              backdrop-blur-xl
              transition-all duration-500
              ${
                isLight
                  ? "bg-[rgba(255,240,220,0.38)]"
                  : isFocus
                    ? "bg-black/88"
                    : "bg-black/82"
              }
            `}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className={`
                absolute right-5 top-5 z-20
                rounded-full p-3
                transition-all duration-300
                hover:scale-105
                ${
                  isLight
                    ? `
                      border border-orange-200/50
                      bg-white/60
                      text-orange-600
                      hover:bg-white/80
                    `
                    : `
                      border border-white/10
                      bg-white/10
                      text-white
                      hover:bg-white/20
                    `
                }
              `}
              aria-label="Close image preview"
            >
              <X className="h-5 w-5" />
            </button>

            <div
              onClick={(event) => event.stopPropagation()}
              className={`
                relative h-[82vh] w-full max-w-6xl
                overflow-hidden rounded-[2rem]
                transition-all duration-500
                ${
                  isLight
                    ? `
                      border border-orange-200/30
                      bg-white/10
                      shadow-[0_0_120px_rgba(255,140,0,0.15)]
                    `
                    : `
                      border border-white/10
                      bg-black/20
                    `
                }
              `}
            >
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                priority
                draggable={false}
                sizes="100vw"
                className="select-none object-cover"
              />

              <div
                className={`
                  absolute inset-0
                  ${
                    isLight
                      ? `
                        bg-gradient-to-t
                        from-[rgba(255,120,0,0.35)]
                        via-[rgba(255,120,0,0.08)]
                        to-transparent
                      `
                      : `
                        bg-gradient-to-t
                        from-black/90
                        via-black/20
                        to-transparent
                      `
                  }
                `}
              />

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                <p
                  className={`
                    text-xs uppercase tracking-[0.35em]
                    ${isLight ? "text-orange-200" : "text-violet-300"}
                  `}
                >
                  {selectedItem.type}
                </p>

                <h3
                  className={`
                    mt-4 text-3xl font-semibold md:text-5xl
                    ${
                      isLight
                        ? "text-white drop-shadow-[0_4px_18px_rgba(255,120,0,0.45)]"
                        : "text-white"
                    }
                  `}
                >
                  {selectedItem.title}
                </h3>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}