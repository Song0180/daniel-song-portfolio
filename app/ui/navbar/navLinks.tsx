'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  name: string;
  href: string;
}

const links: NavLink[] = [
  { name: 'About', href: '/about' },
  {
    name: 'Projects',
    href: '/projects',
  },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`text-base  ${
                pathname === link.href
                  ? 'text-gray-800 font-bold dark:text-gray-400'
                  : 'text-gray-600 dark:text-gray-300 font-normal '
              } flex items-center`}
            >
              {link.name}
              {/* TODO: optimise this svg logo */}
              {pathname === link.href && (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-arrow-down inline-block h-3 w-3'
                  viewBox='0 0 16 16'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z'
                  />
                </svg>
              )}
            </Link>
          </li>
        );
      })}
    </>
  );
}
