import React from 'react';
import PropTypes from 'prop-types';

import styles from './UserList.module.css';

function UserList({currentRoomId, onlineUsers}) {
    if(currentRoomId === undefined){
        return (
            <div className={styles.userList + " " + styles.closed}></div>
        )
    }

    return (
        <div className={styles.userList}>
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