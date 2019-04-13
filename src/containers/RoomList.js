import React, { Component } from 'react';
import { connect } from 'react-redux'
import { enterToRoom } from '../actions/index';
import RoomListComponent from '../components/RoomList'

class RoomList extends Component{

    render(){
        return (
            <RoomListComponent 
                subscribeToRoom={this.props.enterToRoom}
                rooms={this.props.rooms}
                currentRoomId={this.props.currentRoomId}/>
        )
    }
}

const mapStateToProps = state => ({
    rooms: state.roomsState,
    currentRoomId: state.currentRoomState.id
});

const mapDispatchToProps = dispatch => ({
    enterToRoom: roomId => {
      dispatch(enterToRoom(roomId))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomList)