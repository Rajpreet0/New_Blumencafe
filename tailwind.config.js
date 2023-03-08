/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        merri: ['Merriweather', 'serif'],
        dancing: ['Dancing Script', 'cursive'],
        lobster: ['Lobster Two','cursive'],
      }
    },
    colors:{
      main: '#0F3D3E',
      main_text: '#fff',
      bg: '#a4754a',
      sub_main: '#8E793E',
      white: '#fff',
      black: '#000',
    },
  },
  plugins: [],
}
