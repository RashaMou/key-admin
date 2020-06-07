import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

import reducer from "./reducers";

const store = configureStore({
  reducer: reducer,
  middleware: [...getDefaultMiddleware(), logger],
});

export default store;
