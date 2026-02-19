/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      colors: {
        darkClr: "#19283f",
        greenClr: "#33d1cc",
        redClr: "#ff3150",
        yellowClr: "#ffc400",
        sectionClr: "#eff7fa",
        textClr: "#ffffff80",
      },
    },
  },
  plugins: [],
};
