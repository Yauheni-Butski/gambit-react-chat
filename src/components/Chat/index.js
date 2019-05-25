import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RoomList from "../../containers/RoomList";
import MessageList from "../../containers/MessageList";
import SendMessageForm from "../../containers/SendMessageForm";
import NewRoomForm from "../../containers/NewRoomForm";
import UserList from "../../containers/UserList";
import Logout from "../../containers/Logout";

import styles from './Chat.module.css';

class Chat extends Component {
    render() {
        const active = this.props.isActive ? styles.active : "";
        return (
        <div className={styles.app + " " + active}>
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