import { combineReducers, Reducer } from "redux";
import loginReducer from "./loginReducer";

export const rootReducer:Reducer<any> = combineReducers(
   {loginReducer}
)