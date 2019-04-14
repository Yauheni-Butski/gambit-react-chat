import React from 'react';
import PropTypes from 'prop-types';

import './UserList.css';

function UserList({currentRoomId}) {
    const closed = currentRoomId === undefined ? "closed" : "";
    
    return (
        <div className={"user-list " + closed}>
            <h3>Users online:</h3>
        </div>
    )
}

UserList.propTypes = {
/*     messages: PropTypes.arrayOf(
        PropTypes.shape({
            senderId: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired, */
    currentRoomId: PropTypes.string
}

export default UserList;