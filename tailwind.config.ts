// Daisi UI theme
export const theme = {
  gray: {
    "800": "#323231",
  },
  orange: {
    "200": "#E48653",
  },
  beige: {
    "100": "#FFFAE4",
  },
  transparent: "transparent",
};

export default {
  content: ["./**/*.tsx"],
  theme: {
    extend: {
      screens: {
        sm: { max: "640px" },
        md: { max: "768px" },
        lg: { max: "1024px" },
        xl: { max: "1280px" },
        "2xl": { max: "1536px" },
      },
      colors: {
        gray: {
          "800": "#323231",
        },
        orange: {
          "200": "#E48653",
        },
        beige: {
          "100": "#FFFAE4",
        },
        transparent: "transparent",
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
        serif: ["inherit", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
};
