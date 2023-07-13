/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      white: "#ffffff",
      background: {
        DEFAULT: "#111111",
        light: "#1D1D1D",
      },
      font: {
        DEFAULT: "#f3f4f6",
        400: "#9ca3af",
        500: "#969696",
      },
      gray: {
        800: "#262626",
      },
      blue: {
        100: "#0f1c2e",
        200: "#10233d",
        300: "#0f2f57",
        400: "#0d3868",
        500: "#0a4380",
        600: "#0091ff",
        700: "#0072f5",
        800: "#0062d1",
        900: "#52a8ff",
        1000: "#ebf6ff",
      },
    },
  },
  plugins: [],
}
