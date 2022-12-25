/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-yellow': '#FEE89E',
        'light-blue': '#EAF8F9',
        'button-blue': '#2DD3E3',
        'shadow-grey': '#B2ABAB',
        'border-grey': '#FBFBFB',
        'text-background': '#154A80'
      },
      fontFamily: {
          display: ['Poppins']
      },
      height: {
        '200':'633px'
    },
    },
  },
  plugins: [],
};
