module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: {
          // Different shades of dark torquoise
          100: "#E6F4F9",
          200: "#BFE1E9",
          300: "#8ED6E3",
          400: "#5CBBD5",
          500: "#2CA9C9",
          600: "#1A8FB7",
          700: "#18699B",
          800: "#0F4F7D",
          900: "#0A3C5F"
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
