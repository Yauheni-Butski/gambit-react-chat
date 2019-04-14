import React, { Component } from 'react';
import { connect } from 'react-redux';
import { enterToRoom } from '../actions/index';
import NewRoomFormComponent from '../components/NewRoomForm/NewRoomForm';

class NewRoomForm extends Component{

    constructor(){
        super();
        this.sendNewRoomToServer = this.sendNewRoomToServer.bind(this);
    }

    sendNewRoomToServer(roomName){
        let currentUser = this.props.currentUser;

        currentUser.createRoom({
            name: roomName
        })
        .then(room => {
            this.props.enterToRoom(room.id);
        })
        .catch(err => console.log('error with createRoom'));
    }

    render(){
        return (
            <NewRoomFormComponent 
                addNewRoom={this.sendNewRoomToServer}/>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUserState
});

const mapDispatchToProps = dispatch => ({
    enterToRoom: roomId => {
        dispatch(enterToRoom(roomId))
      }
});

export default connect(mapStateToProps, mapDispatchToProps)(NewRoomForm)