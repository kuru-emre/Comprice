'use client';

import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';

export default function ThemeToggler() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        asChild
        className="inline-flex h-auto w-fit items-center justify-center rounded-full bg-accent bg-accent-hover p-2 outline-none focus:shadow"
      >
        <button>
          <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content 
          side='left'
          className="bg-accent text-main flex gap-1 z-50 text-sm data-[state=open]:animate-fadeIn rounded-3xl p-2 "
          sideOffset={5}
        >
          <DropdownMenu.Item className='p-2 bg-main bg-accent-hover rounded-2xl cursor-pointer' onClick={() => setTheme('light')}>Light</DropdownMenu.Item>
          <DropdownMenu.Item className='p-2 bg-main bg-accent-hover rounded-2xl cursor-pointer' onClick={() => setTheme('dark')}>Dark</DropdownMenu.Item>
          <DropdownMenu.Item className='p-2 bg-main bg-accent-hover rounded-2xl cursor-pointer' onClick={() => setTheme('system')}>System</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
