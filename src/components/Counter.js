import classes from "./Counter.module.css";

//for getting the state
import { useSelector } from "react-redux";
//for dispatching a action
import { useDispatch } from "react-redux";

//import the slice.action
import { counterAction } from "../store/with_reduxtoolKit/counterSlice";

const Counter = () => {
  //getting state
  const counter = useSelector((state) => state.counter.counter);

  const toggle = useSelector((state) => state.counter.toggle);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle()); //can pass objet in the toggle and it will be availabe in action.payload
  };

  const decreaseHandler = () => {
    dispatch(counterAction.decrease());
  };

  const increaseHandler = () => {
    dispatch(counterAction.increament());
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
