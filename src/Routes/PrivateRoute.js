import React from "react";
import ConditionalRoute from "./ConditionalRoute";
const PrivateRoute = (props) => {
  const predicate = localStorage.getItem("user");
  return <ConditionalRoute predicate={Boolean(predicate)} {...props} />;
};
export default PrivateRoute;
