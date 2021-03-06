import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import NewRoomFormComponent from '../components/NewRoomForm';

class NewRoomForm extends Component{

    constructor(props){
        super(props);
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
        dispatch(actions.rooms.enterToRoom(roomId))
      }
});

export default connect(mapStateToProps, mapDispatchToProps)(NewRoomForm)