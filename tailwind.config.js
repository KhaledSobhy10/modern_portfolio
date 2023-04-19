/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "bounce-left": {
          "0%, 100%": { transform: "translateX(-25%)" },
          "50%": { transform: "translateX(0)" },
        },
        "increase-width": {
          "0%, 100%": { transform: "scaleX(1.2)" },
          "50%": { transform: "scaleX(.3)" },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        "bounce-left": "bounce-left 1s  infinite",
        "increase-width": "increase-width 2s ease-in-out infinite",
      },
      gridTemplateColumns: {
        projectsGrid: "repeat(auto-fit, minmax(250px,350px))",
      },
      height: {
        "40%": "40%",
        50: "50%",
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
