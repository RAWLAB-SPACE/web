import { GithubCarousel } from "@/components/GithubCarousel";
import { getGithubRepos } from "@/lib/github";

export async function GithubSection() {
  const repos = await getGithubRepos();

  return (
    <section id="github" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-violet-300">
            GitHub activity
          </p>

          <h2 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
            Real systems. Real repositories.
          </h2>

          <p className="mt-6 text-sm leading-7 text-slate-400">
            RAWLAB_ documents the technical layer through repositories, language
            signals, experiments, commits and systems in progress.
          </p>
        </div>

        <GithubCarousel repos={repos} />
      </div>
    </section>
  );
}