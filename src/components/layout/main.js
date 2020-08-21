import React from "react";
import { Switch, Route } from "react-router-dom";
import RouterUser from "../../router/routerUser";

function Main() {
  return (
    <Switch>
      {RouterUser.map((route, index) => (
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
export default Main;
