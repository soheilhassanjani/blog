import { useAuthCtx } from "Provider/auth/auth.provider";
import React from "react";
import ConditionalRoute from "./ConditionalRoute";
const PrivateRoute = (props) => {
  const { user } = useAuthCtx();
  return <ConditionalRoute predicate={Boolean(user)} {...props} />;
};
export default PrivateRoute;
