/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'c-almost-white': 'hsl(0, 0%, 98%)',
        'c-medium-gray': 'hsl(0, 0%, 41%)',
        'c-almost-black': ' hsl(0, 0%, 8%)',
      },
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
      screens: {
        desk: '375px',
      },
    },
  },
  plugins: [],
};
