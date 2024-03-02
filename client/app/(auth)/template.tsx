'use client';

import { easeInOut, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import localFont from 'next/font/local';

const lastica = localFont({ src: './../fonts/lastica.ttf' });

export default function AuthTemplate({ children }: Readonly<{ children: React.ReactNode }>) {
  const path = usePathname();

  function backgroundImg(path: string) {
    if (path == '/register') {
      return `order-last text-end bg-[url('/images/register.jpg')] `;
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
        className={`h-full w-1/2 bg-cover p-4 text-white ${backgroundImg(path)}`}
      >
        <div className="w-full p-4">
          <h1 className={`text-xl tracking-widest lg:text-4xl ${lastica.className}`}>Comprice</h1>
          <h2 className={`lg:text-md mt-1 text-sm tracking-widest ${lastica.className}`}>Worldwide Trade</h2>
        </div>
      </motion.div>
    </div>
  );
}
