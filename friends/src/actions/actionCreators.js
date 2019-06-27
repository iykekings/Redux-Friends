import * as types from "./actionTypes";
import Axios from "axios";

// const token = localStorage.getItem('token') || false;
const baseUrl = "http://localhost:5000/api";

export const getFriends = () => dispatch => {
  const token = localStorage.getItem("token");
  dispatch({ type: types.GET_ALL_FRIENDS });
  Axios.get(`${baseUrl}/friends`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  })
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
export const addFriend = friend => dispatch => {
  const token = localStorage.getItem("token");
  dispatch({ type: types.ADD_FRIEND });
  Axios.post(`${baseUrl}/friends`, friend, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  })
    .then(res => {
      dispatch({ type: types.SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.response && err.response.status === 403) {
        dispatch({ type: types.ERROR, payload: err.response.data.error });
      } else {
        dispatch({ type: types.ERROR, payload: err.message });
      }
    });
};

export const authFriend = () => {
  const token = localStorage.getItem("token") || "";
  if (!!token) {
    return { type: types.LOGIN_SUCCESS };
  }
  return { type: types.LOGIN_FAILURE };
};

export const getFriend = id => dispatch => {
  return {
    type: types.GET_FRIEND,
    id
  };
};
