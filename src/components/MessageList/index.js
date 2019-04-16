import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';

import './MessageList.css';

/* Use ref to this component in container for auto scrolling, so can't make it functional component. */
/* Don't want to use forwarding ref. */
class MessageList extends Component {
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
                    var messageOfClass = message.senderId === this.props.currentUserId ? "own" : "";
                    return (
                        <Message 
                            key={index}
                            username={message.senderId}
                            text={message.text}
                            messageOfClass={messageOfClass}/>
                    )
                })}
            </div>
        )
    }
}

MessageList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            senderId: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    currentRoomId: PropTypes.string,
    currentUserId: PropTypes.string
}

export default MessageList;