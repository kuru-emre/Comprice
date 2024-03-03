'use client';

import Link from 'next/link';

import { Button, Input } from 'ui';
import { Logo } from './logo';

export function Footer() {
  return (
    <footer className='border-t-2 shadow-inner'>
      <div
        className="container mx-auto flex flex-col
        flex-wrap
        px-4
        py-16
        md:flex-row
        md:flex-nowrap
        md:items-center lg:items-start
      "
      >
        <div className="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left">
          <Logo />
          <p className="mt-2 text-sm">
            Footer is a valuable resource that complements the main content of the website by providing quick links,
            legal information, and ways to connect, creating a well-rounded and user-friendly experience for visitors.
          </p>
          <div className="mt-4 flex">
            <Input type="email" placeholder="Email" />
            <Button>Subscribe</Button>
          </div>
        </div>
        <div className="mt-4 w-full justify-between text-center lg:flex">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <h2 className="mb-2 font-bold tracking-widest">Quick Links</h2>
            <ul className="mb-8 list-none space-y-2 text-sm">
              <li>
                <Link href={'/'}>Link 1</Link>
              </li>
              <li>
                <Link href={'/'}>Link 2</Link>
              </li>
              <li>
                <Link href={'/'}>Link 3</Link>
              </li>
              <li>
                <Link href={'/'}>Link 4</Link>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <h2 className="mb-2 font-bold tracking-widest">Quick Links</h2>
            <ul className="mb-8 list-none space-y-2 text-sm">
              <li>
                <Link href={'/'}>Link 1</Link>
              </li>
              <li>
                <Link href={'/'}>Link 2</Link>
              </li>
              <li>
                <Link href={'/'}>Link 3</Link>
              </li>
              <li>
                <Link href={'/'}>Link 4</Link>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <h2 className="mb-2 font-bold tracking-widest ">Quick Links</h2>
            <ul className="mb-8 list-none space-y-2 text-sm">
              <li>
                <Link href={'/'}>Link 1</Link>
              </li>
              <li>
                <Link href={'/'}>Link 2</Link>
              </li>
              <li>
                <Link href={'/'}>Link 3</Link>
              </li>
              <li>
                <Link href={'/'}>Link 4</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="-mt-12 flex justify-center">
        <p className="pb-2 text-center">@2024 All rights reserved by your website.</p>
      </div>
    </footer>
  );
}
