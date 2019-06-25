import React, { useState } from "react";
import { connect } from "react-redux";
import { addFriend } from "../actions/actionCreators";

const FriendForm = props => {
    const submit = () => {
        props.addFriend({name: user.name,
             age: parseInt(user.age),
              email: user.email})
    }
  const [user, setUser] = useState({name: "", age: '', email: ""});
  const handleInput = target => setUser({ ...user, [target.id]: target.value });
  return (
    <div className="login">
      {props.savingFriends && <p className="loading">Creating...</p>}
      <form>
        <input
          type="text"
          id="name"
          value={user.username}
          onChange={e => handleInput(e.target)}
          placeholder="Name"
        />
        <input
          type="text"
          id="age"
          value={user.password}
          onChange={e => handleInput(e.target)}
          placeholder="Age"
        />
        <input
          type="email"
          id="email"
          value={user.password}
          onChange={e => handleInput(e.target)}
          placeholder="Email"
        />
        <button
          type="button"
          onClick={submit}
        >
          Add Friend
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  savingFriends: state.friendsReducer.savingFriends
});

export default connect(
  mapStateToProps,
  { addFriend }
)(FriendForm);
