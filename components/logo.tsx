import { LasticaFont } from 'lib';
import { Button } from 'ui';
import Link from 'next/link';

export function Logo() {
  return (
    <Button asChild variant="ghost">
      <Link href="/" className={`tracking-widest lg:text-xl ${LasticaFont.className}`}>
        Comprice
      </Link>
    </Button>
  );
}
