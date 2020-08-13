import { createGlobalStyle } from "styled-components";

/********* Types ********/
type GeneralTypes = {
  primaryColor: string;
  highlightColor: string;
  fonts: {
    avenirLight: string;
    avenirBold: string;
    avenirHeavy: string;
  };
};

type ThemeTypes = {
  mainBackground: string;
  backgroundLight: string;
  lightText: string;
  textColor: string;
  boxShadow?: string;
  darkText?: string;
};

/************************************/

export const generalTheme: GeneralTypes = {
  primaryColor: "#eee",
  highlightColor: "#d13a4c",
  fonts: {
    avenirBold: "AvenirLTPro-Medium",
    avenirHeavy: "AvenirLTPro-Heavy",
    avenirLight: "AvenirLTPro-Light",
  },
};

export const darkTheme: ThemeTypes = {
  mainBackground: "#030303",
  backgroundLight: "#020202",
  darkText: "#909096",
  lightText: "#e3e5d2",
  textColor: "#fafafa",
  highlightColor: "#d13a4c",
  boxShadow: "0px 2px 7px #0a0a0b, -3px -3px 0px #000000",
  ...generalTheme,
};

export const lightTheme: ThemeTypes = {
  mainBackground: "#fff",
  backgroundLight: "lightgrey",
  textColor: "#212529",
  lightText: "#6c757d",
  ...generalTheme,
};

export const GlobalStyles = createGlobalStyle`
  
  html, body{
      scroll-behavior:smooth;
      overflow-x: hidden;
      background:#000 !important;
  }



  * {
      margin:0px;
      padding:0px;
      box-sizing:border-box;
  }

  .highlight{
    color:${({ theme }) => theme.primaryColor} !important;
  }
  
  .link{
    color: cyan !important;
    cursor: pointer;
    text-decoration:underline;
  }

`;
