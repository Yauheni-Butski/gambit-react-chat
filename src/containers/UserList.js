import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserListComponent from '../components/UserList';

class UserList extends Component{

    render(){
        console.log(this.props.onlineUsers); //TODO. ПРоверить почему несколько раз вызывается
        return (
            <UserListComponent 
                currentRoomId={this.props.currentRoomId}
                onlineUsers={this.props.onlineUsers}/>
        )
    }
}

const mapStateToProps = state => ({
    currentRoomId: state.currentRoomState.roomManager.id,
    onlineUsers: state.usersState
});

export default connect(mapStateToProps)(UserList)