import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { auth, createUserProfileDocument } from "./firebase/utils";
import { setCurrentUser } from "./store/actions/userActions";

import GlobalStyle from "./components/GlobalStyle";
import PrivateRoute from "./hoc/PrivateRoute";
import PublicRoute from "./hoc/PublicRoute";
import Header from "./components/Header";
import Home from "./containers/Home";
import Shop from "./containers/Shop";
import Auth from "./containers/Auth";
import Checkout from "./containers/Checkout";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          dispatch(setCurrentUser({ id: snapshot.id, ...snapshot.data() }));
        });
      } else {
        dispatch(setCurrentUser(userAuth));
      }
    });

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <PublicRoute exact path="/shop" component={Shop} />
        <PublicRoute exact path="/signin" component={Auth} />
        <PublicRoute exact path="/checkout" component={Checkout} />
      </Switch>
    </>
  );
};

export default App;
