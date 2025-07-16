/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4B21D6", // Primary Blue
        secondary: "#4B21D6", // Secondary Blue
      },
      fontFamily: {
        sans: ["Gotham", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
