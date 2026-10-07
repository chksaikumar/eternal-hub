/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#faf5f3',
          100: '#f3e8e4',
          200: '#e5cfc6',
          300: '#d1aca0',
          400: '#b98376',
          500: '#a05f52',
          600: '#84463b',
          700: '#6d362e',
          800: '#5a2c27',
          900: '#4a2622',
          950: '#2b1411',
        },
        gold: {
          50: '#fbf8ef',
          100: '#f5edd6',
          200: '#ead9ab',
          300: '#ddbd77',
          400: '#d1a04e',
          500: '#c78d3c',
          600: '#ab7131',
          700: '#88592c',
          800: '#704a2b',
          900: '#5f3e27',
        },
        cream: {
          50: '#fdfbf7',
          100: '#faf5ec',
          200: '#f4e9d6',
          300: '#ecd8b8',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
