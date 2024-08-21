'use client';

import { useScroll, motion, useTransform } from 'framer-motion';
import Logo from '@/components/Logo';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';

const navigation = [
  { name: 'Resources', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Marketplace', href: '/marketplace' },
  { name: 'Company', href: '#' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(scrollY, [0, 100], ['', 'rgba(3, 7, 18, 0.8)']);
  const padding = useTransform(scrollY, [0, 100], ['', '8px 15px']);
  const margin = useTransform(scrollY, [0, 100], ['', '20px']);
  const width = useTransform(scrollY, [0, 100], ['100%', '90%']);
  const borderRadius = useTransform(scrollY, [0, 100], ['0', '9999px']);

  return (
    <header className="absolute inset-x-0 top-0 z-30 flex justify-center">
      <motion.nav
        style={{ backgroundColor, padding, margin, width, borderRadius }}
        className="transtion-all fixed flex items-center justify-between p-6 drop-shadow-xl duration-300 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Comprice</span>
            <Logo />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-full border border-transparent px-4 py-2 text-sm font-semibold leading-6 text-white transition-all duration-300 hover:border-gray-800 hover:text-violet-400"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="rounded-full bg-white px-4 py-2 text-sm font-semibold leading-6 text-gray-900 transition-all duration-300 hover:text-violet-400">
            Log in
          </a>
        </div>
      </motion.nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Comprice</span>
              <span>Comprice</span>
            </a>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-400" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a href="#" className="-mx-3 block rounded-full px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
