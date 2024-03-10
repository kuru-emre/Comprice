import type { Metadata } from 'next';
import { ThemeProvider } from 'components/theme-provider';
import { InterFont } from 'lib';
import 'styles';

export const metadata: Metadata = {
  title: 'Comprice',
  description: 'Comprice description...'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={InterFont.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
