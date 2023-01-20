/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      // that is animation class
      animation: {
        fade: "fadeOut 5s ease-in-out",
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { backgroundColor: theme("colors.white") },
          "100%": { backgroundColor: theme("colors.transparent") },
        },
      }),
    },
  },
  plugins: [],
  safelist: [
    "bg-green-500",
    "bg-amber-500",
    "bg-orange-500",
    "bg-indigo-500",
    "bg-red-500",
    "bg-cyan-500",
    "bg-cyan-600",
    "bg-sky-500",
    "bg-violet-500",
    "bg-fuchsia-500",
    "bg-pink-500",
    "shadow-green-500/100",
    "shadow-amber-500/100",
    "shadow-red-500/100",
    "shadow-cyan-500/100",
    "shadow-violet-500/100",
    "shadow-pink-500/100",
  ],
};
