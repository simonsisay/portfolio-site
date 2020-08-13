import React from "react";
const { Helmet } = require("react-helmet");
import { fonts } from "../../fonts/fonts.css";
import emailjs from "emailjs-com";

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
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"
      >{``}</script>
      <script type="text/javascript">
        {`${function () {
          emailjs.init(process.env.GATSBY_EMAIL_USER_ID);
        }}`}
      </script>
    </Helmet>
  );
};

export default Seo;
