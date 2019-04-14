import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserListComponent from '../components/UserList/UserList';

class UserList extends Component{

    render(){
        return (
            <UserListComponent currentRoomId={this.props.currentRoomId}/>
        )
    }
}

/* const mapDispatchToProps = dispatch => ({
    enterToRoom: roomId => {
        dispatch(enterToRoom(roomId))
    }
}); */

const mapStateToProps = state => ({
    currentRoomId: state.currentRoomState.id
});

export default connect(mapStateToProps)(UserList)