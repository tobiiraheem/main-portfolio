/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        animate1: {
          "100%": { transform: "translateY(27px)" },
        },
        animate2: {
          "100%": { transform: `translateY(${getRandomNumber(19, 31)}px)` },
        },
      },
      animation: {
        bouncing1: "animate1 2s infinite ease alternate",
        bouncing2: "animate2 1.8s infinite ease alternate",
      },
      colors: {
        primary: "#000000",
        secondary: "#dff7f1",
        tertiary: "#05445E",
        "black-100": "#100d25",
        "black-200": "#0C2D48",
        "white-100": "#f3f3f3",

        background: "#07111f",
        surface: "#0d1a2b",
        foreground: "#f5f7fa",
        muted: "#94a3b8",
        accent: "#38bdf8",
      },
      boxShadow: {
        card: "0px 20px 25px -5px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg-02.png')",
      },
      fontFamily: {
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        display: ["Manrope", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
