// import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getFriends } from '../actions/actionCreators';
import { FriendList } from '../components/FriendsList';


export const FriendsView = props => {
    useEffect(() => {
        props.getFriends()
    }, []);
    if(props.fetchingFriends) {
        return <p>Fetching your friends..</p>
    } else if(props.error) {
        return <p style={{color: 'red'}}>{props.error}</p>
    }
    return <FriendList friends={props.friends} />
}

// const mapStateToProps = state => ({
//         friends: state.friendsReducer.friends
//     })

const mapState = state => {
    return {
        friends: state.friendsReducer.friends,
        fetchingFriends: state.friendsReducer.fetchingFriends
    }
}

export default connect(mapState, { getFriends })(FriendsView)