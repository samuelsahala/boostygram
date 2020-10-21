import React from "react";
import Layout from "./hoc/layout/Layout";
import { Route, Redirect } from "react-router-dom";
import Home from "./containers/Home/Home";
import Orders from "./containers/Orders/Orders";
import Login from "./containers/Auth/Login/Login";
import Signup from "./containers/Auth/Signup/Signup";
const App = () => {
  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/orders" component={Orders} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Signup" component={Signup} />
      <Redirect to="/" />
    </Layout>
  );
};

export default App;
