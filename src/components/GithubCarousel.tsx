"use client";

import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  GitFork,
  Star,
} from "lucide-react";
import { RepoSignalGraph } from "@/components/RepoSignalGraph";
import type { GithubRepo } from "@/lib/github";

type GithubCarouselProps = {
  repos: GithubRepo[];
};

const AUTOPLAY_DELAY = 2000;

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(date));
}

function getLanguageTheme(language?: string | null) {
  switch (language) {
    case "TypeScript":
      return {
        text: "text-cyan-300",
        border: "border-cyan-300/30",
        bg: "bg-cyan-300/10",
        glow: "bg-cyan-400/10",
      };

    case "JavaScript":
      return {
        text: "text-yellow-300",
        border: "border-yellow-300/30",
        bg: "bg-yellow-300/10",
        glow: "bg-yellow-400/10",
      };

    case "CSS":
      return {
        text: "text-fuchsia-300",
        border: "border-fuchsia-300/30",
        bg: "bg-fuchsia-300/10",
        glow: "bg-fuchsia-400/10",
      };

    case "HTML":
      return {
        text: "text-orange-300",
        border: "border-orange-300/30",
        bg: "bg-orange-300/10",
        glow: "bg-orange-400/10",
      };

    default:
      return {
        text: "text-violet-300",
        border: "border-violet-300/30",
        bg: "bg-violet-300/10",
        glow: "bg-violet-400/10",
      };
  }
}

export function GithubCarousel({ repos }: GithubCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    if (isPaused || repos.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) =>
        current === repos.length - 1 ? 0 : current + 1,
      );

      setProgressKey((current) => current + 1);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(interval);
  }, [isPaused, repos.length]);

  if (repos.length === 0) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
        <p className="text-sm text-slate-400">
          GitHub activity will appear here once repositories are available.
        </p>
      </div>
    );
  }

  const activeRepo = repos[activeIndex];
  const theme = getLanguageTheme(activeRepo.language);

  function resetProgress() {
    setProgressKey((current) => current + 1);
  }

  function goToPrevious() {
    setActiveIndex((current) =>
      current === 0 ? repos.length - 1 : current - 1,
    );

    resetProgress();
  }

  function goToNext() {
    setActiveIndex((current) =>
      current === repos.length - 1 ? 0 : current + 1,
    );

    resetProgress();
  }

  function selectRepo(index: number) {
    setActiveIndex(index);
    resetProgress();
  }

  const fallbackTopics = ["rawlab", "frontend", "creative-code"];

  const repoTopics = activeRepo.topics.length
    ? activeRepo.topics.slice(0, 4)
    : fallbackTopics;

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        resetProgress();
      }}
      className="grid gap-5 lg:grid-cols-[1fr_0.48fr]"
    >
      <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl md:p-7">
        <div
          className={`absolute -right-16 -top-16 h-48 w-48 rounded-full ${theme.glow} blur-3xl`}
        />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className={`text-xs uppercase tracking-[0.35em] ${theme.text}`}>
              {activeRepo.language || "Code"}
            </p>

            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-slate-500">
              <span className="inline-flex items-center gap-1">
                <Star className="h-3 w-3" />
                {activeRepo.stars}
              </span>

              <span className="inline-flex items-center gap-1">
                <GitFork className="h-3 w-3" />
                {activeRepo.forks}
              </span>
            </div>
          </div>

          <h3 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">
            {activeRepo.name}
          </h3>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            {activeRepo.description || activeRepo.fragment}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {repoTopics.map((topic) => (
              <span
                key={topic}
                className={`
                  rounded-full border px-3 py-1
                  text-[10px] uppercase tracking-[0.2em]
                  ${theme.border} ${theme.bg} ${theme.text}
                `}
              >
                {topic}
              </span>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/10 p-4">
            <RepoSignalGraph
              name={activeRepo.name}
              language={activeRepo.language}
              topics={activeRepo.topics}
            />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
              <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                Language
              </p>

              <p className={`mt-2 text-sm font-semibold ${theme.text}`}>
                {activeRepo.language || "TypeScript"}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
              <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                Focus
              </p>

              <p className="mt-2 truncate text-sm font-semibold">
                {activeRepo.topics?.[0] || "Frontend system"}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
              <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                Updated
              </p>

              <p className="mt-2 text-sm font-semibold">
                {formatDate(activeRepo.updatedAt)}
              </p>
            </div>
          </div>

          <a
            href={activeRepo.url}
            target="_blank"
            rel="noreferrer"
            className={`
              mt-6 inline-flex items-center gap-2
              rounded-full border px-5 py-3
              text-xs uppercase tracking-[0.25em]
              transition
              ${theme.border} ${theme.text}
              hover:bg-white/[0.05]
            `}
          >
            Open repository
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </article>

      <aside className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-violet-300">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(repos.length).padStart(2, "0")}
          </p>

          <div className="mt-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                {isPaused ? "Paused" : "Auto stream"}
              </p>

              <span className="text-[10px] text-slate-600">2s</span>
            </div>

            <div className="h-1 overflow-hidden rounded-full bg-white/5">
              {!isPaused && (
                <div
                  key={progressKey}
                  className="
                    h-full
                    animate-[repoProgress_2s_linear_forwards]
                    rounded-full
                    bg-gradient-to-r
                    from-violet-400
                    via-cyan-300
                    to-violet-400
                  "
                />
              )}
            </div>
          </div>

          <h4 className="mt-5 text-xl font-semibold">Repository stream</h4>

          <div className="mt-5 grid gap-2">
            {repos.map((repo, index) => {
              const itemTheme = getLanguageTheme(repo.language);
              const active = activeIndex === index;

              return (
                <button
                  key={repo.id}
                  onClick={() => selectRepo(index)}
                  className={`
                    rounded-2xl border p-3 text-left transition
                    ${
                      active
                        ? `${itemTheme.border} ${itemTheme.bg}`
                        : "border-white/10 bg-transparent opacity-70 hover:bg-white/[0.03] hover:opacity-100"
                    }
                  `}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p
                      className={`text-[10px] uppercase tracking-[0.22em] ${
                        active ? itemTheme.text : "text-slate-500"
                      }`}
                    >
                      {repo.language || "Code"}
                    </p>

                    <span className="text-[10px] text-slate-500">
                      {formatDate(repo.updatedAt)}
                    </span>
                  </div>

                  <p className="mt-2 truncate text-sm font-semibold">
                    {repo.name}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={goToPrevious}
            className="rounded-full border border-white/10 p-3 transition hover:border-violet-300/50 hover:text-violet-300"
            aria-label="Previous repository"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={goToNext}
            className="rounded-full border border-white/10 p-3 transition hover:border-violet-300/50 hover:text-violet-300"
            aria-label="Next repository"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </aside>
    </div>
  );
}