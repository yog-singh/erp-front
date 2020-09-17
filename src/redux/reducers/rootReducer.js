import { combineReducers } from "redux";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import materialSystemReducer from './materialSystem'
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  userRoot: userReducer,
  errorRoot: errorReducer,
  materialSystemRoot: materialSystemReducer,
  form: formReducer
});
