module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0dcdb6",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        // setup custom color , has DEFAULT
        indigo: {
          light: "#b3bcf5",
          DEFAULT: "#5c6ac4",
        },
      },
      fontFamily: {
        body: ['"Lato"'],
        "body-bold": ['"Lato Bold"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
