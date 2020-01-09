import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/* import axios from "./store/actions/axios"; */

import { UserContext } from "./store/contexts/userContext";
import { auth, createUserProfileDocument } from "./firebase/utils";

import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import Home from "./containers/Home";
import Shop from "./containers/Shop";
import Auth from "./containers/Auth";

const App = () => {
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={Auth} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
