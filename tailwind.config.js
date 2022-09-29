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
        'primary-reverse': '#fff',
        gray: { 500: '#4B4B4B',350:"#BABABA",250:"#D7D7D7", 200: '#F6F6F6', },
        red:{badge:"#dd0000"},
        disabled: '#888888',
      },
    },
  },
  plugins: [],
}
