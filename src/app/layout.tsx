import { ColorSchemeScript, MantineColorsTuple, MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import type { Metadata } from 'next';
import { Maintenance } from 'components';
import { InterFont } from 'libs/fonts';
import 'styles';

const myColor: MantineColorsTuple = [
  '#ffe9f1',
  '#ffd1e0',
  '#faa1bd',
  '#f66e99',
  '#f2437a',
  '#f02866',
  '#f0185c',
  '#d6094d',
  '#c00043',
  '#a90039'
];

const theme = createTheme({
  colors: {
    myColor
  },
  fontFamily: InterFont.style.fontFamily
});

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
        <MantineProvider theme={theme}>
          <Notifications />
          {process.env.MAINTENANCE === 'true' ? <Maintenance /> : children}
        </MantineProvider>
      </body>
    </html>
  );
}
