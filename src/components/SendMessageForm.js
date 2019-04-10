import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SendMessageForm extends Component {
    constructor() {
        super();
        this.state = {
            newMessageText: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            newMessageText: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.sendMessage(this.state.newMessageText);
        this.setState({
            newMessageText: ''
        });
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit} 
                className="send-message-form">
                <input
                    onChange={this.handleChange}
                    value={this.state.newMessageText}
                    placeholder="Type your message and hit ENTER"
                    type="text" />
            </form>
        )
    }
}

SendMessageForm.propTypes = {
    sendMessage: PropTypes.func.isRequired
}

export default SendMessageForm