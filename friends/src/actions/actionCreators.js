import * as type from './actionTypes';
import Axios from 'axios';

// const token = localStorage.getItem('token') || false;
const baseUrl = 'http:localhost:5000/api/friends';
const token = 'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';
const Axios$ = Axios.create({
    header: {
    'Content-Type': 'application/json',
    'Authorization': token
    }
})

export const getFriends = friends => dispatch => {
    Axios$.get(baseUrl)
        .then(res => {
            debugger
        })
        .catch(err => {
            debugger
        })
    return {
        type: type.GET_ALL_FRIENDS,
        friends
    }
}

export const getFriend = id => dispatch => {
    return {
        type: type.GET_FRIEND,
        id
    }
}

export const addFriend = friend =>  dispatch => {
    return {
        type: type.ADD_FRIEND,
        friend
    }
}

export const updateFriend = friends => dispatch => {
    return {
        type: type.UPDATE_FRIEND,
        friends
    }
}

export const deleteFriend = id => dispatch => {
    return {
        type: type.DELETE_FRIEND,
        id
    }
}