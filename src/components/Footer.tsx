export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>RAWLAB_ © 2026</p>

        <div className="flex gap-5">
          <a
            href="https://github.com/RAWLAB-SPACE"
            target="_blank"
            className="transition hover:text-violet-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/adhesiboss/"
            target="_blank"
            className="transition hover:text-violet-300"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="transition hover:text-violet-300"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}