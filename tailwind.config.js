/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      "neue": ["Bebas Neue", "serif"],
      "monoton": ["Monoton", "serif"],
      "roboto": ["Roboto Mono", "serif"]
    },
    extend: {
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '76%' },
        },
        blinkCaret: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'orange' },
        },
      },
      animation: {
        typing: 'typing 3.5s steps(40, end)',
        blinkCaret: 'blinkCaret .75s step-end infinite',
      },
    },
  },
  plugins: [],
}

