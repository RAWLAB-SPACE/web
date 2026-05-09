"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

type Project = (typeof projects)[number];

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

const modalStars: ModalStar[] = Array.from({ length: 45 }, (_, index) => {
  const seed = index + 1;

  return {
    id: index,
    width: `${pseudoRandom(seed * 1.2) * 3 + 1}px`,
    height: `${pseudoRandom(seed * 1.7) * 3 + 1}px`,
    top: `${pseudoRandom(seed * 2.3) * 100}%`,
    left: `${pseudoRandom(seed * 3.1) * 100}%`,
    animationDuration: `${pseudoRandom(seed * 4.4) * 6 + 4}s`,
    animationDelay: `${pseudoRandom(seed * 5.5) * 5}s`,
    driftX: `${pseudoRandom(seed * 6.6) * 20 - 10}px`,
    driftY: `${pseudoRandom(seed * 7.7) * 20 - 10}px`,
  };
});

export function ProjectsPreviewSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const { t } = useLanguage();

  return (
    <section id="projects-preview" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-violet-300">
              {t.projects.eyebrow}
            </p>

            <h2 className="mt-6 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
              {t.projects.title}
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-slate-400">
            {t.projects.description}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <button
              key={project.slug}
              onClick={() => setActiveProject(project)}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 text-left transition hover:-translate-y-1 hover:border-violet-300/50 hover:bg-white/[0.06]"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-violet-300">
                {project.tag}
              </p>

              <h3 className="mt-5 text-2xl font-semibold">{project.title}</h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              <p className="mt-8 text-xs uppercase tracking-[0.25em] text-slate-500 group-hover:text-violet-300">
                {t.projects.open}
              </p>
            </button>
          ))}
        </div>
      </div>

      {activeProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto overflow-x-hidden px-6 py-10 backdrop-blur-xl"
          style={{
            background: "color-mix(in srgb, var(--background) 82%, black)",
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
            onClick={() => setActiveProject(null)}
            className="fixed right-6 top-6 z-20 rounded-full border border-white/10 bg-white/10 p-3 text-white transition hover:bg-white/20"
            aria-label="Close project viewer"
          >
            <X className="h-5 w-5" />
          </button>

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative z-10 my-auto w-full max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/50 backdrop-blur-2xl md:p-12"
          >
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:64px_64px]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_45%)]" />

            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.35em] text-violet-300">
                {activeProject.tag} / {activeProject.year}
              </p>

              <h3 className="mt-6 text-5xl font-black tracking-tight md:text-7xl">
                {activeProject.title}
              </h3>

              <p className="mt-8 max-w-3xl text-base leading-8 text-slate-300">
                {activeProject.content}
              </p>
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                    Role
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {activeProject.role}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                    Challenge
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {activeProject.challenge}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                    Outcome
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {activeProject.outcome}
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {activeProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.14),transparent_55%)]" />

                  <div className="relative z-10">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-violet-300">
                      {t.projects.systemPreview}
                    </p>

                    <div className="mt-6 flex h-[18rem] items-center justify-center rounded-[1.5rem] border border-dashed border-white/10 bg-black/20">
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                        {t.projects.futureCapture}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                      {t.projects.timeline}
                    </p>

                    <div className="mt-5 flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-violet-300" />
                        <p className="text-sm text-slate-300">
                          {t.projects.research}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-cyan-300" />
                        <p className="text-sm text-slate-300">
                          {t.projects.designLayer}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-emerald-300" />
                        <p className="text-sm text-slate-300">
                          {t.projects.production}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                      {t.projects.signal}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {t.projects.signalText}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                    {t.projects.layer}
                  </p>

                  <p className="mt-3 text-lg font-semibold">
                    {t.projects.creativeSystem}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                    {t.projects.status}
                  </p>

                  <p className="mt-3 text-lg font-semibold">
                    {t.projects.inProgress}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                    {t.projects.atmosphere}
                  </p>

                  <p className="mt-3 text-lg font-semibold">
                    {activeProject.atmosphere}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
