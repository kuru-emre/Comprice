import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';
import { theme } from 'libs';
import 'styles';

export const metadata: Metadata = {
  title: 'Comprice',
  description: 'Comprice description...'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
