import { signals } from "@/data/signals";

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
          {signals.map((signal) => {
            const Icon = signal.icon;

            return (
              <a
                key={signal.label}
                href={signal.href}
                target={signal.href.startsWith("http") ? "_blank" : undefined}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-violet-300/50 hover:bg-white/[0.06]"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/10 blur-2xl transition group-hover:bg-violet-500/20" />

                <div className="relative z-10 flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-violet-300">
                      {signal.label}
                    </p>

                    <h3 className="mt-5 text-2xl font-semibold">
                      {signal.title}
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 transition group-hover:scale-110 group-hover:border-violet-300/40">
                    <Icon className="h-5 w-5 text-violet-300" />
                  </div>
                </div>

                <p className="relative z-10 mt-4 max-w-xl text-sm leading-7 text-slate-400">
                  {signal.description}
                </p>

                <p className="relative z-10 mt-8 text-xs uppercase tracking-[0.25em] text-slate-500 transition group-hover:text-violet-300">
                  Connect signal →
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}