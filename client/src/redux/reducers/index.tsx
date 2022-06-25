import { combineReducers } from "redux";
import questionReducer from "./question.reducer";
import userReducer from "./user.reducer";
import usersReducer from "./users.reducer";

export default combineReducers({ userReducer, usersReducer, questionReducer });
