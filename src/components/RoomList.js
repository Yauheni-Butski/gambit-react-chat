import React from 'react'
import PropTypes from 'prop-types';

function RoomList({rooms}) {
    //combine joinableRooms and joinedRooms together
    let allRooms = [...rooms.joinableRooms, ...rooms.joinedRooms];

    return(
        <div className="rooms-list">
            <ul>
                <h3>Your rooms:</h3>
                {allRooms.map(room => {
                    return (
                        <li key={room.id} className="room">
                            <a href="#"># {room.name}</a>
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
    }).isRequired
}

export default RoomList