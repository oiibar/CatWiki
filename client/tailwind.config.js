/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      montserrat: "Montserrat",
    },
    extend: {
      backgroundImage: {
        hero: "url('./assets/hero.png')",
      },
      colors: {
        "dark-bg": "#1F1F1F",
        "section-bg": "#2E2E2E",
        "dark-text": "#FFFFFF",
      },
    },
  },
  plugins: [],
});
