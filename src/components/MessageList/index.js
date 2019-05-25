import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';

import styles from './MessageList.module.css';

/* Use ref to this component in container for auto scrolling, so can't make it functional component. */
/* Don't want to use forwarding ref. */
class MessageList extends Component {
    render(){
        if (!this.props.currentRoomId){
            return (
                <div className={styles.messageList}>
                    <div className={styles.joinRoom}>
                        &larr; Join a room!
                    </div>
                </div>
            )
        }
        return (
            <div className={styles.messageList}>
                {this.props.messages.map((message, index) => {
                    var isOwnMessage = message.senderId === this.props.currentUserId;
                    return (
                        <Message 
                            key={index}
                            username={message.senderId}
                            text={message.text}
                            isOwnMessage={isOwnMessage}/>
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