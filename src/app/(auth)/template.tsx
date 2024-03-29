'use client';

import { easeInOut, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { LasticaFont } from 'libs';

export default function AuthTemplate({ children }: Readonly<{ children: React.ReactNode }>) {
  const path = usePathname();

  function backgroundImg(path: string) {
    if (path == '/register') {
      return `order-last text-end bg-register brightness-[0.55] lg:brightness-100`;
    }

    return `order-first bg-auth brightness-[0.55] lg:brightness-100`;
  }

  return (
    <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ easeInOut, duration: 0.25 }}>
      {children}
    </motion.div>
  );
}
