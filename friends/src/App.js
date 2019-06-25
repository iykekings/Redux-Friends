import React from "react";
import "./App.css";
import FriendsView from "./container/friendsView";
import Login from "./components/Login";
import { Route, Redirect } from "react-router-dom";
import Protected from "./components/Protected";

function App() {
  return (
    <div className="App">
      <Redirect path="/" exact to="/login" />
      <Route path="/login" component={Login} />
      <Route
        path="/friends"
        render={rProps => <Protected component={FriendsView} />}
      />
    </div>
  );
}

export default App;
