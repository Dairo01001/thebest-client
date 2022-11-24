import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import employeeReducer from "./reducers/employeeSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    employee: employeeReducer,
  },
});
