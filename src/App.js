import React from "react";
import Routes from "./routes";
import GlobalStyle from "./styles/GlobalStyle";
import { InstituicaoProvider } from "./contexts";

import "./styles/fonts.scss";

export default function App() {
  return (
    <InstituicaoProvider>
      <GlobalStyle />
      <Routes />
    </InstituicaoProvider>
  );
}
