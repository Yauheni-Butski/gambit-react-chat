import React, { Component } from 'react'
import PropTypes from 'prop-types';

/* TODO. 1. this.props.messages - сократить, просто использовать messages в разметке */
/* TODO. 2. Добавить Room component, если мы будем сложнее название комнату рендерить*/
class RoomList extends Component {
    render () {
        return (
            <div className="rooms-list">
                {this.props.rooms.map((room, index) => {
                    return (
                        <div key={index}>{room.name}</div>
                    )
                })}
            </div>
        )
    }
}

RoomList.propTypes = {
    rooms: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default RoomList