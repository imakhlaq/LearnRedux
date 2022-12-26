import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { islogges: false },
  reducers: {
    loggin(state) {
      state.islogges = true;
    },
    logout(state) {
      state.islogges = false;
    },
  },
});

const authReducer = authSlice.reducer;
export default authReducer;

//for compoents
export const authActions = authSlice.actions;
