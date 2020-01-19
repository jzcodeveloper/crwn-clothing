import React from "react";
import { Switch, Route } from "react-router-dom";

import { checkUserSession } from "./store/user/userActions";

import { store } from "./store/store";

import GlobalStyle from "./GlobalStyle";
/* import PrivateRoute from "./hoc/PrivateRoute";
import PublicRoute from "./hoc/PublicRoute"; */
import Header from "./components/Header";
import Home from "./containers/Home";
import Shop from "./containers/Shop";
import Auth from "./containers/Auth";
import Checkout from "./containers/Checkout";

store.dispatch(checkUserSession());

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={Auth} />
      <Route exact path="/checkout" component={Checkout} />
      <Route path="/shop" component={Shop} />
    </Switch>
  </>
);

export default App;
