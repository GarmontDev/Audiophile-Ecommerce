/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.{html,js,jsx}',
    './src/pages/**/*.{html,js,jsx}',
    './index.html',
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
    },

    extend:{
      fontFamily: {
        manrope: 'Manrope, Helvetica, Arial',
      }

    }
  },
  plugins: [],
}

