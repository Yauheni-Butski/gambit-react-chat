import React, { Component } from 'react';

import { connect } from 'react-redux'
import SendMessageFormComponent from '../components/SendMessageForm/SendMessageForm'

class SendMessageForm extends Component {

    constructor(){
        super();
        this.sendMessageToServer = this.sendMessageToServer.bind(this);
    }

    sendMessageToServer(text){
        let currentUser = this.props.currentUser;
        let currentRoom = this.props.currentRoom;
        currentUser.sendMessage({
            text: text,
            roomId: currentRoom.id
        });
    }

    render(){
        return(
            <SendMessageFormComponent
                sendMessage={this.sendMessageToServer}
                disabled={!this.props.currentRoom.id}/>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUserState,
    currentRoom: state.currentRoomState
});

export default connect(mapStateToProps)(SendMessageForm)