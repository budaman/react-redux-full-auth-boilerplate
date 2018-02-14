import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import someApp from "./reducers";
import { BrowserRouter } from "react-router-dom";
import reduxThunk from "redux-thunk";
import { getItem } from "chocolata";
import { AUTH_USER } from "./actions/types";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(someApp);

const token = getItem("token");
if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
