import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

export const InterFont = Inter({ subsets: ['latin'] });

export const LasticaFont = localFont({ src: './../public/fonts/lastica.ttf' });
