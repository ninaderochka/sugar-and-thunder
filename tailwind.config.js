/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
          'footer-gray': '#718096',
          'light-yellow': '#FEE89E',
          'light-blue': '#EAF8F9',
          'button-blue': '#2DD3E3',
          'shadow-grey': '#B2ABAB',
          'border-grey':'#FBFBFB',
          'text-background': '#154A80'
      },
      fontFamily: {
          poppins: ['Poppins', 'sans-serif']
      },
      width: {
        'box-width': '350px',
      },
      height: {
        'box-height': '350px',
         '200':'633px',
      },
      dropShadow: {
        'lg': '0px 4px 6px rgba(178, 171, 171, 0.25)',
      },
      
    },
  },
  plugins: [],
};
