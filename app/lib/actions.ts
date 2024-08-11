import { Repo } from '@/app/types/repo.type';

export const getLatestRepos = async (username: string) => {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated`
    );

    if (!res.ok) {
      return [];
    }

    const repoList: Repo[] = await res.json();
    return repoList.slice(0, 3);
  } catch (err) {
    console.error('Failed to fetch GitHub repos:', err);
    return [];
  }
};
