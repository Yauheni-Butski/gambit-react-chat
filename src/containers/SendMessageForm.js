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
        let currentRoomManager = this.props.currentRoomManager;
        currentUser.sendMessage({
            text: text,
            roomId: currentRoomManager.id //TODO. TEMP. Берём id из другого свойства
        });
    }

    render(){
        return(
            <SendMessageFormComponent
                sendMessage={this.sendMessageToServer}
                disabled={!this.props.currentRoomManager.id}/> //TODO. TEMP. Берём id из другого свойства
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUserState,
    currentRoomManager: state.currentRoomState.roomManager
});

export default connect(mapStateToProps)(SendMessageForm)