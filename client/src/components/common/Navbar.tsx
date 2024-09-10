'use client';

import { useScroll, motion, useTransform } from 'framer-motion';
import Logo from '@/components/common/Logo';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Dialog from '@radix-ui/react-dialog';
import * as Accordion from '@radix-ui/react-accordion';
import * as Separator from '@radix-ui/react-separator';
import { Link } from '@/i18n/routing';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import ThemeToggler from './Themer';
import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faChevronUp, faXmark } from '@fortawesome/free-solid-svg-icons';

const NavigationMotion = motion.create(NavigationMenu.Root);

export default function Navbar() {
  const t = useTranslations('navbar');
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const { resolvedTheme } = useTheme();

  const transforms = {
    backgroundColor: useTransform(scrollY, [0, 100], ['', resolvedTheme === 'dark' ? '#1f2937' : '#e5e7eb']),
    padding: useTransform(scrollY, [0, 100], ['', '5px 20px']),
    margin: useTransform(scrollY, [0, 100], ['', '20px']),
    width: useTransform(scrollY, [0, 100], ['100%', '90%']),
    borderRadius: useTransform(scrollY, [0, 100], ['0', '9999px']),
    boxShadow: useTransform(scrollY, [0, 100], ['', '0 25px 50px -12px rgb(0 0 0 / 0.25)']),
    border: useTransform(scrollY, [0, 100], ['0 solid transparent', '1px solid ' + (resolvedTheme === 'light' ? '#9ca3af' : '#4b5563')]),
  };

  return (
    <header className="absolute inset-x-0 top-0 z-30 flex justify-center">
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <NavigationMotion style={transforms} className="fixed p-4 transition-all duration-300 ease-in-out lg:px-8">
          <NavigationMenu.List className="flex items-center justify-between">
            <NavigationMenu.Item className="flex flex-1">
              <Logo />
            </NavigationMenu.Item>
            <NavigationMenu.Item className="lg:hidden">
              <Dialog.Trigger className="flex">
                <FontAwesomeIcon icon={faBars} aria-hidden className="h-5 w-5" />
              </Dialog.Trigger>
            </NavigationMenu.Item>
            <NavigationMenu.List className="hidden lg:flex">
              {t.raw('items').map((item: any) => (
                <NavigationMenu.Item key={item.name} className="px-4 py-2 text-sm font-semibold">
                  {item.sub ? (
                    <>
                      <NavigationMenu.Trigger className="transition-co group flex select-none items-center justify-between gap-2">
                        {item.name}
                        <FontAwesomeIcon
                          icon={faChevronUp}
                          className="relative h-3 w-3 transition-transform duration-300 ease-in-out group-data-[state=open]:-rotate-180"
                          aria-hidden
                        />
                      </NavigationMenu.Trigger>

                      <NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
                        <NavigationMenu.Sub>
                          <NavigationMenu.List className="flex justify-around gap-2 p-2">
                            {item.sub.map((subItem: any) => (
                              <NavigationMenu.Item key={subItem.name} asChild>
                                <Link href={subItem.href} className="transition-co bg-main-hover group w-full rounded-2xl p-3 font-normal">
                                  <h2 className="mb-[5px] font-medium">{subItem.name}</h2>
                                  <p className="text-accent">{subItem.desc}</p>
                                </Link>
                              </NavigationMenu.Item>
                            ))}
                          </NavigationMenu.List>
                        </NavigationMenu.Sub>
                      </NavigationMenu.Content>
                    </>
                  ) : (
                    <Link href={item.href}>{item.name}</Link>
                  )}
                </NavigationMenu.Item>
              ))}
              <NavigationMenu.Viewport className="bg-main absolute top-full mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-3xl border border-gray-300 text-sm shadow-lg transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn dark:border-gray-700" />
            </NavigationMenu.List>
            <NavigationMenu.Item className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link href="/" className="btn-main">
                {t('login')}
              </Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMotion>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-main fixed inset-0 z-50 data-[state=open]:animate-overlayShow" />
          <Dialog.Content
            aria-describedby={undefined}
            className="bg-main fixed inset-y-0 right-0 z-50 w-full overflow-y-auto p-6 data-[state=closed]:animate-exitToRight data-[state=open]:animate-enterFromRight sm:max-w-sm sm:ring-1 sm:ring-white/10"
          >
            <Dialog.Title className="flex items-center justify-between">
              <div onClick={() => setOpen(false)}>
                <Logo />
              </div>

              <div className="flex gap-4">
                <ThemeToggler />
                <Dialog.Close type="button">
                  <FontAwesomeIcon icon={faXmark} className="text-main h-4 w-4" />
                </Dialog.Close>
              </div>
            </Dialog.Title>
            <Separator.Root className="bg-accent my-2 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px" />
            <Accordion.Root collapsible type="single" className="space-y-2">
              {t.raw('items').map((item: any) => (
                <Accordion.Item
                  value={item.name}
                  key={item.name}
                  className="bg-main-hover data-[state=open]:bg-accent -mx-3 overflow-hidden rounded-3xl px-3 py-2 text-base font-semibold leading-7"
                >
                  {item.sub ? (
                    <>
                      <Accordion.Header className="flex">
                        <Accordion.Trigger className="group flex flex-1 items-center justify-between">
                          {item.name}
                          <FontAwesomeIcon
                            icon={faChevronDown}
                            className="h-3 w-3 transition-transform duration-300 ease-in group-data-[state=open]:-rotate-180"
                            aria-hidden
                          />
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Content className="overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                        <div className="flex flex-col gap-3 py-2">
                          {item.sub.map((subItem: any) => (
                            <Link
                              onClick={() => setOpen(false)}
                              className="bg-main bg-accent-hover rounded-2xl px-3 py-2"
                              key={subItem.name}
                              href={subItem.href}
                            >
                              <h2 className="text-main mb-[5px] font-medium">{subItem.name}</h2>
                              <p className="text-accent font-normal">{subItem.desc}</p>
                            </Link>
                          ))}
                        </div>
                      </Accordion.Content>
                    </>
                  ) : (
                    <Accordion.Header asChild>
                      <Link onClick={() => setOpen(false)} href={item.href}>
                        {item.name}
                      </Link>
                    </Accordion.Header>
                  )}
                </Accordion.Item>
              ))}
            </Accordion.Root>
            <Separator.Root className="bg-accent my-2 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px" />
            <Link
              onClick={() => setOpen(false)}
              href="/login"
              className="text-main bg-main-hover -mx-3 block rounded-3xl px-3 py-2.5 font-semibold leading-7"
            >
              {t('login')}
            </Link>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}
