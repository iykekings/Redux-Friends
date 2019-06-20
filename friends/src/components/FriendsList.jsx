import React from 'react';
import { Friend } from './Friend';

export const FriendList = props => {
    return props.friends.map(friend => <Friend {...friend} />)
}