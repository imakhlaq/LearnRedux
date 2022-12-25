import React, { useState } from "react";
import counterContext from "./context_counter";

const ContextProvider = (props) => {
  //you still need to maintain states here not like redux

  const [counter, setCounter] = useState(0);

  //functions to change states
  const increaseCounter = () => {
    setCounter((state) => state + 1);
  };

  const decreaseCounter = () => {
    setCounter((state) => state - 1);
  };

  //updating adding insilizating states
  const counterStates = {
    counter: counter,
    increaseCounter,
    decreaseCounter,
  };

  return (
    <counterContext.Provider value={counterStates}>
      {props.children}
    </counterContext.Provider>
  );
};

export default ContextProvider;
