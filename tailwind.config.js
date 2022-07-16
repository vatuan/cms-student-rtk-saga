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
        dark: "#293255",
        "dark-light": "#333a54",
        gray: {
          light: "#F5F6FA",
          "01": "rgba(173, 177, 189, 0.15)",
          "02": "#ADB1BD",
        },
      },
      fontFamily: {
        body: ['"Lato"'],
        "body-bold": ['"Lato Bold"'],
      },
    },
    // spacing: {
    //   '9': '18px',
    // }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
