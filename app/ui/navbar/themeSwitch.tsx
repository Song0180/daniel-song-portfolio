'use client';

import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../common/dropdown';
import { useEffect, useState } from 'react';
import { MoonStar, Sun } from 'lucide-react';

interface ThemeSwitchProps extends React.HTMLAttributes<HTMLButtonElement> {
  align?: 'start' | 'end' | 'center';
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
  align = 'start',
  ...props
}) => {
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild {...props}>
        <button
          aria-label='Toggle Dark Mode'
          type='button'
          className='w-8 rounded focus:outline-none hover:bg-zinc-100 text-gray-600 dark:text-gray-300 transition w-8 h-8 flex items-center justify-center dark:hover:bg-zinc-800 transition duration-200'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {mounted &&
            (theme === 'dark' ||
            (systemTheme === 'dark' && theme === 'system') ? (
              <MoonStar className='h-[1.2rem] w-[1.2rem]' />
            ) : (
              <Sun className='h-[1.2rem] w-[1.2rem]' />
            ))}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
