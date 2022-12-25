import { legacy_createStore as createStore } from "redux";

//reducer function

const counterReducer = (state, action) => {
  //actions for which we can dispatch things

  if (action.type === "inc") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action.type === "dec") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  if (action.type === "toggle") {
    return {
      ...state,
      toggle: !state.toggle,
    };
  }

  return {
    counter: 0,
    toggle: true,
  };
};

//you can have only one store

const store = createStore(counterReducer);

export default store;
