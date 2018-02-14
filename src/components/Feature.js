import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import * as actions from "../actions";

class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }
  render() {
    return (
      <div>
        <Header />
        WOW, SUPER SUPER SECRET PAGE IS LOADED. ONLY YOU CAN SEE IT!!! WOW WOW
        WOW
      </div>
    );
  }
}

export default connect(null, actions)(Feature);
