import React, { Component } from 'react'
import PropTypes from 'prop-types';

/* TODO. 1. Сделать как function component */
class RoomList extends Component {
    render () {
        //combine joinableRooms and joinedRooms together
        let allRooms = [...this.props.rooms.joinableRooms, ...this.props.rooms.joinedRooms];

        return (
            <div className="rooms-list">
                <ul>
                    <h3>Your rooms:</h3>
                    {allRooms.map(room => {
                        {console.log('Объект комнаты: '); console.log(room);}
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