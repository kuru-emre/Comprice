'use client';

import { easeInOut, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function AuthTemplate({ children }: Readonly<{ children: React.ReactNode }>) {
  const path = usePathname();

  function backgroundImg(path: string) {
    if (path == '/register') {
      return `order-last bg-[url('/images/register.jpg')] `;
    }

    return `order-first bg-[url('/images/login.jpg')] `;
  }

  return (
    <div className="flex h-screen w-screen">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ easeInOut, duration: 0.25 }}
        className="relative flex h-full w-1/2 items-center justify-center"
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ easeInOut, duration: 0.25 }}
        className={`h-full w-1/2 bg-cover ${backgroundImg(path)}`}
      ></motion.div>
    </div>
  );
}
