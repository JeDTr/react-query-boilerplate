import { Route } from "react-router-dom";

import Home from "@/pages/Home";
import Login from "@/pages/Login";

import RouteAuth from "./RouteAuth";
import RouteUnauth from "./RouteUnauth";

export const ROUTE_COMPONENTS = {
  auth: RouteAuth,
  unauth: RouteUnauth,
  any: Route,
};

export const ROUTES = [
  {
    path: "/",
    component: Home,
    routeComponent: ROUTE_COMPONENTS.auth,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    routeComponent: ROUTE_COMPONENTS.unauth,
    exact: true,
  },
];
