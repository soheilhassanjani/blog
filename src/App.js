import Loading from "Components/Loading/Loading";
import { setupInterceptors } from "Config/instanceAxios";
import { useAuthCtx } from "Provider/auth/auth.provider";
import React, { lazy, Suspense, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import GuestRoute from "Routes/GuestRoute";
import PrivateRoute from "Routes/PrivateRoute";

const Dashboard = lazy(() => import("Pages/app"));
const Login = lazy(() => import("Pages/login"));
const Register = lazy(() => import("Pages/register"));
const NotFound = lazy(() => import("Pages/notFound"));

function App() {
  const { actions } = useAuthCtx();
  const { handleLogout } = actions;
  useEffect(() => {
    setupInterceptors(handleLogout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <GuestRoute path="/login" component={Login} to="/app" />
        <GuestRoute path="/register" component={Register} to="/app" />
        <PrivateRoute path="/app" component={Dashboard} to="/" />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default App;
