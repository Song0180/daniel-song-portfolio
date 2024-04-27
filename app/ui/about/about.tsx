import userData from '@/app/lib/data';
import Image from 'next/image';
import React, { use } from 'react';

export default function About() {
  return (
    <section>
      <div className='max-w-5xl mx-auto h-28 mt-2 md:mt-0 md:h-40 flex flex-col justify-end'>
        <h1 className='self-start mx-4 lg:mx-6 text-5xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 py-16 md:py-12 text-left'>
          About
        </h1>
      </div>
      <div className='bg-slate-100 dark:bg-black -mt-20 pt-10'>
        <div className='max-w-5xl mx-auto'>
          <div className='mx-4 lg:mx-6'>
            <div className='text-container pt-8'>
              <p className='leading-loose text-2xl text-gray-700 dark:text-gray-200 md:text-4xl font-semibold'>
                {userData.about.title}
              </p>
            </div>

            <div className='pt-20 grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-20'>
              {/* Side Panel */}
              <div className='inline-flex flex-col'>
                <div className='mb-8'>
                  <h1 className='text-xl font-semibold text-gray-700 dark:text-gray-200'>
                    Current Job
                  </h1>
                  <p className='text-lg text-gray-500 mt-4 dark:text-gray-300'>
                    I am currently a full-time {userData.about.currentJob.title}{' '}
                    working at{' '}
                    <a
                      href={userData.about.currentJob.companyUrl}
                      className='hover:underline hover:text-blue-500'
                    >
                      {userData.about.currentJob.company}
                    </a>
                    .
                  </p>
                </div>
                <div className='mb-8'>
                  <h1 className='text-xl font-semibold text-gray-700 dark:text-gray-200'>
                    Location
                  </h1>
                  <p className='text-lg text-gray-500 mt-4 dark:text-gray-300'>
                    {userData.about.location.city},{' '}
                    {userData.about.location.countryRegion}{' '}
                    {userData.about.location.emoji}
                  </p>
                </div>
                <div className='mb-8'>
                  <h1 className='text-xl font-semibold text-gray-700 dark:text-gray-200'>
                    New Opportunities
                  </h1>
                  <p className='text-lg text-gray-500 mt-4 dark:text-gray-300'>
                    {userData.about.jobOpportunities}
                  </p>
                </div>
                <div className='mb-8'>
                  <h1 className='text-xl font-semibold text-gray-700 dark:text-gray-200'>
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
                      className='hover:underline hover:text-blue-500'
                      href={`mailto:${userData.email}`}
                    >
                      {userData.email}
                    </a>
                  </p>
                </div>
              </div>
              {/* Text area */}
              <div className='col-span-1 md:col-span-2'>
                {userData.about.description?.map((desc, idx) => (
                  <p
                    key={idx}
                    className='text-xl text-gray-700 mb-4 dark:text-gray-300 '
                  >
                    {desc}
                  </p>
                ))}

                <h1 className='text-3xl text-gray-700 dark:text-gray-200  inline-block font-bold'>
                  Tech Stack
                </h1>
                <div className='flex flex-row flex-wrap mt-8'>
                  {/* <Image
                    src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png'
                    className='h-20 w-20 mx-4 my-4'
                    alt='JavaScript Logo'
                    width={20}
                    height={20}
                    quality={100}
                  /> */}
                  {/* <Image
                    src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png'
                    className='h-20 w-20 mx-4 my-4'
                    alt='Java Logo'
                    width={20}
                    height={20}
                  />
                  <Image
                    src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png'
                    className='h-20 w-20 mx-4 my-4'
                    alt='TypeScript Logo'
                    width={20}
                    height={20}
                  />
                  <Image
                    src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png'
                    className='h-20 w-20 mx-4 my-4'
                    alt='HTML Logo'
                    width={20}
                    height={20}
                  />
                  <Image
                    src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png'
                    className='h-20 w-20 mx-4 my-4'
                    alt='CSS Logo'
                    width={20}
                    height={20}
                  />
                  <Image
                    src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png'
                    className='h-20 w-20 mx-4 my-4'
                    alt='Git Logo'
                    width={20}
                    height={20}
                  />
                  <Image
                    src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png'
                    className='h-20 w-20 mx-4 my-4'
                    alt='React Logo'
                    width={20}
                    height={20}
                  />
                  <Image
                    src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png'
                    className='h-20 w-20 mx-4 my-4'
                    alt='MySQL Logo'
                    width={20}
                    height={20}
                  /> */}
                </div>
                <h1 className='text-3xl text-gray-700 dark:text-gray-200  inline-block font-bold'>
                  Language Proficiencies
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
