/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{tsx,ts,js,scss}'],
  darkMode: 'media',
  theme: {
    direction: 'rtl',
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
    extend: {
      colors: {
        primary: '#1fb6ff',
        secondary: '#aa00ff',
        'primary-reverse': '#000',
        gray: { 500: '#4B4B4B', 200: '#F6F6F6' },
      },
    },
  },
  plugins: [],
}
