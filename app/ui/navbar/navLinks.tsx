'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  name: string;
  href: string;
}

const links: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Blogs',
    href: '/blogs',
  },
  { name: 'Experience', href: '/experience' },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <li
            key={link.name}
            className={`transition duration-200 flex justify-center item-center hover:shadow-lg dark:hover:bg-zinc-800 px-4 py-1 text-gray-600 rounded-md text-center text-base ${
              pathname === link.href
                ? 'shadow-lg font-bold dark:text-gray-300 dark:bg-zinc-800'
                : 'font-normal dark:text-gray-300'
            }`}
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        );
      })}
    </>
  );
}
