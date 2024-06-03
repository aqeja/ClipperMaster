module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js,tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        radioCanada: ["RadioCanada", "sans-serif"],
      },
      colors: {
        primary: "rgb(86 204 242 / var(--tw-bg-opacity))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
