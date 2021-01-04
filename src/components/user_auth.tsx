import { useDispatch } from 'react-redux';
import { log_in } from '../actions';

/** Log in */
export function LoginInput() {
  return (
    <div>
      <form id="login_form">
        Username: <input type="text" placeholder="Username" name="username" />
        Password: <input type="text" placeholder="Password" name="password" />
        <input type="button" value="Login" onClick={() => {
          console.log("Logging in...");
          const dispatch = useDispatch();
          dispatch(log_in("testuser", "testuser"));
        }} />
      </form>
    </div>
  )
};
