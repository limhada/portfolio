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
          mycolor1: '#52796F',
          // mycolor2: '#ff6b61',
          // mycolor2: '#e76f51',
          mycolor2: '#14213D',
          mycolor3: '#fca311',

      },
    },
  },
  plugins: [],
};
