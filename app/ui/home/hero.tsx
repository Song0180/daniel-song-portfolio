import userData from '@/app/lib/data';
import { CornerLeftUp } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className='mx-auto max-w-5xl flex flex-row items-start overflow-hidden'>
      <div className='w-full pt-0 pb-20 pl-4 sm:pr-8 md:text-left lg:pl-6 lg:mr-20 md:pt-2 lg:w-1/2'>
        {userData.roles.map((role) => (
          <h1
            key={role}
            className='drop-shadow-xl mx-auto text-5xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'
          >
            {role}
            {'.'}
          </h1>
        ))}
      </div>

      <div className='hidden md:block relative w-full md:w-1/2 md:mt-20 lg:-mr-40 lg:mt-12'>
        <div className='w-52 lg:w-3/4'>
          <Image
            width={360}
            height={480}
            src={userData.profileImgUrl}
            alt='profile image'
            className='shadow rounded-2xl'
            priority
          />
          <div className='flex flex-row justify-between mt-4'>
            <div className='flex flex-row space-x-4'>
              <CornerLeftUp className='w-4 h-4' />
              <p className='font-mono'>Me in Shanghai</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
