import React from "react";
import Header from "../Header";
import { reduxForm, Field } from "redux-form";
import * as actions from "../../actions";
import { connect } from "react-redux";

class SignIn extends React.Component {
  handleFormSubmit({ email, password }) {
    this.props.signinUser({ email, password }, () => {
      this.props.history.push("/feature");
    });
  }
  renderAlert() {
    if (this.props.errorMesssage) {
      return (
        <div className="alert alert-warning" role="alert">
          <strong>Opps! {this.props.errorMesssage}</strong>
        </div>
      );
    }
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Header />
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <Field
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              component="input"
              type="email"
              id="email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              component="input"
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
            />
          </div>
          {this.renderAlert()}
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMesssage: state.auth.error };
}

SignIn = reduxForm({ form: "signin", fields: ["email", "password"] })(SignIn);
export default connect(mapStateToProps, actions)(SignIn);
