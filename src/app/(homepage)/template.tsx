'use client';

import { easeInOut, motion } from 'framer-motion';

export default function HomeTemplate({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ easeInOut, duration: 0.25 }}>
      {children}
    </motion.div>
  );
}
