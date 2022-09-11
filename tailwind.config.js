/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts,js,scss}'],
  theme: {
    direction: 'rtl',
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
    extend: {
      colors: {
        primary: '#1fb6ff',
        secondary: '#8492a6',
        'primary-reverse': '#000',
        grey: { 300: '#4B4B4B' },
      },
    },
  },
  plugins: [],
}
