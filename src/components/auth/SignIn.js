import React from "react";
import Header from "../Header";
import { reduxForm, Field } from "redux-form";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { getItem, setItem, removeItem } from "chocolata";

class SignIn extends React.Component {
  handleFormSubmit({ email, password }) {
    this.props.signinUser({ email, password }, () => {
      this.props.history.push("/feature");
    });
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Header />
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <Field
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              component="input"
              type="email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <Field
              name="password"
              component="input"
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

SignIn = reduxForm({ form: "signin", fields: ["email", "password"] })(SignIn);
export default (SignIn = connect(null, actions)(SignIn));
