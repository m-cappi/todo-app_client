/* eslint-disable import/no-named-as-default */
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import tasksSlice from "./slices/tasksSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksSlice
  }
});
