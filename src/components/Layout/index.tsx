import React from "react";
import { ThemeProvider } from "styled-components";
import {
  default as AppThemeProvider,
  ThemeContext as AppThemeContext,
} from "../../context/ThemeContext/Provider";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import Navbar from "../Navbar";
import { darkTheme, lightTheme, GlobalStyles } from "../../globalStyles";
import { Container } from "./styles";
import Seo from "../Seo";

const Layout: React.FC = ({ children }) => {
  return (
    <AppThemeProvider>
      <AppThemeContext.Consumer>
        {({ currentTheme }) => (
          <ThemeProvider
            theme={currentTheme === "dark" ? darkTheme : lightTheme}
          >
            <GlobalStyles />
            <Seo />
            <Container>
              <div className="background"></div>
              <div className="nav-container">
                <Navbar />
              </div>
              <div className="app-content">{children}</div>
            </Container>
          </ThemeProvider>
        )}
      </AppThemeContext.Consumer>
    </AppThemeProvider>
  );
};

export default Layout;
