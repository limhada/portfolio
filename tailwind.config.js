/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {

          // mycolor1: '#167c80',
          // mycolor1: '#2a9d8f',
          // mycolor1: '#354F52',
          // mycolor1: '#52796F',
          mycolor1: '#0F4C5C',
          // mycolor2: '#ff6b61',
          // mycolor2: '#e76f51',
          mycolor2: '#14213D',
          mycolor3: '#FAEDCD',
          // mycolor4: '#31587A',
          // mycolor4: '#1D3557',
          mycolor4: '#274769',
          mycolor5: '#FFB703',


      },
    },
  },
  plugins: [],
};
