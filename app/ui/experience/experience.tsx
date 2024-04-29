import userData from '@/app/lib/data';

export default function Experience() {
  return (
    <section>
      <div className='max-w-5xl mx-auto h-28 mt-2 md:mt-0 md:h-40 flex flex-col justify-end'>
        <h1 className='drop-shadow-xl self-start mx-4 lg:mx-6 text-5xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 py-16 md:py-12 text-left'>
          Experience
        </h1>
      </div>
      <div className='bg-slate-100 dark:bg-black -mt-20 pt-10'>
        <div className='grid grid-cols-1 max-w-xl mx-auto pt-20'>
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className='divider-container flex flex-col items-center -mt-2'>
                  <div className='w-4 h-4 bg-green-500 rounded-full relative z-10'>
                    <div className='w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping'></div>
                  </div>
                  <div className='w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2'></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({
  title,
  desc,
  year,
  company,
  companyLink,
}: {
  title: string;
  desc: string[];
  year: string;
  company: string;
  companyLink: string;
}) => {
  return (
    <div className='relative p-4 rounded-md bg-white dark:bg-zinc-900 shadow-xl z-10 mx-4'>
      <h1 className='absolute -top-10 md:-left-10 md:-top-10 text-4xl font-bold text-slate-300 dark:text-neutral-700'>
        {year}
      </h1>
      <h1 className='font-semibold text-xl'>{title}</h1>
      <a href={companyLink} className='text-gray-500'>
        {company}
      </a>
      {desc.map((item, idx) => (
        <p key={idx} className='text-gray-600 dark:text-gray-300 my-2'>
          {item}
        </p>
      ))}
    </div>
  );
};
