/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{tsx,ts,js,scss}'],
  darkMode: 'media',
  theme: {
    direction: 'rtl',
    extend: {
      colors: {
        primary: '#1fb6ff',
        secondary: '#aa00ff',
        "dark-text": "#09122a",
        'primary-reverse': '#fff',
        gray: {
          500: '#4B4B4B', 350: "#BABABA", 250: "#D7D7D7", 200: '#F6F6F6', 400: "#9F9F9F",
          // 50: '#FBFBFB',
          // 100: '#F7F7F7',
          // 200: '#EBEBEB',
          // 300: '#DFDFDF',
          // 400: '#CFCFCF',
          // 450: '#C4C4C4',
          // 500: '#BFBFBF',
          550: '#BABABA',
          // 600: '#9C9C9C',
          // 700: '#818181',
          // 800: '#707070',
          // 900: '#5E5E5E',
        },
        red: { badge: "#dd0000", error: '#DC1919', },
        disabled: '#888888',
      },
    },
  },
  plugins: [],
}
