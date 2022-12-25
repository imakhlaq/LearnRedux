import classes from "./Counter.module.css";
import counterContext from "../store/with context/context_counter";
import { useContext } from "react";

const Counter = () => {
  //using context
  const ctx = useContext(counterContext);

  const toggleCounterHandler = () => {};

  const decreaseHandler = (e) => {
    e.preventDefault();

    //functions in the context
    ctx.decreaseCounter();
  };

  const increaseHandler = (e) => {
    e.preventDefault();

    //functions in the context
    ctx.increaseCounter();
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{ctx.counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={decreaseHandler}>Decrease</button>
      <button onClick={increaseHandler}>Increase</button>
    </main>
  );
};

export default Counter;
