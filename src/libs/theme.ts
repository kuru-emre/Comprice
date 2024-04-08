import { MantineColorsTuple, createTheme } from '@mantine/core';
import { InterFont } from 'libs/fonts';

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

export default theme;
