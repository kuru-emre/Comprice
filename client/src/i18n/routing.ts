import { defineRouting } from 'next-intl/routing';
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'fr', 'tr'],

  // Used when no locale matches
  defaultLocale: 'en',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/catalog': {
      en: '/catalog',
      fr: '/catalogue',
      tr: '/katalog',
    },
    '/login': {
      en: '/login',
      fr: '/se-connecter',
      tr: '/giris-yap',
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } = createLocalizedPathnamesNavigation(routing);
