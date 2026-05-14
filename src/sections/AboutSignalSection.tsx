"use client";

const capabilities = [
  "React Native",
  "Next.js",
  "TypeScript",
  "Design Systems",
  "Motion",
  "UX",
];

export function AboutSignalSection() {
  return (
    <section id="about-signal" className="px-4 py-14 sm:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] md:grid-cols-[0.75fr_1.25fr]">
          <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-8">
            <p className="text-[10px] uppercase tracking-[0.35em] text-violet-300">
              ABOUT SIGNAL
            </p>

            <h2 className="mt-5 text-2xl font-black tracking-tight md:text-4xl">
              Developer, designer and climber.
            </h2>
          </div>

          <div className="p-6 md:p-8">
            <p className="max-w-3xl text-sm leading-7 text-slate-400 md:text-base md:leading-8">
              I build frontend and mobile experiences where interface, motion
              and product thinking work as one system. My background connects
              banking-scale React Native products, design systems, UX decisions
              and a visual practice shaped by movement, climbing and discipline.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {capabilities.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 grid gap-3 text-xs uppercase tracking-[0.22em] text-slate-500 sm:grid-cols-3">
              <p>Frontend systems</p>
              <p>Mobile experience</p>
              <p>Visual engineering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}