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
            roomId: '19660160' //TODO. Get Current room id from state
          });
    }

    render(){
        return(
            <SendMessageFormComponent sendMessage={this.sendMessageToServer}/>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUserState
});

export default connect(mapStateToProps)(SendMessageForm)