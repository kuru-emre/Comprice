import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const InterFont = Inter({ subsets: ['latin'] });
export const LasticaFont = localFont({ src: '../../public/fonts/Lastica.ttf', variable: '--font-lastica' });
