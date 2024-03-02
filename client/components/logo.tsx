'use client';

import localFont from 'next/font/local';
import Link from 'next/link';
import { Button } from 'ui';

const lastica = localFont({ src: './../app/assets/fonts/lastica.ttf' });

export function Logo() {
  return (
    <Button asChild variant="ghost">
      <Link href="/" className={`tracking-widest lg:text-xl ${lastica.className}`}>
        Comprice
      </Link>
    </Button>
  );
}
