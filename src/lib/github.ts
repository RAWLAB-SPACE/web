const GITHUB_USERNAME = "RAWLABdev";

type GithubRepoResponse = {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  language: string | null;
  updated_at: string;
  fork: boolean;
  topics?: string[];
};

export type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  stars: number;
  forks: number;
  url: string;
  language: string | null;
  updatedAt: string;
  topics: string[];
  fragment: string;
};

function createRepoFragment(repo: GithubRepoResponse) {
  const language = repo.language || "Code";
  const topics = repo.topics?.length ? repo.topics.slice(0, 3).join(", ") : "raw build";

  return `${language} repository focused on ${topics}. Updated as part of the RAWLAB_ technical layer.`;
}

export async function getGithubRepos(): Promise<GithubRepo[]> {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=9`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    return [];
  }

  const repos = (await response.json()) as GithubRepoResponse[];

  return repos
    .filter((repo) => !repo.fork)
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      url: repo.html_url,
      language: repo.language,
      updatedAt: repo.updated_at,
      topics: repo.topics || [],
      fragment: createRepoFragment(repo),
    }));
}