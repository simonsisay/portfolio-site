import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
html,
body {
  scroll-behavior: smooth;
  padding:0px;
  margin: 0px;
  font-family: "Rift-Regular", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  overflow-x: hidden;
  background:#1a1a1a;
}


h1, h2, h3, h4, h5, h6, a{
    margin:0px;
    padding:0px;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

.header{
    font-family: 'Prompt', sans-serif;
    font-weight: 700;
}

.text{
    font-family: 'Prompt', sans-serif;
    font-weight: 400;    
}

.underline{
    text-decoration: underline;
}

.section-title{
    font-family: 'Prompt', sans-serif;
    font-weight: 700;
    font-size:5vh;
    text-transform: uppercase;
}

.red{
    color:${theme.light.primaryColor}
}

.main-header{
  font-size:8rem;
  font-family: 'Prompt', sans-serif;
  line-height: 1.1;
  text-transform: initial;

  @media(max-width: 768px){
    font-size:4rem;
  }
}

.button{
  width:100%;
  padding:24px 16px;
  border:none;
  background-color:${theme.light.primaryColor};
  color:white;
  font-size:1.2rem;
  font-weight:600;
  text-transform: uppercase;
  justify-content: space-between;
  display: flex;
  max-width:260px;
  outline:none;
  cursor: pointer;
}


.italic{
  font-family: 'Prompt', sans-serif;
  font-style: italic;
}

.underline{
  text-decoration: underline;
}
`;
