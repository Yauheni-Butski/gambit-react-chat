import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

/* TODO. 1. Превратить в functional component */
class MessagesList extends Component {
    
    render(){
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
    ).isRequired
}

export default MessagesList;