export function Navigation() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-6 py-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#050816]/70 px-5 py-3 backdrop-blur-md">
        <a href="#" className="text-sm font-bold tracking-[0.35em]">
          RAWLAB_
        </a>

        <div className="hidden gap-6 text-xs uppercase tracking-[0.25em] text-slate-400 md:flex">
          <a href="#projects" className="transition hover:text-violet-300">
            Projects
          </a>
          <a href="#journal" className="transition hover:text-violet-300">
            Journal
          </a>
          <a href="#systems" className="transition hover:text-violet-300">
            Systems
          </a>
        </div>
      </nav>
    </header>
  );
}