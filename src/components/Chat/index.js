import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import RoomList from "../../containers/RoomList";
import MessageList from "../../containers/MessageList";
import SendMessageForm from "../../containers/SendMessageForm";
import NewRoomForm from "../../containers/NewRoomForm";
import UserList from "../../containers/UserList";
import Logout from "../../containers/Logout";

import styles from './Chat.module.css';

let cx = classNames.bind(styles);

class Chat extends Component {
    render() {
        let classNames = cx({
            active: this.props.isActive,
            app: true
        });
        return (
        <div className={classNames}>
            <div className={styles.roomsListGridArea}>
                <RoomList />
            </div>
            <div className={styles.messageListGridArea}>
                <MessageList />
            </div>
            <div className={styles.sendMessageFormGridArea}>
                <SendMessageForm />
            </div>
            <div className={styles.newRoomFormGridArea}>
                <NewRoomForm />
            </div>
            <div className={styles.userListGridArea}>
                <UserList />
            </div>
            <div className={styles.logOutGridArea}>
                <Logout />
            </div>
        </div>
        );
    }
}

Chat.propTypes = {
    isActive: PropTypes.bool.isRequired,
}

export default Chat;