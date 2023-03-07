export default {
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    fonts: {
      default: "#4C4C4C",
      error: "#CC0000",
    },
    actions: {
      default: {
        background: "#E0E0E0",
        hover: "#C9C9C9",
        color: "#4C4C4C",
      },
      primary: {
        background: "#30A0EF",
        hover: "#2680BF",
        color: "#FFFFFF",
      },
      secondary: {
        background: "#455A64",
        hover: "#1C313A",
        color: "#FFFFFF",
      },
      danger: {
        background: "#D32F2F",
        hover: "#9A0007",
        color: "#FFFFFF",
      },
      outline: {
        background: "#BCBCBC", // border color
        hover: "#C2C2C2", // bgHover color
        color: "#4C4C4C",
      },
      link: {
        background: "transparent",
        hover: "transparent",
        color: "#30A0EF",
      },
      disabled: {
        background: "#E0E0E0",
        color: "#9E9E9E",
      },
    },
  },
  fonts: {
    base: "Montserrat",
  },
  space: (size) => size * 8,
};
