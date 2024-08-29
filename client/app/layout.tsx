import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './global.css';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });
const lastica = localFont({ src: '../public/fonts/Lastica.ttf', variable: '--font-lastica' });

export const metadata: Metadata = {
  title: 'Comprice World',
  description: 'Simplifying B2B Trade',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${lastica.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
