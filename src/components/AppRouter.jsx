import React, { Fragment } from "react";
import Profile from "../components/Profile";
import Home from "../components/Home";
import { BrowserRouter as Route, Switch } from "react-router-dom";

const AppRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route exact path="/profile" component={Profile}></Route>
      </Switch>
    </>
  );
};

export default AppRouter;
