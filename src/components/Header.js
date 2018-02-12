import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <h1 className="navbar-brand mb-0">react-auth</h1>
        <div className="navbar-nav">
          <Link to="signin">
            <li className="nav-item">Sign In</li>
          </Link>
          <Link to="signup">
            <li className="nav-item">Sign Up</li>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;
