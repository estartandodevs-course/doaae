import React from "react";
import Routes from "./routes";
import GlobalStyle from "./styles/GlobalStyle";

import "./styles/fonts.scss";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}
