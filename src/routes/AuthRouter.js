import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Redirect, Route, Switch } from "react-router";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const AuthRouter = () => {
  return (
    <>
      {/* <AuthHeader /> */}
      <Switch>
        <Route exact path="/auth/login" component={LoginPage} />
        <Route exact path="/auth/register" component={RegisterPage} />
        <Redirect to="/auth/login" />
      </Switch>
      {/* <Footer /> */}
    </>
  );
};

export default AuthRouter;
