import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), logger],
});

export default store;
