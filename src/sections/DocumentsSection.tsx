const documents = [
  {
    label: "CV",
    title: "Professional Resume",
    description: "Frontend, mobile, design systems and product experience.",
    status: "Public",
  },
  {
    label: "Profile",
    title: "Technical Profile",
    description: "Stack, architecture, projects, cloud and engineering notes.",
    status: "Public",
  },
  {
    label: "Case Studies",
    title: "Selected Work",
    description: "Product decisions, UI systems, mobile flows and outcomes.",
    status: "Private",
  },
  {
    label: "Archive",
    title: "Creative Documents",
    description: "Visual process, experiments, decks and RAWLAB_ material.",
    status: "Private",
  },
];

export function DocumentsSection() {
  return (
    <section id="documents" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-violet-300">
            Documents / Access layer
          </p>

          <h2 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
            Public identity and private depth.
          </h2>

          <p className="mt-6 text-sm leading-7 text-slate-400">
            A future access system for recruiters, clients and collaborators:
            public documents, protected case studies and selected creative files.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {documents.map((doc) => (
            <article
              key={doc.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-violet-300/50 hover:bg-white/[0.06]"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-violet-300">
                    {doc.label}
                  </p>

                  <h3 className="mt-5 text-2xl font-semibold">{doc.title}</h3>
                </div>

                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-slate-400">
                  {doc.status}
                </span>
              </div>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                {doc.description}
              </p>

              <button className="mt-8 rounded-full border border-white/10 px-5 py-3 text-xs uppercase tracking-[0.25em] text-slate-300 transition group-hover:border-violet-300/50 group-hover:text-violet-300">
                {doc.status === "Public" ? "Download" : "Request access"}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}