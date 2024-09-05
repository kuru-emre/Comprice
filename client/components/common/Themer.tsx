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
        className="bg-accent bg-accent-hover inline-flex h-auto w-fit items-center justify-center rounded-full p-2 outline-none focus:shadow"
      >
        <button>
          <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="left"
          className="bg-accent text-main z-50 flex gap-1 rounded-3xl p-2 text-sm data-[state=open]:animate-fadeIn"
          sideOffset={5}
        >
          <DropdownMenu.Item className="bg-main bg-accent-hover cursor-pointer rounded-2xl p-2" onClick={() => setTheme('light')}>
            Light
          </DropdownMenu.Item>
          <DropdownMenu.Item className="bg-main bg-accent-hover cursor-pointer rounded-2xl p-2" onClick={() => setTheme('dark')}>
            Dark
          </DropdownMenu.Item>
          <DropdownMenu.Item className="bg-main bg-accent-hover cursor-pointer rounded-2xl p-2" onClick={() => setTheme('system')}>
            System
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
