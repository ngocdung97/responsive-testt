module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
      },
      colors: {
        gameColors: {
          green: "#1C6E0A",
          pink: "#22760D",
          yellow: "#FCF66F",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
