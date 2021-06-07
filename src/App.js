import Loading from "Components/Loading/Loading";
import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import GuestRoute from "Routes/GuestRoute";
import PrivateRoute from "Routes/PrivateRoute";

const Dashboard = lazy(() => import("Pages/app"));
const Login = lazy(() => import("Pages/login"));
const Register = lazy(() => import("Pages/register"));
const NotFound = lazy(() => import("Pages/NotFound"));

function App() {
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
