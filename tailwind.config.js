/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Manrope', 'sans-serif'],
        heading: ['"Covered By Your Grace"', 'sans-serif'],
      },
      colors: {
        primary: '#1C1C1C',
        heading: '#2DA950',
        background: {
          primary: '#F5F5F5',
          accent: '#E8EEE7',
        },
      },
    },
  },
  plugins: [],
};
