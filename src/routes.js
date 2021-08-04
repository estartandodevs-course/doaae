import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SplashScreen } from "./pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SplashScreen} />
      </Switch>
    </BrowserRouter>
  );
}
