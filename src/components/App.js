import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import SignIn from "./auth/SignIn";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Feature from "./Feature";
import SignUp from "./auth/SignUp";
import RequireAuth from "./auth/RequireAuth";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/feature" component={RequireAuth(Feature)} />
        <Route component={ErrorPage} />
      </Switch>
    );
  }
}

export default App;
