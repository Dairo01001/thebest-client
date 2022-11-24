import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    operators: [],
    auxiliars: [],
  },
  reducers: {
    addOperators: (state, { payload }) => {
      state.operators = payload;
    },
    addAuxiliars: (state, { payload }) => {
      state.auxiliars = payload;
    },
  },
});

export const { addOperators, addAuxiliars } = employeeSlice.actions;
export default employeeSlice.reducer;
