/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#9BFF00",
          secondary: "#DBFD51",
        },
        black: {
          DEFAULT: "#000000",
          secondary: "#050505",
          tertiary: "#666666",
          bg: "#111111",
          "item-bg": "#1D1D1D",
        },
        icon: {
          secondary: "#696969",
        },
        diver: {
          DEFAULT: "rgba(255, 255, 255, 0.12)"
        }
      }
    },
  },
  plugins: [],
}
