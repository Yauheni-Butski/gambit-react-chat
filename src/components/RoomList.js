import React from 'react'
import PropTypes from 'prop-types';

function RoomList({rooms, subscribeToRoom, currentRoomId}) {
    //combine joinableRooms and joinedRooms together
    let allRooms = [...rooms.joinableRooms, ...rooms.joinedRooms];

    return(
        <div className="rooms-list">
            <ul>
                <h3>Your rooms:</h3>
                {allRooms.map(room => {
                    const active = currentRoomId === room.id ? "active" : "";
                    return (
                        <li key={room.id} className={"room " + active}>
                            <a 
                                onClick={() => { subscribeToRoom(room.id); }}
                                href="#">
                                # {room.name}
                            </a>
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