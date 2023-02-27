/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FFB400",
        variantPrimary: "#FFB400F2",
        secondary: "#2B2B2B",
        variantSecondary: "#18191A",
        par: "#767676",
        lightBg: "#E1E1E1",
        darkBg: "#18191A",
        lightCompBg: "#FFFFFF",
        darkCompBg: "#242526",
        available: "#7EB942",
      },
    },
  },
  plugins: [],
};
