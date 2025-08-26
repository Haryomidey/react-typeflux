/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6B46C1",
        secondary: "#FBBF24",
        background: "#F9FAFB",
        text: "#1F2937",
      },
      fontFamily: {
        serif: ["Merriweather", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}