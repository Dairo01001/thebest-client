import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import employeeReducer from "./reducers/employeeSlice";
import teamSlice from "./reducers/teamSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    employee: employeeReducer,
    team: teamSlice,
  },
});
