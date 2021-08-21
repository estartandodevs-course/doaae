import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Login,
  SplashScreen,
  Cadastro,
  Home,
  AgendarDoacao,
  EditarPerfil,
  PageMapMobile,
} from "./pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SplashScreen} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/agendardoacao" component={AgendarDoacao} />
        <Route path="/editarperfil" component={EditarPerfil} />
        <Route path="/mapa" component={PageMapMobile} />
      </Switch>
    </BrowserRouter>
  );
}
