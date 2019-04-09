import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

/* const MessagesList = ({messages}) => {
    return (
        <section id="messages-list">
            <ul>
                {messages.map(message => (
                    <Message
                        key={message.id}
                        {...message}/>
                ))}
            </ul>
        </section>
    );
} */

/* TODO. 1. this.props.messages - сократить, просто использовать messages в разметке */
class MessagesList extends Component {
    render(){
        return (
            <div className="message-list">
                {this.props.messages.map((message, index) => {
                    return (
                        <div key={index} className="message">
                            <div className="message-username">{message.senderId}</div>
                            <div className="message-text">{message.text}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

MessagesList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            senderId: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default MessagesList;