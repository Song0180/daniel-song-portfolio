import userData from '@/app/lib/data';
import Image from 'next/image';

const Projects = () => {
  return (
    <section>
      <div className='max-w-5xl mx-auto h-28 mt-2 md:mt-0 md:h-40 flex flex-col justify-end'>
        <h1 className='self-start mx-4 lg:mx-6 text-5xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 py-16 md:py-12 text-left'>
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className='bg-slate-100 dark:bg-black -mt-20 pt-10'>
        <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40'>
          {userData.projects.map((projects, idx) => (
            <ProjectCard
              key={projects.title}
              title={projects.title}
              link={projects.link}
              imgUrl={projects.imgUrl}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

interface ProjectCardProps {
  title: string;
  link: string;
  imgUrl: string;
  number: string;
}

const ProjectCard = ({ title, link, imgUrl, number }: ProjectCardProps) => {
  return (
    <a href={link} className='w-full block shadow-2xl'>
      <div className='relative overflow-hidden'>
        <div className='h-72 object-cover'>
          <Image
            src={imgUrl}
            alt='portfolio'
            width={1000}
            height={1000}
            className='brightness-90 transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full'
          />
        </div>
        <h1 className='absolute top-10 left-10 text-gray-50 font-bold text-2xl drop-shadow-xl'>
          {title}
        </h1>
        <h1 className='absolute bottom-10 left-10 text-gray-50 font-bold text-xl drop-shadow-xl'>
          {number.length === 1 ? '0' + number : number}
        </h1>
      </div>
    </a>
  );
};
