const archiveItems = [
  {
    label: "Photo",
    title: "Climbing fragments",
    description: "Images from movement, rock, body and outdoor process.",
  },
  {
    label: "Code",
    title: "Technical notes",
    description: "Small decisions, frontend patterns and architecture ideas.",
  },
  {
    label: "Design",
    title: "Interface studies",
    description: "Visual systems, components, layouts and UI explorations.",
  },
  {
    label: "Human",
    title: "Journal entries",
    description: "Personal reflections about discipline, emotion and craft.",
  },
];

export function LivingArchiveSection() {
  return (
    <section  className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-violet-300">
            Living archive
          </p>

          <h2 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
            Nothing here is isolated. Every fragment belongs to the same system.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {archiveItems.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-violet-300/50 hover:bg-white/[0.06]"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-violet-300">
                {item.label}
              </p>

              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}