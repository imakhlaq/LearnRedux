import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/with_reduxtoolKit/authSlice";

const Auth = () => {
  const dispatch = useDispatch();
  const validateUser = (event) => {
    event.preventDefault();

    // loggin call
    dispatch(authActions.loggin());
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={validateUser}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
