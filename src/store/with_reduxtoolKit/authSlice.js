import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { islogged: false },
  reducers: {
    loggin(state) {
      state.islogged = true;
    },
    logout(state) {
      state.islogged = false;
    },
  },
});

const authReducer = authSlice.reducer;
export default authReducer;

//for compoents
export const authActions = authSlice.actions;
