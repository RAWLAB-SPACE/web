import { GithubSection } from "@/sections/GithubSection";
import { getGithubRepos } from "@/lib/github";

export async function GithubSectionServer() {
  const repos = await getGithubRepos();

  return <GithubSection repos={repos} />;
}