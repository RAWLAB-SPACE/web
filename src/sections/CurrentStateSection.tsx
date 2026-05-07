const states = [
  {
    label: "Building",
    value: "RAWLAB_ web platform",
  },
  {
    label: "Exploring",
    value: "AWS, motion systems & digital identity",
  },
  {
    label: "Moving",
    value: "climbing, training & creative process",
  },
  {
    label: "Writing",
    value: "notes about code, design and human experience",
  },
];

export function CurrentStateSection() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-violet-300">
              Current state
            </p>

            <h2 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
              A living system in progress.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              RAWLAB_ is not a static portfolio. It is a space to document
              what I build, what I learn, what I move through and what I create.
            </p>
          </div>

          <div className="grid gap-4">
            {states.map((state) => (
              <article
                key={state.label}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-violet-300/50 hover:bg-white/[0.06]"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-violet-300">
                  {state.label}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-slate-100">
                  {state.value}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}