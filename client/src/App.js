import React from "react";

import { checkUserSession } from "./store/user/userActions";

import { store } from "./store/store";

import GlobalStyle from "./GlobalStyle";
import Routes from "./hoc/Routes";
import Header from "./components/Header";
import ErrorBoundary from "./components/ErrorBoundary";

store.dispatch(checkUserSession());

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  </>
);

export default App;
