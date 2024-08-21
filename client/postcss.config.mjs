/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    autoprefixer: {},
    tailwindcss: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: { preset: 'advanced', discardComments: { removeAll: true } } } : {}),
  },
};

export default config;
