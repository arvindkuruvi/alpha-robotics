/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      alphaPurple: "#101d2a",
      alphaGreen: "#21ab51",
      alphaWhite: "#FFFFFF",
      alphaGray: "#808080",
      alphaBlack: "#000000",
      alphaLightGray: "#BFB8B8",
    },
    extend: {
      fontFamily: {
        zona: ["Zona Pro", "sans-serif"],
      },
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
      },
    },
  },
  plugins: [],
};
