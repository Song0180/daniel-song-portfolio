import Link from 'next/link';

const NavLinksMobile = () => (
  <div className='space-x-8 block md:hidden mt-4'>
    <Link
      href='/about'
      className='text-base font-normal text-gray-600 dark:text-gray-300'
    >
      About
    </Link>
    <Link
      href='/projects'
      className='text-base font-normal text-gray-600 dark:text-gray-300'
    >
      Projects
    </Link>
    <Link
      href='/experience'
      className='text-base font-normal text-gray-600 dark:text-gray-300'
    >
      Experience
    </Link>
    <Link
      href='/contact'
      className='text-base font-normal text-gray-600 dark:text-gray-300'
    >
      Contact
    </Link>
  </div>
);

export default NavLinksMobile;
