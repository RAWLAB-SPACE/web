import { EnvironmentToggle } from "@/components/EnvironmentToggle";

export function Navigation() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-6 py-6">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 py-3 backdrop-blur-md"
        style={{
          borderColor: "var(--border)",
          background: "color-mix(in srgb, var(--background) 80%, transparent)",
        }}
      >
        <a href="#" className="text-sm font-bold tracking-[0.35em]">
          RAWLAB_
        </a>

        <div className="hidden gap-6 text-xs uppercase tracking-[0.25em] md:flex">
          <a href="#projects" className="transition hover:opacity-70">
            Projects
          </a>
          <a href="#archive" className="transition hover:opacity-70">
            Archive
          </a>
          <a href="#systems" className="transition hover:opacity-70">
            Systems
          </a>
        </div>

        <EnvironmentToggle />
      </nav>
    </header>
  );
}