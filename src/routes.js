import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login, SplashScreen, Cadastro, Home } from "./pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SplashScreen} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
