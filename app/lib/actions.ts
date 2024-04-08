import { Repo } from './definitions';

export const getLatestRepos = async (username: string) => {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated`
  );

  if (!res.ok) {
    return [];
  }

  const repoList: Repo[] = await res.json();
  return repoList.slice(0, 3);
};
