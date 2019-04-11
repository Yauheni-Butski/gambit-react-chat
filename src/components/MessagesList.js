import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

/* TODO. 1. Не могу превратить в functional component, так как использую ref на него в MessageList container */
class MessagesList extends Component {
    render(){
        if (!this.props.currentRoomId){
            return (
                <div className="message-list">
                    <div className="join-room">
                        &larr; Join a room!
                    </div>
                </div>
            )
        }
        return (
            <div className="message-list">
                {this.props.messages.map((message, index) => {
                    return (
                        <Message key={index} username={message.senderId} text={message.text}/>
                    )
                })}
            </div>
        )
    }
}

MessagesList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            senderId: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    currentRoomId: PropTypes.string
}

export default MessagesList;