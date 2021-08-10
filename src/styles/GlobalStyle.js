import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  min-height: 100vh;
}

`;

export default GlobalStyle;
