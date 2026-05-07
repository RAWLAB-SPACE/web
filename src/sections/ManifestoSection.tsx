export function ManifestoSection() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-14">
          <p className="text-sm uppercase tracking-[0.4em] text-violet-300">
            Manifesto
          </p>

          <h2 className="mt-8 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            I build interfaces, but I am more interested in what they make
            people feel.
          </h2>

          <div className="mt-10 grid gap-8 text-sm leading-7 text-slate-400 md:grid-cols-2">
            <p>
              RAWLAB_ is a space for raw ideas, digital systems, visual
              experiments and human process. It connects code, design, movement,
              climbing, photography and creative identity.
            </p>

            <p>
              This is not a finished portfolio. It is a living archive: a place
              where projects, notes, images, technical decisions and emotional
              process can coexist as part of the same system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}