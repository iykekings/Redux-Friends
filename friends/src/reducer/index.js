import { friendsReducer, fetchingReducer } from './friends';
import { combineReducers } from 'redux';

export default combineReducers({friendsReducer, fetchingReducer})
