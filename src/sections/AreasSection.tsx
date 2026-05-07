import { areas } from "@/data/areas";

export function AreasSection() {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.4em] text-violet-300">
          Selected areas
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {areas.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-violet-300/50 hover:bg-white/[0.06]"
            >
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}