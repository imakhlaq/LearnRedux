import { createStore } from "react-redux";

const storeReducer = (prevState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...prevState,
      counter: prevState.counter + 1,
    };
  }
  return {
    counter: 0,
  };
};

const store = createStore(storeReducer);
