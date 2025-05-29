export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        emerald: {
          900: "#064e3b",
        },
        gold: {
          400: "#d4af37",
        },
        ivory: {
          100: "#f7f4ed",
        },
        charcoal: {
          900: "#1f2937",
        },
        blush: {
          300: "#f9a8d4",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};