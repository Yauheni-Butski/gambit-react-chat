import React from 'react';
import PropTypes from 'prop-types';

import styles from './Message.module.css';

function Message({username, text, isOwnMessage}){
    return (
        <div className={styles.message + (isOwnMessage ? " " + styles.own : "")}>
                <div className={styles.messageUsername}>{username}</div>
                <div className={styles.messageText}>{text}</div>
        </div>
    );
}

Message.propTypes = {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isOwnMessage: PropTypes.bool.isRequired
}

export default Message;