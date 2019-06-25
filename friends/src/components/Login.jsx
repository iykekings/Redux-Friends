import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login } from "../actions/actionCreators";

const Login = props => {
  useEffect(() => {
    if(props.loggedIn) {
      props.history.push('/friends')
    }
  }, [props.loggedIn])
  const [user, setUser] = useState({ username: "", password: "" });
  const handleInput = target => setUser({ ...user, [target.id]: target.value });
  return (
    <div className="login">
      {props.loggingIn && <p className="loading">Logging in...</p>}
      <form>
        <input
          type="test"
          id="username"
          value={user.username}
          onChange={e => handleInput(e.target)}
          placeholder="Username"
        />
        <input
          type="password"
          id="password"
          value={user.password}
          onChange={e => handleInput(e.target)}
          placeholder="Password"
        />
        <button
          type="button"
          onClick={() => props.login(user.username, user.password)}
        >
          Login
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  loggingIn: state.friendsReducer.loggingIn,
  loggedIn: state.friendsReducer.loggedIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
