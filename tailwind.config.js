/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: "'Roboto', sans-serif",
        display: "'Poppins', sans-serif",
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          lg: '3rem',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      colors: {
        baseWhite: '#FFF',
        baseGray100: '#FAFAFA',
        baseGray200: '#EFEFEF',
        baseGray400: '#E8E8E8',
        baseGray500: '#DDDDDD',
        baseGray600: '#C2C2C2',
        baseGray700: '#989898',
        baseGray800: '#686868',
        baseGray900: '#363636',
        baseBlack: '#000',
        natureBeauty: '#F06619',
        natureSunLight: '#FFF59A',
        natureSun: '#FDE61B',
        natureEarth: '#4A4223',
        natureLight: '#D9AF7B',
        accentLight: '#CFD48A',
        accentMid: '#49B258',
        accentLightDark: '#2D7137',
        accentDark: '#054A0F',
        accent: {
          DEFAULT: '#9FDF14',
          hover: '#92B83F',
        },
      },
      boxShadow: {
        primary: '0px 20px 200px rgba(57, 23, 119, 0.05)',
      },
      backgroundImage: {
        newsletter: '',
        newsletterBox: '',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
