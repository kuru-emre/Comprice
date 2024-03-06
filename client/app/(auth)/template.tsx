'use client';

import { easeInOut, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import localFont from 'next/font/local';

const lastica = localFont({ src: './../assets/fonts/lastica.ttf' });

export default function AuthTemplate({ children }: Readonly<{ children: React.ReactNode }>) {
  const path = usePathname();

  function backgroundImg(path: string) {
    if (path == '/register') {
      return `order-last text-end bg-register brightness-[0.55] lg:brightness-100`;
    }

    return `order-first bg-auth brightness-[0.55] lg:brightness-100`;
  }

  return (
    <div className="flex h-screen w-screen">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ easeInOut, duration: 0.25 }}
        className="relative flex h-full w-full items-center justify-center lg:w-1/2"
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ easeInOut, duration: 0.25 }}
        className={`absolute -z-10 h-full w-full bg-cover p-4 text-white lg:relative lg:block lg:w-1/2 ${backgroundImg(path)}`}
      >
        <div className="hidden lg:block lg:w-full lg:p-4">
          <h1 className={`text-xl tracking-widest lg:text-4xl ${lastica.className}`}>Comprice</h1>
          <h2 className={`lg:text-md mt-1 text-sm tracking-widest ${lastica.className}`}>Worldwide Trade</h2>
        </div>
      </motion.div>
    </div>
  );
}
