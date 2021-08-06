import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DividerPage } from "./components/DividerPage";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DividerPage} />
      </Switch>
    </BrowserRouter>
  );
}
