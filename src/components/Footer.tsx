"use client";

const links = [
  { label: "GitHub", href: "https://github.com/RAWLABdev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adhesiboss/" },
  { label: "Instagram", href: "https://www.instagram.com/chilean.innerfire/" },
  { label: "Email", href: "mailto:chilean.innerfire@gmail.com" },
];

const documents = [
  { label: "CV", href: "/cv" },
  { label: "Technical Profile", href: "/profile" },
  { label: "Case Studies", href: "/case-studies" },
];

export function Footer() {
  return (
    <footer className="relative z-20 px-6 pb-6 pt-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div
          className="
            rounded-[2rem]
            border border-white/10
            bg-white/[0.025]
            p-6
            backdrop-blur-sm
            md:p-8
          "
        >
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-violet-300">
                RAWLAB_
              </p>

              <h2 className="mt-4 max-w-2xl text-2xl font-black tracking-tight md:text-4xl">
                Interfaces, systems and visual fragments shaped by movement,
                code and design.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                A living archive for digital products, frontend experiments,
                climbing, photography and creative process.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 md:text-right">
              <div>
                <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-slate-500">
                  Signals
                </p>

                <nav className="flex flex-wrap gap-3 md:justify-end">
                  {links.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.label === "Email" ? undefined : "_blank"}
                      rel={item.label === "Email" ? undefined : "noreferrer"}
                      className="text-xs text-slate-400 transition hover:text-violet-300"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div>
                <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-slate-500">
                  Access
                </p>

                <nav className="flex flex-wrap gap-3 md:justify-end">
                  {documents.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-xs text-slate-400 transition hover:text-violet-300"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-3 text-center text-[10px] uppercase tracking-[0.24em] text-slate-600">
          Santiago, Chile · 2026 · Signal channel open
        </p>
      </div>
    </footer>
  );
}