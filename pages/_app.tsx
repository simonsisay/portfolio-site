import "../styles/globalStyles.ts";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../styles/globalStyles";
import AppTheme, { ThemeContext } from "../context/themeProvider";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <GlobalStyle />
      <AppTheme>
        <ThemeContext.Consumer>
          {({ theme: currentTheme }) => (
            <ThemeProvider theme={theme[currentTheme]}>
              <Component {...pageProps} />
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
      </AppTheme>
    </>
  );
}

export default MyApp;
