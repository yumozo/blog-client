/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    letterSpacing: {
      tight: '-.-015em'
    },
    extend: {
      height: {
        'half-screen': '50vh'
      }
    }
  },
  plugin: []
}
