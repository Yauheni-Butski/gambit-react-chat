import React, { Component } from 'react';
import { connect } from 'react-redux'
import { enterToRoom } from '../actions';
import RoomListComponent from '../components/RoomList'

class RoomList extends Component{

    constructor(){
        super()
        this.enterToRoom = this.enterToRoom.bind(this);
    }

    enterToRoom(roomId){
        if (this.props.currentRoomId === roomId){
            return;
        }

        this.props.enterToRoom(roomId);
    }

    render(){
        return (
            <RoomListComponent 
                subscribeToRoom={this.enterToRoom}
                rooms={this.props.rooms}
                currentRoomId={this.props.currentRoomId}/>
        )
    }
}

const mapStateToProps = state => ({
    rooms: state.roomsState,
    currentRoomId: state.currentRoomState.roomManager.id
});

const mapDispatchToProps = dispatch => ({
    enterToRoom: roomId => {
      dispatch(enterToRoom(roomId))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomList)