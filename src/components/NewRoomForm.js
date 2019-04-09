import React, { Component } from 'react'
import PropTypes from 'prop-types';

/* TODO. 1. Использовать метод addNewRoom */

class NewRoomForm extends Component {
    render () {
        return (
            <div className="new-room-form">
                <form>
                    <input
                        type="text" 
                        placeholder="NewRoomForm" 
                        required />
                    <button id="create-room-btn" type="submit">+</button>
            </form>
        </div>
        )
    }
}

NewRoomForm.propTypes = {
    addNewRoom: PropTypes.func.isRequired
}

export default NewRoomForm