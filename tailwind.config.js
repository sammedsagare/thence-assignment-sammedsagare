/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grace: ["Covered By Your Grace", "cursive"],
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        tBlack: "#1c1c1c",
        tGreen: "#2DA950",
        tWhite: "#D7D7D7",
        tGrey: "#828282",
      },
    },
  },
  plugins: [],
};
