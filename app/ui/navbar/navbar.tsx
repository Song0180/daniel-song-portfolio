'use client';
import Link from 'next/link';
import userData from '@/app/lib/data';
import NavLinks from './navLinks';
import SocialLinks from './socialLinks';
import { ThemeSwitch } from './themeSwitch';

export default function Navbar() {
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

        <div className='space-x-1 sm:row-start-1 md:row-start-2 flex flex-wrap flex-row items-center justify-end'>
          <SocialLinks />
          <ThemeSwitch align='end' />
        </div>
      </div>
    </nav>
  );
}
