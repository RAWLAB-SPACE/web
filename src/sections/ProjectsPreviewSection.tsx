import { FloatingCard } from "@/components/FloatingCard";

const projects = [
  {
    title: "Frontend / Mobile",
    tag: "Engineering",
    description:
      "Interfaces, mobile experiences, React Native, Next.js and scalable frontend systems.",
  },
  {
    title: "Design Systems",
    tag: "UI / UX",
    description:
      "Reusable components, visual language, tokens, patterns and product consistency.",
  },
  {
    title: "Creative Experiments",
    tag: "Lab",
    description:
      "Motion, interaction, visual prototypes, microexperiences and unfinished ideas.",
  },
  {
    title: "Movement Archive",
    tag: "Climbing",
    description:
      "Photography, climbing process, body movement, training notes and outdoor exploration.",
  },
  {
    title: "Visual Archive",
    tag: "Art",
    description:
      "Images, textures, compositions, references, posters and personal visual language.",
  },
  {
    title: "Cloud Systems",
    tag: "AWS",
    description:
      "Serverless architecture, APIs, protected documents, storage, CDN and integrations.",
  },
];

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
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-violet-300/50 hover:bg-white/[0.06]"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-500/10 blur-2xl transition group-hover:bg-violet-500/20" />

              <p className="text-xs uppercase tracking-[0.35em] text-violet-300">
                {project.tag}
              </p>

              <h3 className="mt-5 text-2xl font-semibold text-slate-100">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {project.description}
              </p>
            </article>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
}