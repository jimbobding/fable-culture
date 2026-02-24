/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // all pages & layouts
    "./src/components/**/*.{js,ts,jsx,tsx}", // all components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  animation: {
    slowBounce: "slowBounce 6s ease-in-out infinite",
  },
  keyframes: {
    slowBounce: {
      "0%, 100%": { transform: "translateY(0)" },
      "50%": { transform: "translateY(-6px)" },
    },
  },
};
