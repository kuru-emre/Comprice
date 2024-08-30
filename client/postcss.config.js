/** @type {import('postcss-load-config').Config} */

module.exports = {
  plugins: {
    autoprefixer: {},
    tailwindcss: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: { preset: 'advanced', discardComments: { removeAll: true } } } : {}),
  },
};
