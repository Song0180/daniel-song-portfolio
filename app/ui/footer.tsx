import Link from 'next/link';
import userData from '../lib/data';
import SocialLinks from './navbar/socialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className='max-w-6xl  mx-auto px-4 py-10 md:py-20'>
        <div className='h-0.5 w-full bg-white dark:bg-gray-700'></div>
        <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8'>
          <div>
            <p>
              Copyright &copy; {currentYear}
              <Link href='/'>
                <b className='px-2'>{userData.name}</b>
              </Link>
            </p>
          </div>
          <div>
            <div>
              Email me at
              <div className='inline-block transform hover:underline transition duration-300'>
                <a
                  className='px-2 py-1  hover:text-sky-700'
                  href={`mailto:${userData.email}`}
                >
                  {userData.email}
                </a>
              </div>
            </div>
          </div>
          <div className='space-x-4 flex flex-row items-center'>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
