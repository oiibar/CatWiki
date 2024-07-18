/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      montserrat: "Montserrat",
    },
    extend: {
      backgroundImage: {
        hero: "url('./assets/hero.png')",
      },
    },
  },
  plugins: [],
});
