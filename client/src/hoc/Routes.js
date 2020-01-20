import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";

/* import PrivateRoute from "./hoc/PrivateRoute";
import PublicRoute from "./hoc/PublicRoute"; */

const Auth = lazy(() => {
  return import("../containers/Auth");
});

const Home = lazy(() => {
  return import("../containers/Home");
});

const Shop = lazy(() => {
  return import("../containers/Shop");
});

const Checkout = lazy(() => {
  return import("../containers/Checkout");
});

const Routes = () => (
  <Suspense fallback={<Spinner />}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={Auth} />
      <Route exact path="/checkout" component={Checkout} />
      <Route path="/shop" component={Shop} />
      <Route component={NotFound} />
    </Switch>
  </Suspense>
);

export default Routes;
