import React, { Component } from "react";
import { Redirect } from "react-router";

import { connect } from "react-redux";

export default function(ComposedComponent) {
  class Authentication extends Component {
    render() {
      if (!this.props.authenticated) {
        return <Redirect to="/" />;
      }
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
