import classes from "./Counter.module.css";

//for getting the state
import { useSelector } from "react-redux";
//for dispatching a action
import { useDispatch } from "react-redux";

const Counter = () => {
  //getting state
  const counter = useSelector((state) => state.counter);

  const toggle = useSelector((state) => state.toggle);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  const decreaseHandler = () => {
    dispatch({ type: "dec" });
  };

  const increaseHandler = () => {
    dispatch({ type: "inc" });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={decreaseHandler}>Decrease</button>
      <button onClick={increaseHandler}>Increase</button>
    </main>
  );
};

export default Counter;
