/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          forest: '#315A35',
          deep: '#234227',
          ivory: '#F7F5F0',
          gold: '#C8A15A',
          charcoal: '#1E1E1E',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      screens: {
        'xs': '375px',
      }
    },
  },
  plugins: [],
}
