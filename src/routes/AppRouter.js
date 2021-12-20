import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import TaskPage from "../pages/TaskPage";

const AppRouter = () => {
  return (
    <>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={TaskPage} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
      {/* <Footer /> */}
    </>
  );
};

export default AppRouter;
