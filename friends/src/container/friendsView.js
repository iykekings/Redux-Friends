// import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getFriends } from '../actions/actionCreators';
import { FriendList } from '../components/FriendsList';


export const FriendsView = props => {
    console.log(props)
    useEffect(() => {
        debugger
        props.getFriends()
    }, [props]);

    return <FriendList friends={props.friends} />
}

// const mapStateToProps = state => ({
//         friends: state.friendsReducer.friends
//     })

const mapState = state => {
    return {
        friends: state.friendsReducer.friends
    }
}

export default connect(mapState, { getFriends })(FriendsView)