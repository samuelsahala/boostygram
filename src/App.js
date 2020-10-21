import React from "react";
import Layout from "./hoc/layout/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./containers/Home/Home";
import Orders from "./containers/Orders/Orders";
import Login from "./containers/Auth/Login/Login";
import Signup from "./containers/Auth/Signup/Signup";
import Logout from "./containers/Auth/Logout/Logout";
const App = ({ loggedIn }) => {
  console.log(loggedIn);
  let routes;
  if (loggedIn) {
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return <Layout>{routes}</Layout>;
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid ? true : null,
});

export default connect(mapStateToProps)(App);
