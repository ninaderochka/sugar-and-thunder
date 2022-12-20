/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
          'light-yellow': '#FEE89E',
          'light-blue': '#EAF8F9',
          'button-blue': '#2DD3E3'
      },
      fontFamily: {
          display: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
};
