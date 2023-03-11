/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        projectsGrid: "repeat(auto-fill, minmax(300px,1fr))",
      },
      height: {
        80: "80%",
        85: "85%",
        90: "90%",
        95: "95%",
      },
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
