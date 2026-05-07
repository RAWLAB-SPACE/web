import { FloatingCard } from "@/components/FloatingCard";
import { projects } from "@/content/projects";

export function ProjectsPreviewSection() {
  return (
    <section id="projects-preview" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-violet-300">
              Projects preview
            </p>

            <h2 className="mt-6 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
              A map of what RAWLAB_ can become.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-slate-400">
            This first version organizes the creative and technical areas that
            will later become real case studies, experiments and living content.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <FloatingCard key={project.title} className="h-full">
              <article
                className="
                  group relative h-full overflow-hidden
                  rounded-3xl border border-white/10
                  bg-white/[0.03] p-7 transition
                  hover:-translate-y-1
                  hover:border-violet-300/50
                  hover:bg-white/[0.06]
                "
              >
                <div
                  className="
                    absolute -right-10 -top-10
                    h-28 w-28 rounded-full
                    bg-violet-500/10 blur-2xl
                    transition
                    group-hover:bg-violet-500/20
                  "
                />

                <p className="text-xs uppercase tracking-[0.35em] text-violet-300">
                  {project.category}
                </p>

                <h3 className="mt-5 text-2xl font-semibold text-slate-100">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full border border-white/10
                        px-3 py-1 text-[10px]
                        uppercase tracking-[0.2em]
                        text-slate-400
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-xs uppercase tracking-[0.25em] text-violet-300">
                  {project.status}
                </p>
              </article>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
}