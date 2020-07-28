import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import { ROUTES } from "./constants";

const AppRoutes = () => (
  <BrowserRouter>
    <Switch>
      {ROUTES.map(({ routeComponent: RouteComponent, path, ...rest }) => (
        <RouteComponent path={path} key={path} {...rest} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;
