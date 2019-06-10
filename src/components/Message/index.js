import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Message.module.css';

let cx = classNames.bind(styles);

function Message({username, text, isOwnMessage}){
    let classNames = cx({
        own: isOwnMessage,
        message: true
    });

    return (
        <div className={classNames}>
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