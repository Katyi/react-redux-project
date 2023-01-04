import counterReducer from "./Counter";
import userReducer from "./User";

import { combineReducers } from "redux";

const myReducers = combineReducers({
  counter: counterReducer,
  user : userReducer
})

export default myReducers;
