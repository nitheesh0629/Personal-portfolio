/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        cream: {
          DEFAULT: "#FAFAF8",
          50: "#FDFCFA",
          100: "#FAF8F4",
          200: "#F5F0E8",
          300: "#EDE8DF",
          400: "#E0D8CB",
        },
        warm: {
          50: "#FDF8EF",
          100: "#F5EDD8",
          200: "#EBDCBA",
          300: "#D4B896",
          400: "#C9A96E",
          500: "#B8935A",
          600: "#9A7645",
          700: "#7D5E33",
        },
      },
      boxShadow: {
        soft: "0 2px 20px rgba(0, 0, 0, 0.05)",
        card: "0 4px 30px rgba(0, 0, 0, 0.07)",
        hover: "0 8px 40px rgba(0, 0, 0, 0.12)",
        "warm-sm": "0 2px 12px rgba(201, 169, 110, 0.15)",
        "warm-md": "0 4px 24px rgba(201, 169, 110, 0.25)",
      },
    },
  },
  plugins: [],
};
