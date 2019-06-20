import { friendsReducer, fetchingReducer } from './friends';
import { combinedReducer } from 'redux';

export default combinedReducer({friendsReducer, fetchingReducer})
