'use client';

import { motion } from 'framer-motion';
import localFont from 'next/font/local';
import Link from 'next/link';

const lastica = localFont({ src: './../app/fonts/lastica.ttf' });

const ripple = {
    initial: { scale: 1 },
    animate: { scale: 1.3 }
};

export function Logo() {
    return (
        <Link href="/">
            <motion.div
                initial="initial"
                animate="initial"
                whileHover="animate"
                className={`flex cursor-pointer text-4xl tracking-widest lg:text-2xl ${lastica.className}`}
            >
                <motion.div variants={ripple}>C</motion.div>
                <motion.div variants={ripple}>O</motion.div>
                <motion.div variants={ripple}>M</motion.div>
                <motion.div variants={ripple}>P</motion.div>
                <motion.div variants={ripple}>R</motion.div>
                <motion.div variants={ripple}>I</motion.div>
                <motion.div variants={ripple}>C</motion.div>
                <motion.div variants={ripple}>E</motion.div>
            </motion.div>
        </Link>

    );
}
