import React from "react";
const { Helmet } = require("react-helmet");
import { fonts } from "../../fonts/fonts.css";

export const Seo = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Simon Sisay</title>
      {/* <link rel="icon" href={favicon} /> */}
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" type="text/css" href={fonts} />
    </Helmet>
  );
};

export default Seo;
