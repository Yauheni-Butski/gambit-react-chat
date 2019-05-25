import React from 'react'
import PropTypes from 'prop-types';

import styles from './RoomList.module.css';

function RoomList({rooms, subscribeToRoom, currentRoomId}) {
    let allRooms = [...rooms.joinableRooms, ...rooms.joinedRooms].sort((a, b) => a.id - b.id);

    return(
        <div className={styles.roomsList + " rooms-list-grid-area"}>
            <ul>
                <h3>Your rooms:</h3>
                {allRooms.map(room => {
                    const isActive = currentRoomId === room.id;
                    return (
                        <li key={room.id} className={styles.room + (isActive ? " " + styles.active : "")}>
                            <button 
                                onClick={() => { subscribeToRoom(room.id); }}>
                                # {room.name}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

RoomList.propTypes = {
    rooms: PropTypes.shape({
        joinableRooms: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired //TODO. specify more properties
            })
        ).isRequired,
        joinedRooms: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired //TODO. specify more properties
            })
        ).isRequired
    }).isRequired,
    subscribeToRoom: PropTypes.func.isRequired,
    currentRoomId: PropTypes.string
}

export default RoomList