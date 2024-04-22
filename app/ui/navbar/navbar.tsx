'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import userData from '@/app/lib/data';
import NavLinks from './navLinks';
import SocialLinks from './socialLinks';

const DarkIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    stroke='currentColor'
    className='w-4 h-4 text-yellow-500 dark:text-yellow-500'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
    />
  </svg>
);

const LightIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    stroke='currentColor'
    className='w-4 h-4 text-yellow-500 dark:text-yellow-500'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
    />
  </svg>
);

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className='max-w-6xl mx-auto px-4 pt-10 md:pb-10 z-10 relative'>
      <div className='grid grid-rows-2 grid-cols-2 lg:flex lg:flex-row lg:justify-between lg:items-center'>
        <div className='flex flex-col row-start-1'>
          <Link href='/'>
            <h1 className='font-semibold text-xl dark:text-gray-100'>
              {userData.name}
            </h1>
            <p className='text-base font-light text-gray-500 dark:text-gray-300'>
              {userData.designation}
            </p>
          </Link>
        </div>

        <ul className='items-center row-start-2 w-full flex col-span-full md:justify-start lg:w-min'>
          <NavLinks />
        </ul>

        <div className='space-x-4 sm:row-start-1 md:row-start-2 flex flex-wrap flex-row items-center justify-end'>
          <SocialLinks />
          <button
            aria-label='Toggle Dark Mode'
            type='button'
            className='w-4 rounded focus:outline-none'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {mounted && (theme === 'dark' ? <DarkIcon /> : <LightIcon />)}
          </button>
        </div>
      </div>
    </nav>
  );
}
