import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserListComponent from '../components/UserList';

class UserList extends Component{

    render(){
        return (
            <UserListComponent 
                currentRoomId={this.props.currentRoomId}
                onlineUsers={this.props.onlineUsers}/>
        )
    }
}

const mapStateToProps = state => ({
    currentRoomId: state.currentRoomState.roomId,
    onlineUsers: state.usersState
});

export default connect(mapStateToProps)(UserList)