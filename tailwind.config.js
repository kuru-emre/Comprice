/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}

