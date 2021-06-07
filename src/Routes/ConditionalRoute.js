import React from "react";
import { Route, Redirect } from "react-router-dom";
const ConditionalRoute = ({
  predicate,
  to = "/",
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        predicate ? <Component {...props} /> : <Redirect to={to} />
      }
    />
  );
};
export default ConditionalRoute;
