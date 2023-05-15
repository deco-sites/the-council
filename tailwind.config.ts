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
    keyframes: {
      "in-between": {
        "0%": {
          opacity: "0",
          transform: "translateY(35px)",
        },

        "100%": {
          opacity: "1",
          transform: "translateY(0px)",
        },
      },
    },

    animation: {
      "in-between": "in-between 1s ease-in-out forwards",
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

      "white": "#fff",
    },
    extend: {
      maxWidth: {
        "4xl": "986px",
      },
      padding: {
        1: "0.3rem",
      },

      height: {
        "user": "calc(100% - 121px - 6%)",
      },

      screens: {
        sm: { min: "488px" },
        md: { min: "767px" },
        lg: { min: "1025px" },
        xl: { min: "1280px" },
        "2xl": { min: "1536px" },
        mdMin: { min: "767px" },
      },

      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
        serif: ["inherit", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
};
