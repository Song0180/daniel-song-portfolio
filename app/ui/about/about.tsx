import userData from '@/app/lib/data';
import Image from 'next/image';
import React, { use } from 'react';

export default function About() {
  return (
    <section>
      <div className='max-w-5xl mx-auto h-28 mt-2 md:mt-0 md:h-40 flex flex-col justify-end'>
        <h1 className='drop-shadow-xl self-start mx-4 lg:mx-6 text-5xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 py-16 md:py-12 text-left'>
          About
        </h1>
      </div>
      <div className='bg-slate-100 dark:bg-black -mt-20 pt-10'>
        <div className='max-w-5xl mx-auto'>
          <div className='mx-4 lg:mx-6'>
            <div className='text-container pt-4 md:pt-8'>
              <p className='text-2xl text-gray-700 dark:text-gray-200 md:text-4xl font-semibold'>
                {userData.about.title}
              </p>
            </div>

            <div className='pt-8 md:pt-20 grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-20 gap-x-20'>
              {/* Side Panel */}
              <div className='inline-flex flex-col'>
                <div className='mb-8'>
                  <h1 className='text-3xl md:text-xl font-semibold text-gray-700 dark:text-gray-200'>
                    Current Job
                  </h1>
                  <p className='text-lg text-gray-500 mt-4 dark:text-gray-300'>
                    I am currently working as a full-time{' '}
                    <span className='font-semibold'>
                      {userData.about.currentJob.title}
                    </span>{' '}
                    at{' '}
                    <a
                      href={userData.about.currentJob.companyUrl}
                      className='hover:underline hover:text-blue-500 font-bold'
                    >
                      {userData.about.currentJob.company}
                    </a>
                    .
                  </p>
                </div>
                <div className='mb-8'>
                  <h1 className='text-3xl md:text-xl font-semibold text-gray-700 dark:text-gray-200'>
                    Language Procifiencies
                  </h1>
                  <ul className='text-lg text-gray-500 mt-4 dark:text-gray-300'>
                    {userData.about.languages.map((item) => (
                      <li key={item.language}>
                        <p>
                          <span className='font-bold'>{item.language}</span>:{' '}
                          <span>{item.proficiency}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='mb-8'>
                  <h1 className='text-3xl md:text-xl font-semibold text-gray-700 dark:text-gray-200'>
                    Location
                  </h1>
                  <p className='text-lg text-gray-500 mt-4 dark:text-gray-300'>
                    {userData.about.location.city},{' '}
                    {userData.about.location.countryRegion}{' '}
                    {userData.about.location.emoji}
                  </p>
                </div>
                <div className='mb-8'>
                  <h1 className='text-3xl md:text-xl font-semibold text-gray-700 dark:text-gray-200'>
                    New Opportunities
                  </h1>
                  <p className='text-lg text-gray-500 mt-4 dark:text-gray-300'>
                    {userData.about.jobOpportunities}
                  </p>
                </div>
                <div className='mb-8'>
                  <h1 className='text-3xl md:text-xl font-semibold text-gray-700 dark:text-gray-200'>
                    Contact
                  </h1>

                  {userData.about.contact.map((content, idx) => (
                    <p
                      key={idx}
                      className='text-lg text-gray-500 mt-4 dark:text-gray-300'
                    >
                      {content}
                    </p>
                  ))}
                  <p className='text-lg text-gray-500 mt-4 dark:text-gray-300'>
                    Email me at{' '}
                    <a
                      className='dark:text-gray-100 font-bold hover:underline hover:text-blue-500 dark:hover:text-blue-500'
                      href={`mailto:${userData.email}`}
                    >
                      {userData.email}
                    </a>
                  </p>
                </div>
              </div>
              {/* Text area */}
              <div className='col-span-1 md:col-span-2 order-first md:order-last'>
                {userData.about.description?.map((desc, idx) => (
                  <p
                    key={idx}
                    className='text-xl text-gray-700 mb-4 dark:text-gray-300 '
                  >
                    {desc}
                  </p>
                ))}

                <h1 className='text-3xl md:text-xl font-semibold my-6 text-gray-700 dark:text-gray-200'>
                  Tech Stack
                </h1>
                <h2 className='text-2xl md:text-lg font-semibold my-4 text-gray-700 dark:text-gray-200'>
                  Frontend Development
                </h2>
                <div className='flex flex-row flex-wrap mt-8'>
                  {userData.about.techStack.frontend.map((item) => (
                    <SkillOrTool
                      key={item.name}
                      name={item.name}
                      imgUrl={item.imgUrl}
                      shouldUseWhiteBackground={item.shouldUseWhiteBackground}
                    />
                  ))}
                </div>
                <h2 className='text-2xl md:text-lg font-semibold my-4 text-gray-700 dark:text-gray-200'>
                  Backend Development
                </h2>
                <div className='flex flex-row flex-wrap mt-8'>
                  {userData.about.techStack.backend.map((item) => (
                    <SkillOrTool
                      key={item.name}
                      name={item.name}
                      imgUrl={item.imgUrl}
                    />
                  ))}
                  {userData.about.techStack.database.map((item) => (
                    <SkillOrTool
                      key={item.name}
                      name={item.name}
                      imgUrl={item.imgUrl}
                    />
                  ))}
                </div>
                <h2 className='text-2xl md:text-lg font-semibold my-4 text-gray-700 dark:text-gray-200'>
                  Deployment Tools
                </h2>
                <div className='flex flex-row flex-wrap mt-8'>
                  {userData.about.techStack.deployment.map((item) => (
                    <SkillOrTool
                      key={item.name}
                      name={item.name}
                      imgUrl={item.imgUrl}
                      shouldUseWhiteBackground={item.shouldUseWhiteBackground}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SkillOrToolProps {
  name: string;
  imgUrl: string;
  shouldUseWhiteBackground?: boolean;
}

const SkillOrTool = ({
  name,
  imgUrl,
  shouldUseWhiteBackground,
}: SkillOrToolProps) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Image
        src={imgUrl}
        className={`rounded-lg h-20 w-20 md:h-16 md:w-16 mx-4 my-4 object-contain ${
          shouldUseWhiteBackground ? 'dark:bg-white' : ''
        }`}
        alt={name}
        width={500}
        height={500}
      />
      <p className='text-gray-700 dark:text-gray-200'>{name}</p>
    </div>
  );
};
