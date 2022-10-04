/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
  safelist: [
    "bg-green-500",
    "bg-amber-500",
    "bg-red-500",
    "bg-cyan-500",
    "bg-violet-500",
    "bg-pink-500",
    "shadow-green-500/100",
    "shadow-amber-500/100",
    "shadow-red-500/100",
    "shadow-cyan-500/100",
    "shadow-violet-500/100",
    "shadow-pink-500/100",
  ],
};
