import { getItem, setItem, removeItem } from "chocolata";

import axios from "axios";
import { AUTH_USER } from "./types";

const ROOT_URL = "http://localhost:3090";

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
      .catch(() => {});

    //if request bad is bad show an error
  };
}
