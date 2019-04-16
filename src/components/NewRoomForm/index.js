import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './NewRoomForm.css';

class NewRoomForm extends Component {

    constructor(){
        super()
        this.state = {
            newRoomName: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            newRoomName: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        let newRoomName = this.state.newRoomName;
        newRoomName.substring(0, Math.min(60, newRoomName.length));
        
        this.props.addNewRoom(newRoomName);
        this.setState({
            newRoomName: ''
        });
    }

    render () {
        return (
            <div className="new-room-form">
                <form
                    onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        value={this.state.newRoomName}
                        type="text"
                        maxLength="60"
                        placeholder="Create a room"
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