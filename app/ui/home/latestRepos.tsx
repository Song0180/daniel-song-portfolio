import { getLatestRepos } from '@/app/lib/actions';
import userData from '@/app/lib/data';
import { Repo } from '@/app/lib/definitions';
import { ExternalLink, MoveRight } from 'lucide-react';

export default async function LatestRepos() {
  const repos = await getLatestRepos(userData.githubUsername);

  return (
    <section className='bg-slate-100 -mt-28 md:-mt-32 lg:-mt-48 dark:bg-neutral-950 pb-20'>
      <div className='max-w-5xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center md:pt-40 mx-4 lg:mx-6'>
          <h1 className='text-5xl md:text-8xl max-w-lg font-bold mt-20 mb-10 md:my-0 text-slate-300 dark:text-neutral-700 self-start text-left'>
            Latest Repos
          </h1>

          <a
            href={`https://github.com/${userData.githubUsername}`}
            className='mb-20 md:mb-0 px-8 py-4 rounded-md bg-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition duration-200 shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:bg-zinc-900 dark:text-gray-300'
          >
            <ExternalLink />
            <p>View GitHub</p>
          </a>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto px-10 lg:-mt-10 gap-y-20'>
        {repos &&
          repos.map((repo) => (
            <GithubRepoCard latestRepo={repo} key={repo.name} />
          ))}
        {!repos.length && (
          <h1 className='col-span-full font-semibold text-xl dark:text-gray-200 text-gray-700'>
            Sorry, we encountered some issue with GitHub APIs, please try again
            later 🥹
          </h1>
        )}
      </div>
    </section>
  );
}

const GithubRepoCard = ({ latestRepo }: { latestRepo: Repo }) => {
  return (
    <div className='github-repo'>
      <h1 className='font-semibold text-xl dark:text-gray-200 text-gray-700'>
        {latestRepo.name}
      </h1>
      <p className='text-base font-normal my-4 text-gray-500'>
        {latestRepo.description}
      </p>
      <a
        href={latestRepo.html_url}
        className='font-semibold group flex flex-row space-x-2 w-full items-center'
      >
        <p>View Repository</p>
        <div className='transform group-hover:translate-x-2 transition duration-300'>
          <MoveRight className='w-4 h-4' />
        </div>
      </a>
    </div>
  );
};
