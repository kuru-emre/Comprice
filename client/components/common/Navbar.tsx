'use client';

import { useScroll, motion, useTransform } from 'framer-motion';
import Logo from '@/components/common/Logo';
import { XMarkIcon, ChevronUpIcon, Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Dialog from '@radix-ui/react-dialog';
import * as Accordion from '@radix-ui/react-accordion';
import Link from 'next/link';


const navigation = [
  { name: 'Company Catalog', href: '#' },
  { name: 'Create Demand', href: '#', sub: [{ name: 'Exports', href: '#' }, { name: 'Imports', href: '#' }] },
  { name: 'Trade News', href: '/marketplace' },
  { name: 'Trading Guide', href: '#', sub: [{ name: 'Incoterms', href: '/testo' }, { name: 'Insurance in Trade', href: '#' }, { name: 'Payment Methods', href: '#' }] },
  { name: 'About Us', href: '#', sub: [{ name: 'Who We Are', href: '#' }, { name: 'Contact Us', href: '#' }, { name: 'Q&A', href: '#' }] },
];


export default function Navbar() {
  const { scrollY } = useScroll();

  const transforms = {
    backgroundColor: useTransform(scrollY, [0, 100], ['', 'rgb(31 41 55)']),
    padding: useTransform(scrollY, [0, 100], ['', '8px 20px']),
    margin: useTransform(scrollY, [0, 100], ['', '20px']),
    width: useTransform(scrollY, [0, 100], ['100%', '90%']),
    borderRadius: useTransform(scrollY, [0, 100], ['0', '9999px']),
  };

  return (
    <header className="absolute inset-x-0 top-0 z-30 flex justify-center">

      <Dialog.Root>
        <motion.div style={transforms} className='fixed transition-all duration-300 ease-in-out p-6 lg:px-8'>
          <NavigationMenu.Root className='flex items-center w-full justify-between'>
            <NavigationMenu.Item className="flex flex-1">
              <NavigationMenu.Link href="/" className="-m-1.5 p-1.5">
                <Logo />
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item className="flex lg:hidden">
              <Dialog.Trigger type='button' className='-m-2.5 inline-flex items-center justify-center p-2.5'>
                <Bars3Icon className="h-6 w-6" />
              </Dialog.Trigger>
            </NavigationMenu.Item>
            <NavigationMenu.List className='hidden lg:flex '>
              {navigation.map((item) => (
                <NavigationMenu.Item
                  key={item.name}
                  className="px-4 py-2 text-sm font-semibold transition-co text-white duration-300 hover:text-violet-400"
                >
                  {item.sub ? (
                    <>
                      <NavigationMenu.Trigger className='group flex select-none items-center justify-between gap-[4px] font-medium text-white transition-co duration-300 hover:text-violet-400'>
                        {item.name}
                        <ChevronUpIcon className="h-4 w-4 relative transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" aria-hidden />
                      </NavigationMenu.Trigger>

                      <NavigationMenu.Content className='data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto'>
                        <NavigationMenu.Sub className="p-2 w-[500px]">
                          <NavigationMenu.List className='flex gap-2 justify-around w-full '>
                            {item.sub.map((subItem) => (
                              <NavigationMenu.Link key={subItem.name} href={subItem.href} className='bg-gray-200 font-normal p-2 rounded-full w-full text-center text-gray-800 duration-300 transition-all hover:bg-gray-300 hover:text-violet-600'>
                                {subItem.name}
                              </NavigationMenu.Link>
                            ))}
                          </NavigationMenu.List>

                        </NavigationMenu.Sub>
                      </NavigationMenu.Content>
                      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-end">
                        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] origin-[top_center] overflow-hidden rounded-full bg-white transition-[width,_height] duration-300 w-[var(--radix-navigation-menu-viewport-width)]" />
                      </div>
                    </>
                  ) : (
                    <NavigationMenu.Link href={item.href}>
                      {item.name}
                    </NavigationMenu.Link>
                  )}
                </NavigationMenu.Item>
              ))}
              <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
                <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
              </NavigationMenu.Indicator>
            </NavigationMenu.List>
            <NavigationMenu.Item className="hidden lg:flex lg:flex-1 lg:justify-end">
              <NavigationMenu.Link
                href="#"
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold leading-6 text-gray-900 transition-all duration-300 hover:text-violet-400"
              >
                Log in
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.Root>
        </motion.div>
        <Dialog.Portal>
          <Dialog.Overlay className='bg-black fixed inset-0 z-50 data-[state=open]:animate-overlayShow' />
          <Dialog.Content aria-describedby={undefined} className='data-[state=open]:animate-enterFromRight data-[state=closed]:animate-exitToRight fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10'>
            <Dialog.Title className="flex items-center justify-between border-b border-gray-700 pb-6">
              <a href="#" className="-m-1.5 p-1.5">
                <Logo />
              </a>
              <Dialog.Close type='button' className='-m-2.5 rounded-md p-2.5 text-gray-400'>
                <XMarkIcon className="h-6 w-6" />
              </Dialog.Close>
            </Dialog.Title>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-700">

                <Accordion.Root collapsible type='single' className='space-y-2 py-6'>
                  {navigation.map((item) => (

                    <Accordion.Item
                      value={item.name}
                      key={item.name}
                      className="data-[state=open]:bg-gray-800 data-[state=open]:rounded-lg transition duration-300 -mx-3 rounded-full px-3 py-2 text-base overflow-hidden font-semibold leading-7 hover:bg-gray-800 "
                    >
                      {item.sub ? (
                        <>
                          <Accordion.Header className='flex'>
                            <Accordion.Trigger className='group flex flex-1 items-center justify-between'>
                              {item.name}
                              <ChevronDownIcon className="h-4 w-4 transition-transform duration-300 ease-in group-data-[state=open]:-rotate-180" aria-hidden />
                            </Accordion.Trigger>
                          </Accordion.Header>
                          <Accordion.Content className='data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden'>
                            <div className='flex flex-col gap-3 py-2'>
                              {item.sub.map((subItem) => (
                                <Link className='bg-gray-900 px-3 py-2 rounded-lg hover:bg-gray-700' key={subItem.name} href={subItem.href}>
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </Accordion.Content>
                        </>
                      ) : (
                        <Accordion.Header asChild >
                          <Link href={item.href}>
                            {item.name}
                          </Link>
                        </Accordion.Header>
                      )}
                    </Accordion.Item>
                  ))}
                </Accordion.Root>
                <div className="py-6">
                  <a href="#" className="-mx-3 block rounded-full px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-800">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}
