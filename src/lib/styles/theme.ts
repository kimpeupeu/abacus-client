const defaultColor = {
  red: "#FFF6F6",
  black: "#191919",
};

const darkColor = {
  red: "#333",
  black: "#eee",
};

export type Color = typeof defaultColor;

export const themes = {
  default: { color: defaultColor },
  light: { color: defaultColor },
  dark: { color: darkColor },
};

export default { color: defaultColor };
