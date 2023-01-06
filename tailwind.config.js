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
        'border-grey': '#FBFBFB',
        'text-background': '#154A80',
        'input-grey': '#9DAFBD',
        'input-border': '#D1DBE3',
        'light-shade-cyan': '#EAF8F9',
        'shade-green': '#6BD24D',
        'meet-color': '#424A4F'


      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      width: {
        'box-width': '350px',
      },
      height: {
        'box-height': '350px',
        200: '633px',
      },
      dropShadow: {
        lg: '0px 4px 6px rgba(178, 171, 171, 0.25)',
      },
      gridTemplateColumns: {
        3: 'repeat(3, minmax(350px, 1fr))',
      },
      margin: {
        100: '400px',
      },
    },
  },
  plugins: [],
};
