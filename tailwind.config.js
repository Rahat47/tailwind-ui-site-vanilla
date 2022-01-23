module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: {
          // diffrent shades of torquoise
          100: "#E6FFFA",
          200: "#B2F5EA",
          300: "#81E6D9",
          400: "#4FD1C5",
          500: "#38B2AC",
          600: "#319795",
          700: "#2C7A7B",
          800: "#285E61",
          900: "#2b4a4a",
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}