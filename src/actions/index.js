import { setItem, removeItem } from "chocolata";

import axios from "axios";
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from "./types";

const ROOT_URL = "http://localhost:3090";

export function signOut() {
  removeItem("token");

  return { type: UNAUTH_USER };
}

export function signinUser({ email, password }, callback) {
  return function(dispatch) {
    //submit email password to server
    axios
      .post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        setItem("token", response.data.token);
        callback();
      })
      .catch(() => {
        dispatch(authError("Bad Login Info"));
      });
  };
}

export function signUpUser({ email, password }, callback) {
  return function(dispatch) {
    axios
      .post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        setItem("token", response.data.token);
        callback();
      })
      .catch(({ response }) => {
        dispatch(authError(response.data));
      });
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
