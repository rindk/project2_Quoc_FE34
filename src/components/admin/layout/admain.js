import React from "react";
import { Route, Switch } from "react-router-dom";
import RouterAdmin from "../../../router/RouterAdmin";

function AdMain() {
  return (
    <Switch>
      {RouterAdmin.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          children={route.main}
        />
      ))}
    </Switch>
  );
}

export default AdMain;
