import userData from '@/app/lib/data';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className='mx-auto max-w-6xl flex flex-row justify-center items-start overflow-hidden'>
      <div className='w-full pt-0 pb-20 pl-4 sm:pr-8 md:text-left lg:pr-20 lg:pt-20 lg:w-1/2'>
        {userData.roles.map((role) => (
          <h1
            key={role}
            className='mx-auto text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'
          >
            {role}
            {'.'}
          </h1>
        ))}
      </div>

      <div className='hidden md:block relative w-full md:w-1/2 md:mt-20 lg:-mr-40 lg:mt-32'>
        <div className='w-52 lg:w-3/4'>
          <Image
            width={360}
            height={480}
            src={userData.profileImgUrl}
            alt='profile image'
            className='shadow'
            priority
          />
          <div className='flex flex-row justify-between mt-4'>
            <div className='flex flex-row space-x-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-arrow-90deg-up'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z'
                />
              </svg>
              <p className='font-mono'>Me and Mocha</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
