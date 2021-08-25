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
  InstitutionalData,
  PageScheduleDonation,
  Instituitions,
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
        <Route
          exact
          path="/instituicoes/:idInst"
          component={InstitutionalData}
        />
        <Route path="/doacaoagendada" component={PageScheduleDonation} />
        <Route exact path="/instituicoes" component={Instituitions} />
      </Switch>
    </BrowserRouter>
  );
}
