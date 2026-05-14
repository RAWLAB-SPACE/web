"use client";

const links = [
  { label: "GitHub", href: "https://github.com/adhesiboss" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adhesiboss/" },
  { label: "Instagram", href: "https://www.instagram.com/chilean.innerfire/" },
  { label: "Email", href: "mailto:chilean.innerfire@gmail.com" },
];

export function Footer() {
  return (
    <footer className="px-6 pb-6 pt-3 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div
          className="
            flex flex-col gap-4
            rounded-[1.75rem]
            border border-white/10
            bg-white/[0.025]
            px-8 py-5
            backdrop-blur-sm

            md:flex-row
            md:items-center
            md:justify-between
            md:px-8
            md:py-4
          "
        >
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-violet-300">
              RAWLAB_
            </p>

            <p className="mt-2 text-xs leading-6 text-slate-500">
              Frontend · Mobile · Motion · Visual Systems
            </p>
          </div>

          <nav
            className="
              flex flex-wrap items-center gap-x-4 gap-y-2
              text-xs text-slate-400
            "
          >
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "Email" ? undefined : "_blank"}
                rel={item.label === "Email" ? undefined : "noreferrer"}
                className="
                  whitespace-nowrap
                  transition
                  hover:text-violet-300
                "
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-3 text-center text-[10px] uppercase tracking-[0.24em] text-slate-600">
          Santiago, Chile · 2026 · Signal channel open
        </p>
      </div>
    </footer>
  );
}