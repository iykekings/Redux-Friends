import React from 'react';
import { Friend } from './Friend';

export const FriendList = ({ friends}) => {
    console.log(friends)
    return friends.map(friend => <Friend {...friend} />)
}