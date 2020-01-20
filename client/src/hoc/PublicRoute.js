import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, props, ...rest }) => {
  const { currentUser } = useSelector(({ user }) => user);

  return (
    <Route
      {...rest}
      render={otherProps =>
        !currentUser ? (
          <Component {...props} {...otherProps} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PublicRoute;
