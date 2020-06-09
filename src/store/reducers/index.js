import { combineReducers } from "redux";
import usersReducer from "../../views/Users/usersSlice";

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
