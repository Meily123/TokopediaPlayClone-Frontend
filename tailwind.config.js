/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xxxs: ['9px', '11px'],
        xxs: ['10px', '12px'],
      },
      colors: {
        'discount-green': '#00AA5B',
        'base-night': '#28282f',
      }
    },
  },
  plugins: [],
}

