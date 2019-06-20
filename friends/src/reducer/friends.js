import { 
    GET_ALL_FRIENDS,
    GET_FRIEND,
    UPDATE_FRIEND,
    DELETE_FRIEND,
    FETCHING,
    SUCCESS,
    ERROR, 
    ADD_FRIEND} from "../actions/actionTypes";

const initialState = {
    friends: [],
    fetching: false,
    error: null
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_FRIENDS:
        case ADD_FRIEND:
        case UPDATE_FRIEND:
        case DELETE_FRIEND:
            return { ...state, friends: action.friends }
        case GET_FRIEND:
            return { ...state, 
                friends: action.friend }
        default:
            return state
    }
}

export const fetchingReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING:
            return {...state, fetching: true}
        case SUCCESS:
            return {...state, fetching: false}
        case ERROR:
            return {...state, error: null, fetching: false}
        default:
            return state
    }
}