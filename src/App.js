import React from "react";
import Routes from "./routes";
import GlobalStyle from "./styles/GlobalStyle";
import { InstituicaoProvider } from "./contexts/instContext";
import { UserProvider } from "./contexts/userContext";

import "./styles/fonts.scss";

export default function App() {
  return (
    <UserProvider>
      <InstituicaoProvider>
        <GlobalStyle />
        <Routes />
      </InstituicaoProvider>
    </UserProvider>
  );
}
