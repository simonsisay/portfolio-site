import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preload" as="font" href="https://fonts.googleapis.com" />
        <link
          as="font"
          rel="preload"
          href="https://fonts.gstatic.com"
          crossOrigin={"true"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preload" href="https://fonts.googleapis.com"></link>
        <link
          rel="preload"
          href="https://fonts.gstatic.com"
          crossOrigin={"true"}
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,400;0,700;1,300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
