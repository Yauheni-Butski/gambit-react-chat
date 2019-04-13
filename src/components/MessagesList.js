import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

/* Use ref to this component in container for auto scrolling, so can't make it functional component. */
/* Don't want to use forwarding ref. */
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