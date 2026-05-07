const signals = [
  {
    label: "GitHub",
    title: "Technical activity",
    description:
      "Repositories, commits, build logs and experiments connected to RAWLAB_ systems.",
    href: "https://github.com/RAWLAB-SPACE",
  },
  {
    label: "Instagram",
    title: "Visual fragments",
    description:
      "Photography, movement, stories and social visual archive curated as a living collage.",
    href: "https://www.instagram.com/",
  },
  {
    label: "LinkedIn",
    title: "Professional layer",
    description:
      "Frontend, mobile, design systems, architecture experience and technical profile.",
    href: "https://www.linkedin.com/in/adhesiboss/",
  },
  {
    label: "Documents",
    title: "Private access",
    description:
      "CV, case studies, technical profile and selected documents through controlled access.",
    href: "#",
  },
];

export function ConnectedSignalsSection() {
  return (
    <section id="signals" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-violet-300">
            Connected signals
          </p>

          <h2 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
            RAWLAB_ connects what I create, publish, build and document.
          </h2>

          <p className="mt-6 text-sm leading-7 text-slate-400">
            This layer will evolve into live integrations with GitHub,
            Instagram, LinkedIn and protected documents.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {signals.map((signal) => (
            <a
              key={signal.label}
              href={signal.href}
              target={signal.href === "#" ? undefined : "_blank"}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-violet-300/50 hover:bg-white/[0.06]"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/10 blur-2xl transition group-hover:bg-violet-500/20" />

              <p className="text-xs uppercase tracking-[0.35em] text-violet-300">
                {signal.label}
              </p>

              <h3 className="mt-5 text-2xl font-semibold">{signal.title}</h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                {signal.description}
              </p>

              <p className="mt-8 text-xs uppercase tracking-[0.25em] text-slate-500 transition group-hover:text-violet-300">
                Connect signal →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}