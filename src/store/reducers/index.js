import { combineReducers } from "redux";
import usersReducer from "../../views/Users/usersSlice";

export default combineReducers({
  users: usersReducer,
});
