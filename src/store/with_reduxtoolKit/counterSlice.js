import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: { counter: 0, toggle: true },
  reducers: {
    increament(state, actions) {
      state.counter++;
    },
    decrease(state, actions) {
      state.counter--;
    },
    toggle(state, action) {
      state.toggle = !state.toggle;
    },
  },
});
//to put in store
const counterReducer = counterSlice.reducer;
export default counterReducer;

//to use in componetns
export const counterAction = counterSlice.actions;
