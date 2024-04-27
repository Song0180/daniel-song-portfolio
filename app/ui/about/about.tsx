import userData from '@/app/lib/data';
import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <section>
      <div className='max-w-5xl mx-auto h-28 mt-2 md:mt-0 md:h-40 flex flex-col justify-end'>
        <h1 className='self-start mx-4 lg:mx-8 text-5xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 py-16 md:py-12 text-left'>
          About
        </h1>
      </div>
      <div className='bg-slate-100 dark:bg-black -mt-20 pt-10'>
        <div className='max-w-5xl mx-auto'>
          <div className='mx-4 lg:mx-8'>
            <div className='text-container pt-8'>
              <p
                className='leading-loose text-2xl md:text-4xl font-semibold'
                style={{ lineHeight: '3rem' }}
              >
                {userData.about.title}
              </p>
            </div>

            <div className='pt-20 grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-20'>
              {/* Side Panel */}
              <div className='inline-flex flex-col'>
                <div>
                  <h1 className='text-xl font-semibold text-gray-700 dark:text-gray-200'>
                    Resume
                  </h1>
                  <p className='text-lg text-gray-500 mt-4 dark:text-gray-300'>
                    For any sort help / enquiry, shoot a{' '}
                    <a
                      href={`mailto:${userData.email}`}
                      className='text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300'
                    >
                      mail
                    </a>{' '}
                    and I'll get back. I swear.
                  </p>
                </div>
                <div className='mt-8'>
                  <h1 className='text-xl font-semibold text-gray-700 dark:text-gray-200'>
                    Job Opportunities
                  </h1>
                  <p className='text-lg text-gray-500 mt-4 dark:text-gray-300'>
                    I'm looking for a job currently, If you see me as a good
                    fit, check my{' '}
                    <a
                      href={userData.resumeUrl}
                      target='__blank'
                      className='text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300'
                    >
                      CV
                    </a>{' '}
                    and I'd love to work for you.
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

                <h1 className='bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50'>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
