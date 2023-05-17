// Daisi UI theme
export const theme = {
  gray: {
    "800": "#323231",
    "600": "#999998",
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
    colors: {
      gray: {
        "800": "#323231",
        "600": "#999998",
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
        "2vw": "2.5vw",
        "4vw": "4vw",
        "3vwMax": "3.3vmax",
        "6vwMax": "6.6vmax",
        "6vw": "6vw",
      },

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

        "menu": {
          "0%": {
            opacity: "0",
          },

          "100%": {
            opacity: "1",
          },
        },
      },

      animation: {
        "in-between": "in-between 1s ease-in-out forwards",
        "menu": "menu 300ms ease-in-out forwards",
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
