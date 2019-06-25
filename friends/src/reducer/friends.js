import * as types from "../actions/actionTypes";

const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  loggedIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_FRIENDS:
      return { ...state, fetchingFriends: true };
    case types.ADD_FRIEND:
      return { ...state, savingFriends: true };
    case types.UPDATE_FRIEND:
      return { ...state, updatingFriend: true };
    case types.DELETE_FRIEND:
      return { ...state, deletingFriend: true };
    case types.GET_FRIEND:
      return { ...state, fetchingFriends: true };
    case types.LOGIN:
      return { ...state, loggingIn: true };
    case types.LOGIN_SUCCESS:
      return { ...state, loggingIn: false, loggedIn: true };
    case types.LOGIN_FAILURE:
      return { ...state, loggingIn: false };
    case types.SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        deletingFriend: false,
        updatingFriend: false,
        savingFriends: false,
        loggingIn: false,
        error: null,
        friends: action.payload
      };
    case types.ERROR:
      return {
        ...state,
        fetchingFriends: false,
        deletingFriend: false,
        updatingFriend: false,
        savingFriends: false,
        loggingIn: false,
        error: action.payload
      };
    default:
      return state;
  }
};
