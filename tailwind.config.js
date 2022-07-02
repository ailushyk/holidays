/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        pressed: 'inset 0px 4px 4px rgba(60, 60, 67, 0.34);',
      },
      colors: {
        positive: 'rgba(217, 249, 157, 1)',
        negative: 'rgba(254, 202, 202, 1)',
      },
    },
  },
  plugins: [],
}
