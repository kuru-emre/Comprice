import { LasticaFont } from 'libs';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className={`text-xl font-light tracking-widest no-underline ${LasticaFont.className}`}>
      Comprice
    </Link>
  );
}
