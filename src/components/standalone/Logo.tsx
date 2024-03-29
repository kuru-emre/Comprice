import { Button } from '@mantine/core';
import { LasticaFont } from 'libs';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className={`text-xl font-light tracking-widest text-white no-underline ${LasticaFont.className}`}>
      Comprice
    </Link>
  );
}
