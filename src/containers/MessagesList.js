import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import MessagesListComponent from '../components/MessagesList'

class MessageList extends Component{

    constructor(){
        super()
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
            <MessagesListComponent 
                ref={this.getMessageListRef}
                messages={this.props.messages}/>
        )
    }
}

const mapStateToProps = state => ({
    messages: state.messagesState
});

export default connect(mapStateToProps)(MessageList)