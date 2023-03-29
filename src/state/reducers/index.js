import { combineReducers } from "redux";
import { tempReducer } from "./Reducer";

export const rootReducer = combineReducers({
  temp: tempReducer,
});
