import { DefaultTheme } from "styled-components";

const common = {
  primaryColor: "#ED0C32",
  headerSize: "8rem",
  gray1: "#666",
  black20: "#1c1b1b",
};

const lightTheme: DefaultTheme = {
  ...common,
  background1: "#fff",
  textColor: "#000",
  background2: "#e8e5e8",
  lightText: "#4f4b4b",
};
const darkTheme: DefaultTheme = {
  ...common,
  background1: "hsl(0deg 0% 3%)",
  textColor: "#fff",
  background2: "#0c0b0b",
  lightText: "#c9c9c9",
};

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};
