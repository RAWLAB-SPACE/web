"use client";

const capabilities = [
  {
    title: "React Native",
    detail: "Mobile apps, navigation, APIs and production UI flows.",
  },
  {
    title: "Next.js",
    detail: "SSR, routing, performance and modern web architecture.",
  },
  {
    title: "TypeScript",
    detail: "Typed components, safer contracts and scalable frontend logic.",
  },
  {
    title: "Design Systems",
    detail: "Tokens, reusable components, documentation and consistency.",
  },
  {
    title: "Motion UI",
    detail: "Framer Motion, transitions and cinematic interactions.",
  },
  {
    title: "Performance",
    detail:
      "Image optimization, rendering, responsive behavior and Core Web Vitals.",
  },
  {
    title: "APIs",
    detail: "REST integrations, data mapping, auth flows and error handling.",
  },
  {
    title: "UX Strategy",
    detail: "Product thinking, interface clarity and user-centered decisions.",
  },
  {
    title: "Frontend Architecture",
    detail:
      "Modular structure, maintainability and scalable interface systems.",
  },
];

export function SystemCapabilitiesSection() {
  return (
    <section id="system-capabilities" className="px-4 py-10 sm:px-6 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <p className="text-[10px] uppercase tracking-[0.35em] text-violet-300">
              SYSTEM CAPABILITIES
            </p>

            <p className="hidden text-[10px] uppercase tracking-[0.25em] text-slate-500 sm:block">
              RAWLAB_SCAN_01
            </p>
          </div>

          <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => (
              <div
                key={item.title}
                className="flex min-w-0 items-start justify-between gap-4 bg-[var(--background)] px-5 py-4"
              >
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-200">
                    {item.title}
                  </p>

                  <p className="mt-1 max-w-sm text-xs leading-5 text-slate-500">
                    {item.detail}
                  </p>
                </div>

                <span className="shrink-0 text-[10px] uppercase tracking-[0.25em] text-violet-300/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
