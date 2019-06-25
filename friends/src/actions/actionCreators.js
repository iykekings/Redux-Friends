import * as types from "./actionTypes";
import Axios from "axios";

// const token = localStorage.getItem('token') || false;
const baseUrl = "http://localhost:5000/api";
const token =
  "esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ";
const Axios$ = Axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: token
  }
});

export const getFriends = () => dispatch => {
  dispatch({ type: types.GET_ALL_FRIENDS });
  Axios$.get(`${baseUrl}/friends`)
    .then(res => {
      dispatch({ type: types.SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: types.ERROR, payload: err.message });
    });
};

export const login = (username, password) => dispatch => {
  dispatch({ type: types.LOGIN });
  Axios.post(`${baseUrl}/login`, { username, password })
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: types.LOGIN_SUCCESS });
    })
    .catch(err => {
      if (err.response && err.response.status === 403) {
        alert(err.response.data.error);
      } else {
        alert(err.message);
      }
      dispatch({ type: types.LOGIN_FAILURE });
    });
};

export const getFriend = id => dispatch => {
  return {
    type: types.GET_FRIEND,
    id
  };
};

export const addFriend = friend => dispatch => {
  return {
    type: types.ADD_FRIEND,
    friend
  };
};

export const updateFriend = friends => dispatch => {
  return {
    type: types.UPDATE_FRIEND,
    friends
  };
};

export const deleteFriend = id => dispatch => {
  return {
    type: types.DELETE_FRIEND,
    id
  };
};
