import React from "react";
import "./App.css";
import FriendsView from "./container/friendsView";
import Login from "./components/Login";
import { Route, Redirect, NavLink } from "react-router-dom";
import Protected from "./components/Protected";
import FriendForm from "./components/FriendForm";

function App() {
  return (
    <div className="App">
      <div>
        {/* <NavLink to="/login" activeClassName="active" >Login</NavLink> */}
        <NavLink to="/friends" activeClassName="active" >Friends</NavLink>
        <NavLink to="/addfriend" activeClassName="active" >Add New Friend</NavLink>
      </div>
      <Redirect path="/" exact to="/login" />
      <Route path="/login" component={Login} />
      <Route
        path="/friends"
        render={rProps => <Protected component={FriendsView} />}
      />
      <Route
        path="/addfriend"
        render={rProps => <Protected component={FriendForm} />}
      />
    </div>
  );
}

export default App;
