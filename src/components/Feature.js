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
        {this.props.message}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Feature);
