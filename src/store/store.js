import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todos from "./todo";

const rootReducer = combineReducers({
  todos,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
