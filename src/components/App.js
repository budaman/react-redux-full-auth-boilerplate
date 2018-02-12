import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import SignIn from "./auth/SignIn";
import ErrorPage from "./ErrorPage";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route component={ErrorPage} />
      </Switch>
    );
  }
}

export default App;
