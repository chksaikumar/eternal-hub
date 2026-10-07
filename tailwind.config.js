/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f1f7f3',
          100: '#dfebe2',
          200: '#c0d7c8',
          300: '#94bca2',
          400: '#649c7b',
          500: '#43805f',
          600: '#31664b',
          700: '#28523d',
          800: '#1a4230',
          900: '#0d3b2e',
          950: '#06231b',
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
