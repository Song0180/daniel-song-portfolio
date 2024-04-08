import Hero from './ui/home/hero';
import LatestRepos from './ui/home/latestRepos';

const Home = async () => {
  return (
    <main>
      <Hero />
      <LatestRepos />
    </main>
  );
};

export default Home;
