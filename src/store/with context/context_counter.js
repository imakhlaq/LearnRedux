import { createContext } from "react";
//creating context and providing demo values
const counterContext = createContext({
  counter: 0,
  increaseCounter: () => {},
  decreaseCounter: () => {},
});

export default counterContext;
