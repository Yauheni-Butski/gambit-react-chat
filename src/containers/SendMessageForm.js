import React, { Component } from 'react';

import { connect } from 'react-redux'
import SendMessageFormComponent from '../components/SendMessageForm'

class SendMessageForm extends Component {

    constructor(){
        super();
        this.sendMessageToServer = this.sendMessageToServer.bind(this);
    }

    sendMessageToServer(text){
        let currentUser = this.props.currentUser;
        currentUser.sendMessage({
            text: text,
            roomId: this.props.currentRoomId
        });
    }

    render(){
        return(
            <SendMessageFormComponent
                sendMessage={this.sendMessageToServer}
                disabled={!this.props.currentRoomId}/>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUserState,
    currentRoomId: state.currentRoomState.roomId
});

export default connect(mapStateToProps)(SendMessageForm)