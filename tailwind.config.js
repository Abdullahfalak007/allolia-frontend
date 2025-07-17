// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B00FF",
        secondary: "#4B21D6",
      },
      fontFamily: {
        sans: ["Gotham", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      screens: {
        tablet: "640px", // already in Tailwind as sm
        laptop: "1024px", // md
        laptop1080: "1080px",
        laptop1440: "1440px",
      },
    },
  },
  plugins: [],
};
