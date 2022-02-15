import "../styles/globalStyles.ts";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../styles/globalStyles";
import AppTheme, { ThemeContext } from "../context/themeProvider";
import Head from "next/head";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Simon Sisay</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta
          name="keywords"
          content="Ethiopia software React Developer software web development freelancer simon sisay"
        />
      </Head>
      <GlobalStyle />
      <AppTheme>
        {/* <DefaultSeo {...SEO} /> */}
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
