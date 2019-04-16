import React from 'react';
import PropTypes from 'prop-types';

import './UserList.css';

function UserList({currentRoomId, onlineUsers}) {
    if(currentRoomId === undefined){
        return (
            <div className="user-list closed"></div>
        )
    }

    var userList = onlineUsers.sort((a, b) => a.id - b.id);
    return (
        <div className="user-list">
            <ul>
                <h3>Users online:</h3>
                {userList.map(user => {
                    return (
                        <li key={user.id} className="user">
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