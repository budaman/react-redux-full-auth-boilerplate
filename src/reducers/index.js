import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import authReducer from "./auth_reducer";

const someApp = combineReducers({
  form,
  auth: authReducer
});

export default someApp;
