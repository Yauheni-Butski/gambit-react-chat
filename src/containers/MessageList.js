import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import MessageListComponent from '../components/MessageList'

class MessageList extends Component{

    constructor(props){
        super(props);
        this.getMessageListRef = this.getMessageListRef.bind(this);
    }
    
    getMessageListRef(node){
        this._messageListComp = node;
    }

    componentWillUpdate() {
        let node = ReactDOM.findDOMNode(this._messageListComp);
        let heightWhereAvailableAutoScroll = 300;
        this.shouldScrollToBottom =  node.scrollTop + node.clientHeight + heightWhereAvailableAutoScroll >= node.scrollHeight;
    }

    componentDidUpdate(){
        if(this.shouldScrollToBottom) {
            let node = ReactDOM.findDOMNode(this._messageListComp);
            node.scrollTop = node.scrollHeight;
        }
    }

    render(){
        return (
            <MessageListComponent 
                ref={this.getMessageListRef}
                messages={this.props.messages}
                currentRoomId={this.props.currentRoomId}
                currentUserId={this.props.currentUserId}/>
        )
    }
}

const mapStateToProps = state => ({
    messages: state.messagesState,
    currentRoomId: state.currentRoomState.roomId,
    currentUserId: state.currentUserState.id
});

export default connect(mapStateToProps)(MessageList)