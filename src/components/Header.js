import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
// import { getItem, setItem, removeItem } from "chocolata";

class Header extends Component {
  checkIfSignedIn() {
    if (!this.props.authenticated) {
      return (
        <Fragment>
          <Link to="signin">
            <li className="nav-item">Sign In</li>
          </Link>
          <Link to="signup">
            <li className="nav-item">Sign Up</li>
          </Link>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Link
            to="/"
            onClick={() => {
              this.props.signOut();
            }}
          >
            <li className="nav-item">Sign Out</li>
          </Link>
        </Fragment>
      );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <h1 className="navbar-brand mb-0">react-auth</h1>
        <div className="navbar-nav">{this.checkIfSignedIn()}</div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, actions)(Header);
