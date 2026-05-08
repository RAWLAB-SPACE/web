"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import type { GithubRepo } from "@/lib/github";
import { RepoSignalGraph } from "@/components/RepoSignalGraph";

type GithubCarouselProps = {
  repos: GithubRepo[];
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(date));
}

export function GithubCarousel({ repos }: GithubCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

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

  function goToPrevious() {
    setActiveIndex((current) =>
      current === 0 ? repos.length - 1 : current - 1,
    );
  }

  function goToNext() {
    setActiveIndex((current) =>
      current === repos.length - 1 ? 0 : current + 1,
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.6fr]">
      <article className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

        <p className="text-xs uppercase tracking-[0.35em] text-violet-300">
          {activeRepo.language || "Code"}
        </p>

        <h3 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
          {activeRepo.name}
        </h3>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400">
          {activeRepo.description || activeRepo.fragment}
        </p>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-500">
          {activeRepo.fragment}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {(activeRepo.topics.length
            ? activeRepo.topics
            : ["rawlab", "frontend"]
          ).map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-400"
            >
              {topic}
            </span>
          ))}
        </div>
        <RepoSignalGraph
          name={activeRepo.name}
          language={activeRepo.language}
          topics={activeRepo.topics}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
              Primary language
            </p>

            <p className="mt-2 text-lg font-semibold">
              {activeRepo.language || "TypeScript"}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
              Repository focus
            </p>

            <p className="mt-2 text-lg font-semibold">
              {activeRepo.topics?.[0] || "Frontend system"}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
              Last update
            </p>

            <p className="mt-2 text-sm font-semibold">
              {formatDate(activeRepo.updatedAt)}
            </p>
          </div>
        </div>

        <a
          href={activeRepo.url}
          target="_blank"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-xs uppercase tracking-[0.25em] text-slate-300 transition hover:border-violet-300/50 hover:text-violet-300"
        >
          Open repository
          <ExternalLink className="h-4 w-4" />
        </a>
      </article>

      <aside className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-violet-300">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(repos.length).padStart(2, "0")}
          </p>

          <h4 className="mt-6 text-2xl font-semibold">Repository stream</h4>

          <div className="mt-6 grid gap-3">
            {repos.map((repo, index) => (
              <button
                key={repo.id}
                onClick={() => setActiveIndex(index)}
                className={`rounded-2xl border p-4 text-left transition ${
                  activeIndex === index
                    ? "border-violet-300/60 bg-white/[0.06]"
                    : "border-white/10 bg-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
                  {repo.language || "Code"}
                </p>
                <p className="mt-2 text-sm font-semibold">{repo.name}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex gap-3">
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
