import React from 'react';
import PropTypes from 'prop-types';

import './Message.css';

function Message({username, text, messageOfClass}){
    return (
        <div className={"message " + messageOfClass}>
                <div className="message-username">{username}</div>
                <div className="message-text">{text}</div>
        </div>
    );
}

Message.propTypes = {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    messageOfClass: PropTypes.string.isRequired
}

export default Message;