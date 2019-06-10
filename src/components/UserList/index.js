import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './UserList.module.css';

let cx = classNames.bind(styles);

function UserList({currentRoomId, onlineUsers}) {
    let classNames = cx({
        userList: true,
        closed: currentRoomId === undefined
    });

    if(currentRoomId === undefined){
        return (
            <div className={classNames}></div>
        )
    }

    return (
        <div className={classNames}>
            <ul>
                <h3>Users online:</h3>
                {onlineUsers.map(user => {
                    return (
                        <li key={user.id} className={styles.user}>
                            - {user.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

UserList.propTypes = {
    onlineUsers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            avatarURL: PropTypes.string,
            presence: PropTypes.shape({
                state: PropTypes.string.isRequired
            })
        }).isRequired
    ),
    currentRoomId: PropTypes.string
}

export default UserList;