import React from 'react';
import { Friend } from './Friend';

export const FriendList = ({ friends}) => {
    return friends.map(friend => <Friend {...friend} key={friend.id} />)
}