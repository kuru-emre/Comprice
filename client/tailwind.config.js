/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        lastica: ['var(--font-lastica)'],
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: '0', transform: 'translateX(200px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        enterFromLeft: {
          from: { opacity: '0', transform: 'translateX(-200px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        exitToRight: {
          from: { opacity: '1', transform: 'translateX(0)' },
          to: { opacity: '0', transform: 'translateX(200px)' },
        },
        exitToLeft: {
          from: { opacity: '1', transform: 'translateX(0)' },
          to: { opacity: '0', transform: 'translateX(-200px)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'rotateX(-10deg) scale(0.9)' },
          to: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
        },
        scaleOut: {
          from: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
          to: { opacity: '0', transform: 'rotateX(-10deg) scale(0.95)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        slideDown: {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' },
        },
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '0.5' },
        },
      },
    },
    animation: {
      scaleIn: 'scaleIn 200ms ease',
      scaleOut: 'scaleOut 200ms ease',
      fadeIn: 'fadeIn 200ms ease',
      fadeOut: 'fadeOut 200ms ease',
      enterFromLeft: 'enterFromLeft 250ms ease',
      enterFromRight: 'enterFromRight 250ms ease',
      exitToLeft: 'exitToLeft 250ms ease',
      exitToRight: 'exitToRight 250ms ease',
      slideDown: 'slideDown 300ms ease',
      slideUp: 'slideUp 300ms ease ',
      overlayShow: 'overlayShow 300ms ease forwards',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(({ matchUtilities }) => {
      matchUtilities({
        perspective: (value) => ({
          perspective: value,
        }),
      });
    }),
  ],
};
